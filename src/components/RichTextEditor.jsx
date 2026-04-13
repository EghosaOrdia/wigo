// src/Tiptap.tsx
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

// Local imports
import { MenuBar } from "../components/MenuBar";

const extensions = [StarterKit];

const RichTextEditor = () => {
  const editor = useEditor({
    extensions,
    content: "",
  });

  return (
    <div className="flex flex-col gap-2 grow">
      <label className="text-xs font-bold uppercase tracking-widest text-outline ml-4">
        Description
      </label>
      <div className="bg-surface-container-low rounded-4xl overflow-hidden border border-transparent focus-within:border-primary/20 focus-within:ring-2 focus-within:ring-primary/10 transition-all">
        <MenuBar editor={editor} />

        <EditorContent
          editor={editor}
          className="bg-white border-none [&_.ProseMirror]:outline-none "
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
