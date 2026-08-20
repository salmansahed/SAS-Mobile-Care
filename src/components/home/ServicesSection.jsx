import Link from "next/link";
import { Button } from "@heroui/react";
import {
  HiWrenchScrewdriver,
  HiDevicePhoneMobile,
  HiGlobeAlt,
  HiArrowRight,
} from "react-icons/hi2";

export default function ServicesSection() {
  const services = [
    {
      title: "Mobile Hardware Repair",
      description:
        "Display replacement, battery swap, motherboard repair, and charging port fixing.",
      icon: HiWrenchScrewdriver,
      badge: "Popular",
    },
    {
      title: "Buy & Sell Devices",
      description:
        "Get the best price for used smartphones or buy verified pre-owned devices safely.",
      icon: HiDevicePhoneMobile,
      badge: "Verified",
    },
    {
      title: "Online & Digital Work",
      description:
        "Official online application submissions, document processing, and digital services.",
      icon: HiGlobeAlt,
      badge: "Instant",
    },
  ];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Core{" "}
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Explore our range of professional mobile and digital solutions
            tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="group relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-indigo-100/80 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl shadow-indigo-950/5 dark:shadow-slate-950/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/15 dark:hover:shadow-indigo-500/10 hover:border-indigo-400/60 dark:hover:border-indigo-500/50 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Ambient Hover Glow */}
                <div className="absolute -right-12 -top-12 w-32 h-32 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Icon Box with Gradient Hover */}
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-slate-800 border border-indigo-100 dark:border-slate-700/80 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-linear-to-tr group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:text-white group-hover:border-transparent group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xs">
                      <IconComponent className="w-6 h-6 transition-transform duration-300" />
                    </div>

                    {/* Badge */}
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60 group-hover:border-indigo-400 dark:group-hover:border-indigo-600 transition-colors duration-300">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Button Action */}
                <Link href="/services">
                  <Button
                    variant="tertiary"
                    className="w-full text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 font-bold justify-between group/btn rounded-xl border border-transparent hover:border-indigo-100 dark:hover:border-indigo-900/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/30 transition-all duration-200"
                  >
                    <span>Learn More</span>
                    <HiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-200" />
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
