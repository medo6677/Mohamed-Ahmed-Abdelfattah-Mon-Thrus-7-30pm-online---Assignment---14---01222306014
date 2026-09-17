import React from "react";

export default function Hero() {
  return (
    <>
      <section>
        <div className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0a]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
          </div>
          <div className="relative  max-w-7xl  px-4 sm:px-6 lg:px-8 mx-auto  text-center">
            <div className="py-2 px-4 text-orange-400 bg-[#f973161a]  border-[0.5px] border-orange-700 rounded-full font-medium text-sm  inline-flex items-center gap-2 mb-8 before:size-1.5 before:rounded-full before:bg-orange-500 before:animate-pulse">
              <i className="fa-regular fa-file-lines text-orange-500"></i>
              <span className="text-sm font-medium ">مدونتنا</span>
            </div>

            <div className="hero-text-header text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 flex items-center gap-2 justify-center">
                استكشف
                <span className=" bg-linear-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  مقالاتنا
                </span>
              </h1>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
