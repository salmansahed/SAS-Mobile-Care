import { TbDeviceMobile, TbShieldCheck, TbTools } from "react-icons/tb";

const STATS_DATA = [
  {
    id: "display",
    title: "Total Display",
    count: "__",
    badge: "In Stock",
    subtitle: "Stored in Database",
    icon: TbDeviceMobile,
    isHighlighted: false,
  },
  {
    id: "covers",
    title: "Total Phone Covers",
    count: "__",
    badge: "Available",
    subtitle: "Items saved by users",
    icon: TbShieldCheck,
    isHighlighted: false,
  },
  {
    id: "services",
    title: "Total Phone Services",
    count: "__",
    badge: "Services",
    subtitle: "Mobile Repair & Servicing",
    icon: TbTools,
    isHighlighted: true,
  },
];

export default function StatsOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {STATS_DATA.map(
        (
          { id, title, count, badge, subtitle, icon: Icon, isHighlighted },
          index,
        ) => (
          <div
            key={id}
            className={`group relative overflow-hidden p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xs flex flex-col justify-between h-44 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-300 dark:hover:border-purple-800/80 cursor-pointer ${
              index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            {/* Hover Background Glow Effect */}
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-linear-to-br from-purple-500/10 to-indigo-500/0 rounded-full blur-2xl group-hover:scale-150 group-hover:from-purple-500/20 transition-all duration-500 pointer-events-none" />

            {/* Top Row: Icon & Badge */}
            <div className="flex items-center justify-between z-10">
              <div
                className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                  isHighlighted
                    ? "bg-purple-600 text-white shadow-md shadow-purple-500/20 group-hover:bg-purple-700 group-hover:shadow-purple-500/40"
                    : "bg-purple-50 dark:bg-purple-950/50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5 transition-transform duration-300" />
              </div>

              <span className="text-[10px] font-bold text-purple-600 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 px-3 py-1 rounded-full border border-purple-100 dark:border-purple-900/40 transition-colors duration-300 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600">
                {badge}
              </span>
            </div>

            {/* Bottom Row: Text Details */}
            <div className="z-10">
              <p className="text-[10px] font-extrabold text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 uppercase tracking-widest transition-colors duration-300">
                {title}
              </p>

              <h3 className="text-3xl font-black text-slate-900 dark:text-white mt-0.5 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                {count}
              </h3>

              <p className="text-[10px] font-medium text-slate-400 dark:text-slate-500 mt-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:scale-150 transition-transform duration-300"></span>
                {subtitle}
              </p>
            </div>
          </div>
        ),
      )}
    </div>
  );
}
