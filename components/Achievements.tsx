import React from "react";
import { resumeData } from "@/data/resumeData";
import { Trophy, Award } from "lucide-react";

export const Achievements = () => {
  return (
    <section id="achievements" className="py-14 border-t border-[#222222]">
      <div className="space-y-6">
        {/* Section Header */}
        <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-gray-500">
          <Trophy className="w-4 h-4 text-amber-400" />
          <span>Honors & Achievements</span>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {resumeData.achievements.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#141414] border border-[#262626] hover:border-neutral-700 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-[#2a2a2a] flex items-center justify-center text-amber-400 group-hover:border-amber-500/40 transition-colors">
                      <Award className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-950/30 text-amber-400 border border-amber-800/40">
                      {item.badge || "Award"}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-gray-500">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-[#f3f4f6] mt-2 mb-1 group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};