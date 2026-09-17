import React from "react";
import { Link } from "react-router";
import {
  getFeaturedPosts,
  scrollToTop,
  formatArabicDate,
} from "../../data/postsService";

export default function Articles() {
  const posts = getFeaturedPosts();

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-orange-500/5 to-transparent"></div>
      <div className="relative  max-w-7xl   mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div className="flex justify-center flex-col">
            <div className="py-2 px-4 text-orange-400 bg-[#f973161a]  border-[0.5px] border-orange-700 rounded-full font-medium text-sm  inline-flex items-center gap-2  before:size-1.5 before:rounded-full before:bg-orange-500 before:animate-pulse w-fit">
              <span className=" relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-sm font-medium text-orange-500">مميز</span>
            </div>
            <h2 className="text-white  text-6xl font-extrabold my-4">
              مقالات مختارة
            </h2>
            <p className="text-neutral-400 max-w-lg text-lg leading-relaxed">
              محتوى منتقى لبدء رحلة تعلمك
            </p>
          </div>

          <div className="view-all">
            <Link
              to="/blog"
              onClick={() => scrollToTop()}
              className="flex items-center gap-3 py-3 px-6 rounded-xl bg-linear-to-r from-orange-400 to-orange-600 text-white text-[16px] font-bold cursor-pointer group transition-all duration-300 hover:-translate-y-0.5"
            >
              عرض الكل
              <i className="fa-solid fa-chevron-right fa-rotate-180 group-hover:-translate-x-1.5 transition-all duration-300 text-xs font-light"></i>
            </Link>
          </div>
        </header>
        {posts.map((item) => {
          return (
            <article
              key={item.id}
              className="group mb-6 relative bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
            >
              <Link to={`/blog/${item.slug}`} onClick={() => scrollToTop()}>
                <div className="grid md:grid-cols-2">
                  <div className="relative h-72 md:h-100 overflow-hidden">
                    <img
                      src={item.image}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      alt={item.title}
                    />
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-linear-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full">
                        <i className="fa-solid fa-star"></i>
                        مميز
                      </span>
                    </div>
                  </div>

                  <div className="p-8 md:p-10 flex flex-col justify-center bg-[#161616]">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                        {item.category}
                      </span>

                      <span className="flex items-center gap-1 text-sm text-neutral-500">
                        <i className="fa-solid fa-clock"></i>
                        {item.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500  duration-300 leading-tight">
                      {item.title}
                    </h2>

                    <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">
                      {item.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img
                            alt={item.author.name}
                            className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626] shadow-md"
                            src={item.author.avatar}
                          />
                          <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#161616]"></div>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {item.author.name}
                          </p>

                          <p className="text-xs text-neutral-500">
                            {formatArabicDate(item.date)}
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                        اقرأ المقال
                        <i className="fa-solid fa-arrow-left-long group-hover:translate-x-1.5 transition-all duration-300   text-xs font-light "></i>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
