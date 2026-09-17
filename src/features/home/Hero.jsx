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
                مرحباً بك في عدسة
              </span>
            </div>
            <div className="hero-text-header text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                اكتشف{" "}
                <span className="bg-linear-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  فن
                </span>{" "}
                <br /> التصوير الفوتوغرافي
              </h1>
              <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
              </p>
            </div>
            <div className="hero-action items-center gap-5 grid md:grid-cols-2 w-full md:w-auto mb-16">
              <Link
                to="/blog"
                className="flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-linear-to-r from-orange-400 to-orange-600 text-white text-[16px] font-bold cursor-pointer group transition-all duration-300 hover:-translate-y-0.5"
              >
                استكشف مقالتنا
                <i className="fa-solid fa-arrow-left-long group-hover:-translate-x-1.5 transition-all duration-300 text-xs font-light"></i>
              </Link>
              <Link
                to="/about"
                className="flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-transparent font-semibold text-white transition-all duration-300 border border-[#333] hover:bg-[#f973161a] hover:border-orange-500 hover:text-orange-500"
              >
                <i className="fa-solid fa-circle-info"></i> اعرف المزيد
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto  w-full h-full">
              <div className="flex items-center justify-center flex-col  rounded-3xl   bg-[#161616cc] border border-[#262626]  hover:scale-105 transition-transform duration-300 p-4 ">
                <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-1"></i>
                <h4 className="text-2xl md:text-3xl font-bold bg-linear-to-br  from-orange-500 to-amber-400 bg-clip-text text-transparent ">
                  50+
                </h4>
                <h5 className="text-neutral-500 text-sm">مقاله</h5>
              </div>
              <div className="flex items-center justify-center flex-col  rounded-3xl   bg-[#161616cc] border border-[#262626]  hover:scale-105 transition-transform duration-300 p-4 ">
                <i className="fa-solid fa-users text-2xl text-orange-500 mb-1"></i>
                <h4 className="text-2xl md:text-3xl font-bold bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent ">
                  +10ألف
                </h4>
                <h5 className="text-neutral-500 text-sm">قارئ</h5>
              </div>
              <div className="flex items-center justify-center flex-col  rounded-3xl   bg-[#161616cc] border border-[#262626]  hover:scale-105 transition-transform duration-300 p-4 ">
                <i className="fa-solid fa-folder-open text-2xl text-orange-500 mb-1"></i>
                <h4 className="text-2xl md:text-3xl font-bold bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent ">
                  4
                </h4>
                <h5 className="text-neutral-500 text-sm">تصنيفات</h5>
              </div>
              <div className="flex items-center justify-center flex-col  rounded-3xl   bg-[#161616cc] border border-[#262626]  hover:scale-105 transition-transform duration-300 p-4 ">
                <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-1"></i>
                <h4 className="text-2xl md:text-3xl font-bold bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent ">
                  6
                </h4>
                <h5 className="text-neutral-500 text-sm">كاتب</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
