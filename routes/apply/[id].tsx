// File: routes/apply/[id].tsx
import { Head } from "$fresh/runtime.ts";

export const handler = {
  async POST(req: Request, ctx: any) {
    const form = await req.formData();
    // TODO: send email + resume file to mehrab@fastandmodern.com

    // Build an absolute URL for redirect:
    const origin = new URL(req.url).origin;
    const location = `${origin}/apply/${ctx.params.id}?status=sent`;

    // Redirect with a 302 to the absolute URL:
    return Response.redirect(location, 302);
  },
};

export default function ApplyPage({ params, url }: { params: { id: string }; url: URL }) {
  const status = url.searchParams.get("status");
  return (
    <>
      <Head><title>Apply – {params.id.replace(/-/g, " ")}</title></Head>
      <section class="container mx-auto px-4 py-24 max-w-xl">
        <h1 class="text-3xl font-bold mb-4">
          Apply for {params.id.replace(/-/g, " ")}
        </h1>
        {status === "sent" && (
          <p class="text-green-600 mb-4">Thanks! Your application has been sent.</p>
        )}
        <form
          method="POST"
          encType="multipart/form-data"
          class="space-y-6"
        >
          <div>
            <label class="block mb-1 font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              required
              class="w-full border rounded-lg p-3"
            />
          </div>
          <div>
            <label class="block mb-1 font-medium">Upload Resume</label>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
              class="w-full"
            />
          </div>
          <button
            type="submit"
            class="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
          >
            Submit Application
          </button>
        </form>
      </section>
    </>
  );
}
