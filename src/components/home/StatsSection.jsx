import {
  HiWrenchScrewdriver,
  HiUsers,
  HiFaceSmile,
  HiShieldCheck,
} from "react-icons/hi2";
import { LuTrendingUp } from "react-icons/lu";

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      value: "1000+",
      label: "Devices Repaired",
      subtext: "Successfully fixed & handed over",
      icon: HiWrenchScrewdriver,
    },
    {
      id: 2,
      value: "99%",
      label: "Happy Clients",
      subtext: "Satisfaction rate in Bhaluka",
      icon: HiFaceSmile,
    },
    {
      id: 3,
      value: "100+",
      label: "Regular Customers",
      subtext: "Trust us for ongoing services",
      icon: HiUsers,
    },
    {
      id: 4,
      value: "100%",
      label: "Original Parts",
      subtext: "Certified repair & warranty",
      icon: HiShieldCheck,
    },
  ];

  return (
    <section className="py-12 lg:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Glass Card Container */}
        <div className="relative rounded-3xl bg-linear-to-b from-indigo-50/80 via-purple-50/50 to-white dark:from-slate-900/90 dark:via-indigo-950/40 dark:to-slate-900/90 backdrop-blur-xl border border-indigo-100 dark:border-slate-800 p-8 sm:p-12 shadow-2xl shadow-indigo-950/5 dark:shadow-slate-950/50 overflow-hidden">
          {/* Top Subtle Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-indigo-500/50 dark:via-indigo-400/50 to-transparent" />

          {/* Ambient Background Glows */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Content Header */}
          <div className="text-center max-w-xl mx-auto mb-10 relative z-10">
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase bg-indigo-100/70 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/80 px-3.5 py-1 rounded-full mb-3">
              <LuTrendingUp className="w-4 h-4" />
              Our Impact
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Trusted by Thousands in{" "}
              <span className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                Chamiyadi, Bhaluka
              </span>
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white/60 dark:bg-slate-950/60 backdrop-blur-md p-6 rounded-2xl border border-indigo-100/80 dark:border-slate-800 flex flex-col items-center text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 dark:hover:border-indigo-800"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/80 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 shrink-0 shadow-xs">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-1">
                    {item.value}
                  </h3>
                  <h4 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                    {item.label}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {item.subtext}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
