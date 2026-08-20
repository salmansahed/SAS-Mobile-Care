import Link from "next/link";
import { Button } from "@heroui/react";
import {
  HiHome,
  HiWrenchScrewdriver,
  HiQuestionMarkCircle,
} from "react-icons/hi2";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="relative w-full max-w-2xl mx-auto text-center">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/20 dark:bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-500/20 dark:bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

        {/* Main Card Container */}
        <div className="relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-indigo-100/80 dark:border-slate-800/80 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-indigo-950/10 dark:shadow-slate-950/50">
          {/* Top Decorative Floating Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60 text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            ERROR CODE: 404
          </div>

          {/* Large Gradient 404 Text */}
          <h1 className="text-7xl sm:text-9xl font-black tracking-tight leading-none bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-500 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-300 bg-clip-text text-transparent select-none">
            404
          </h1>

          {/* Title & Description */}
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-4 tracking-tight">
            Page Not Found
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-md mx-auto mt-3 leading-relaxed">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                className="w-full sm:w-auto bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <HiHome className="w-5 h-5" />
                Back to Home
              </Button>
            </Link>

            <Link href="/services" className="w-full sm:w-auto">
              <Button
                variant="ghost"
                className="w-full sm:w-auto text-slate-700 dark:text-slate-200 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80 font-bold px-6 py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
              >
                <HiWrenchScrewdriver className="w-5 h-5 text-indigo-500" />
                Explore Services
              </Button>
            </Link>
          </div>

          {/* Bottom Help Text */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <HiQuestionMarkCircle className="w-4 h-4 text-indigo-500" />
            <span>
              Need assistance? Contact our SAS Mobile Care support team.
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
