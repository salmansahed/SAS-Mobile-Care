"use client";

import { TbBell, TbMenu2 } from "react-icons/tb";
import ThemeSwitch from "../theming/ThemeSwitch";
import Link from "next/link";

export default function Navbar({ brandName, brandInitial, setIsSidebarOpen }) {
  return (
    <header className="h-20 border-b border-slate-100 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md px-4 sm:px-8 flex items-center justify-between sticky top-0 z-20 shrink-0">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className="p-2 rounded-xl bg-purple-50 dark:bg-slate-800 text-purple-600 dark:text-purple-400 lg:hidden cursor-pointer"
        >
          <TbMenu2 className="w-6 h-6" />
        </button>

        <div className="w-9 h-9 rounded-full bg-purple-100 text-purple-700 font-black text-xs flex items-center justify-center border border-purple-200 shrink-0">
          {brandInitial}
        </div>
        <div>
          <h2 className="font-extrabold text-slate-800 dark:text-white text-sm sm:text-base leading-tight">
            {brandName}
          </h2>
          <span className="text-[10px] font-bold text-purple-600 uppercase tracking-widest block">
            Admin Dashboard
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeSwitch />
        <Link href="https://web.whatsapp.com" target="_blank">
          <button className="p-2 sm:p-2.5 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-300 hover:text-purple-600 transition-colors relative cursor-pointer">
            <TbBell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-500" />
          </button>
        </Link>

        <div className="flex items-center gap-2.5 pl-2 sm:pl-3 border-l border-slate-200 dark:border-slate-800">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center border border-purple-200 shrink-0">
            SAS
          </div>
          <div className="text-left hidden md:block">
            <p className="text-xs font-extrabold leading-none text-slate-800 dark:text-slate-100">
              Salman - Alamin - Siddik
            </p>
            <span className="text-[10px] text-slate-400 font-semibold">
              Store Manager
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
