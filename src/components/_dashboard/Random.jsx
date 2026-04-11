import { GripVertical } from "lucide-react";
import React from "react";

const Random = ({ idea }) => {
  return (
    <div
      className={`group relative ${idea.is_pinned ? "col-span-1 md:col-span-2 -order-1" : "col-span-1 "} bg-secondary-container/20 rounded-4xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:scale-[1.01] transition-all duration-500 border-2 border-dashed border-secondary-container`}
    >
      <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-40 transition-opacity cursor-grab">
        <GripVertical />
      </div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-2 rounded-full bg-secondary"></div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">
          #{idea.category}
        </span>
      </div>
      <p className="text-on-surface font-medium italic">{idea.content}</p>
    </div>
  );
};

export default Random;
