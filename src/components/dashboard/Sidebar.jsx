"use client";

import Link from "next/link";
import { AiFillProduct } from "react-icons/ai";
import {
  TbLayoutGrid,
  TbPlus,
  TbArrowLeft,
  TbX,
  TbDeviceMobile,
  TbDeviceMobileSearch,
} from "react-icons/tb";

const NAV_ITEMS = [
  { id: "overview", label: "Overview", icon: TbLayoutGrid },
  { id: "add-product", label: "Add Service / Product", icon: TbPlus },
  { id: "all-products", label: "All Products", icon: AiFillProduct },
  {
    id: "add-track-info",
    label: "Add Tracking Info",
    icon: TbDeviceMobileSearch,
  },
  { id: "track-management", label: "Track Management", icon: TbDeviceMobile },
];

export default function Sidebar({
  activeTab,
  setActiveTab,
  isSidebarOpen,
  setIsSidebarOpen,
}) {
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      {isSidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-40 lg:hidden"
        />
      )}

      <aside
        className={`fixed lg:static top-0 left-0 h-full w-64 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 flex flex-col justify-between p-6 z-50 transition-transform duration-300 shrink-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div>
          <div className="flex items-center justify-between mb-8 px-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-600 text-white font-bold flex items-center justify-center text-lg shadow-md shadow-purple-500/20">
                <TbDeviceMobile className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-extrabold text-purple-700 dark:text-purple-400 text-base leading-tight">
                  Dashboard
                </h2>
                <span className="text-[11px] font-medium text-slate-400 block">
                  Admin Control Panel
                </span>
              </div>
            </div>

            <button
              onClick={closeSidebar}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 lg:hidden cursor-pointer"
            >
              <TbX className="w-6 h-6" />
            </button>
          </div>

          <nav className="space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2 block">
              Main Navigation
            </span>

            {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => {
                  setActiveTab(id);
                  closeSidebar();
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeTab === id
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                    : "text-slate-500 dark:text-slate-400 hover:bg-purple-50 dark:hover:bg-slate-800/60 hover:text-purple-600"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl text-xs font-bold text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-900/50 hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-all"
          >
            <TbArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
