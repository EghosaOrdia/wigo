import { FolderOpen, Pen, Pin, PinOff, Share2, Trash } from "lucide-react";

const ActiveCardMenu = ({ is_pinned }) => {
  return (
    <div className="absolute right-0 top-8 w-50 bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl shadow-blue-900/10 overflow-hidden animate-in fade-in zoom-in duration-200 z-50">
      <button className="w-full flex items-center gap-3 px-4 py-2.5 text-xs font-medium text-on-surface hover:bg-surface transition-colors cursor-pointer">
        <Pen size={18} />
        Edit Idea
      </button>
      <button className="w-full flex items-center gap-3 px-4 py-2.5 text-xs font-medium text-on-surface hover:bg-surface transition-colors cursor-pointer">
        <FolderOpen size={18} />
        Move to Collection
      </button>
      <button className="w-full flex items-center gap-3 px-4 py-2.5 text-xs font-medium text-on-surface hover:bg-surface transition-colors cursor-pointer">
        <Share2 size={18} />
        Share
      </button>
      <button className="w-full flex items-center gap-3 px-4 py-2.5 text-xs font-medium text-on-surface hover:bg-surface transition-colors cursor-pointer">
        {is_pinned && (
          <>
            <PinOff size={18} />
            Unpin
          </>
        )}
        {!is_pinned && (
          <>
            <Pin size={18} />
            Pin
          </>
        )}
      </button>

      <div className="h-px bg-outline-variant/10 my-1"></div>
      <button className="w-full flex items-center gap-3 px-4 py-2.5 text-xs font-medium text-red-600 hover:bg-red-50 transition-colors cursor-pointer">
        <Trash size={18} />
        Delete
      </button>
    </div>
  );
};

export default ActiveCardMenu;
