import React from "react";

export default function EmptyPosts({ onReset }) {
  return (
    <div className="py-20 flex flex-col items-center justify-center text-center">
      <div className="w-20 h-20 rounded-full bg-[#141414] border border-[#262626] flex items-center justify-center mb-6">
        <i className="fa-regular fa-face-frown text-3xl text-neutral-500"></i>
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">لا توجد مقالات</h3>
      <p className="text-neutral-400 text-sm mb-8 max-w-md">
        حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
      </p>
      <button
        onClick={onReset}
        className="px-8 py-3.5 bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-full flex items-center gap-2.5 transition-all duration-300 cursor-pointer shadow-lg shadow-orange-500/20 hover:scale-105"
      >
        <span>إعادة تعيين الفلاتر</span>
        <i className="fa-solid fa-arrows-rotate text-sm"></i>
      </button>
    </div>
  );
}
