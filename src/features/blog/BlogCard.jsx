import React from "react";
import { Link } from "react-router";
import { formatArabicDate, scrollToTop } from "../../data/postsService";

export default function BlogCard({ post, viewMode }) {
  const isGrid = viewMode === "grid";

  return (
    <article className="group bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-[#333] transition-all duration-500 flex flex-col justify-between">
      <Link
        to={`/blog/${post.slug}`}
        onClick={() => scrollToTop()}
        className={
          isGrid
            ? "flex flex-col h-full"
            : "flex flex-col md:flex-row h-full"
        }
      >
        <div
          className={`relative overflow-hidden ${
            isGrid ? "h-64" : "md:w-2/5 shrink-0 min-h-60"
          }`}
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute top-4 right-4">
            <span className="px-3.5 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/10">
              {post.category}
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1 justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3 font-medium">
              <span className="flex items-center gap-1.5">
                <i className="fa-regular fa-clock"></i>
                {post.readTime}
              </span>
              <span>•</span>
              <span>{formatArabicDate(post.date)}</span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300 leading-snug mb-3 line-clamp-2">
              {post.title}
            </h3>

            <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-2">
              {post.excerpt}
            </p>
          </div>

          <div className="border-t border-[#262626] pt-5 mt-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-[#262626]"
              />
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">
                  {post.author.name}
                </h4>
                <p className="text-xs text-neutral-500 font-medium mt-0.5">
                  {post.author.role}
                </p>
              </div>
            </div>
            <div className="rounded-xl text-orange-500 flex items-center justify-center text-xs group-hover:text-white group-hover:border-transparent transition-all duration-300">
              <span className="flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                اقرأ المقال
                <i className="fa-solid fa-arrow-left-long transition-all duration-300 text-xs font-light"></i>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
