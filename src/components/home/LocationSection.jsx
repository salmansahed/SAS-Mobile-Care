import { Button } from "@heroui/react";
import Link from "next/link";
import {
  HiMapPin,
  HiPhone,
  HiClock,
  HiEnvelope,
  HiArrowUpRight,
} from "react-icons/hi2";
import { LuStore } from "react-icons/lu";

export default function LocationSection() {
  return (
    <section className="py-12 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase bg-indigo-100/70 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/80 px-3.5 py-1 rounded-full mb-4">
            <LuStore className="w-4 h-4" />
            Visit Our Store
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Find Us at{" "}
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Chamiyadi Bazar, Bhaluka
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Drop by our shop for fast servicing, device buy/sell, or online
            solutions.
          </p>
        </div>

        {/* Two Column Grid: Info + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Details Card */}
          <div className="lg:col-span-5 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-indigo-100/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl shadow-indigo-950/5 dark:shadow-slate-950/40 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6">
                Shop Information
              </h3>

              <div className="flex flex-col gap-5 text-sm">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/80 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5">
                    <HiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      Store Address
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-0.5">
                      Chamiyadi Bazar, Bhaluka, Mymensingh, Bangladesh
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/80 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5">
                    <HiClock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      Working Hours
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-0.5">
                      Open Everyday: 9:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/80 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5">
                    <HiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      Phone / WhatsApp
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-0.5">
                      +880 1614-869602
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/80 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5">
                    <HiEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      Email Support
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-0.5">
                      contact.sasmobilecare@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Link */}
            <div className="mt-8 pt-6 border-t border-indigo-100/80 dark:border-slate-800">
              <Link
                href="https://maps.google.com/?q=Chamiyadi,Bhaluka,Mymensingh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  className="w-full bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-5 rounded-xl shadow-md transition-all duration-200 text-xs sm:text-sm"
                >
                  <span>Open in Google Maps</span>
                  <HiArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Embedded Map Card */}
          <div className="lg:col-span-7 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-indigo-100/80 dark:border-slate-800 rounded-3xl p-3 shadow-xl shadow-indigo-950/5 dark:shadow-slate-950/40 min-h-87.5 lg:min-h-full overflow-hidden">
            <iframe
              title="SAS Mobile Care Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14548.812328151323!2d90.3600!3d24.3700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375638c000000001%3A0x0!2zQ2hhbWl5YWRpLCBCaGFsdWth!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
              className="w-full h-full min-h-87.5 rounded-2xl border-0 grayscale dark:invert dark:hue-rotate-180"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
