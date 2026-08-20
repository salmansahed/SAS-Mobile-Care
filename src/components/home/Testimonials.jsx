import {
  HiStar,
  HiChatBubbleBottomCenterText,
} from "react-icons/hi2";
import { MdOutlineFeedback } from "react-icons/md";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rakibul Hasan",
      role: "Local Resident, Bhaluka",
      comment:
        "আমার আইফোনের ডিসপ্লে চেঞ্জ করার দরকার ছিল। দারুণ সার্ভিস পেয়েছি, অরিজিনাল ডিসপ্লে একদম রিজনেবল প্রাইসে লাগিয়ে দিয়েছে!",
      rating: 5,
      date: "2 days ago",
    },
    {
      name: "Tanvir Ahmed",
      role: "College Student",
      comment:
        "ফোন সেল করার জন্য গিয়েছিলাম। সত্যি খুব ফেয়ার প্রাইস পেয়েছি এবং সাথে সাথেই ক্যাশ পেমেন্ট করে দিয়েছে। highly recommended!",
      rating: 5,
      date: "1 week ago",
    },
    {
      name: "Sabbir Hossain",
      role: "Business Owner",
      comment:
        "অনলাইন কাজের ফর্ম সাবমিট করার কাজে খুবই হেল্পফুল ছিল। সার্ভিস অনেক ফাস্ট এবং বিহেভিয়ার খুব সুন্দর।",
      rating: 5,
      date: "2 weeks ago",
    },
  ];

  return (
    <section className="py-12 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase bg-indigo-100/70 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/80 px-3.5 py-1 rounded-full mb-4">
            <MdOutlineFeedback className="w-4 h-4" />
            Customer Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Our Clients{" "}
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Real reviews from our valued customers in Bhaluka who trust SAS
            Mobile Care.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-indigo-100/80 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-xl shadow-indigo-950/5 dark:shadow-slate-950/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/15 dark:hover:shadow-indigo-500/10 hover:border-indigo-400/60 dark:hover:border-indigo-500/50 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle Ambient Hover Glow */}
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <HiStar key={i} className="w-5 h-5 fill-amber-400" />
                    ))}
                  </div>
                  <HiChatBubbleBottomCenterText className="w-6 h-6 text-indigo-400/50 group-hover:text-indigo-500 transition-colors duration-300" />
                </div>

                {/* Comment */}
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6 italic">
                  &quot;{item.comment}&quot;
                </p>
              </div>

              {/* User Info */}
              <div className="pt-4 border-t border-indigo-100/80 dark:border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {item.role}
                  </p>
                </div>
                <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
