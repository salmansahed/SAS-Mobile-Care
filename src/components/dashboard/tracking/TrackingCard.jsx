"use client";

import { useState } from "react";
import { Card, Button } from "@heroui/react";
import {
  TbDeviceMobile,
  TbCalendar,
  TbUser,
  TbReceipt,
  TbEye,
  TbPencil,
  TbTrash,
} from "react-icons/tb";

import DeleteOrderModal from "./DeleteOrderModal";
import EditOrderModal from "./EditOrderModal";

export default function TrackingCard({
  item,
  onViewDetails,
  onDelete,
  onUpdateOrder,
}) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <>
      <Card className="p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xs rounded-2xl space-y-4 hover:border-purple-200 dark:hover:border-purple-900 transition-colors">
        {/* Card header: Tracking ID and status badge */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <span className="text-xs font-black uppercase tracking-wider text-purple-600 dark:text-purple-400">
            {item.id}
          </span>
          <span className="px-2.5 py-1 text-[10px] font-bold uppercase rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
            {item.status}
          </span>
        </div>

        {/* Device and customer details */}
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-bold text-sm">
            <TbDeviceMobile className="w-4 h-4 text-purple-500 shrink-0" />
            <span>{item.deviceModel}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <TbUser className="w-4 h-4 shrink-0" />
            <span>
              {item.customerName} ({item.mobileNumber})
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <TbReceipt className="w-4 h-4 shrink-0" />
            <span>Est. Cost: ৳{item.estimatedCost}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <TbCalendar className="w-4 h-4 shrink-0" />
            <span>Received: {item.receivedDate}</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100 dark:border-slate-800">
          <Button
            isIconOnly
            variant="ghost"
            onClick={() => onViewDetails(item)}
            className="w-9 h-9 rounded-full text-slate-600 hover:text-purple-600 dark:text-slate-400"
          >
            <TbEye className="w-4 h-4" />
          </Button>

          <Button
            isIconOnly
            variant="ghost"
            onClick={() => setIsEditOpen(true)}
            className="w-9 h-9 rounded-full text-slate-600 hover:text-blue-600 dark:text-slate-400"
          >
            <TbPencil className="w-4 h-4" />
          </Button>

          <Button
            isIconOnly
            variant="danger-soft"
            onClick={() => setIsDeleteOpen(true)}
            className="w-9 h-9 rounded-full"
          >
            <TbTrash className="w-4 h-4" />
          </Button>
        </div>
      </Card>

      {/* Edit modal */}
      <EditOrderModal
        isOpen={isEditOpen}
        setIsOpen={setIsEditOpen}
        item={item}
        onSave={onUpdateOrder}
      />

      {/* Delete confirmation modal */}
      <DeleteOrderModal
        isOpen={isDeleteOpen}
        setIsOpen={setIsDeleteOpen}
        item={item}
        onConfirmDelete={onDelete}
      />
    </>
  );
}
