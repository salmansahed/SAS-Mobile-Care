import Link from "next/link";
import Image from "next/image";
import {
  TbInfoCircle,
  TbTools,
  TbShieldCheck,
  TbClock,
  TbBuildingStore,
  TbPhoneCall,
  TbCheck,
} from "react-icons/tb";
import sasLogo from "../../assets/SASMobileCareLogo.png";

export const metadata = {
  title: "About Us | SAS Mobile Care",
  description:
    "Learn more about SAS Mobile Care - trusted mobile repair and servicing center in Chamiyadi Bazar, Bhaluka.",
};

export default function AboutPage() {
  const features = [
    {
      icon: TbTools,
      title: "Expert Technicians",
      description:
        "Specialized in motherboard IC-level repairs, display replacement, and advanced hardware troubleshooting.",
    },
    {
      icon: TbShieldCheck,
      title: "Original Parts & Warranty",
      description:
        "We source genuine display panels and spare parts with proper service warranty support.",
    },
    {
      icon: TbClock,
      title: "Fast Repair Turnaround",
      description:
        "Same-day quick repairs for common issues like battery replacement, charging port, and screen fixes.",
    },
  ];

  const highlights = [
    "Transparent pricing with free initial device diagnostics",
    "Real-time online service tracking with mobile number",
    "Trusted local repair shop with genuine customer support",
    "Careful handling of water damage and dead handset recovery",
  ];

  return (
    <div className="min-h-screen pt-15 pb-20 px-4 max-w-5xl mx-auto">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50 mb-3">
          <TbInfoCircle className="w-3.5 h-3.5" />
          <span>Who We Are</span>
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
          About SAS Mobile Care
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Your trusted technology partner for fast, reliable, and premium mobile
          repair services in Chamiyadi Bazar, Bhaluka.
        </p>
      </div>

      {/* Main Brand Section */}
      <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-950/5 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Logo Showcase */}
          <div className="md:col-span-4 flex justify-center">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-linear-to-tr from-indigo-600 to-purple-600 p-1 shadow-2xl shadow-indigo-500/20">
              <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[22px] flex items-center justify-center p-4">
                <Image
                  src={sasLogo}
                  alt="SAS Mobile Care Logo"
                  width={160}
                  height={160}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Story Details */}
          <div className="md:col-span-8 space-y-4 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Dedicated to Excellence in Mobile Repair
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              At <strong>SAS Mobile Care</strong>, we understand how vital your
              smartphone is to your daily life and work. Whether it is a cracked
              screen, battery drain, software issue, or complex motherboard
              diagnosis, we offer precision repair solutions using modern tools
              and techniques.
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Our goal is to build long-term trust with our customers through
              absolute transparency, quality original components, and instant
              repair tracking.
            </p>
          </div>
        </div>
      </div>

      {/* Core Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {features.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-md shadow-slate-950/5 hover:border-indigo-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                <IconComponent className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Highlights & Store Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Why Choose Us List */}
        <div className="md:col-span-7 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-md">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
            Why Choose Us?
          </h3>
          <ul className="space-y-3">
            {highlights.map((text, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                  <TbCheck className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm text-slate-700 dark:text-slate-300">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact CTA Card */}
        <div className="md:col-span-5 bg-linear-to-br from-indigo-600 to-purple-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-white">
              <TbBuildingStore className="w-3.5 h-3.5" />
              <span>Visit Shop</span>
            </span>
            <h3 className="text-2xl font-black leading-tight">
              Need Phone Repair or Service Quote?
            </h3>
            <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed">
              Visit our physical store at Chamiyadi Bazar or call us directly
              for an instant diagnostic estimate.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/20 flex flex-col gap-2.5">
            <Link
              href="tel:+8801614869602"
              className="w-full py-2.5 px-4 rounded-xl bg-white text-indigo-600 font-bold text-sm hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2"
            >
              <TbPhoneCall className="w-4 h-4" />
              <span>Call +880 1614-869602</span>
            </Link>
            <Link
              href="/track"
              className="w-full py-2.5 px-4 rounded-xl bg-indigo-900/40 hover:bg-indigo-900/60 border border-white/20 text-white font-semibold text-sm transition-colors text-center"
            >
              Track Existing Repair
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
