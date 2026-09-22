import React from "react";
import { resumeData } from "@/data/resumeData";
import { Briefcase, Building2 } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-14 border-t border-[#222222]">
      <div className="space-y-6">
        {/* Section Header */}
        <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-gray-500">
          <Briefcase className="w-4 h-4 text-blue-400" />
          <span>Work Experience</span>
        </div>

        {/* Experience List */}
        <div className="space-y-5">
          {resumeData.experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#141414] border border-[#262626] hover:border-neutral-700 transition-all duration-200 group"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-[#2a2a2a] flex items-center justify-center text-gray-400 shrink-0 group-hover:border-blue-500/40 group-hover:text-blue-400 transition-colors">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#f3f4f6]">
                      {exp.role}
                    </h3>
                    <div className="text-xs text-gray-400 flex flex-wrap items-center gap-1.5 mt-0.5">
                      <span className="font-medium text-gray-300">{exp.company}</span>
                      {exp.client && (
                        <>
                          <span>•</span>
                          <span className="text-blue-400 font-medium">Client: {exp.client}</span>
                        </>
                      )}
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                    {exp.project && (
                      <div className="text-xs text-gray-400 font-mono mt-1">
                        Project: <span className="text-gray-300">{exp.project}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="sm:text-right">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-neutral-900 border border-[#262626] text-xs font-mono text-gray-400">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Key Highlights */}
              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="space-y-2 mb-5 text-xs sm:text-sm text-gray-400">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <span className="text-blue-400 font-bold mt-0.5 text-xs">▸</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#1f1f1f]">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-md text-xs font-mono text-blue-300 bg-blue-950/20 border border-blue-800/30"
                  >
                    {skill}
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