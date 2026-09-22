"use client";

import React, { useState } from "react";
import { resumeData } from "@/data/resumeData";
import { Mail, Check, Copy, ArrowUpRight, Github, Linkedin, MessageSquare } from "lucide-react";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(resumeData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-14 border-t border-[#222222]">
      <div className="rounded-3xl bg-gradient-to-b from-[#161616] to-[#101010] border border-[#262626] p-7 sm:p-10 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative space-y-6 max-w-xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f3f4f6]">
            Let&apos;s build something exceptional together.
          </h2>

          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            I&apos;m currently open to new software engineering roles, technical leadership opportunities, and consulting projects. Let&apos;s talk.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={`mailto:${resumeData.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f3f4f6] text-[#0d0d0d] font-semibold text-xs sm:text-sm hover:bg-white transition-all shadow-md active:scale-95"
            >
              <Mail className="w-4 h-4" />
              <span>Send an Email</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-gray-300 border border-[#262626] hover:border-neutral-600 text-xs sm:text-sm font-medium transition-all active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-gray-400" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* Social Row */}
          <div className="pt-6 border-t border-[#222222] flex flex-wrap items-center gap-5 text-xs text-gray-400">
            <a
              href="https://github.com/jcruda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-gray-500" />
            </a>

            <a
              href="https://linkedin.com/in/johnrobertcruda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-gray-500" />
            </a>

            <a
              href={resumeData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-gray-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
