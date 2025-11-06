import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const formData = req.body;

  if (!formData.name || !formData.email || !formData.message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // should be craftyourplatform@gmail.com
        pass: process.env.EMAIL_PASS,
      },
    });

    // Prepare attachments array if attachment provided in JSON (base64)
    const attachments = [];
    // Accept either: attachment: { content: "<base64>", fileName: "resume.pdf", mimeType: "application/pdf" }
    // or: attachment: "<base64 string>" with fileName and mimeType fields
    if (formData.attachment) {
      try {
        let contentBase64 = null;
        let fileName = formData.attachment.fileName || formData.attachmentName || "attachment";
        let mimeType = formData.attachment.mimeType || formData.attachmentType || "application/octet-stream";

        if (typeof formData.attachment === "string") {
          contentBase64 = formData.attachment;
        } else if (formData.attachment.content) {
          contentBase64 = formData.attachment.content;
        }

        if (contentBase64) {
          // Basic size check: decode and limit to ~8MB (adjust as needed)
          const buffer = Buffer.from(contentBase64, "base64");
          const maxBytes = 8 * 1024 * 1024;
          if (buffer.length > maxBytes) {
            return res.status(413).json({ error: "Attachment too large" });
          }

          attachments.push({
            filename: fileName,
            content: buffer,
            contentType: mimeType,
          });
        }
      } catch (e) {
        console.warn("Attachment processing failed:", e);
        // proceed without attachment
      }
    }

    // --- Admin email ---
    const adminHtml = `
<div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 20px;">
  <div style="max-width: 600px; margin: auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <div style="background-color: #007BFF; color: white; padding: 16px; font-size: 18px;">
      📩 New Contact Form Submission - Craft Your Platform
    </div>
    <table style="width: 100%; border-collapse: collapse;">
      ${Object.entries(formData)
        .filter(([k]) => k !== "attachment" && k !== "attachmentName" && k !== "attachmentType")
        .map(
          ([key, value]) => `
        <tr>
          <td style="padding: 8px; font-weight: bold; text-transform: capitalize;">${key}</td>
          <td style="padding: 8px;">${value || "-"}</td>
        </tr>`
        )
        .join("")}
    </table>
    <div style="padding: 12px; text-align: center; font-size: 12px; color: #777;">
      Sent automatically from your Craft Your Platform website contact form.
    </div>
  </div>
</div>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "craftyourplatform@gmail.com",
      subject: `New Inquiry from ${formData.name}`,
      html: adminHtml,
      attachments, // may be empty
    });

    console.log("✅ Admin email sent successfully");

    // --- User email ---
    const userHtml = `
<div style="font-family: Arial, sans-serif; background: #f3f4f6; padding: 20px;">
  <div style="max-width: 600px; margin: auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); text-align: center;">
    <div style="background-color: #007BFF; color: white; padding: 20px;">
      <h2 style="margin: 0;">Thank You for Contacting Craft Your Platform!</h2>
    </div>
    <div style="padding: 20px; color: #333;">
      <p>Dear <strong>${formData.name}</strong>,</p>
      <p>We appreciate you reaching out to <strong>Craft Your Platform</strong>. Our team will get back to you soon!</p>
      <blockquote style="font-style: italic; background: #f9fafb; padding: 10px; border-left: 4px solid #007BFF; margin: 15px 0;">
        ${formData.message}
      </blockquote>
      <a href="https://craftyourplatform.vercel.app" target="_blank" 
        style="display: inline-block; margin-top: 20px; background: #007BFF; color: white; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold;">
        Visit Our Website
      </a>
    </div>
  </div>
</div>
    `;

    console.log("📨 Attempting to send thank-you email to:", formData.email);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: formData.email,
      subject: "Thank You for Contacting Craft Your Platform!",
      html: userHtml,
    });

    console.log("✅ Thank-you email sent to:", formData.email);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("❌ Error sending email:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
}
