import { Head } from "$fresh/runtime.ts";

export default function ComingSoon() {
  return (
    <>
      <Head>
        <title>Coming soon — FM Lab</title>
        <meta name="robots" content="noindex" />
      </Head>
      <section class="min-h-[60vh] grid place-items-center bg-neutral-50">
        <div class="text-center space-y-4">
          <h1 class="text-3xl font-bold">Almost there</h1>
          <p class="text-neutral-600">
            We’re still polishing this page. In the meantime, here’s where to reach us.
          </p>
          <a href="/contact" class="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white hover:bg-primary-700">
            Contact us
          </a>
        </div>
      </section>
    </>
  );
}
