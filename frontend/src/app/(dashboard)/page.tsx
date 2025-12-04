"use client";
import { useRef, useState } from "react";

import { apps } from "@/fakeData";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardMainContent from "@/components/DashboardMainContent";
import { ArrowBigDown, ArrowBigUp, Image, Link2, X } from "lucide-react";

export default function AppLayout() {
  const [selectedApp, setSelectedApp] = useState(null);
  const [sortBy, setSortBy] = useState("hot");
  const [feedbackType, setFeedbackType] = useState("all");
  const [showCreateModal, setShowCreateModal] = useState(false);

  const CreateFeedbackModal = () => {
    const [showCreateModal, setShowCreateModal] = useState(true);
    const [feedbackType, setFeedbackType] = useState("positive");
    const [uploadedImages, setUploadedImages] = useState([]);
    const [linkUrl, setLinkUrl] = useState("");
    const [showLinkInput, setShowLinkInput] = useState(false);
    const fileInputRef = useRef(null);

    const handleImageUpload = (e) => {
      const files = Array.from(e.target.files);
      const newImages = files.map((file) => ({
        id: Date.now() + Math.random(),
        url: URL.createObjectURL(file),
        name: file.name,
      }));
      setUploadedImages((prev) => [...prev, ...newImages]);
    };

    const removeImage = (id) => {
      setUploadedImages((prev) => prev.filter((img) => img.id !== id));
    };

    const handleAddLink = () => {
      if (linkUrl.trim()) {
        // Link is added, you can store it in state if needed
        setShowLinkInput(false);
        setLinkUrl("");
      }
    };

    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-start justify-center z-50 p-4 overflow-y-auto pt-20">
        <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl animate-in">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Create Post</h2>
            <button
              onClick={() => setShowCreateModal(false)}
              className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} className="text-gray-500" />
            </button>
          </div>

          <div className="p-6 space-y-5">
            {/* App Selection */}
            <div>
              <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all cursor-pointer">
                <option>Choose a community</option>
                {apps.map((app) => (
                  <option key={app.id}>
                    {app.icon} {app.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200" />

            {/* Feedback Type */}
            <div className="flex gap-2">
              <button
                onClick={() => setFeedbackType("positive")}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm transition-all ${
                  feedbackType === "positive"
                    ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <ArrowBigUp size={18} />
                Love This
              </button>
              <button
                onClick={() => setFeedbackType("negative")}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full font-medium text-sm transition-all ${
                  feedbackType === "negative"
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <ArrowBigDown size={18} />
                Needs Work
              </button>
            </div>

            {/* Title Input */}
            <div>
              <input
                type="text"
                placeholder="Title"
                className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-200 text-lg placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Description Textarea */}
            <div>
              <textarea
                rows={8}
                placeholder="Text (optional)"
                className="w-full px-4 py-3 bg-transparent border border-gray-200 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
              />
            </div>

            {/* Uploaded Images Display */}
            {uploadedImages.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {uploadedImages.map((img) => (
                  <div key={img.id} className="relative group">
                    <img
                      src={img.url}
                      alt={img.name}
                      className="w-full h-32 object-cover rounded-lg border border-gray-200"
                    />
                    <button
                      onClick={() => removeImage(img.id)}
                      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Link Input (when visible) */}
            {showLinkInput && (
              <div className="flex gap-2">
                <input
                  type="url"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  placeholder="Enter URL"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleAddLink}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Add
                </button>
                <button
                  onClick={() => {
                    setShowLinkInput(false);
                    setLinkUrl("");
                  }}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            )}

            {/* Display added link */}
            {linkUrl && !showLinkInput && (
              <div className="flex items-center gap-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <Link2 size={16} className="text-blue-600" />
                <a
                  href={linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline flex-1 truncate"
                >
                  {linkUrl}
                </a>
                <button
                  onClick={() => setLinkUrl("")}
                  className="text-gray-500 hover:text-red-500"
                >
                  <X size={16} />
                </button>
              </div>
            )}

            {/* Media Buttons */}
            <div className="flex gap-2">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium text-gray-700 flex items-center gap-2 transition-colors"
              >
                <Image size={18} />
                Add Image
              </button>
              <button
                onClick={() => setShowLinkInput(true)}
                className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium text-gray-700 flex items-center gap-2 transition-colors"
              >
                <Link2 size={18} />
                Add Link
              </button>
            </div>

            {/* Category Selection */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Flair
              </label>
              <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer">
                <option>💡 Feature Request</option>
                <option>✨ User Experience</option>
                <option>⚡ Performance</option>
                <option>🎨 Design</option>
                <option>🐛 Bug Report</option>
                <option>🤖 Algorithm</option>
                <option>🔒 Privacy</option>
              </select>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between rounded-b-2xl">
            <div className="text-xs text-gray-500">
              Remember to be respectful and constructive
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-5 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200 rounded-full transition-colors"
              >
                Cancel
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-md">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}

      <DashboardHeader setShowCreateModal={setShowCreateModal} />
      <div className="flex h-full overflow-y-hidden">
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
    </div>
  );
}
