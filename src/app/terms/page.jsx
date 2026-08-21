import Link from "next/link";
import {
  TbFileText,
  TbTools,
  TbShieldCheck,
  TbAlertCircle,
  TbClockCancel,
  TbPhone,
  TbBuildingStore,
} from "react-icons/tb";

export const metadata = {
  title: "Terms of Service | SAS Mobile Care",
  description:
    "Read the terms and conditions for using SAS Mobile Care device repair and tracking services.",
};

export default function TermsPage() {
  const lastUpdated = "August 21, 2026";

  return (
    <div className="min-h-screen pt-10 pb-20 px-4 max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50 mb-3">
          <TbFileText className="w-3.5 h-3.5" />
          <span>Service Agreement</span>
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">
          Terms of Service
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Last Updated: {lastUpdated}
        </p>
      </div>

      {/* Content Container */}
      <div className="space-y-8 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-950/5">
        {/* Agreement to Terms */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <TbFileText className="text-indigo-600 dark:text-indigo-400 shrink-0" />
            1. Agreement to Terms
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            By handing over your device for repair or using our online service
            tracking platform at <strong>SAS Mobile Care</strong>, you agree to
            be bound by these Terms of Service. If you do not agree with any
            part of these terms, please consult our support team before
            submitting your device.
          </p>
        </section>

        <hr className="border-slate-200/60 dark:border-slate-800/60" />

        {/* Repair Services & Diagnostics */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <TbTools className="text-indigo-600 dark:text-indigo-400 shrink-0" />
            2. Repair Services & Estimates
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            We provide initial repair cost estimates based on the reported
            issues. However:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 pl-2">
            <li>
              <strong>Unforeseen Damage:</strong> Additional hardware issues
              discovered during diagnostic checks may alter the final repair
              cost. We will seek customer approval before proceeding with
              additional repairs.
            </li>
            <li>
              <strong>Data Safety:</strong> Customers are advised to back up
              their device data prior to service submission. SAS Mobile Care is
              not responsible for data loss during hardware or software repairs.
            </li>
          </ul>
        </section>

        <hr className="border-slate-200/60 dark:border-slate-800/60" />

        {/* Service Warranty & Claims */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <TbShieldCheck className="text-indigo-600 dark:text-indigo-400 shrink-0" />
            3. Service Warranty
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Repaired components come with a limited service warranty as
            specified on your physical or digital receipt.
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 pl-2">
            <li>
              The warranty covers manufacturing defects of replaced parts only.
            </li>
            <li>
              Physical damage, water exposure, unauthorized tampering, or broken
              seals after repair invalidates all warranty claims.
            </li>
          </ul>
        </section>

        <hr className="border-slate-200/60 dark:border-slate-800/60" />

        {/* Unclaimed Devices */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <TbClockCancel className="text-indigo-600 dark:text-indigo-400 shrink-0" />
            4. Unclaimed Devices Policy
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Once repair is completed or deemed non-repairable, customers will be
            notified via SMS or phone call. Devices left unclaimed for more than{" "}
            <strong>60 days</strong> after notification may be recycled or
            disposed of to recover service and storage charges.
          </p>
        </section>

        <hr className="border-slate-200/60 dark:border-slate-800/60" />

        {/* Modifications to Service */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <TbAlertCircle className="text-indigo-600 dark:text-indigo-400 shrink-0" />
            5. Modifications & Limitations
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            SAS Mobile Care reserves the right to modify service fees, terms,
            and store operating schedules at any time without prior notice.
          </p>
        </section>

        <hr className="border-slate-200/60 dark:border-slate-800/60" />

        {/* Contact Information */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <TbPhone className="text-indigo-600 dark:text-indigo-400 shrink-0" />
            6. Questions & Contact
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            If you have any questions regarding these Terms of Service, please
            visit our store or contact us directly:
          </p>
          <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 text-sm text-slate-700 dark:text-slate-300 space-y-1">
            <p className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <TbBuildingStore className="text-indigo-600 dark:text-indigo-400" />
              SAS Mobile Care Store
            </p>
            <p>Location: Chamiyadi Bazar, Bhaluka, Mymensingh, Bangladesh</p>
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
