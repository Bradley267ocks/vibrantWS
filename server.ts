import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import md5 from "md5";

dotenv.config();

// PayFast Signature Helper
function generatePayFastSignature(data: any, passphrase?: string) {
  let paramString = "";
  // The variables must be in the order they are sent in the form
  const keys = Object.keys(data);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (data[key] !== "") {
      paramString += `${key}=${encodeURIComponent(data[key].toString().trim()).replace(/%20/g, "+")}&`;
    }
  }

  paramString = paramString.slice(0, -1);
  if (passphrase) {
    paramString += `&passphrase=${encodeURIComponent(passphrase.trim()).replace(/%20/g, "+")}`;
  }

  return md5(paramString);
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Store reservations in memory for this session (In production, use a DB like Firestore)
  const reservations: any[] = [];

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "ok", 
      smtpConfigured: !!process.env.SMTP_PASS,
      smtpUser: process.env.SMTP_USER || "help@vibrantws.co.za"
    });
  });

  // PayFast Initiation Route
  app.post("/api/payfast/initiate", (req, res) => {
    const { name, email, phone, businessName, amount, itemName, isSubscription, notes } = req.body;

    const merchantId = process.env.PAYFAST_MERCHANT_ID;
    const merchantKey = process.env.PAYFAST_MERCHANT_KEY;
    const passphrase = process.env.PAYFAST_PASSPHRASE;
    const env = process.env.PAYFAST_ENV || "sandbox";

    if (!merchantId || !merchantKey) {
      return res.status(500).json({ error: "PayFast configuration missing on server." });
    }

    // Save the pending reservation
    const reservationId = `vibrant_${Date.now()}`;
    reservations.push({
      id: reservationId,
      name,
      email,
      phone,
      businessName,
      notes,
      amount,
      status: 'pending',
      createdAt: new Date()
    });

    console.log(`[RESERVATION PENDING] ${reservationId} for ${businessName} (${email})`);

    const baseUrl = env === "live" 
      ? "https://www.payfast.co.za/eng/process" 
      : "https://sandbox.payfast.co.za/eng/process";

    const host = req.headers.host;
    const protocol = req.headers["x-forwarded-proto"] || (req.secure ? "https" : "http");
    const siteUrl = `${protocol}://${host}`;

    // Prepare data in specific order required by PayFast for signature
    const data: any = {
      merchant_id: merchantId,
      merchant_key: merchantKey,
      return_url: `${siteUrl}/payment-success`,
      cancel_url: `${siteUrl}/payment-cancel`,
      notify_url: `${siteUrl}/api/payfast/notify`,
      name_first: name.split(" ")[0] || "Client",
      name_last: name.split(" ").slice(1).join(" ") || "User",
      email_address: email,
      cell_number: phone,
      m_payment_id: reservationId,
      amount: parseFloat(amount || 0).toFixed(2),
      item_name: itemName || "Web Build Reservation",
      custom_str1: businessName,
    };

    if (isSubscription) {
      data.subscription_type = "1";
      data.billing_date = new Date().toISOString().split("T")[0];
      data.recurring_amount = parseFloat(amount).toFixed(2);
      data.frequency = "3"; // Monthly
      data.cycles = "0"; // Infinite 
    }

    const signature = generatePayFastSignature(data, passphrase);
    data.signature = signature;

    res.json({
      url: baseUrl,
      fields: data
    });
  });

  // PayFast ITN Notify Route
  app.post("/api/payfast/notify", (req, res) => {
    const data = req.body;
    console.log("PayFast ITN Received:", data);
    
    // In PayFast ITN, variables are sent as form-urlencoded
    const reservationId = data.m_payment_id;
    const status = data.payment_status;

    if (reservationId && status === 'COMPLETE') {
      const reservation = reservations.find(r => r.id === reservationId);
      if (reservation) {
        reservation.status = 'paid';
        reservation.payfast_payment_id = data.pf_payment_id;
        console.log(`[PAYMENT SUCCESS] Reservation ${reservationId} is now active.`);
        // Here you would typically trigger build automated emails or similar
      }
    }

    res.status(200).send("OK");
  });

  // API Contact Route
  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, business, message } = req.body;

    // Simple validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (!process.env.SMTP_PASS) {
      console.error("SMTP_PASS is not set in environment variables.");
      return res.status(500).json({ error: "Server configuration error: SMTP password missing." });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: "cp68.domains.co.za",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER || "help@vibrantws.co.za",
          pass: process.env.SMTP_PASS, 
        },
        tls: {
          // Do not fail on invalid certs (common with some shared hosting)
          rejectUnauthorized: false
        }
      });

      // Email to owner
      const mailOptions = {
        from: `"Vibrant Web Form" <${process.env.SMTP_USER || "help@vibrantws.co.za"}>`,
        to: "help@vibrantws.co.za", // Assuming this is also the recipient
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
            <h2 style="color: #0088ff;">New Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Business:</strong> ${business || "Not provided"}</p>
            <hr style="border: 0; border-top: 1px solid #eeeeee;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        `,
      };

      // Auto-reply to client
      const autoReplyOptions = {
        from: `"Vibrant Web Solutions" <${process.env.SMTP_USER || "help@vibrantws.co.za"}>`,
        to: email,
        subject: "We received your message - Vibrant Web Solutions",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
            <h2 style="color: #0088ff;">Thank you for contacting us!</h2>
            <p>Hi ${name},</p>
            <p>Thank you for reaching out to Vibrant Web Solutions. We have received your message and our team will get back to you within 24 hours.</p>
            <p>In the meantime, feel free to browse our portfolio or follow us on social media.</p>
            <hr style="border: 0; border-top: 1px solid #eeeeee;">
            <p style="font-size: 12px; color: #888888;">This is an automated reply. Please do not reply directly to this email unless you have further questions.</p>
          </div>
        `,
      };

      // Send emails
      await transporter.sendMail(mailOptions);
      await transporter.sendMail(autoReplyOptions);

      res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error("SMTP Error:", error);
      res.status(500).json({ error: "Failed to send email. Please try again later." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
