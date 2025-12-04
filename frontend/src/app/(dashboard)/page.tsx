"use client";
import { useState } from "react";

import { apps } from "@/fakeData";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardMainContent from "@/components/DashboardMainContent";

export default function AppLayout() {
  const [selectedApp, setSelectedApp] = useState(null);
  const [sortBy, setSortBy] = useState("hot");
  const [feedbackType, setFeedbackType] = useState("all");
  const [showCreateModal, setShowCreateModal] = useState(false);

  const CreateFeedbackModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold">Share Your Feedback</h2>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">
              Select App
            </label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Choose an app...</option>
              {apps.map((app) => (
                <option key={app.id}>
                  {app.icon} {app.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Feedback Type
            </label>
            <div className="flex gap-3">
              <button className="flex-1 p-3 border-2 border-green-500 bg-green-50 text-green-700 rounded-lg font-semibold hover:bg-green-100 transition-colors">
                👍 Love This Feature
              </button>
              <button className="flex-1 p-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                👎 Needs Improvement
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Title</label>
            <input
              type="text"
              placeholder="Give your feedback a clear title"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Details</label>
            <textarea
              rows={6}
              placeholder="Describe what you love or what needs improvement..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Category</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Feature Request</option>
              <option>User Experience</option>
              <option>Performance</option>
              <option>Design</option>
              <option>Bug Report</option>
              <option>Algorithm</option>
              <option>Privacy</option>
            </select>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 flex gap-3">
          <button
            onClick={() => setShowCreateModal(false)}
            className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Post Feedback
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Header */}

      <DashboardHeader setShowCreateModal={setShowCreateModal} />
      <div className="max-w-7xl mx-auto flex h-full overflow-hidden">
        <DashboardSidebar />
        {/* Sidebar */}

        {/* Main Content */}
        <DashboardMainContent
          setSortBy={setSortBy}
          sortBy={sortBy}
          feedbackType={feedbackType}
        />
      </div>

      {/* Create Modal */}
      {showCreateModal && <CreateFeedbackModal />}
    </>
  );
}
