import Link from "next/link";
import {
  TbShieldCheck,
  TbLock,
  TbPhone,
  TbUserCheck,
  TbDatabase,
  TbBuildingStore,
} from "react-icons/tb";

export const metadata = {
  title: "Privacy Policy | SAS Mobile Care",
  description:
    "Learn about how SAS Mobile Care handles and protects your service and contact information.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "August 21, 2026";

  return (
    <div className="min-h-screen pt-10 pb-20 px-4 max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50 mb-3">
          <TbShieldCheck className="w-3.5 h-3.5" />
          <span>Trust & Security</span>
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Last Updated: {lastUpdated}
        </p>
      </div>

      {/* Content Container */}
      <div className="space-y-8 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-950/5">
        {/* Intro */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <TbLock className="text-indigo-600 dark:text-indigo-400 shrink-0" />
            Introduction
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Welcome to <strong>SAS Mobile Care</strong>. We prioritize your
            privacy and are committed to protecting the personal information you
            share with us when using our website and device repair tracking
            services.
          </p>
        </section>

        <hr className="border-slate-200/60 dark:border-slate-800/60" />

        {/* Information We Collect */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <TbDatabase className="text-indigo-600 dark:text-indigo-400 shrink-0" />
            Information We Collect
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Since we do not require account creation or login on our platform,
            we only collect essential details necessary to process and track
            your device servicing:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 pl-2">
            <li>
              <strong>Mobile Phone Number:</strong> Used to search and display
              the real-time repair status of your device.
            </li>
            <li>
              <strong>Device Details:</strong> Brand, model, and reported issue
              descriptions submitted for repair service requests.
            </li>
            <li>
              <strong>Contact Details:</strong> Information provided voluntarily
              when submitting a repair booking or contacting support.
            </li>
          </ul>
        </section>

        <hr className="border-slate-200/60 dark:border-slate-800/60" />

        {/* How We Use Information */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <TbUserCheck className="text-indigo-600 dark:text-indigo-400 shrink-0" />
            How We Use Your Information
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            The data collected is used strictly for operational purposes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 pl-2">
            <li>
              To provide live repair updates based on your registered mobile
              number.
            </li>
            <li>
              To communicate regarding repair completion, pricing quotes, or
              device pickup availability.
            </li>
            <li>
              To improve our service efficiency and customer care response.
            </li>
          </ul>
        </section>

        <hr className="border-slate-200/60 dark:border-slate-800/60" />

        {/* Data Protection */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <TbShieldCheck className="text-indigo-600 dark:text-indigo-400 shrink-0" />
            Data Protection & Privacy
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            We value your trust. We do not sell, trade, or transfer your contact
            details or repair history to third parties. All stored service
            records are restricted exclusively to SAS Mobile Care service
            administrators.
          </p>
        </section>

        <hr className="border-slate-200/60 dark:border-slate-800/60" />

        {/* Contact Us */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <TbPhone className="text-indigo-600 dark:text-indigo-400 shrink-0" />
            Contact & Location Support
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            If you have any questions or concerns regarding your privacy or
            data, you can visit our store or reach out directly:
          </p>
          <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 text-sm text-slate-700 dark:text-slate-300 space-y-1">
            <p className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <TbBuildingStore className="text-indigo-600 dark:text-indigo-400" />
              SAS Mobile Care Store
            </p>
            <p>Location: Chamiyadi , Bhaluka, Mymensingh, Bangladesh</p>
            <p>
              Hotline:{" "}
              <Link
                href="tel:01614869602"
                className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1"
              >
                01614869602
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
