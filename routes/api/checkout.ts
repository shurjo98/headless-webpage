import { HandlerContext } from "$fresh/server.ts";

interface CheckoutRequest {
  package: string;
  features: Array<{
    id: string;
    title: string;
    desc: string;
    price?: number;
    category: 'web' | 'mobile';
  }>;
  term: 12 | 24;
  total: number;
  customer: {
    name: string;
    email: string;
    company?: string;
  };
  paymentMethod: 'upfront' | 'installment';
}

export const handler = {
  async POST(req: Request, _ctx: HandlerContext) {
    try {
      const data: CheckoutRequest = await req.json();
      
      // Validate required fields
      if (!data.customer.name || !data.customer.email || !data.package || !data.total) {
        return new Response("Missing required fields", { status: 400 });
      }

      // Log the checkout for debugging
      console.log("🛒 New checkout:", {
        package: data.package,
        total: data.total,
        term: data.term,
        paymentMethod: data.paymentMethod,
        customer: data.customer.name,
        features: data.features.length
      });

      // TODO: Integrate with actual payment processor (Stripe, PayPal, etc.)
      // For now, we'll simulate a successful payment
      
      // Simulate payment processing delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Generate a mock order ID
      const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      
      // Send confirmation email (using the contact form email system)
      try {
        const emailData = {
          name: data.customer.name,
          email: data.customer.email,
          company: data.customer.company,
          message: `
New order received:

Order ID: ${orderId}
Package: ${data.package}
Payment Method: ${data.paymentMethod}
Term: ${data.term} months
Total: $${data.total}

Selected Features:
${data.features.map(f => `- ${f.title} (${f.category})`).join('\n')}

Customer Information:
Name: ${data.customer.name}
Email: ${data.customer.email}
Company: ${data.customer.company || 'N/A'}
          `.trim()
        };

        // Use the existing contact form email system
        await fetch(`${new URL(req.url).origin}/api/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(emailData),
        });
      } catch (emailError) {
        console.error("Failed to send confirmation email:", emailError);
      }

      return new Response(JSON.stringify({
        success: true,
        orderId,
        message: "Order placed successfully!"
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
      
    } catch (e) {
      console.error("Checkout error:", e);
      return new Response(JSON.stringify({
        success: false,
        message: "Failed to process checkout"
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  },
} satisfies Record<string, unknown>; 