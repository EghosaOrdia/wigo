import { GripVertical, NotebookPen, Star } from "lucide-react";

const Snippet = ({ idea }) => {
  return (
    <div
      className={`${idea.is_pinned ? "col-span-1 md:col-span-2 -order-1" : "col-span-1"}  group relative bg-surface-container-lowest rounded-4xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:scale-[1.01] transition-all duration-500 overflow-hidden`}
    >
      <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-40 transition-opacity cursor-grab">
        <GripVertical />
      </div>
      <div className="flex justify-between items-start mb-6">
        <NotebookPen className="text-primary-dim" />
        <Star className="text-outline" />
      </div>
      <h3 className="text-xl font-bold mb-3">{idea.title}</h3>
      <div>{idea.content}</div>
      {/* <ul className="space-y-2 text-on-surface-variant text-sm">
        <li className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Why
          minimalism is dead
        </li>
        <li className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> The future
          of local-first
        </li>
        <li className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Spark your
          creativity
        </li>
      </ul> */}
    </div>
  );
};

export default Snippet;
