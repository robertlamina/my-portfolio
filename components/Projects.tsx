import React from "react";
import { resumeData } from "@/data/resumeData";
import { FolderGit2, ArrowUpRight, Github, ExternalLink } from "lucide-react";

export const Projects = () => {
  return (
    <section id="projects" className="py-14 border-t border-[#222222]">
      <div className="space-y-6">
        {/* Section Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-gray-500">
            <FolderGit2 className="w-4 h-4 text-blue-400" />
            <span>Featured Projects</span>
          </div>

          <a
            href="https://github.com/jcruda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-white transition-colors"
          >
            <span>github.com/jcruda</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gray-500" />
          </a>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {resumeData.projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl bg-[#141414] border border-[#262626] hover:border-neutral-700 transition-all duration-300 overflow-hidden group"
            >
              {/* Card Mockup / Header Banner */}
              <div className="h-28 bg-gradient-to-br from-[#1c1c1c] to-[#121212] border-b border-[#222222] p-4 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/10 transition-colors" />

                {/* Window Dots */}
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-800 border border-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-800 border border-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-800 border border-neutral-700" />
                </div>

                {/* Tagline Preview */}
                <div className="text-xs font-mono text-blue-400/90 truncate">
                  {project.tags.slice(0, 3).join(" • ")}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-base font-semibold text-[#f3f4f6] group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-neutral-800 transition-colors"
                          aria-label={`GitHub source for ${project.title}`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-neutral-800 transition-colors"
                          aria-label={`Live URL for ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-blue-400 font-medium mb-2">
                    {project.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#1f1f1f]">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-xs font-mono text-gray-400 bg-neutral-900 border border-[#262626]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
