import React from "react";

export default function FilterBar({
  searchQuery,
  onSearchChange,
  categories,
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <div
      id="filters"
      className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626] py-4"
    >
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Search input */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="ابحث في المقالات..."
              className="w-full flex-1 bg-[#0d0d0d] border border-[#262626] rounded-2xl pr-6 pl-12 py-4 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-orange-500 transition-colors text-right"
            />
            <i className="fa-solid fa-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-neutral-500 text-sm pointer-events-none"></i>
          </div>

          {/* Category buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30 cursor-pointer [&.active]:bg-linear-to-r [&.active]:from-orange-500 [&.active]:to-orange-600 [&.active]:text-white ${
                    isActive ? "active" : ""
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
