import React from "react";

export default function Subscipe() {
  return (
    <>
      <section className="py-24 relative overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className=" max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto bg-[#161616] border border-[#262626] rounded-3xl p-8 sm:p-12 md:p-16 text-center">
            <div className="w-16 h-16 rounded-2xl bg-linear-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white text-xl mx-auto mb-6 shadow-lg ">
              <i className="fa-regular fa-envelope"></i>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              اشترك في{" "}
              <span className="bg-linear-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                نشرتنا الإخبارية
              </span>
            </h2>

            <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
              الإلكتروني
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-3 mb-8"
            >
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full flex-1 bg-[#0d0d0d] border border-[#262626] rounded-2xl px-6 py-4 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-orange-500 transition-colors text-right"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-linear-to-r from-orange-600 to-amber-500 text-white font-bold px-8 py-4 rounded-xl cursor-pointer hover:from-orange-600 hover:to-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/25 whitespace-nowrap text-sm"
              >
                اشترك الآن
              </button>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2 ">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                    alt="متابع"
                    className="w-7 h-7 rounded-full border-2 border-[#161616] object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
                    alt="متابع"
                    className="w-7 h-7 rounded-full border-2 border-[#161616] object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                    alt="متابع"
                    className="w-7 h-7 rounded-full border-2 border-[#161616] object-cover"
                  />
                </div>
                <span>انضم لـ +10,000 مصور</span>
              </div>
              <span>•</span>
              <span>بدون إزعاج</span>
              <span>•</span>
              <span>إلغاء الاشتراك في أي وقت</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
