"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import {
  HiPlus,
  HiMinus,
  HiChatBubbleLeftEllipsis,
  HiArrowRight,
} from "react-icons/hi2";
import { BsQuestionCircle } from "react-icons/bs";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "মোবাইল সার্ভিসিং করতে সাধারণত কত সময় লাগে?",
      answer:
        "ডিসপ্লে পরিবর্তন, ব্যাটারি রিপ্লেসমেন্ট বা চার্জিং পোর্ট মেরামতের মতো সাধারণ কাজগুলো আমরা ১ থেকে ৩ ঘণ্টার মধ্যেই সম্পন্ন করে দিই। মাদারবোর্ডের জটিল সমস্যার ক্ষেত্রে ১-২ দিন সময় লাগতে পারে।",
    },
    {
      question: "আপনারা কি অরিজিনাল পার্টস ব্যবহার করেন?",
      answer:
        "হ্যাঁ, আমরা ১০০% অরিজিনাল এবং সার্টিফাইড পার্টস ব্যবহারে প্রতিশ্রুতিবদ্ধ। প্রতিটি পার্টসের সাথে আমরা কাস্টমারকে প্রয়োজনীয় ওয়ারেন্টি সুবিধা দিয়ে থাকি।",
    },
    {
      question: "পুরোনো ফোন কেনা-বেচার প্রসেস কী?",
      answer:
        "আপনার ফোনটি নিয়ে সরাসরি আমাদের চামিয়াদী, ভালুকা শোরুমে চলে আসুন। আমাদের টেকনিশিয়ান ফোন চেক করে আপনাকে বেস্ট প্রাইস অফার করবে। ডিল ফাইনাল হলে সাথে সাথেই ক্যাশ পেমেন্ট পেয়ে যাবেন।",
    },
    {
      question: "অনলাইন সার্ভিস বা অ্যাপ্লিকেশনের কাজ কীভাবে নেওয়া হয়?",
      answer:
        "যেকোনো সরকারি বা প্রাতিষ্ঠানিক অনলাইন আবেদন, ডকুমেন্ট প্রসেসিং বা ডিজিটাল সার্ভিসের জন্য শোরুমে আসতে পারেন অথবা হোয়াটসঅ্যাপের মাধ্যমে প্রয়োজনীয় তথ্য পাঠিয়ে কাজ করিয়ে নিতে পারেন।",
    },
    {
      question: "সার্ভিসিং রিপেয়ার স্ট্যাটাস কীভাবে ট্র্যাক করব?",
      answer:
        "আমাদের ওয়েবসাইটের 'Track' পেজে গিয়ে আপনার দেওয়া সার্ভিস আইডি বা ফোন নম্বর প্রবেশ করালেই সাথে সাথে আপনার ফোনের বর্তমান মেরামত অবস্থা দেখতে পাবেন।",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Side: Section Intro & Support Box */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              {/* Badge */}
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase bg-indigo-100/70 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/80 px-3.5 py-1 rounded-full mb-4">
                <BsQuestionCircle className="w-4 h-4" />
                Frequently Asked
              </span>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                Any Questions?{" "}
                <span className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                  We’ve Got Answers.
                </span>
              </h2>

              <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                Explore our clear answers to common questions regarding mobile
                servicing, buy-sell policies, and digital services at SAS Mobile
                Care.
              </p>
            </div>

            {/* Left Bottom Mini Support Box */}
            <div className="mt-8 lg:mt-12 p-6 rounded-3xl bg-linear-to-br from-indigo-50/80 via-purple-50/40 to-white dark:from-slate-900/90 dark:via-indigo-950/40 dark:to-slate-900/90 border border-indigo-100 dark:border-slate-800 shadow-xl shadow-indigo-950/5 dark:shadow-slate-950/40">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-indigo-500/20">
                  <HiChatBubbleLeftEllipsis className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  Still need help?
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Feel free to contact our support team directly for custom repair
                inquiries.
              </p>
              <Link href="https://wa.me/8801614869602" target="_blank">
                <Button
                  variant="secondary"
                  className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-5 rounded-xl hover:opacity-95 transition-all text-xs sm:text-sm"
                >
                  <span>Chat on WhatsApp</span>
                  <HiArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side: Clean FAQ List */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? "bg-white dark:bg-slate-900 border-indigo-500/40 dark:border-indigo-500/40 shadow-xl shadow-indigo-950/5 dark:shadow-slate-950/40"
                      : "bg-white/60 dark:bg-slate-900/40 border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-200 dark:hover:border-slate-700"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-bold text-slate-900 dark:text-white text-base sm:text-lg leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                        isOpen
                          ? "bg-indigo-600 text-white"
                          : "bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400"
                      }`}
                    >
                      {isOpen ? (
                        <HiMinus className="w-4 h-4" />
                      ) : (
                        <HiPlus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
