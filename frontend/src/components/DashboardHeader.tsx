import { Plus, Search, User, UserCircle } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import Logo from "./Logo";

export default function DashboardHeader({
  setShowCreateModal,
}: {
  setShowCreateModal: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Logo width={130} />
        </div>

        <div className="flex-1 max-w-96">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search apps or feedback..."
              className="w-full pl-10 pr-4 py-1.5 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent text-stone-700 text-sm outline-none"
            />
          </div>
        </div>

        <div className="flex items-center ml-auto">
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors text-sm"
          >
            <Plus size={20} />
            Create
          </button>

          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <UserCircle size={30} className="text-blue-600" />
          </button>
        </div>
      </div>
    </header>
  );
}
