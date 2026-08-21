import TrackForm from "@/components/track/TrackForm";

export const metadata = {
  title: "Track Repair Status | SAS Mobile Care",
  description:
    "Check real-time repair and service status using your registered mobile number.",
};

export default function TrackPage() {
  return (
    <div className="min-h-screen pt-10 pb-20 px-4 max-w-4xl mx-auto">
      {/* Hero Header Section */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="text-[11px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50 inline-block mb-3">
          Live Tracking
        </span>
        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white mb-3">
          Track Your Service Status
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Enter your registered 11-digit mobile number (e.g. 01700000000)
          without any country code (+88) or spaces.
        </p>
      </div>

      {/* Client Component Import */}
      <TrackForm />
    </div>
  );
}
