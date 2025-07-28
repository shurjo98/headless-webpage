import { HandlerContext } from "$fresh/server.ts";

export const handler = {
  async POST(req: Request, _ctx: HandlerContext) {
    try {
      const data = await req.json();
      console.log("🚀 New contact:", data); // TODO: replace with email or CRM call

      /* Example: send email via SendGrid
      await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Deno.env.get("SENDGRID_KEY")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: "hello@yourcompany.com" }] }],
          from: { email: data.email, name: data.name },
          subject: "New contact form submission",
          content: [{ type: "text/plain", value: data.message }],
        }),
      });
      */

      return new Response("OK", { status: 200 });
    } catch (e) {
      console.error(e);
      return new Response("Bad Request", { status: 400 });
    }
  },
} satisfies Record<string, unknown>;
