import React from "react";
import { resumeData } from "@/data/resumeData";
import { Code2 } from "lucide-react";

export const TechStack = () => {
  return (
    <section id="skills" className="py-14 border-t border-[#222222]">
      <div className="space-y-6">
        {/* Section Header */}
        <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-gray-500">
          <Code2 className="w-4 h-4 text-blue-400" />
          <span>Technical Skills & Tools</span>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {resumeData.skills.map((category, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#141414] border border-[#262626] hover:border-neutral-700 transition-all duration-200"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#222222]">
                <h3 className="text-sm font-semibold text-[#f3f4f6]">
                  {category.category}
                </h3>
                <span className="text-xs font-mono text-gray-500">
                  {category.skills.length} skills
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium text-gray-300 bg-neutral-900 border border-[#262626] hover:border-neutral-600 hover:text-white transition-all cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
