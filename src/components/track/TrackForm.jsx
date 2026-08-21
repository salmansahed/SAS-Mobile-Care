"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import {
  HiMagnifyingGlass,
  HiCheckCircle,
  HiClock,
  HiWrenchScrewdriver,
  HiDevicePhoneMobile,
  HiPhone,
  HiCalendarDays,
  HiArrowPath,
  HiMagnifyingGlassMinus,
} from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";

// 💡 Hardcoded tracking steps shared across all customer repair timelines
const REPAIR_STEPS = [
  { id: 1, title: "Received", desc: "Device received at shop" },
  { id: 2, title: "Diagnosed", desc: "Inspection completed" },
  { id: 3, title: "Repairing", desc: "Replacing parts & testing" },
  { id: 4, title: "Ready", desc: "Ready for pickup/delivery" },
  { id: 5, title: "Delivered", desc: "Handed over to customer" },
];

export default function TrackForm() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const [error, setError] = useState("");

  const handleTrack = async (e) => {
    e.preventDefault();
    const cleanPhone = phone.trim();
    if (!cleanPhone) return;

    setLoading(true);
    setError("");

    try {
      /* 
        💡 Production Backend Integration:
        const res = await fetch(`/api/track?phone=${encodeURIComponent(cleanPhone)}`);
        const data = await res.json();
      */

      // 🧪 Mock API delay simulation
      await new Promise((resolve) => setTimeout(resolve, 800));

      if (cleanPhone === "01614869602" || cleanPhone === "01700000000") {
        const mockApiResponse = {
          _id: "66b1a23c8f9d001122334455",
          customerName: "Salman Sahed",
          phone: cleanPhone,
          device: "iPhone 13 Pro",
          issue: "Display Replacement & Battery Diagnostic",
          estimatedCost: "12,500",
          currentStep: 1,
          receivedDate: "18 Aug, 2026",
          estimatedDelivery: "22 Aug, 2026",
          lastUpdated: "19 Aug, 2026",
        };
        setOrderData(mockApiResponse);
      } else {
        setError("No service record found for this mobile number.");
        setOrderData(null);
      }
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      setOrderData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Search Input Card */}
      <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-indigo-100/80 dark:border-slate-800 rounded-3xl p-4 sm:p-6 shadow-xl shadow-indigo-950/5">
        <form
          onSubmit={handleTrack}
          className="flex flex-col sm:flex-row items-stretch gap-3"
        >
          <div className="relative flex-1">
            <HiMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="tel"
              placeholder="Enter your Mobile Number (e.g. 01614869602)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full h-full pl-11 pr-4 py-3.5 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:border-indigo-500 transition-all font-medium"
            />
          </div>
          <Button
            type="submit"
            variant="secondary"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-12 sm:h-auto px-8 rounded-2xl text-xs sm:text-sm cursor-pointer shadow-lg shadow-indigo-600/25 transition-all shrink-0"
          >
            {loading ? "Searching..." : "Track Status"}
          </Button>
        </form>
      </div>

      {/* Error / Not Found UI State */}
      {error && (
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-indigo-100/80 dark:border-slate-800 rounded-3xl p-8 text-center shadow-xl shadow-indigo-950/5 animate-fade-in">
          {/* Soft Red Icon Badge */}
          <div className="w-16 h-16 mx-auto mb-4 rounded-3xl bg-rose-50 dark:bg-rose-950/50 border border-rose-100 dark:border-rose-900/50 flex items-center justify-center text-rose-500 shadow-inner">
            <HiMagnifyingGlassMinus className="w-8 h-8" />
          </div>

          {/* Title & Description */}
          <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
            No Service Record Found
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto mt-1.5 leading-relaxed">
            We couldn&apos;t find any repair order associated with{" "}
            <span className="font-bold text-slate-800 dark:text-slate-200">
              {phone}
            </span>
            .
          </p>

          {/* Helpful Tip */}
          <div className="mt-5 inline-flex flex-col sm:flex-row items-center justify-center gap-2 text-[11px] font-medium text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-950/50 px-4 py-2.5 rounded-2xl border border-slate-100 dark:border-slate-800">
            <span>
              💡 Please check for typos or try using the alternate number given
              during submission.
            </span>
          </div>

          {/* Direct Support Button */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link href="tel:01614869602">
              <Button
                variant="tertiary"
                className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold h-9 px-4 rounded-xl transition-all"
              >
                <HiPhone className="w-3.5 h-3.5 text-indigo-500" />
                <span>Contact Shop</span>
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Tracking Details & Timeline View */}
      {orderData && (
        <div className="space-y-8 animate-fade-in">
          {/* Order Summary Card */}
          <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-indigo-100/80 dark:border-slate-800 rounded-3xl p-6 shadow-xl shadow-indigo-950/5">
            {/* Header: Customer Info & Cost */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-5 gap-4">
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-bold">
                  Customer:{" "}
                  <span className="text-slate-900 dark:text-white">
                    {orderData.customerName}
                  </span>
                </span>
                <h2 className="text-lg font-black text-indigo-600 dark:text-indigo-400 mt-0.5">
                  Mobile: {orderData.phone}
                </h2>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-100 dark:border-indigo-900/50 px-4 py-2 rounded-2xl">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">
                  Estimated Cost
                </span>
                <span className="text-sm font-extrabold text-indigo-600 dark:text-indigo-400">
                  ৳{orderData.estimatedCost}
                </span>
              </div>
            </div>

            {/* Grid 1: Device Specs, Issue Description & Delivery Estimate */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-5 pb-5 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <HiDevicePhoneMobile className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Device
                  </p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white truncate">
                    {orderData.device}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <HiWrenchScrewdriver className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Issue
                  </p>
                  <p
                    className="text-xs font-bold text-slate-900 dark:text-white truncate"
                    title={orderData.issue}
                  >
                    {orderData.issue}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <HiClock className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Est. Delivery
                  </p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white truncate">
                    {orderData.estimatedDelivery}
                  </p>
                </div>
              </div>
            </div>

            {/* Grid 2: Service Metadata (Received Date & Last Status Update) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-950/50 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                <HiCalendarDays className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>
                  <strong>Received On:</strong> {orderData.receivedDate}
                </span>
              </div>

              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-950/50 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                <HiArrowPath className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>
                  <strong>Last Status Update:</strong> {orderData.lastUpdated}
                </span>
              </div>
            </div>
          </div>

          {/* Progress Timeline Section */}
          <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-indigo-100/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl shadow-indigo-950/5">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-6">
              Repair Progress Status
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
              {REPAIR_STEPS.map((step) => {
                const isDone = step.id <= orderData.currentStep;
                const isCurrent = step.id === orderData.currentStep;

                return (
                  <div
                    key={step.id}
                    className="flex md:flex-col items-center gap-4 md:gap-3 text-left md:text-center"
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-all ${
                        isDone
                          ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600"
                      } ${
                        isCurrent
                          ? "ring-4 ring-indigo-100 dark:ring-indigo-950/80 scale-110"
                          : ""
                      }`}
                    >
                      {isDone ? <HiCheckCircle className="w-5 h-5" /> : step.id}
                    </div>

                    <div>
                      <p
                        className={`text-xs font-bold ${
                          isDone
                            ? "text-slate-900 dark:text-white"
                            : "text-slate-400 dark:text-slate-600"
                        }`}
                      >
                        {step.title}
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Customer Support Contact Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between p-5 bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 rounded-3xl gap-4">
            <p className="text-xs text-slate-700 dark:text-slate-300 font-medium text-center sm:text-left">
              Have questions about your repair status? Connect directly with our
              shop technicians.
            </p>
            <div className="flex items-center gap-2 shrink-0">
              <Link
                href={`https://wa.me/8801614869602?text=Hi,%20I%20want%20to%20check%20my%20repair%20status%20for%20mobile%20number:%20${orderData.phone}`}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="secondary"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2 px-4 rounded-xl"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>WhatsApp</span>
                </Button>
              </Link>

              <Link href="tel:01614869602">
                <Button
                  variant="tertiary"
                  className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold py-2 px-4 rounded-xl"
                >
                  <HiPhone className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>Call</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
