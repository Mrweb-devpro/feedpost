import { Github } from "lucide-react";

export default function GithubAuthButton() {
  return (
    <button
      type="button"
      className="border flex  items-center gap-2 px-4 py-2 rounded-xl border-stone-400/50 bg-stone-100 text-stone-800"
    >
      <Github size={30} />
      Github
    </button>
  );
}
