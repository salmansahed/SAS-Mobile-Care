"use client";

import Link from "next/link";
import { AlertDialog, Button } from "@heroui/react";
import { HiArrowRight } from "react-icons/hi2";

export default function ServiceModal({ service }) {
  if (!service) return null;

  return (
    <AlertDialog>
      <Button
        variant="secondary"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-xl text-xs transition-all cursor-pointer shadow-md shadow-indigo-600/20"
      >
        Request Service
      </Button>

      {/* 2. Modal Body */}
      <AlertDialog.Backdrop className="bg-slate-950/60 backdrop-blur-md animate-fade-in">
        <AlertDialog.Container>
          <AlertDialog.Dialog className="bg-white dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative outline-none">
            <AlertDialog.CloseTrigger className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer" />

            <AlertDialog.Header className="p-0 mb-1">
              <AlertDialog.Heading className="text-xl font-extrabold text-slate-900 dark:text-white">
                {service.title}
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body className="p-0">
              <p className="text-xs text-indigo-600 dark:text-indigo-400 font-bold mb-4">
                Estimated Price: ৳{service.price} • Time: {service.duration}
              </p>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                You can directly contact us on WhatsApp to book this service or
                ask any questions regarding your repair/inquiry.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer className="p-0 flex flex-col gap-3 border-none">
              <Link
                href={`https://wa.me/8801614869602?text=Hello%20SAS%20Mobile%20Care,%20I%20am%20interested%20in:%20${encodeURIComponent(
                  service.title,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  slot="close"
                  variant="secondary"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-lg shadow-emerald-600/20"
                >
                  <span>Request via WhatsApp</span>
                  <HiArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <Button
                slot="close"
                variant="tertiary"
                className="w-full text-center py-2.5 text-xs font-bold rounded-xl"
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
