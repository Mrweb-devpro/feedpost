import { MessageSquare, Plus, Search, User } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export default function DashboardHeader({
  setShowCreateModal,
}: {
  setShowCreateModal: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <MessageSquare className="text-white" size={24} />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AppVoice
          </h1>
        </div>

        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search apps or feedback..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
        >
          <Plus size={20} />
          Create
        </button>

        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <User size={24} className="text-gray-600" />
        </button>
      </div>
    </header>
  );
}
