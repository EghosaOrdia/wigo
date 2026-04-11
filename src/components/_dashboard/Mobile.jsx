import {
  GripVertical,
  MoreVertical,
  RotateCcw,
  Smartphone,
} from "lucide-react";

const Mobile = ({ idea }) => {
  return (
    <div
      className={`group relative ${idea.is_pinned ? "col-span-1 md:col-span-2 -order-1" : "col-span-1 "} bg-tertiary-container/30 rounded-4xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:scale-[1.01] transition-all duration-500`}
    >
      <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-40 transition-opacity cursor-grab">
        <GripVertical />
      </div>
      <div className="flex justify-between items-start mb-6">
        <Smartphone className="text-tertiary" />
        <MoreVertical />
      </div>
      <h3 className="text-xl font-bold mb-4">Voice Memo: UI Polish</h3>
      <p className="text-on-surface-variant text-sm line-clamp-4">
        Add haptic feedback to the grid-list toggle. Maybe a slight 3D tilt on
        the cards when they are being dragged? Thinking about the Apple Notes
        friction.
      </p>
      <div className="mt-6 flex items-center gap-2 text-tertiary text-xs font-bold">
        <RotateCcw />
        <span>Synced from iPhone</span>
      </div>
    </div>
  );
};

export default Mobile;
