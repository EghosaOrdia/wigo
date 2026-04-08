import { Archive } from "lucide-react";

const CreateIdea = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center border-4 border-dashed border-zinc-200 rounded-[3rem] p-8 text-center group hover:border-primary/30 transition-colors">
      <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Archive />
      </div>
      <h4 className="font-bold text-on-surface mb-1">Drop ideas here</h4>
      <p className="text-xs text-on-surface-variant max-w-37.5">
        Move cards here when they are ready for production.
      </p>
    </div>
  );
};

export default CreateIdea;
