import { apps } from "@/fakeData";

export default function DashboardSidebar() {
  return (
    <aside className="w-80 space-y-4">
      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <h3 className="font-bold mb-3 text-gray-900">Popular Apps</h3>
        <div className="space-y-2">
          {apps.map((app) => (
            <button
              key={app.id}
              // onClick={() => setSelectedApp(app.id)}
              className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left"
            >
              <div
                className={`w-10 h-10 ${app.color} rounded-lg flex items-center justify-center text-xl`}
              >
                {app.icon}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900">{app.name}</div>
                <div className="text-sm text-gray-500">
                  {app.followers} members
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <h3 className="font-bold text-lg mb-2">Premium Features</h3>
        <p className="text-sm text-blue-100 mb-4">
          Get exclusive badges, ad-free experience, and more visibility for your
          feedback!
        </p>
        <button className="w-full bg-white text-blue-600 font-semibold py-2 rounded-lg hover:bg-blue-50 transition-colors">
          Upgrade Now
        </button>
      </div>
    </aside>
  );
}
