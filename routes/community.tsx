import { Users, MessageCircle } from "https://esm.sh/lucide-preact@0.328.0";

export default function CommunityPage() {
  return (
    <div class="container mx-auto px-4 py-24 flex flex-col gap-16">
      <section class="text-center max-w-2xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">Community</h1>
        <p class="text-lg text-slate-600">
          Join the conversation, get help from peers, and share your expertise.
        </p>
      </section>

      <div class="max-w-3xl mx-auto border border-slate-200 p-12 rounded-2xl text-center shadow">
        <Users class="h-12 w-12 mx-auto text-indigo-600" />
        <h2 class="text-2xl font-semibold mt-4 mb-2">Visit the Forum</h2>
        <p class="text-slate-600 mb-6">
          Ask questions, vote on feature requests, and connect with developers worldwide.
        </p>
        <a
          href="https://community.fastmodern.io"
          class="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          <MessageCircle class="h-5 w-5" /> Go to Forum
        </a>
      </div>
    </div>
  );
}
