import React from "react";
import TeamCard from "./TeamCard";
import { getTeamMembers } from "../../data/postsService";

export default function Team() {
  const teamMembers = getTeamMembers();

  return (
    <>
      <section className="py-20">
        <div className=" max-w-7xl   sm:px-6 lg:px-8 mx-auto px-4">
          <div>
            <header className="flex items-center justify-self-center flex-col mb-10 text-center">
              <div className="py-2 px-4 text-orange-400 bg-[#f973161a] border-[0.5px] border-orange-700 rounded-full font-medium text-sm inline-flex items-center gap-2 mb-8 before:size-1.5 before:rounded-full before:bg-orange-500 before:animate-pulse">
                <span className="text-sm font-medium">فريقنا</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                تعرف على كتابنا
              </h2>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
                المجتمع.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((author) => (
                <TeamCard key={author.name} author={author} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
