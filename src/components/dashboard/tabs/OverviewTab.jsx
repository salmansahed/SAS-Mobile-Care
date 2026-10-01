"use client";

import WelcomeBanner from "../WelcomeBanner";
import StatsOverview from "../StatsOverview";

export default function OverviewTab({ setActiveTab }) {
  return (
    <div className="space-y-6 sm:space-y-8">
      <WelcomeBanner setActiveTab={setActiveTab} />
      <StatsOverview />
    </div>
  );
}
