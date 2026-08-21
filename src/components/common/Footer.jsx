"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  HiMapPin,
  HiPhone,
  HiEnvelope,
  HiClock,
  HiChevronRight,
} from "react-icons/hi2";
import { FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import sasLogo from "../../assets/SASMobileCareLogo.png";

export default function Footer() {
  const currentPath = usePathname();

  // Hide Footer on Dashboard Page
  if (currentPath.includes("/dashboard")) {
    return null;
  }

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Buy / Sell Phone", href: "/services" },
    { name: "Online Services", href: "/services" },
    { name: "Track Repair", href: "/track" },
  ];

  const services = [
    { name: "Hardware Repair", href: "/services" },
    { name: "Display Replacement", href: "/services" },
    { name: "Software & Unlocking", href: "/services" },
    { name: "Phone Exchange", href: "/services" },
    { name: "Online Application", href: "/services" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/sasmobilecare",
      icon: FaFacebookF,
      style:
        "text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/8801614869602",
      icon: FaWhatsapp,
      style:
        "text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@sasmobilecare",
      icon: FaYoutube,
      style:
        "text-rose-600 dark:text-rose-400 hover:bg-rose-600 hover:text-white dark:hover:bg-rose-600 dark:hover:text-white",
    },
  ];

  return (
    <footer className="relative mt-20 border-t border-indigo-100/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-200/80 dark:border-slate-800/80">
          {/* Column 1: Brand Info & Bio */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-tr from-indigo-600 to-purple-600 p-0.5 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-white dark:bg-slate-950 rounded-xl flex items-center justify-center overflow-hidden">
                  <Image
                    src={sasLogo}
                    alt="SAS Mobile Care Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
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

            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mt-2">
              Your trusted partner for professional mobile servicing, device
              buy/sell solutions, and essential online services.
            </p>

            {/* Social Icons with Next.js Link */}
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className={`w-9 h-9 rounded-xl bg-indigo-50 dark:bg-slate-800 border border-indigo-100 dark:border-slate-700/80 flex items-center justify-center transition-all duration-200 ${item.style}`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm flex items-center gap-1.5 transition-colors duration-200 group"
                  >
                    <HiChevronRight className="w-3.5 h-3.5 text-indigo-500 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-wider uppercase">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm flex items-center gap-1.5 transition-colors duration-200 group"
                  >
                    <HiChevronRight className="w-3.5 h-3.5 text-indigo-500 group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-wider uppercase">
              Get In Touch
            </h3>
            <div className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-3">
                <HiMapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <span>Chamiyadi Bazar , Bhaluka, Mymensingh, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3">
                <HiPhone className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span>+880 1614-869602</span>
              </div>
              <div className="flex items-center gap-3">
                <HiEnvelope className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span>contact.sasmobilecare@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <HiClock className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span>Everyday: 9:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-bold text-slate-700 dark:text-slate-300">
              SAS Mobile Care
            </span>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
