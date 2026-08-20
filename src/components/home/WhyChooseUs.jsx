import {
  HiShieldCheck,
  HiClock,
  HiCurrencyBangladeshi,
  HiUserGroup,
} from "react-icons/hi2";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Genuine Parts",
      description:
        "We strictly use 100% original and certified replacement components for long-lasting reliability.",
      icon: HiShieldCheck,
    },
    {
      title: "Express Servicing",
      description:
        "Get your phone repaired on the same day with our quick turnaround workflow.",
      icon: HiClock,
    },
    {
      title: "Fair Pricing",
      description:
        "Transparent cost estimates with zero hidden fees for all repairs and pre-owned deals.",
      icon: HiCurrencyBangladeshi,
    },
    {
      title: "Expert Technicians",
      description:
        "Skilled professionals handling complex hardware and software solutions with utmost precision.",
      icon: HiUserGroup,
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Choose{" "}
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              SAS Mobile Care
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            We are committed to delivering top-tier smartphone solutions with
            complete transparency and expertise.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="group relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-indigo-100/80 dark:border-slate-800/80 rounded-3xl p-6 shadow-lg shadow-indigo-950/5 dark:shadow-slate-950/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-300 dark:hover:border-indigo-700/80 flex flex-col items-start"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-5 group-hover:bg-linear-to-tr group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:text-white group-hover:border-transparent group-hover:scale-110 transition-all duration-300 shadow-xs">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
