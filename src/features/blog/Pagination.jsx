import React from "react";
import { scrollToTop } from "../../data/postsService";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <>
      <div className="flex justify-center flex-wrap  items-center gap-2 mt-12 ">
        {/* Previous page button */}
        <button
          onClick={() => {onPageChange(Math.max(currentPage - 1, 1)),scrollToTop()}}
          disabled={currentPage === 1}
          className="p-3 rounded-xl border transition-all duration-300 bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a] cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-[#262626] disabled:hover:bg-[#161616]"
          title="الصفحة السابقة"
        >
          <i className="fa-solid fa-chevron-right w-5 h-5"></i>
        </button>

        {/* Page numbers */}
        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => {onPageChange(page),scrollToTop()}}
              className={`min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white cursor-pointer [&.active]:bg-linear-to-r [&.active]:from-orange-500 [&.active]:to-orange-600 [&.active]:text-white ${
                currentPage === page ? "active" : ""
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Next page button */}
        <button
          onClick={() => {onPageChange(Math.min(currentPage + 1, totalPages)),scrollToTop()}}
          disabled={currentPage === totalPages}
          className="p-3 rounded-xl border transition-all duration-300 bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a] cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-[#262626] disabled:hover:bg-[#161616]"
          title="الصفحة التالية"
        >
          <i className="fa-solid fa-chevron-left w-5 h-5"></i>
        </button>
      </div>

      <p className="text-center text-neutral-500 mt-4 text-sm">
        صفحة {currentPage} من {totalPages}
      </p>
    </>
  );
}
