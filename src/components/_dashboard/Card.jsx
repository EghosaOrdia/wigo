import { categoryColors } from "../../utils/constants";
import { Pin } from "lucide-react";

const Card = ({ idea }) => {
  return (
    <div
      className={`${idea.is_pinned ? "col-span-1 md:col-span-2 -order-1" : "col-span-1"}  group relative bg-surface-container-lowest rounded-4xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:scale-[1.01] transition-all duration-500 overflow-hidden`}
    >
      <div className="flex justify-between items-start mb-6">
        <span
          className={`px-3 py-1 ${categoryColors[idea.category]} rounded-full text-xs font-bold uppercase tracking-wider`}
        >
          #{idea.category}
        </span>
        {idea.is_pinned && (
          <div className="flex gap-2">
            <Pin className="text-primary fill-primary" />
          </div>
        )}
      </div>
      <h3 className="text-2xl font-bold mb-4 leading-tight">{idea.title}</h3>
      <p className="text-on-surface-variant body-lg mb-8 line-clamp-3">
        {idea.content}
      </p>
      <div className="mt-auto">
        <span className="text-xs font-semibold text-outline">
          Edited 2m ago
        </span>
      </div>
    </div>
  );
};

export default Card;
