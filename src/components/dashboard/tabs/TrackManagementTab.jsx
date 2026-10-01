"use client";

import { useState, useMemo } from "react";
import { Card } from "@heroui/react";
import { TbFilter } from "react-icons/tb";
import SearchAndFilters from "../tracking/SearchAndFilters";
import TrackingDetailsModal from "../tracking/TrackingDetailsModal";
import TrackingCard from "../tracking/TrackingCard";

const mockTrackingData = [
  {
    id: "TRK-1001",
    customerName: "Salman Sahed",
    mobileNumber: "01700000000",
    deviceModel: "iPhone 17 Pro",
    estimatedCost: 12500,
    issueDescription: "Display replacement & FaceID Diagnostics.",
    status: "Repairing",
    statusStep: 3,
    receivedDate: "2026-09-01",
    estDeliveryDate: "2026-09-10",
  },
  {
    id: "TRK-1002",
    customerName: "Tanvir Hasan",
    mobileNumber: "01811112222",
    deviceModel: "Samsung Galaxy S25 Ultra",
    estimatedCost: 18500,
    issueDescription: "Motherboard IC repair.",
    status: "Diagnosed",
    statusStep: 2,
    receivedDate: "2026-09-02",
    estDeliveryDate: "2026-09-12",
  },
  {
    id: "TRK-1003",
    customerName: "Abrar Fahim",
    mobileNumber: "01933334444",
    deviceModel: "Google Pixel 9 Pro",
    estimatedCost: 8500,
    issueDescription: "Charging port replacement.",
    status: "Received",
    statusStep: 1,
    receivedDate: "2026-09-04",
    estDeliveryDate: "2026-09-08",
  },
  {
    id: "TRK-1004",
    customerName: "Sabbir Hossain",
    mobileNumber: "01555556666",
    deviceModel: "Xiaomi 15 Ultra",
    estimatedCost: 5500,
    issueDescription: "Battery replacement.",
    status: "Ready",
    statusStep: 4,
    receivedDate: "2026-08-28",
    estDeliveryDate: "2026-09-05",
  },
];

export default function TrackingManagementTab() {
  const [trackingList, setTrackingList] = useState(mockTrackingData);

  // Filter state values
  const [searchQuery, setSearchQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  // Modal state values
  const [selectedItem, setSelectedItem] = useState(null);
  const [isViewOpen, setIsViewOpen] = useState(false);

  // Filter tracking records based on search query, price, and date
  const filteredData = useMemo(() => {
    return trackingList.filter((item) => {
      const cleanSearch = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !cleanSearch ||
        item.mobileNumber.toLowerCase().includes(cleanSearch) ||
        item.id.toLowerCase().includes(cleanSearch) ||
        item.customerName.toLowerCase().includes(cleanSearch) ||
        item.deviceModel.toLowerCase().includes(cleanSearch);

      const matchesPrice =
        !maxPrice || Number(item.estimatedCost) <= Number(maxPrice);

      const matchesDate = !selectedDate || item.receivedDate === selectedDate;

      return matchesSearch && matchesPrice && matchesDate;
    });
  }, [trackingList, searchQuery, maxPrice, selectedDate]);

  // Open view details modal
  const handleViewDetails = (item) => {
    setSelectedItem(item);
    setIsViewOpen(true);
  };

  // Remove tracking record
  const handleDeleteItem = (id) => {
    setTrackingList((prev) => prev.filter((item) => item.id !== id));
  };

  // Update tracking record
  const handleUpdateOrder = (updatedItem) => {
    setTrackingList((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item)),
    );
  };

  // Reset all active filters
  const handleResetFilters = () => {
    setSearchQuery("");
    setMaxPrice("");
    setSelectedDate("");
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Tracking Management
          </h1>
          <p className="text-xs text-slate-500 font-medium">
            Search, filter, and manage all active mobile repair status cards.
          </p>
        </div>
        <div className="text-xs font-semibold px-3 py-1.5 rounded-full bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-300 w-fit">
          Total Mobile Orders: {filteredData.length}
        </div>
      </div>

      {/* Filter bar */}
      <SearchAndFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        onReset={handleResetFilters}
      />

      {/* Tracking cards list */}
      {filteredData.length === 0 ? (
        <Card className="p-12 text-center bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl">
          <TbFilter className="w-10 h-10 mx-auto text-slate-300 dark:text-slate-600 mb-2" />
          <h3 className="text-base font-bold text-slate-700 dark:text-slate-300">
            No tracking records found
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Try resetting or adjusting your search filters.
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredData.map((item) => (
            <TrackingCard
              key={item.id}
              item={item}
              onViewDetails={handleViewDetails}
              onDelete={handleDeleteItem}
              onUpdateOrder={handleUpdateOrder}
            />
          ))}
        </div>
      )}

      {/* View details modal */}
      <TrackingDetailsModal
        isOpen={isViewOpen}
        setIsOpen={setIsViewOpen}
        selectedItem={selectedItem}
      />
    </div>
  );
}
