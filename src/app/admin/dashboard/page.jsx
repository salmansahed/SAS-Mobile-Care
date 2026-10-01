import DashboardClientWrapper from "@/components/dashboard/DashboardClientWrapper";

export const metadata = {
  title: "Dashboard - SAS Mobile Care",
  description: "Control panel and inventory management for SAS Mobile Care",
};

export default async function DashboardPage() {
  const brandName = "SAS Mobile Care";
  const brandInitial = "SAS";

  return (
    <DashboardClientWrapper brandName={brandName} brandInitial={brandInitial} />
  );
}
