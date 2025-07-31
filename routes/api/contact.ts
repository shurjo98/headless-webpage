import { HandlerContext } from "$fresh/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer/mod.ts";

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

// ─── SMTP CONFIG ───────────────────────────────────────────────
const SMTP_HOST = Deno.env.get("SMTP_HOST");
const SMTP_PORT = Number(Deno.env.get("SMTP_PORT") || "587");
const SMTP_USER = Deno.env.get("SMTP_USER");
const SMTP_PASS = Deno.env.get("SMTP_PASS");
const TO_EMAIL = Deno.env.get("CONTACT_EMAIL") || "pranjolfahim@gmail.com";

export const handler = {
  async POST(req: Request, _ctx: HandlerContext) {
    try {
      const data: ContactFormData = await req.json();
      
      // Validate required fields
      if (!data.name || !data.email || !data.message) {
        return new Response("Missing required fields", { status: 400 });
      }

      // Log the contact for debugging
      console.log("🚀 New contact form submission:", data);

      // Check if SMTP is configured
      if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
        console.log("📧 SMTP not configured, logging contact data only");
        console.log("Contact form data:", data);
        return new Response("OK", { status: 200 });
      }

      // ─── SEND VIA denomailer ──────────────────────────────────────
      const client = new SMTPClient({
        connection: {
          hostname: SMTP_HOST,
          port: SMTP_PORT,
          tls: true,
          auth: {
            username: SMTP_USER,
            password: SMTP_PASS,
          },
        },
      });

      await client.send({
        from: SMTP_USER,
        to: [TO_EMAIL],
        replyTo: data.email,
        subject: `New Contact Form Submission - ${data.name}`,
        content: `
New contact form submission received:

Name:    ${data.name}
Email:   ${data.email}
${data.company ? `Company: ${data.company}` : ''}

Message:
${data.message}

---
Sent from HeadlessPro contact form
Time: ${new Date().toLocaleString()}
        `,
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Contact Form Submission</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
    <h2 style="color: #0078E7;">New Contact Form Submission</h2>
    
    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3 style="margin-top: 0;">Contact Information</h3>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
    </div>
    
    <div style="background: #fff; padding: 20px; border-left: 4px solid #0078E7; margin: 20px 0;">
      <h3 style="margin-top: 0;">Message</h3>
      <p style="white-space: pre-wrap;">${data.message}</p>
    </div>
    
    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
      <p>This message was sent from the HeadlessPro contact form.</p>
      <p>Time: ${new Date().toLocaleString()}</p>
    </div>
  </div>
</body>
</html>
        `,
      });
      await client.close();
      // ───────────────────────────────────────────────────────────

      console.log("✅ Email sent successfully via SMTP");
      return new Response("OK", { status: 200 });
    } catch (e) {
      console.error("Contact form error:", e);
      
      // If SMTP fails, just return success to user
      console.log("📧 Contact form submission failed, but user will see success message");
      return new Response("OK", { status: 200 });
    }
  },
} satisfies Record<string, unknown>;
