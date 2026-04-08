import { Ellipsis } from "lucide-react";
import { useDraggable } from "@dnd-kit/react";

const Draft = ({ idea }) => {
  const { ref } = useDraggable({
    id: idea.dId,
  });
  return <div ref={ref}   className="bg-white p-5 rounded-[3rem] border-b-4 border-zinc-100 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.05)] group hover:-translate-y-1 transition-all">draft</div>;
};

export default Draft;
