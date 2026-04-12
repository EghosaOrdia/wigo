import {
  Bold,
  File,
  Italic,
  Link,
  Link2,
  List,
  ListChecks,
  Trash,
  Upload,
  X,
} from "lucide-react";
import ColorSelector from "./ColorSelector";
import DescriptionEditor from "./DescriptionEditor";
import { useCallback, useState } from "react";

const AddIdea = ({ setIsEditingIdea }) => {
  const [desc, setDesc] = useState("");

  const onChange = useCallback((newValue) => {
    setDesc(newValue);
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
        <div className="w-full max-w-2xl bg-white/80 backdrop-blur-3xl rounded-[3rem] shadow-2xl border border-white/40 overflow-hidden flex flex-col max-h-[90vh]">
          {/* <!-- Modal Header --> */}
          <div className="px-8 py-6 border-b border-outline-variant/10 flex justify-between items-center">
            <h2 className="text-2xl font-black text-on-surface">New Spark</h2>
            <button
              onClick={() => setIsEditingIdea(false)}
              className="p-2 hover:bg-surface-container rounded-full transition-colors text-outline hover:text-on-surface"
            >
              <X size={18} />
            </button>
          </div>
          {/* <!-- Modal Body (Scrollable) --> */}
          <div className="px-8 py-6 overflow-y-auto hide-scrollbar flex flex-col gap-6">
            {/* <!-- Title Input --> */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-outline ml-4">
                Title
              </label>
              <input
                className="w-full bg-surface-container-low border-none rounded-full py-4 px-6 focus:ring-2 focus:ring-primary/20 text-lg font-bold placeholder:text-outline/50 outline-none"
                placeholder="Enter idea title..."
                type="text"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* <!-- Categories --> */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-outline ml-4">
                  Category
                </label>
                <div className="bg-surface-container-low rounded-3xl p-4 min-h-14 flex flex-wrap gap-2 items-center">
                  <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold flex items-center gap-1">
                    Startup <X size={14} className="cursor-pointer" />
                  </span>

                  <input
                    className="bg-transparent border-none text-sm font-medium p-0 w-20 focus:ring-2 focus:ring-primary/20 placeholder:text-outline/40 outline-none"
                    placeholder="Add..."
                    type="text"
                  />
                </div>
              </div>
              {/* <!-- Tags --> */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-outline ml-4">
                  Tags{" "}
                  <span className="normal-case font-normal text-[10px] opacity-60">
                    (limit 10)
                  </span>
                </label>
                <div className="bg-surface-container-low rounded-3xl p-4 min-h-14 flex flex-wrap gap-2 items-center">
                  <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant rounded-full text-xs font-bold flex items-center gap-1">
                    #ai <X size={14} />
                  </span>
                  <input
                    className="bg-transparent border-none text-sm font-medium p-0 w-24 focus:ring-2 focus:ring-primary/20 placeholder:text-outline/40 outline-none"
                    placeholder="Add #tags..."
                    type="text"
                  />
                </div>
              </div>
            </div>
            {/* Color Palette */}
            <div className="flex gap-8 items-start">
              {/* <!-- Card Background Color --> */}
              <div className="flex flex-col gap-2 relative">
                <label className="text-xs font-bold uppercase tracking-widest text-outline ml-4">
                  Card Background
                </label>
                <ColorSelector />
              </div>
              {/* <!-- Category Color (Open State Demo) --> */}
              <div className="flex flex-col gap-2 relative">
                <label className="text-xs font-bold uppercase tracking-widest text-outline ml-4">
                  Category Color
                </label>
                <ColorSelector />
              </div>
            </div>

            {/* <!-- File Upload Area --> */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-outline ml-4">
                Attachments
              </label>
              <div className="flex flex-wrap gap-4">
                {/* <!-- File Previews --> */}
                <div className="w-24 h-24 rounded-2xl overflow-hidden relative group">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRqkQKXnWruzZ1LoVxynqhfbajK0-RLs7BwmbeAESSYqVqCXFcin27F89PsOXFwgsg5-O78sOyx1t2VoFgQaHNcqsfl1u7zO4mNrun0bSivwPPaP1vMzxcvQoR5ZLQ_wfpJHojKPcL3ck5oWlUdf3ZitCLV7dnTaQ-HxfwzpmybUMLdNLOaAe4mKTQYNPu7iCyFLBI1IKCTV3AcixQeVZZXe_I0S94M0t7MKTN-_VlcOt9_6LPxDZIb5SDR8alYqQ0WOeCuD17POQ"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
                    <Trash className="text-white" />
                  </div>
                </div>
                <div className="w-24 h-24 rounded-2xl bg-primary-container/10 border-2 border-dashed border-primary/20 flex flex-col items-center justify-center gap-1 group cursor-pointer relative">
                  <File className="text-primary" />
                  <span className="text-[10px] font-bold text-primary">
                    draft.pdf
                  </span>
                  <div className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5 scale-0 group-hover:scale-100 transition-transform">
                    <X size={14} className="cursor-pointer" />
                  </div>
                </div>
                {/* <!-- Upload Trigger --> */}
                <button className="w-24 h-24 rounded-2xl border-2 border-dashed border-outline-variant/30 flex flex-col items-center justify-center gap-1 text-outline hover:border-primary hover:text-primary transition-all outline-none focus:border-primary">
                  <Upload />
                  <span className="text-[10px] font-bold uppercase">
                    Upload
                  </span>
                </button>
              </div>
            </div>
            {/* <!-- Content Area (Rich Text) --> */}
            <DescriptionEditor value={desc} onChange={onChange} />
          </div>
          {/* <!-- Modal Footer Actions --> */}
          <div className="px-8 py-6 border-t border-outline-variant/10 flex justify-end items-center gap-4">
            <button
              onClick={() => setIsEditingIdea(false)}
              className="px-8 py-3 rounded-full font-bold text-on-surface-variant hover:bg-surface-container transition-colors focus:scale-95 outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={() => setIsEditingIdea(false)}
              className="px-10 py-3 bg-linear-to-r from-blue-600 to-blue-400 text-white rounded-full font-black shadow-lg shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all focus:scale-95 outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
            >
              Save Idea
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddIdea;
