import { useDroppable } from "@dnd-kit/react";
import Idea from "./Idea";

const IdeaColumn = ({ ideas }) => {
  const { ref, isDropTarget } = useDroppable({ id: "idea" });
  return (
    <div
      ref={ref}
      id="idea"
      className={` flex flex-col gap-6 p-4 rounded-3xl min-w-75 overflow-y-scroll ${isDropTarget ? "bg-primary-container/30" : ""}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-2 bg-primary rounded-full py-2 pl-4 pr-1">
        <div className="flex items-center gap-2">
          <span className="bg-white py-1 px-2 rounded-full text-xs font-bold text-primary">
            {ideas.length}
          </span>
          <h2 className="text-xl font-black tracking-tight text-white">Idea</h2>
        </div>
        <span className="w-3 h-3 rounded-full bg-primary"></span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4">
        {ideas.map((idea) => (
          <Idea idea={idea} key={idea.id} />
        ))}
      </div>

      <div className="flex flex-col gap-4">{ideas < 1 && <CreateIdea />}</div>
    </div>
  );
};

export default IdeaColumn;
