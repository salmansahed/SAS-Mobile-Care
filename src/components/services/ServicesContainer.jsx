"use client";

import { useState, useMemo } from "react";
import {
  HiWrenchScrewdriver,
  HiDevicePhoneMobile,
  HiGlobeAlt,
  HiClock,
  HiCurrencyBangladeshi,
  HiCheckCircle,
} from "react-icons/hi2";
import { HiSearch } from "react-icons/hi";
import { MdOutlineHandyman } from "react-icons/md";
import ServiceModal from "./ServiceModal";
import { Button } from "@heroui/react";

export default function ServicesContainer({ initialServices = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Services", icon: MdOutlineHandyman },
    { id: "repair", label: "Mobile Repair", icon: HiWrenchScrewdriver },
    { id: "buysell", label: "Buy & Sell", icon: HiDevicePhoneMobile },
    { id: "digital", label: "Online & Digital", icon: HiGlobeAlt },
  ];

  const filteredServices = useMemo(() => {
    return initialServices.filter((service) => {
      const categoryMatch =
        selectedCategory === "all" ||
        service.category?.toLowerCase() === selectedCategory.toLowerCase();

      const searchMatch =
        service.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description?.toLowerCase().includes(searchQuery.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [initialServices, selectedCategory, searchQuery]);

  return (
    <div className="pt-6 sm:pt-10">
      {/* Search & Category Filter Section */}
      <div className="flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-4 mb-10">
        {/* Responsive Grid for Category Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 w-full xl:w-auto">
          {categories.map((cat) => {
            const IconComp = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                    : "bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-indigo-300 dark:hover:border-slate-700"
                }`}
              >
                <IconComp className="w-4 h-4 shrink-0" />
                <span className="truncate">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search Input Box */}
        <div className="relative w-full xl:w-72 shrink-0">
          <HiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 rounded-2xl text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:border-indigo-500 transition-all"
          />
        </div>
      </div>

      {/* Services Grid */}
      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-indigo-100/80 dark:border-slate-800 rounded-3xl p-6 shadow-xl shadow-indigo-950/5 dark:shadow-slate-950/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-300 dark:hover:border-slate-700 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50">
                    {service.categoryName || service.category}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-indigo-100 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/80 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                    {service.category?.toLowerCase() === "repair" && (
                      <HiWrenchScrewdriver className="w-5 h-5" />
                    )}
                    {service.category?.toLowerCase() === "buysell" && (
                      <HiDevicePhoneMobile className="w-5 h-5" />
                    )}
                    {service.category?.toLowerCase() === "digital" && (
                      <HiGlobeAlt className="w-5 h-5" />
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3">
                  {service.description}
                </p>

                {Array.isArray(service.features) &&
                  service.features.length > 0 && (
                    <ul className="space-y-2 mb-6 border-t border-slate-100 dark:border-slate-800/60 pt-4">
                      {service.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400"
                        >
                          <HiCheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800/60 pt-4 flex items-center justify-between mt-auto">
                <div>
                  <div className="flex items-center gap-1 text-slate-900 dark:text-white font-extrabold text-base">
                    <HiCurrencyBangladeshi className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span>{service.price}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    <HiClock className="w-3.5 h-3.5" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <ServiceModal service={service} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 px-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800 rounded-3xl text-center shadow-sm">
          {/* Modern Icon Box */}
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-center text-indigo-500 dark:text-indigo-400 mb-4 shadow-inner">
            <HiSearch className="w-8 h-8" />
          </div>

          {/* Main Heading */}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
            No Services Found
          </h3>

          {/* Subtitle Message */}
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed mb-6">
            We couldn&apos;t find any services matching &quot;
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
              {searchQuery}
            </span>
            &quot;. Try checking for spelling errors or search another keyword.
          </p>

          {/* Clear/Reset Action Button */}
          {(searchQuery || selectedCategory !== "all") && (
            <Button
              variant="secondary"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="bg-indigo-50 dark:bg-indigo-950/80 hover:bg-indigo-100 dark:hover:bg-indigo-900/80 text-indigo-600 dark:text-indigo-400 font-bold px-5 py-2 rounded-xl text-xs transition-all cursor-pointer border border-indigo-200/60 dark:border-indigo-800/60"
            >
              Clear Search & Filters
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
