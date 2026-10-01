"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import OverviewTab from "./tabs/OverviewTab";
import AddTrackInfoTab from "./tabs/AddTrackInfoTab";
import AddProductTab from "./tabs/AddProductTab";
import AllProductsTab from "./tabs/AllProductsTab";
import TrackManagementTab from "./tabs/TrackManagementTab";

export default function DashboardClientWrapper({ brandName, brandInitial }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Render active tab view dynamically
  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewTab setActiveTab={setActiveTab} />;
      case "add-track-info":
        return <AddTrackInfoTab />;
      case "add-product":
        return <AddProductTab />;
      case "all-products":
        return <AllProductsTab />;
      case "track-management":
        return <TrackManagementTab />;
      default:
        return <OverviewTab setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="flex h-screen bg-[#f8f9fc] dark:bg-slate-950 text-slate-800 dark:text-slate-100 overflow-hidden relative">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="flex-1 flex flex-col overflow-y-auto w-full">
        <Navbar
          brandName={brandName}
          brandInitial={brandInitial}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <main className="p-4 sm:p-8 flex-1 max-w-7xl w-full mx-auto">
          {renderTabContent()}
        </main>
      </div>
    </div>
  );
}
