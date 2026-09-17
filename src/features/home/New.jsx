import React from "react";
import { Link } from "react-router";
import {
  getLatestPosts,
  scrollToTop,
  formatArabicDate,
} from "../../data/postsService";

export default function New() {
  const posts = getLatestPosts();

  return (
    <>
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-orange-500/5 to-transparent"></div>
        <div className="relative  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div className="flex justify-center flex-col">
              <div className="py-2 px-4 text-orange-400 bg-[#f973161a] border-[0.5px] border-orange-700 rounded-full font-medium text-sm inline-flex items-center gap-2 before:size-1.5 before:rounded-full before:bg-orange-500 before:animate-pulse w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span className="text-sm font-medium text-orange-500">
                  الأحدث
                </span>
              </div>
              <h2 className="text-white text-6xl font-extrabold my-7">
                أحدث المقالات
              </h2>
              <p className="text-neutral-400 max-w-lg text-lg leading-relaxed">
                محتوى جديد طازج من المطبعة
              </p>
            </div>
            <div className="view-all">
              <Link
                to="/blog"
                onClick={() => scrollToTop()}
                className="flex items-center gap-3 py-3 px-6 rounded-xl text-orange-500 hover:text-orange-400 text-[16px] font-bold cursor-pointer group transition-all duration-300 hover:-translate-y-0.5"
              >
                عرض جميع المقالات
                <i className="fa-solid fa-arrow-right-long fa-rotate-180 group-hover:-translate-x-1.5 transition-all duration-300 text-xs font-light"></i>
              </Link>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-[#333] transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="flex flex-col h-full"
                  onClick={() => scrollToTop()}
                >
                  <div className="relative h-64 overflow-hidden">
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

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3 font-medium">
                      <span className="flex items-center gap-1.5">
                        <i className="fa-regular fa-clock"></i>
                        {post.readTime}
                      </span>
                      <span>•</span>
                      <span>{formatArabicDate(post.date)}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300 leading-snug mb-3">
                      {post.title}
                    </h3>

                    <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-2">
                      {post.excerpt}
                    </p>

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

                      <div className="w-10 h-10 rounded-full bg-[#241711] border border-orange-500/30 text-orange-500 flex items-center justify-center text-xs group-hover:bg-orange-500 group-hover:text-white group-hover:border-transparent group-hover:scale-105 transition-all duration-300">
                        <i className="fa-solid fa-chevron-left"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
