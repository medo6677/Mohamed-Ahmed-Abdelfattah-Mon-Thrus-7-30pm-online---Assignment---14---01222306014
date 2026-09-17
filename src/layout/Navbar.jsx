import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import { scrollToTop } from "../data/postsService";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-transparent">
        <div className=" max-w-7xl  px-4 sm:px-6 lg:px-8 mx-auto">
          <nav className="flex flex-wrap items-center justify-between px-6 md:px-0">
            {/* Brand logo */}
            <Link
              to="/"
              onClick={() => {
                closeMenu();
                scrollToTop();
              }}
            >
              <div className="logo flex items-center gap-3 group">
                <div className="logo__img relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
                  <img
                    src={logo}
                    className="w-full h-full object-cover"
                    alt="عدسة"
                  />
                </div>
                <div className="logo__text">
                  <h2 className="text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                    عدسة
                  </h2>
                  <h3 className="text-xs text-orange-400/80 hidden sm:block tracking-wide">
                    عالم التصوير الفوتوغرافي
                  </h3>
                </div>
              </div>
            </Link>

            {/* Desktop navigation */}
            <div className="links items-center bg-[#161616] rounded-full p-1.5 border border-[#262626] hidden md:flex">
              <NavLink
                to="/"
                onClick={() => scrollToTop()}
                className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white [&.active]:bg-linear-to-r [&.active]:from-orange-500 [&.active]:to-orange-600 [&.active]:text-white"
              >
                الرئيسية
              </NavLink>
              <NavLink
                to="/blog"
                onClick={() => scrollToTop()}
                className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white [&.active]:bg-linear-to-r [&.active]:from-orange-500 [&.active]:to-orange-600 [&.active]:text-white"
              >
                المدونة
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => scrollToTop()}
                className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white [&.active]:bg-linear-to-r [&.active]:from-orange-500 [&.active]:to-orange-600 [&.active]:text-white"
              >
                من نحن
              </NavLink>
            </div>

            <div className="items-center gap-3 hidden md:flex">
              <button
                type="button"
                aria-label="بحث"
                className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626] cursor-pointer"
              >
                <i className="fa-solid fa-magnifying-glass size-5"></i>
              </button>
              <Link
                to="/blog"
                onClick={() => scrollToTop()}
                className="block py-4 px-8 rounded-full bg-linear-to-r from-orange-400 to-orange-600 text-white font-bold text-[14px] cursor-pointer hover:-translate-y-0.5 transition-all duration-300"
              >
                ابدأ القراءة
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label="القائمة"
              onClick={() => setIsOpen((prev) => !prev)}
              className="toggle-menu md:hidden p-3 text-neutral-400 hover:text-white hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626] cursor-pointer"
            >
              <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
            </button>

            {/* Mobile navigation  */}
            <div
              className={`mobile-menu md:hidden overflow-hidden transition-all duration-300 w-full ${
                isOpen ? "max-h-96 mt-4 pb-6" : "max-h-0"
              }`}
            >
              <div className="bg-[#161616] backdrop-blur-xl rounded-2xl p-4 border border-[#262626]">
                <div className="flex flex-col space-y-1">
                  <NavLink
                    to="/"
                    onClick={() => {
                      closeMenu();
                      scrollToTop();
                    }}
                    className="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-neutral-400 hover:bg-[#1a1a1a] hover:text-white [&.active]:bg-orange-500/10 [&.active]:text-orange-500 [&.active]:border [&.active]:border-orange-500/30"
                  >
                    الرئيسية
                  </NavLink>
                  <NavLink
                    to="/blog"
                    onClick={() => {
                      closeMenu();
                      scrollToTop();
                    }}
                    className="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-neutral-400 hover:bg-[#1a1a1a] hover:text-white [&.active]:bg-orange-500/10 [&.active]:text-orange-500 [&.active]:border [&.active]:border-orange-500/30"
                  >
                    المدونة
                  </NavLink>
                  <NavLink
                    to="/about"
                    onClick={() => {
                      closeMenu();
                      scrollToTop();
                    }}
                    className="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-neutral-400 hover:bg-[#1a1a1a] hover:text-white [&.active]:bg-orange-500/10 [&.active]:text-orange-500 [&.active]:border [&.active]:border-orange-500/30"
                  >
                    من نحن
                  </NavLink>
                  <NavLink
                    to="/blog"
                    onClick={() => {
                      closeMenu();
                      scrollToTop();
                    }}
                    className="block p-4 rounded-full bg-linear-to-r from-orange-500 to-orange-600 text-white font-bold text-[14px] cursor-pointer mt-2 text-center"
                  >
                    ابدأ القراءة
                  </NavLink>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
