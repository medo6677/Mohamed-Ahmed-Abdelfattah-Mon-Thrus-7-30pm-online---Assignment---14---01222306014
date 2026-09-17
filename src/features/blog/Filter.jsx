import React, { useState } from "react";
import {
  getCategories,
  getFilteredPosts,
  paginate,
} from "../../data/postsService";
import FilterBar from "./FilterBar";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import EmptyPosts from "./EmptyPosts";

export default function Filter() {
  const categories = getCategories();
  const [selectedCategory, setSelectedCategory] = useState("جميع المقالات");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter and paginate
  const filteredPosts = getFilteredPosts(selectedCategory, searchQuery);
  const { data: paginatedPosts, totalPages } = paginate(
    filteredPosts,
    currentPage,
    6,
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSelectedCategory("جميع المقالات");
    setSearchQuery("");
    setCurrentPage(1);
  };

  const hasActiveFilters =
    selectedCategory !== "جميع المقالات" || searchQuery.trim() !== "";

  return (
    <section>
      {/* Search and categories */}
      <FilterBar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      <div className="posts py-9">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          {/* View toggle header */}
          <header className="mb-8 overflow-hidden">
            <div className="flex items-center flex-wrap justify-between">
              <p className="text-neutral-400 w-full sm:w-auto mb-2 sm:mb-0">
                عرض{" "}
                <span className="font-bold text-white">
                  {filteredPosts.length}
                </span>{" "}
                مقالات
                {selectedCategory !== "جميع المقالات" && (
                  <>
                    {" "}
                    في{" "}
                    <span className="text-orange-500 font-bold">
                      {selectedCategory}
                    </span>
                  </>
                )}
              </p>

              <div className="view flex items-center gap-3">
                <div>
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-all duration-300 text-neutral-400 hover:text-white cursor-pointer [&.active]:bg-orange-500 [&.active]:text-white ${
                      viewMode === "grid" ? "active" : ""
                    }`}
                    title="عرض شبكي"
                  >
                    <i className="fa-solid fa-border-all"></i>
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={` p-2 rounded-lg transition-all duration-300 text-neutral-400 hover:text-white cursor-pointer [&.active]:bg-orange-500 [&.active]:text-white ${
                      viewMode === "list" ? "active" : ""
                    }`}
                    title="عرض طولي"
                  >
                    <i className="fa-solid fa-bars-staggered"></i>
                  </button>
                </div>

                {hasActiveFilters && (
                  <button
                    onClick={handleResetFilters}
                    className="text-sm text-neutral-500 hover:text-orange-500 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <i className="fa-solid fa-times w-4 h-4"></i>
                    مسح الفلاتر
                  </button>
                )}
              </div>
            </div>
          </header>

          {/* Posts or empty state */}
          {paginatedPosts.length === 0 ? (
            <EmptyPosts onReset={handleResetFilters} />
          ) : (
            <div
              className={`grid gap-8 py-8 ${
                viewMode === "grid"
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
              }`}
            >
              {paginatedPosts.map((post) => (
                <BlogCard key={post.id} post={post} viewMode={viewMode} />
              ))}
            </div>
          )}

          {/* Pagination controls */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </section>
  );
}
