import { Button } from "@heroui/react";
import {
  HiPhone,
  HiChatBubbleLeftEllipsis,
  HiMapPin,
  HiClock,
} from "react-icons/hi2";
import { BiSupport } from "react-icons/bi";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-12 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Glass Card Container */}
        <div className="relative rounded-3xl bg-linear-to-b from-indigo-50/80 via-purple-50/50 to-white dark:from-slate-900/90 dark:via-indigo-950/40 dark:to-slate-900/90 backdrop-blur-xl border border-indigo-100 dark:border-slate-800 p-8 sm:p-12 lg:p-16 shadow-2xl shadow-indigo-950/5 dark:shadow-slate-950/50 overflow-hidden">
          {/* Top Subtle Ambient Glow Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-indigo-500/50 dark:via-indigo-400/50 to-transparent" />

          {/* Ambient Background Glows */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* Badge */}
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase bg-indigo-100/70 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/80 px-3.5 py-1 rounded-full mb-4">
                <BiSupport className="w-4 h-4" />
                Need Immediate Assistance?
              </span>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Have a Broken Phone or Need{" "}
                <span className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Quick Support?
                </span>
              </h2>

              {/* Subtitle */}
              <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                Visit our shop at Chamiyadi, Bhaluka or contact us directly on
                WhatsApp for instant diagnosis and price estimation.
              </p>

              {/* Shop Info Quick Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="flex items-center justify-center lg:justify-start gap-2.5 bg-white/60 dark:bg-slate-950/60 backdrop-blur-md p-3.5 rounded-2xl border border-indigo-100/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium shadow-xs">
                  <HiMapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>Chamiyadi Bazar, Bhaluka, Mymensingh</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2.5 bg-white/60 dark:bg-slate-950/60 backdrop-blur-md p-3.5 rounded-2xl border border-indigo-100/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium shadow-xs">
                  <HiClock className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>Everyday: 9:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center items-stretch">
              <Link
                href="https://wa.me/8801614869602"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  variant="secondary"
                  className="w-full bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-extrabold py-6 px-6 rounded-2xl shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-200 text-base"
                >
                  <HiChatBubbleLeftEllipsis className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </Link>

              <Link href="tel:+8801614869602" className="w-full">
                <Button
                  variant="ghost"
                  className="w-full bg-white/80 dark:bg-slate-950/80 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-800 dark:text-slate-200 border border-indigo-100 dark:border-slate-800 font-bold py-6 px-6 rounded-2xl transition-all duration-200 text-base shadow-xs"
                >
                  <HiPhone className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  Call Us Directly
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
