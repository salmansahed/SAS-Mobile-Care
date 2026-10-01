"use client";

import { TbPlus } from "react-icons/tb";

export default function WelcomeBanner({ setActiveTab }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-purple-800 via-purple-700 to-indigo-900 p-6 sm:p-10 text-white shadow-xl shadow-purple-900/10">
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-purple-200 backdrop-blur-md mb-3 border border-white/10">
            Dashboard Overview
          </span>
          <h1 className="text-xl sm:text-3xl font-black tracking-tight flex items-center gap-2">
            Welcome Back, Salman! 👋
          </h1>
          <p className="text-xs sm:text-sm text-purple-200/90 mt-1 font-medium">
            Manage your mobile repair services and inventory from SAS Mobile Care.
          </p>
        </div>

        <button
          onClick={() => setActiveTab("add-product")}
          className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white text-purple-700 font-extrabold text-xs sm:text-sm shadow-md hover:bg-purple-50 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer shrink-0"
        >
          <TbPlus className="w-4 h-4" />
          <span>Add New Item</span>
        </button>
      </div>
    </div>
  );
}
