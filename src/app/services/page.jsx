import ServicesContainer from "@/components/services/ServicesContainer";
import { MdOutlineHandyman } from "react-icons/md";

export const metadata = {
  title: "All Services | SAS Mobile Care",
  description:
    "Explore our complete range of mobile repair, phone buy/sell, and online digital processing services in Chamiyadi, Bhaluka.",
};

export default function ServicesPage() {
 const servicesList = [
   {
     id: "display-replacement",
     category: "repair",
     categoryName: "Mobile Repair",
     title: "Display & Touch Replacement",
     description:
       "Original screen and touch panel replacement with guarantee for iPhone, Samsung, Xiaomi, Realme, Vivo, and all other major brands.",
     price: "800 - 50,000",
     duration: "1 - 2 Hours",
     features: [
       "Original OLED/LCD/AMOLED Panels",
       "Warranty Included",
       "Same Day Express Delivery",
     ],
   },
   {
     id: "battery-replacement",
     category: "repair",
     categoryName: "Mobile Repair",
     title: "Original Battery Replacement",
     description:
       "Fix fast draining, swelling, or sudden phone shutdown issues with high-capacity original battery replacements for any brand.",
     price: "400 - 20,000",
     duration: "10 - 45 Mins",
     features: [
       "High Capacity & Long Backup Cells",
       "Replacement Warranty Included",
       "Healthy Battery Health Diagnostic Test",
     ],
   },
   {
     id: "charging-port-repair",
     category: "repair",
     categoryName: "Mobile Repair",
     title: "Charging Port & Ribbon Repair",
     description:
       "Fix loose connections, slow charging, or unrecognised USB cable issues with original Type-C, Lightning, or Micro-USB ports.",
     price: "80 - 2000",
     duration: "10 - 60 Mins",
     features: [
       "Original Charging Board/Port Fix",
       "Fast Charging Support Verified",
       "Dust & Moisture Cleaning",
     ],
   },
   {
     id: "motherboard-repair",
     category: "repair",
     categoryName: "Mobile Repair",
     title: "Advanced Motherboard & IC Repair",
     description:
       "Micro-soldering, CPU reballing, short circuit repair, dead phone recovery, and IC replacement using precision laboratory tools.",
     price: "800 - 10,000",
     duration: "1 - 2 Days",
     features: [
       "Precision Micro-soldering Expert Work",
       "Water & Liquid Damage Recovery",
       "No Fix No Fee Policy",
     ],
   },
   {
     id: "software-unlock-repair",
     category: "repair",
     categoryName: "Mobile Repair",
     title: "Software, FRP & Network Unlocking",
     description:
       "Fix bootloop/logo stuck issues, OS flash/update, FRP lock removal, and country/network unlock for modern smartphones.",
     price: "300 - 40,000",
     duration: "10 Mins - 7 Days",
     features: [
       "Official Tool Flashing & Recovery",
       "FRP & Pattern/Password Unlock",
       "Data Loss Prevention Safety First",
     ],
   },
   {
     id: "camera-speaker-repair",
     category: "repair",
     categoryName: "Mobile Repair",
     title: "Camera, Speaker & Mic Fix",
     description:
       "Fix blurry/shaky camera lens, silent speaker/earpiece, or microphone sound issues for clear video calling and media.",
     price: "400 - 2,500",
     duration: "10 Mins - 1 Hour",
     features: [
       "Original Lens & Sensor Replacement",
       "Clear Loud Speaker Audio Test",
       "Noise Cancellation Mic Cleaning",
     ],
   },
   {
     id: "sell-used-phone",
     category: "buysell",
     categoryName: "Buy & Sell",
     title: "Sell Your Old Smartphone",
     description:
       "Get instant best cash value for your used or old smartphone of any brand after quick technical evaluation.",
     price: "Instant Evaluation",
     duration: "15 Mins",
     features: [
       "Best Competitive Market Rate",
       "Instant Cash or Digital Payment",
       "Secure Permanent Data Wipe",
     ],
   },
   {
     id: "buy-certified-phone",
     category: "buysell",
     categoryName: "Buy & Sell",
     title: "Buy Certified Pre-owned Phones",
     description:
       "Purchase tested, 100% functional pre-owned smartphones with official shop warranty across all budget categories.",
     price: "Varies by Model",
     duration: "Instant Pickup",
     features: [
       "30-Point Technical Quality Check",
       "Store Replacement Warranty Included",
       "Essential Accessories Provided",
     ],
   },
   {
     id: "online-application",
     category: "digital",
     categoryName: "Online Services",
     title: "Online Govt & Educational Services",
     description:
       "HSC/University admission, passport/NID corrections, birth certificate, and job recruitment application processing with high accuracy.",
     price: "100 - 10,000",
     duration: "10 Mins - 30 Days",
     features: [
       "Zero Error Professional Assurance",
       "Instant High-Quality Print Copy",
       "WhatsApp & Digital File Support",
     ],
   },
 ];

  return (
    <main className="min-h-screen py-16 lg:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase bg-indigo-100/70 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/80 px-3.5 py-1 rounded-full mb-4">
            <MdOutlineHandyman className="w-4 h-4" />
            Our Services
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Comprehensive Mobile &{" "}
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-4">
            Browse through our wide range of services in Chamiyadi, Bhaluka.
          </p>
        </div>

        {/* Dynamic Container */}
        <ServicesContainer initialServices={servicesList} />
      </div>
    </main>
  );
}
