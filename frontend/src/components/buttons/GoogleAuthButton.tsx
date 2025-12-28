import { FcGoogle } from "react-icons/fc";

export default function GoogleAuthButton() {
  return (
    <button
      type="button"
      className="border flex  items-center gap-2 px-4 py-2 rounded-xl border-stone-400/50 bg-stone-100 text-stone-800"
    >
      <FcGoogle size={29} />
      Google
    </button>
  );
}
