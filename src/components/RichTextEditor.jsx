const btnCls =
  "p-1.5 rounded-lg hover:bg-white transition-colors text-on-surface-variant focus:ring-2 focus:ring-primary/20 outline-none";

const RichTextEditor = () => {
  return (
    <div className="flex flex-col gap-2 grow">
      <label className="text-xs font-bold uppercase tracking-widest text-outline ml-4">
        Description
      </label>
      <div className="bg-surface-container-low rounded-4xl overflow-hidden border border-transparent focus-within:border-primary/20 focus-within:ring-2 focus-within:ring-primary/10 transition-all">
        <div className="flex items-center gap-1 px-4 py-2 border-b border-outline-variant/10 bg-surface-container/30">
          <button className={btnCls}>
            <Bold size={18} />
          </button>
          <button className={btnCls}>
            <Italic size={18} />
          </button>
          <div className="w-px h-4 bg-outline-variant/30 mx-1" />
          <button className={btnCls}>
            <List size={18} />
          </button>
          <button className={btnCls}>
            <ListChecks size={18} />
          </button>
          <div className="w-px h-4 bg-outline-variant/30 mx-1" />
          <button className={btnCls}>
            <Link2 size={18} />
          </button>
        </div>
        <textarea
          className="w-full bg-transparent border-none focus:ring-0 min-h-40 p-6 text-sm leading-relaxed placeholder:text-outline/40 outline-none font-mono"
          placeholder="Describe your idea..."
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
