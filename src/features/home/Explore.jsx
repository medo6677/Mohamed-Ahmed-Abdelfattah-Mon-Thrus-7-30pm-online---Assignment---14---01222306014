import React from "react";
import { Link } from "react-router";
import { getCategoriesData } from "../../data/postsService";

export default function Explore() {
  const cat = getCategoriesData();

  return (
    <>
      <section className="py-24 bg-[#111111] relative border-y border-[#262626]">
        <div className=" max-w-7xl   mx-auto flex items-center justify-center flex-col px-4 sm:px-6 lg:px-8">
          <div className="py-2 px-4 text-orange-400 bg-[#f973161a] border-[0.5px] border-orange-700 rounded-full font-medium text-sm inline-flex items-center gap-2 mb-8 before:size-1.5 before:rounded-full before:bg-orange-500 before:animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-sm font-medium text-neutral-300">
              التصنيفات
            </span>
          </div>
          <div className="hero-text-header text-center">
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              استكشف حسب الموضوع
            </h1>
            <p className="text-lg text-neutral-400 mb-10 mx-auto leading-relaxed">
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>
          </div>
        </div>

        <div className=" max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {cat.map((item) => {
              return (
                <Link
                  key={item.name}
                  to="/blog"
                  onClick={() => scrollToTop()}
                  className="group relative p-4 rounded-2xl bg-[#161616] border border-[#262626] hover:border-transparent overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/20 flex flex-col justify-between"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

                  <div className="relative z-10 text-right mt-2">
                    <div className="relative z-10 flex justify-start mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#251812] border border-orange-500/20 text-orange-500 flex items-center justify-center text-xl group-hover:bg-white/20 group-hover:text-white group-hover:border-transparent backdrop-blur-sm transition-all duration-300">
                        <i className={item.icon}></i>
                      </div>
                    </div>
                    <h3 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                      {item.count} مقالة
                    </p>
                  </div>

                  <div className="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10">
                    <i className="fa-solid fa-chevron-left"></i>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
