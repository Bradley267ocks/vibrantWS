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

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "ok", 
      smtpConfigured: !!process.env.SMTP_PASS,
      smtpUser: process.env.SMTP_USER || "help@vibrantws.co.za"
    });
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
