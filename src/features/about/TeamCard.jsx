import React from "react";
import { Link } from "react-router";

export default function TeamCard({ author }) {
  if (!author) return null;

  return (
    <div className="group relative bg-[#141414] border border-[#262626] hover:border-orange-500/60 rounded-3xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative mb-5">
        <div className="size-20 rounded-full ring-4 ring-[#262626] group-hover:ring-orange-500/30 duration-300 overflow-hidden">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        {/* Verified Badge */}
        <div className="absolute bottom-1 inset-e-1 bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center border-2 border-[#141414] shadow-md">
          <i className="fa-solid fa-check text-[10px]"></i>
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-1 transition-colors group-hover:text-orange-500">
        {author.name}
      </h3>

      <p className="text-orange-500 text-sm font-medium mb-6">{author.role}</p>

      {/* Social links */}
      <div className="flex items-center justify-center gap-3 mt-auto">
        <a
          target="_blank"
          href="#"
          aria-label="LinkedIn"
          className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-orange-500 hover:text-white transition-colors"
        >
          <i className="fa-brands fa-linkedin-in text-sm"></i>
        </a>

        <a
          target="_blank"
          href="#"
          aria-label="GitHub"
          className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-neutral-700 hover:text-white transition-colors"
        >
          <i className="fa-brands fa-github text-sm"></i>
        </a>

        <a
          target="_blank"
          href="#"
          aria-label="X (Twitter)"
          className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-blue-600 hover:text-white transition-colors"
        >
          <i className="fa-brands fa-x-twitter text-sm"></i>
        </a>
      </div>
    </div>
  );
}
