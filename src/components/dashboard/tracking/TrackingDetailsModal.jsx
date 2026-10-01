"use client";

import { AlertDialog, Button } from "@heroui/react";
import { TbCheck } from "react-icons/tb";

// Sequential repair tracking steps
const repairSteps = [
  { step: 1, label: "Received", subtext: "Device received at shop" },
  { step: 2, label: "Diagnosed", subtext: "Inspection completed" },
  { step: 3, label: "Repairing", subtext: "Replacing parts & testing" },
  { step: 4, label: "Ready", subtext: "Ready for pickup/delivery" },
  { step: 5, label: "Delivered", subtext: "Handed over to customer" },
];

export default function TrackingDetailsModal({
  isOpen,
  setIsOpen,
  selectedItem,
}) {
  return (
    <AlertDialog isOpen={isOpen} onOpenChange={setIsOpen}>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 space-y-5 max-w-2xl w-full">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Heading className="text-xl font-extrabold text-slate-900 dark:text-white">
                Tracking Details
              </AlertDialog.Heading>
            </AlertDialog.Header>

            {selectedItem && (
              <AlertDialog.Body className="space-y-6 text-xs text-slate-700 dark:text-slate-300">
                {/* Highlight banner with order ID and cost */}
                <div className="p-3.5 bg-purple-50 dark:bg-purple-950/30 rounded-2xl flex items-center justify-between">
                  <div>
                    <p className="font-extrabold text-purple-700 dark:text-purple-300 text-sm">
                      {selectedItem.id} - {selectedItem.status}
                    </p>
                    <p className="text-slate-500 dark:text-slate-400">
                      {selectedItem.deviceModel}
                    </p>
                  </div>
                  <span className="font-extrabold text-emerald-600 text-base">
                    ৳{selectedItem.estimatedCost}
                  </span>
                </div>

                {/* Customer and schedule metadata */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-1">
                  <div>
                    <span className="font-bold block text-slate-400 uppercase text-[10px]">
                      Customer Name
                    </span>
                    <p className="font-semibold">{selectedItem.customerName}</p>
                  </div>
                  <div>
                    <span className="font-bold block text-slate-400 uppercase text-[10px]">
                      Mobile Number
                    </span>
                    <p className="font-semibold">{selectedItem.mobileNumber}</p>
                  </div>
                  <div>
                    <span className="font-bold block text-slate-400 uppercase text-[10px]">
                      Device Model
                    </span>
                    <p className="font-semibold">{selectedItem.deviceModel}</p>
                  </div>
                  <div>
                    <span className="font-bold block text-slate-400 uppercase text-[10px]">
                      Received Date
                    </span>
                    <p className="font-semibold">{selectedItem.receivedDate}</p>
                  </div>
                  <div>
                    <span className="font-bold block text-slate-400 uppercase text-[10px]">
                      Est. Delivery
                    </span>
                    <p className="font-semibold">
                      {selectedItem.estDeliveryDate}
                    </p>
                  </div>
                </div>

                {/* Detailed issue summary */}
                <div>
                  <span className="font-bold block text-slate-400 uppercase text-[10px]">
                    Issue Description
                  </span>
                  <p className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl mt-1 font-medium">
                    {selectedItem.issueDescription}
                  </p>
                </div>

                {/* Interactive repair step timeline */}
                <div className="p-4 sm:p-5 border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 rounded-2xl space-y-4">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Repair Progress Status
                  </h4>

                  <div className="grid grid-cols-5 gap-2 relative">
                    {repairSteps.map((s) => {
                      const isCompleted = s.step <= selectedItem.statusStep;
                      const isCurrent = s.step === selectedItem.statusStep;

                      return (
                        <div
                          key={s.step}
                          className="flex flex-col items-center text-center space-y-2 z-10"
                        >
                          <div
                            className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                              isCompleted
                                ? "bg-purple-600 text-white shadow-md shadow-purple-500/20"
                                : "bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400"
                            } ${
                              isCurrent
                                ? "ring-4 ring-purple-100 dark:ring-purple-900/50"
                                : ""
                            }`}
                          >
                            {isCompleted ? (
                              <TbCheck className="w-5 h-5 stroke-3" />
                            ) : (
                              s.step
                            )}
                          </div>

                          <div className="space-y-0.5">
                            <p
                              className={`text-[11px] font-bold leading-tight ${
                                isCompleted
                                  ? "text-slate-900 dark:text-white"
                                  : "text-slate-400 dark:text-slate-500"
                              }`}
                            >
                              {s.label}
                            </p>
                            <p className="text-[9px] text-slate-400 dark:text-slate-500 hidden sm:block leading-tight">
                              {s.subtext}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </AlertDialog.Body>
            )}

            <AlertDialog.Footer className="flex justify-end pt-2">
              <Button
                slot="close"
                variant="tertiary"
                onClick={() => setIsOpen(false)}
              >
                Close
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
