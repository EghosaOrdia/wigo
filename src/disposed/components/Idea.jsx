import { Clock, Ellipsis } from "lucide-react";
import { useDraggable } from "@dnd-kit/react";

const Idea = ({ idea }) => {
  const { ref } = useDraggable({
    id: idea.id,
  });

  return (
    <div
      ref={ref}
      className="bg-white p-5 rounded-[3rem] border-b-4 border-zinc-100 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.05)] group hover:-translate-y-1 transition-all"
    >
      <div className="flex gap-2 mb-3">
        <span
          className={`${idea.label.styles} px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider`}
        >
          {idea.label.text}
        </span>
      </div>

      <h3 className="text-lg font-bold leading-tight mb-2 group-hover:text-primary transition-colors">
        {idea.title}
      </h3>

      <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
        {idea.description}
      </p>

      {(idea.status === "idea") | (idea.status === "draft") ? (
        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            {idea.authors.map((author) => (
              <img
                key={author.id}
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-white"
                data-alt="Circular user profile image"
                title={author.id}
                src={author.path}
              />
            ))}
          </div>
          <Ellipsis className="text-zinc-300 hover:text-black" />
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs font-bold text-error">
            <Clock />
            {idea.timeLeft}d left
          </div>
          {idea.authors.map((intials) => (
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-bold">
              {intials}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Idea;
