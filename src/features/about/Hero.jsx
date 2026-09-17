import React from "react";
import { Link } from "react-router";

export default function Hero() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl blob"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-125 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
          <div className="hero-text flex items-center justify-center flex-col">
            <div className="py-2 px-4 text-orange-400 bg-[#f973161a]  border-[0.5px] border-orange-700 rounded-full font-medium text-sm  inline-flex items-center gap-2 mb-8 before:size-1.5 before:rounded-full before:bg-orange-500 before:animate-pulse">
              <span className=" relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-sm font-medium text-neutral-300">
                من نحن
              </span>
            </div>
            <div className="hero-text-header flex items-center justify-center flex-col text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ">
                مهمتنا هي{" "}
                <span className="bg-linear-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  الإعلام والإلهام
                </span>
              </h1>
              <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
                مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة
                المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي
                الجودة.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto  w-full h-full">
              <div className="flex items-center justify-center flex-col  rounded-3xl   bg-[#161616cc] border border-[#262626]  hover:scale-105 transition-transform duration-300 p-6 ">
                <i className="fa-solid fa-users text-2xl text-orange-500 mb-1"></i>
                <h4 className="text-2xl md:text-3xl font-bold bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent ">
                  +2مليون
                </h4>
                <h5 className="text-neutral-500 text-sm">قارئ شهرياً</h5>
              </div>
              <div className="flex items-center justify-center flex-col  rounded-3xl   bg-[#161616cc] border border-[#262626]  hover:scale-105 transition-transform duration-300 p-6 ">
                <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-1"></i>
                <h4 className="text-2xl md:text-3xl font-bold bg-linear-to-br  from-orange-500 to-amber-400 bg-clip-text text-transparent ">
                  +500
                </h4>
                <h5 className="text-neutral-500 text-sm">مقالة منشورة</h5>
              </div>

              <div className="flex items-center justify-center flex-col  rounded-3xl   bg-[#161616cc] border border-[#262626]  hover:scale-105 transition-transform duration-300 p-6 ">
                <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-1"></i>
                <h4 className="text-2xl md:text-3xl font-bold bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent ">
                  +50
                </h4>
                <h5 className="text-neutral-500 text-sm">كاتب خبير</h5>
              </div>

              <div className="flex items-center justify-center flex-col  rounded-3xl   bg-[#161616cc] border border-[#262626]  hover:scale-105 transition-transform duration-300 p-6 ">
                <i className="fa-solid fa-book-open text-2xl text-orange-500 mb-2 block"></i>
                <h4 className="text-2xl md:text-3xl font-bold bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent ">
                  +15
                </h4>
                <h5 className="text-neutral-500 text-sm">تصنيف</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
