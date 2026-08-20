import Link from "next/link";
import { Button } from "@heroui/react";
import {
  HiWrenchScrewdriver,
  HiArrowRight,
  HiShieldCheck,
} from "react-icons/hi2";
import { FaShieldAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 dark:bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/20 dark:bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50/80 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-6 shadow-xs">
          <FaShieldAlt className="w-4 h-4 text-indigo-500 animate-pulse" />
          <span>Your Trusted Mobile Care Partner in Bhaluka</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Fast & Reliable Mobile Servicing{" "}
          <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-500 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-300 bg-clip-text text-transparent">
            Solutions
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Expert smartphone repairs, authentic buy/sell deals, and fast online
          services - all under one roof with maximum reliability and care.
        </p>

        {/* Call To Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/services" className="w-full sm:w-auto">
            <Button
              variant="secondary"
              className="w-full sm:w-auto bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold px-8 py-6 rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200 text-base"
            >
              <HiWrenchScrewdriver className="w-5 h-5" />
              Book Servicing
            </Button>
          </Link>

          <Link href="/track" className="w-full sm:w-auto">
            <Button
              variant="ghost"
              className="w-full sm:w-auto text-slate-700 dark:text-slate-200 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800/80 font-bold px-8 py-6 rounded-xl transition-all duration-200 text-base shadow-xs"
            >
              <span>Track Repair Status</span>
              <HiArrowRight className="w-5 h-5 text-indigo-500" />
            </Button>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-slate-200/60 dark:border-slate-800/60 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-semibold">
          <div className="flex items-center gap-2">
            <HiShieldCheck className="w-5 h-5 text-indigo-500" />
            <span>100% Authentic Parts</span>
          </div>
          <div className="flex items-center gap-2">
            <HiShieldCheck className="w-5 h-5 text-indigo-500" />
            <span>Fast Turnaround</span>
          </div>
          <div className="flex items-center gap-2">
            <HiShieldCheck className="w-5 h-5 text-indigo-500" />
            <span>Expert Technicians</span>
          </div>
        </div>
      </div>
    </section>
  );
}
