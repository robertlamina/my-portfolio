import React from "react";
import { resumeData } from "@/data/resumeData";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section id="about" className="pt-32 pb-16 md:pt-44 md:pb-24">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div className="space-y-8">
        {/* Avatar & Availability Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-[#2a2a2a] flex items-center justify-center text-xl sm:text-2xl font-bold font-mono text-blue-400 shadow-inner">
                JC
              </div>
              {/* Active status indicator ring */}
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#0d0d0d] flex items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
              </div>
            </div>

            <div>
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f3f4f6]">
                {resumeData.name}
              </h1>
              <p className="text-xs sm:text-sm font-medium text-blue-400">
                {resumeData.title}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-gray-500" />
                <span>{resumeData.location}</span>
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141414] border border-[#262626] text-xs font-mono text-gray-300">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Available for work</span>
          </div>
        </div>

        {/* Display Headline */}
        <div className="pt-2">
          <p className="mb-5 text-xs font-mono uppercase tracking-[0.24em] text-blue-400">Independent software engineer</p>
          <h2 className="max-w-3xl text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.055em] text-[#f3f4f6] leading-[0.98]">
            Building digital products with <span className="text-gray-500">clarity.</span>
          </h2>
        </div>

        {/* Bio */}
        <div className="space-y-3 text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl">
          {resumeData.bio.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Action Buttons & Socials */}
        <div className="flex flex-wrap items-center gap-3.5 pt-1">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#f3f4f6] text-[#0d0d0d] font-semibold text-xs sm:text-sm hover:bg-white transition-all shadow-md active:scale-95"
          >
            Get in touch
          </a>

          <a
            href={resumeData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#141414] hover:bg-[#1c1c1c] text-gray-200 border border-[#262626] hover:border-neutral-600 text-xs sm:text-sm font-medium transition-all"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
          </a>

          <div className="flex items-center gap-2 sm:ml-auto">
            <a
              href="https://github.com/jcruda"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#141414] hover:bg-[#1c1c1c] border border-[#262626] hover:border-neutral-600 text-gray-400 hover:text-white transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/johnrobertcruda"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#141414] hover:bg-[#1c1c1c] border border-[#262626] hover:border-neutral-600 text-gray-400 hover:text-white transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${resumeData.email}`}
              className="p-2.5 rounded-xl bg-[#141414] hover:bg-[#1c1c1c] border border-[#262626] hover:border-neutral-600 text-gray-400 hover:text-white transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
        </div>
        <div className="lg:pb-2 lg:pl-10">
          <div className="border-l border-[#262626] pl-6 sm:pl-8">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 mb-5">Currently</p>
            <p className="text-xl sm:text-2xl leading-snug text-gray-200">
              Helping teams turn complex ideas into dependable, high-performing software.
            </p>
            <div className="mt-8 flex items-center gap-3 text-xs text-gray-500">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,.7)]" />
              <span>{resumeData.status}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
