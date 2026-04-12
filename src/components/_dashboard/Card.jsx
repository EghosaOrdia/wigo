import { useState } from "react";
import { MoreVertical, Pin, Smartphone } from "lucide-react";

// Local Imports
import ActiveCardMenu from "./ActiveCardMenu";
import { categoryColors } from "../../utils/constants";

const Card = ({ idea }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  return (
    <div
      className={`${idea.is_pinned ? "col-span-1 md:col-span-2 -order-1" : "col-span-1"}  group relative bg-surface-container-lowest rounded-4xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:scale-[1.01] transition-all duration-500 cursor-pointer`}
    >
      <div className="flex justify-between items-center mb-6">
        <span
          className={`px-3 py-1 ${categoryColors[idea.category]} rounded-full text-xs font-bold uppercase tracking-wider`}
        >
          #{idea.category}
        </span>

        <div className="flex justify-between items-center">
          {idea.is_pinned && <Pin className="text-primary fill-primary" />}
          {isMenuActive && <ActiveCardMenu is_pinned={idea.is_pinned} />}
          {idea.device_name == "iPhone" && (
            <Smartphone className="text-white fill-tertiary" />
          )}
          <button
            onClick={() => setIsMenuActive(!isMenuActive)}
            className="hover:bg-surface p-1 rounded-full cursor-pointer"
          >
            <MoreVertical />
          </button>
        </div>
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
