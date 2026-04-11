import React from "react";

const Article = (idea) => {
  return (
    <div
      className={`group relative ${idea.is_pinned ? "col-span-1 md:col-span-2 -order-1" : "col-span-1"} bg-surface-container-highest rounded-4xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:scale-[1.01] transition-all duration-500`}
    >
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
          #{idea.category}
        </span>
        <h3 className="text-lg font-bold mb-2">Retro-Future OS Skin</h3>
        <p className="text-on-surface-variant text-xs mb-4 line-clamp-2">
          {idea}
        </p>
        <div className="flex justify-between items-center text-outline">
          <Paperclip />
          <span className="text-[10px] font-bold uppercase tracking-widest">
            4 Assets
          </span>
        </div>
      </div>
    </div>
  );
};

export default Article;
