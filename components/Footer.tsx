import React from "react";
import { resumeData } from "@/data/resumeData";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-[#222222] text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-3">
      <div>
        © {currentYear} {resumeData.name}. All rights reserved.
      </div>
      <div className="flex items-center gap-4 text-gray-500">
        <span>Minimalist Dark Portfolio</span>
        <span>•</span>
        <span>Next.js & Tailwind CSS</span>
      </div>
    </footer>
  );
};
