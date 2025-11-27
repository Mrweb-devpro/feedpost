import Link from "next/link";

export default function DashboardSidebar() {
  return (
    <div className="absolute md:relative w-full h-full bg-black/45 backdrop-blur-xs text-stone-600">
      <aside className=" w-80 space-y-4 bg-white h-full">
        <button>{"<"}</button>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex flex-col">
            <Link href="/">Home</Link>
            <Link href="/"></Link>
            <Link href="/popular-apps">Popular Apps</Link>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-700 to-blue-400 rounded-lg p-6 text-white">
          <h3 className="font-bold text-lg mb-2">Premium Features</h3>
          <p className="text-sm text-blue-100 mb-4">
            Get exclusive badges, ad-free experience, and more visibility for
            your feedback!
          </p>
          <button className="w-full bg-white text-blue-500 font-semibold py-2 rounded-lg hover:bg-blue-50 transition-colors">
            Upgrade Now
          </button>
        </div>
      </aside>
    </div>
  );
}
