import React, { useState } from "react";
import { Link } from "react-router";
import {
  getAllLinks,
  scrollToTop,
  getCategoriesData,
} from "../data/postsService";

export default function Footer() {
  const siteInfos = getAllLinks();
  const allCategories = getCategoriesData();
  const handelIcon = (name) => {
    if (name === "twitter") {
      return "fa-brands fa-x-twitter";
    } else if (name === "github") {
      return "fa-brands fa-github";
    } else if (name === "linkedin") {
      return "fa-brands fa-linkedin";
    } else if (name === "youtube") {
      return "fa-brands fa-youtube";
    }
  };


  return (
    <>
      <footer className="relative bg-[#0a0a0a] text-neutral-300 overflow-hidden border-t border-[#262626]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="relative  max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <Link to="/">
                <div className="logo flex items-center gap-3 group">
                  <span className="w-11 h-11 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                    <span className="text-white font-bold text-xl ">ع</span>
                  </span>
                  <span className="text-xl font-bold text-white ">عدسه</span>
                </div>
              </Link>
              <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                المحترفين ونصائح عملية لتطوير مهاراتكم.
              </p>
              <ul className="flex items-center gap-4">
                {Object.entries(siteInfos).map(([name, url]) => (
                  <li key={name}>
                    <a
                      href={url}
                      aria-label={name}
                      className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <i className={`${handelIcon(name)}`}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                استكشف
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    to="/"
                    onClick={() => scrollToTop()}
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <i className="fa-solid fa-chevron-right w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"></i>
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    onClick={() => scrollToTop()}
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <i className="fa-solid fa-chevron-right w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"></i>
                    المدونة
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={() => scrollToTop()}
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <i className="fa-solid fa-chevron-right w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"></i>
                    من نحن
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                التصنيفات
              </h3>
              <ul className="flex flex-col gap-3">
                {allCategories.map((category) => {
                  return (
                    <li key={category.name}>
                      <Link
                        to="/blog"
                        className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <i className="fa-solid fa-chevron-right w-4 h-4 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 text-orange-500 rotate-180"></i>
                        {category.name}
                      </Link>
                    </li>
                  );
                })}
               
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full"></span>
                ابقى على اطلاع
              </h3>
              <p className="text-sm text-neutral-500 mb-4">
                اشترك للحصول على أحدث المقالات والتحديثات.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col items-center gap-5"
              >
                <input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="w-full  bg-[#0d0d0d] border border-[#262626] rounded-2xl px-6 py-4 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-orange-500 transition-colors text-right"
                />
                <button
                  type="submit"
                  className="w-full  bg-linear-to-r from-orange-600 to-amber-500 text-white font-bold px-8 py-4 rounded-full cursor-pointer hover:from-orange-600 hover:to-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/25 whitespace-nowrap text-sm"
                >
                  اشتراك
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="relative border-t border-[#262626]">
          <div className=" max-w-7xl  sm:px-6 lg:px-8  mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-neutral-600">
                © 2026 عدسة. صنع بكل{" "}
                <i className="fa-solid fa-heart text-orange-500"></i> جميع
                الحقوق محفوظة.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  to="#"
                  className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300"
                >
                  سياسة الخصوصية
                </Link>
                <Link
                  to="#"
                  className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300"
                >
                  شروط الخدمة
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative border-t border-[#262626]"></div>
      </footer>
    </>
  );
}
