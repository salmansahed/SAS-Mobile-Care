"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiBars3, HiXMark } from "react-icons/hi2";
import ThemeSwitch from "../theming/ThemeSwitch";
import sasLogo from "../../assets/SASMobileCareLogo.png";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentPath = usePathname();

  // Check if shop is open based on Bangladesh Time (UTC+6)
  const [isOpen] = useState(() => {
    if (typeof window === "undefined") return false;

    const bdTimeStr = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Dhaka",
      hour: "numeric",
      hour12: false,
    });

    const currentHour = parseInt(bdTimeStr, 10);
    // Shop operating hours: 9:00 AM to 10:00 PM
    return currentHour >= 9 && currentHour < 22;
  });

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Track", href: "/track" },
    { name: "About-Us", href: "/about-us" },
  ];

  // Hide Navbar on Dashboard routes
  if (currentPath.includes("/dashboard")) {
    return null;
  }

  return (
    <>
      {/* Mobile Drawer Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 dark:bg-black/60 backdrop-blur-xs"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <header className="sticky top-4 z-50 w-full px-3 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <nav className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xs border border-indigo-100/80 dark:border-slate-800/80 rounded-2xl px-3 sm:px-5 py-3 shadow-xl shadow-indigo-950/5 dark:shadow-slate-950/50 transition-all duration-300">
            {/* Top Ambient Glow Line */}
            <div className="absolute -top-px left-1/4 right-1/4 h-px bg-linear-to-r from-transparent via-indigo-500/40 dark:via-indigo-400/50 to-transparent shadow-xs shadow-indigo-400" />

            <div className="flex items-center justify-between gap-2">
              {/* Brand Logo */}
              <Link
                href="/"
                className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
              >
                <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-linear-to-tr from-indigo-600 to-purple-600 p-0.5 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-white dark:bg-slate-950 rounded-xl flex items-center justify-center overflow-hidden">
                    <Image
                      src={sasLogo}
                      alt="SAS Mobile Care Logo"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover rounded-xl"
                      priority
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                    SAS Mobile{" "}
                    <span className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                      Care
                    </span>
                  </span>
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mt-0.5">
                    Store
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation Links */}
              <div className="hidden xl:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/80 p-1.5 rounded-xl border border-slate-200 dark:border-slate-700/60">
                {navLinks.map((link) => {
                  const isActive = currentPath === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-sm px-4 lg:px-5 py-2 rounded-lg transition-all duration-200 select-none ${
                        isActive
                          ? "text-indigo-600 dark:text-indigo-400 font-bold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-xs"
                          : "text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-slate-900 hover:shadow-xs"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              {/* Desktop Status Badge & Theme Switch */}
              <div className="hidden xl:flex items-center gap-3 shrink-0">
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 text-xs font-semibold select-none">
                  {isOpen ? (
                    <>
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                        Open Now{" "}
                        <span className="text-slate-500 dark:text-slate-400 font-normal">
                          (9AM-10PM)
                        </span>
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-500"></span>
                      <span className="text-rose-500 dark:text-rose-400 font-bold">
                        Shop Closed{" "}
                        <span className="text-slate-500 dark:text-slate-400 font-normal">
                          (Opens 9AM)
                        </span>
                      </span>
                    </>
                  )}
                </div>

                <ThemeSwitch />
              </div>

              {/* Mobile Controls */}
              <div className="flex xl:hidden items-center gap-2 shrink-0">
                <ThemeSwitch />

                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-slate-800 dark:text-slate-200 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 focus:outline-none transition-colors cursor-pointer"
                  aria-label="Toggle Menu"
                >
                  {isMobileMenuOpen ? (
                    <HiXMark className="w-6 h-6" />
                  ) : (
                    <HiBars3 className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {isMobileMenuOpen && (
              <div className="xl:hidden mt-4 pt-4 border-t border-indigo-100 dark:border-slate-800 flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = currentPath === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-sm px-5 py-2.5 rounded-xl transition-all duration-200 select-none ${
                        isActive
                          ? "text-indigo-600 dark:text-indigo-400 font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs"
                          : "text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-slate-800"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                {/* Mobile Shop Status Badge */}
                <div className="mt-2 pt-2 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between px-3 py-2 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 text-xs">
                  <span className="text-slate-500 dark:text-slate-400">
                    Store Hours:
                  </span>
                  <div className="flex items-center gap-1.5 font-bold">
                    {isOpen ? (
                      <>
                        <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                        <span className="text-emerald-600 dark:text-emerald-400">
                          Open Now (9AM-10PM)
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="h-2 w-2 rounded-full bg-rose-500"></span>
                        <span className="text-rose-500 dark:text-rose-400">
                          Shop Closed
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
