import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "ok", 
      smtpConfigured: !!process.env.SMTP_PASS,
      smtpUser: process.env.SMTP_USER || "help@vibrantws.co.za"
    });
  });

  // PayFast ITN Notify Route (Standard URL as per requirements)
  app.post("/notify", (req, res) => {
    const data = req.body;
    console.log("PayFast ITN Received:", data);
    
    // In PayFast ITN, variables are sent as form-urlencoded
    const status = data.payment_status;

    if (status === 'COMPLETE') {
      console.log(`[PAYMENT SUCCESS] Payment received for ${data.item_name} from ${data.email_address}`);
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

  // API Reservation Route (Free Build Slot)
  app.post("/api/reserve", async (req, res) => {
    const { 
      fullName, 
      businessName, 
      email, 
      whatsappNumber, 
      businessType, 
      currentWebsite, 
      aboutBusiness, 
      websiteGoals 
    } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({ error: "Missing required fields (Full Name and Email are required)" });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: "cp68.domains.co.za",
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_USER || "help@vibrantws.co.za",
          pass: process.env.SMTP_PASS, 
        },
        tls: { rejectUnauthorized: false }
      });

      // Email to owner
      await transporter.sendMail({
        from: `"Vibrant Web Solutions" <${process.env.SMTP_USER || "help@vibrantws.co.za"}>`,
        to: "help@vibrantws.co.za",
        subject: `NEW WEBSITE BUILD INQUIRY: ${fullName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;">
            <h2 style="color: #00cc99; margin-top: 0; font-size: 24px; border-bottom: 2px solid #f1f5f9; padding-bottom: 15px;">New Website Build Inquiry</h2>
            <p style="font-size: 16px; color: #1e293b; margin: 15px 0;"><strong>Full Name:</strong> ${fullName}</p>
            <p style="font-size: 16px; color: #1e293b; margin: 15px 0;"><strong>Email Address:</strong> ${email}</p>
            <p style="font-size: 16px; color: #1e293b; margin: 15px 0;"><strong>WhatsApp Number:</strong> ${whatsappNumber || "Not provided"}</p>
            <p style="font-size: 16px; color: #1e293b; margin: 15px 0;"><strong>Business Name:</strong> ${businessName || "Not provided"}</p>
            <p style="font-size: 16px; color: #1e293b; margin: 15px 0;"><strong>Business Type:</strong> ${businessType || "Not provided"}</p>
            <p style="font-size: 16px; color: #1e293b; margin: 15px 0;"><strong>Current Website:</strong> ${currentWebsite || "None"}</p>
            
            <div style="margin-top: 25px; padding: 20px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #00cc99;">
              <h3 style="margin-top: 0; color: #334155; font-size: 16px;">About the Business:</h3>
              <p style="color: #475569; line-height: 1.6; font-size: 15px; white-space: pre-line; margin-bottom: 0;">${aboutBusiness || "Not provided"}</p>
            </div>

            <div style="margin-top: 25px; padding: 20px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <h3 style="margin-top: 0; color: #334155; font-size: 16px;">Website Goals:</h3>
              <p style="color: #475569; line-height: 1.6; font-size: 15px; white-space: pre-line; margin-bottom: 0;">${websiteGoals || "Not provided"}</p>
            </div>
            
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 30px 0;">
            <p style="font-size: 12px; color: #64748b; text-align: center; margin-bottom: 0;">This inquiry was submitted via the contact form on Vibrant Web Solutions.</p>
          </div>
        `,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Reservation SMTP Error:", error);
      res.status(500).json({ error: "Failed to process reservation." });
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
