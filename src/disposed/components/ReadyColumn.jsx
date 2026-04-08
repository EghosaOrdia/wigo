import Idea from "./Idea";
import { useDroppable } from "@dnd-kit/react";
import CreateIdea from "./CreateIdea";

const ReadyColumn = ({ ideas }) => {
  const { ref, isDropTarget } = useDroppable({
    id: "ready",
  });
  return (
    <div
      ref={ref}
      id="draft"
      className={`flex flex-col gap-6 p-4 rounded-3xl min-w-75 overflow-y-scroll ${isDropTarget ? "bg-tertiary-container/30" : ""}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-2 bg-tertiary rounded-full py-2 pl-4 pr-1">
        <div className="flex items-center gap-2">
          <span className="bg-white px-3 py-1 rounded-full text-xs font-bold text-tertiary">
            {ideas.length}
          </span>
          <h2 className="text-xl font-black tracking-tight text-white">
            Ready
          </h2>
        </div>
        <span className="w-3 h-3 rounded-full bg-tertiary"></span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4">
        {ideas ? (
          ideas.map((idea) => <Idea idea={idea} key={idea.id} />)
        ) : (
          <CreateIdea />
        )}
      </div>

      <div className="flex flex-col gap-4">{ideas < 1 && <CreateIdea />}</div>
    </div>
  );
};

export default ReadyColumn;
