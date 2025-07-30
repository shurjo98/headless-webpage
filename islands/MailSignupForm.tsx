import { h } from "preact";
import { useSignal } from "@preact/signals";
import { Button } from "../components/ui/button.tsx";

export default function MailSignupForm() {
  const submitted = useSignal(false);

  function handleSubmit(e: Event) {
    e.preventDefault();
    // Here you could still fire off a fetch() to your API if you like,
    // but for now we'll just show a friendly message:
    submitted.value = true;
  }

  return submitted.value ? (
    <p class="text-green-600 font-medium">
      Thanks! We’ve received your email and will be in touch.
    </p>
  ) : (
    <form onSubmit={handleSubmit} class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
      <input
        type="email"
        name="EMAIL"
        placeholder="you@awesome.dev"
        required
        class="w-full sm:w-auto flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-600"
      />
      <Button type="submit">Notify Me</Button>
    </form>
  );
}
