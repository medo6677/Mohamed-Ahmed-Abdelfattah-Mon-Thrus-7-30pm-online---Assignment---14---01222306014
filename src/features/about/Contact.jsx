import React from "react";
import { Link } from "react-router";
import { scrollToTop } from "../../data/postsService";

export default function Contact() {
  return (
    <>
      <section className="py-20 bg-linear-to-br from-orange-600 via-orange-500 to-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/20 rounded-full blur-[80px]"></div>
        </div>
        <div className="relative  max-w-7xl  px-4 sm:px-6 lg:px-8 mx-auto text-center flex items-center justify-center flex-col">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            لديك أسئلة؟ دعنا نتحدث!
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-sm md:max-w-2xl mx-auto">
            نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
            أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="mailto:mohamadahmad3669@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white font-semibold rounded-xl hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-0.5"
            >
              <i className="w-5 h-5 fa-regular fa-envelope"></i>
              تواصل معنا
            </a>
            <Link
              to="/blog"
              onClick={() => scrollToTop()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white hover:text-[#0a0a0a] transition-all duration-300"
            >
              تصفح المقالات
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
