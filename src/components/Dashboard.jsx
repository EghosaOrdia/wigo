import {
  CirclePlus,
  Edit,
  GripVertical,
  MoreVertical,
  NotebookPen,
  Paperclip,
  Phone,
  Pin,
  Play,
  Plus,
  RotateCcw,
  Smartphone,
  Sparkles,
  Star,
} from "lucide-react";
import React from "react";

const Dashboard = () => {
  return (
    <div className="p-8 max-w-screen-2xl mx-auto w-full">
      {/* <!-- Tag Filters --> */}
      <div className="flex flex-wrap items-center gap-3 mb-10">
        <button className="px-5 py-2 rounded-full bg-primary text-on-primary font-bold text-sm transition-transform hover:scale-105">
          #all_ideas
        </button>
        <button className="px-5 py-2 rounded-full bg-secondary-container text-on-secondary-container font-medium text-sm hover:bg-secondary-fixed transition-all">
          #startup
        </button>
        <button className="px-5 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-medium text-sm hover:bg-surface-container-highest transition-all">
          #project
        </button>
        <button className="px-5 py-2 rounded-full bg-tertiary-container text-on-tertiary-container font-medium text-sm hover:bg-tertiary-fixed transition-all">
          #random
        </button>
        <button className="px-5 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-medium text-sm hover:bg-surface-container-highest transition-all">
          #ai_research
        </button>
        <button className="p-2 rounded-full bg-surface-container-low text-on-surface-variant flex items-center justify-center">
          <Plus />
        </button>
      </div>
      {/* <!-- Bento Grid Layout --> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start gap-8">
        {/* <!-- Card 1: Main Feature --> */}
        <div className="col-span-1 md:col-span-2 group relative bg-surface-container-lowest rounded-4xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:scale-[1.01] transition-all duration-500 overflow-hidden">
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-40 transition-opacity cursor-grab">
            <GripVertical />
          </div>
          <div className="flex justify-between items-start mb-6">
            <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold uppercase tracking-wider">
              #startup
            </span>
            <div className="flex gap-2">
              <Pin className="text-primary fill-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4 leading-tight">
            Decentralized Coffee Sourcing Platform
          </h3>
          <p className="text-on-surface-variant body-lg mb-8 line-clamp-3">
            A blockchain-based system that connects micro-roasters directly with
            high-altitude farmers in Ethiopia. Focusing on transparent pricing
            and carbon-neutral logistics.
          </p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex -space-x-2">
              <img
                className="w-8 h-8 rounded-full border-2 border-surface-container-lowest"
                data-alt="professional portrait of a man with a beard smiling"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgb4IrgORiFzibG1rm8rmrbHIzTfz0sX5KPLtQxBwbEh5Ixl7JfGQet6D1DRvH2s5mzAA825p-UGTBYMhR5Y0jthzpBSPQyw47KkSZR_9SUZQdaUTbS7IY-P9bC6XVvR1ltg-XjbKFAqVqdgNojVXU9Ay7rkNrZxya5uibbW_ja0X9JX_i0fInPQu_kClrNBcmF8qyyZpZJ24PsIFmRPp0J-_Ni74RqJzRQFMFjdLSNpZFM1y7XetfC5IEvevvTTrxiR5DqRv7Iow"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-surface-container-lowest"
                data-alt="smiling woman with glasses"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzJMxUXhoWW2GZl5SAwgaaz3xVziHpPt044gIqGRfwoo7lVCIfc11o6fpPKxoRM7i_G_jKj4hG6znjwAPP7xZloB8wPTD8wpGs-WqYQcZmK8ja4iB9EaIBlcWLavpm5oujV6TwE9FggF2FZ6OoMeWe9WAZN5FbujDLs00cja6YfOmO9_LvIycVSL1OJEMHBAW4bra-VRdNuVsgl2ZwBpEH9hcYgVNxswOC-CocceZFqeOl4Vl0DY_bFmgwekJMoRzR0vl5CRH9ewA"
              />
            </div>
            <span className="text-xs font-semibold text-outline">
              Edited 2m ago
            </span>
          </div>
        </div>
        {/* <!-- Card 2: Mobile Originated --> */}
        <div className="group relative bg-tertiary-container/30 rounded-4xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:scale-[1.01] transition-all duration-500">
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-40 transition-opacity cursor-grab">
            <GripVertical />
          </div>
          <div className="flex justify-between items-start mb-6">
            <Smartphone className="text-tertiary" />
            <MoreVertical />
          </div>
          <h3 className="text-xl font-bold mb-4">Voice Memo: UI Polish</h3>
          <p className="text-on-surface-variant text-sm line-clamp-4">
            Add haptic feedback to the grid-list toggle. Maybe a slight 3D tilt
            on the cards when they are being dragged? Thinking about the Apple
            Notes friction.
          </p>
          <div className="mt-6 flex items-center gap-2 text-tertiary text-xs font-bold">
            <RotateCcw />
            <span>Synced from iPhone</span>
          </div>
        </div>
        {/* <!-- Card 3: Image/Inspiration --> */}
        <div className="group relative bg-surface-container-highest rounded-4xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:scale-[1.01] transition-all duration-500">
          <div className="h-48 relative">
            <img
              className="w-full h-full object-cover"
              data-alt="retro futuristic synthwave aesthetic electronics and neon lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRqkQKXnWruzZ1LoVxynqhfbajK0-RLs7BwmbeAESSYqVqCXFcin27F89PsOXFwgsg5-O78sOyx1t2VoFgQaHNcqsfl1u7zO4mNrun0bSivwPPaP1vMzxcvQoR5ZLQ_wfpJHojKPcL3ck5oWlUdf3ZitCLV7dnTaQ-HxfwzpmybUMLdNLOaAe4mKTQYNPu7iCyFLBI1IKCTV3AcixQeVZZXe_I0S94M0t7MKTN-_VlcOt9_6LPxDZIb5SDR8alYqQ0WOeCuD17POQ"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
          </div>
          <div className="p-6">
            <span className="px-3 py-1 bg-surface-container text-on-surface-variant rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 inline-block">
              #project
            </span>
            <h3 className="text-lg font-bold mb-2">Retro-Future OS Skin</h3>
            <p className="text-on-surface-variant text-xs mb-4 line-clamp-2">
              Exploring 80s hardware aesthetic for a modern Linux distro theme.
            </p>
            <div className="flex justify-between items-center text-outline">
              <Paperclip />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                4 Assets
              </span>
            </div>
          </div>
        </div>
        {/* <!-- Card 4: Short Note --> */}
        <div className="group relative bg-primary-container/10 rounded-4xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:scale-[1.01] transition-all duration-500">
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-40 transition-opacity cursor-grab">
            <GripVertical />
          </div>
          <div className="flex justify-between items-start mb-6">
            <NotebookPen className="text-primary-dim" />
            <Star className="text-outline" />
          </div>
          <h3 className="text-xl font-bold mb-3">Newsletter Headline Ideas</h3>
          <ul className="space-y-2 text-on-surface-variant text-sm">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Why
              minimalism is dead
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> The
              future of local-first
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Spark
              your creativity
            </li>
          </ul>
        </div>
        {/* <!-- Card 5: Gradient Card --> */}
        <div className="group relative bg-linear-to-br from-blue-600 to-blue-400 rounded-4xl p-8 text-white shadow-xl shadow-blue-500/20 hover:scale-[1.02] transition-all duration-500">
          <div className="flex justify-between items-start mb-10">
            <Sparkles />
            <Pin />
          </div>
          <h3 className="text-2xl font-black mb-4 tracking-tight">
            AI Idea Generator V2
          </h3>
          <p className="text-blue-50 text-sm mb-6 opacity-90">
            Fine-tune the LLM on personal journals to generate "hyper-relevant"
            daily prompts.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Play className="w-4" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Active Prototype
            </span>
          </div>
        </div>
        {/* <!-- Card 6: Random thought --> */}
        <div className="group relative bg-secondary-container/20 rounded-4xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:scale-[1.01] transition-all duration-500 border-2 border-dashed border-secondary-container">
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-40 transition-opacity cursor-grab">
            <GripVertical />
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-secondary"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">
              #random
            </span>
          </div>
          <p className="text-on-surface font-medium italic">
            "The best way to predict the future is to invent it." — Alan Kay.
            Need to re-read his paper on the Dynabook.
          </p>
        </div>
        {/* <!-- Empty State Card (Add New) --> */}
        <div className="group border-2 border-dashed border-outline-variant/30 rounded-4xl p-8 flex flex-col items-center justify-center gap-4 text-outline hover:border-primary/50 hover:text-primary transition-all cursor-pointer">
          <CirclePlus />
          <span className="font-bold text-sm tracking-wide">
            Drop an image or note here
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
