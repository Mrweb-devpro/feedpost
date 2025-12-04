"use client";
import { useState } from "react";

import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardMainContent from "@/components/DashboardMainContent";
import CreateFeedbackModal from "@/components/modals/CreateFeedbackModal";
import { apps } from "@/fakeData";

export default function AppLayout() {
  const [sortBy, setSortBy] = useState("hot");
  const [feedbackType, setFeedbackType] = useState("all");
  const [showCreateModal, setShowCreateModal] = useState(false);

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
      {showCreateModal && (
        <CreateFeedbackModal
          apps={apps}
          feedbackType={feedbackType}
          setFeedbackType={setFeedbackType}
          setShowCreateModal={setShowCreateModal}
        />
      )}
    </div>
  );
}
