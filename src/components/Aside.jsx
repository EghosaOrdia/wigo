import React from "react";
import {
  Bolt,
  CircleQuestionMark,
  FolderOpen,
  LayoutGrid,
  Lightbulb,
  Settings,
  Star,
  Tag,
  Zap,
} from "lucide-react";

const Aside = () => {
  return (
    <aside className="hidden md:flex flex-col gap-y-2 bg-slate-50/80 backdrop-blur-2xl h-screen w-72 rounded-r-[3rem] sticky left-0 top-0 tonal-shift px-6 py-8 no-border shadow-2xl shadow-blue-900/10 font-plus-jakarta tracking-tight z-50">
      <div className="flex flex-col gap-1 mb-10 px-4">
        <h1 className="text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-400">
          Wiggle
        </h1>
        <p className="text-on-surface-variant text-xs font-semibold tracking-widest uppercase opacity-60">
          Luminous Canvas
        </p>
      </div>
      <nav className="flex flex-col gap-y-2 grow">
        <a
          className="flex items-center gap-4 px-6 py-4 text-slate-500 hover:translate-x-2 hover:bg-blue-50 transition-all duration-500 ease-out group"
          href="#"
        >
          <LayoutGrid />
          <span className="font-medium">Dashboard</span>
        </a>
        <a
          className="flex items-center gap-4 px-6 py-4 bg-white text-blue-600 rounded-4xl shadow-xl shadow-blue-500/10 font-bold hover:scale-[1.02] active:scale-100 transition-all duration-500 ease-out group"
          href="#"
        >
          <Lightbulb />
          <span className="font-medium">All Ideas</span>
        </a>
        <a
          className="flex items-center gap-4 px-6 py-4 text-slate-500 hover:translate-x-2 hover:bg-blue-50  transition-all duration-500 ease-out group"
          href="#"
        >
          <FolderOpen />
          <span className="font-medium">Collections</span>
        </a>
        <a
          className="flex items-center gap-4 px-6 py-4 text-slate-500 hover:translate-x-2 hover:bg-blue-50 transition-all duration-500 ease-out group"
          href="#"
        >
          <Tag />
          <span className="font-medium">Tags</span>
        </a>
        <a
          className="flex items-center gap-4 px-6 py-4 text-slate-500 hover:translate-x-2 hover:bg-blue-50 transition-all duration-500 ease-out group"
          href="#"
        >
          <Star />
          <span className="font-medium">Favorites</span>
        </a>
      </nav>
      <div className="mt-auto flex flex-col gap-y-2">
        <button className="bg-primary-container text-on-primary-container rounded-4xl py-4 px-6 font-bold flex items-center justify-center gap-2 mb-6 hover:scale-[1.05] transition-transform">
          <Zap />
          Quick Capture
        </button>
        <div className="flex flex-col gap-1 border-t border-outline-variant/10 pt-6">
          <a
            className="flex items-center gap-4 px-6 py-3 text-slate-500  hover:bg-blue-50 rounded-xl transition-all"
            href="#"
          >
            <Bolt />
            <span>Settings</span>
          </a>
          <a
            className="flex items-center gap-4 px-6 py-3 text-slate-500 hover:bg-blue-50 rounded-xl transition-all"
            href="#"
          >
            <CircleQuestionMark />
            <span>Help</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
