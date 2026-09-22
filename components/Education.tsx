import React from "react";
import { resumeData } from "@/data/resumeData";
import { GraduationCap, Award } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-14 border-t border-[#222222]">
      <div className="space-y-6">
        {/* Section Header */}
        <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-gray-500">
          <GraduationCap className="w-4 h-4 text-blue-400" />
          <span>Education & Credentials</span>
        </div>

        {/* Education & Certifications List */}
        <div className="space-y-4">
          {resumeData.education.map((edu, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#141414] border border-[#262626] hover:border-neutral-700 transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1.5">
                <h3 className="text-sm sm:text-base font-semibold text-[#f3f4f6]">
                  {edu.degree}
                </h3>
                <span className="text-xs font-mono text-gray-400">
                  {edu.period}
                </span>
              </div>
              <p className="text-xs text-blue-400 font-medium mb-2">
                {edu.institution}
              </p>
              {edu.details && (
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {edu.details}
                </p>
              )}
            </div>
          ))}

          {resumeData.certifications && resumeData.certifications.length > 0 && (
            <div className="pt-2">
              <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-blue-400" />
                <span>Certifications</span>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {resumeData.certifications.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-4 rounded-xl bg-[#141414] border border-[#262626] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <h4 className="text-sm font-medium text-gray-200">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-gray-400">
                        Issued by <span className="text-gray-300">{cert.issuer}</span>
                        {cert.location ? ` • ${cert.location}` : ""}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-gray-500">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};