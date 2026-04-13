// src/Tiptap.tsx
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

// Local imports
import { MenuBar } from "../components/MenuBar";

const extensions = [StarterKit];

const Test = () => {
  const editor = useEditor({
    extensions,
    content: "",
  });

  return (
    <main className="h-screen bg-surface pt-16">
      <div className="bg-surface-container-low rounded-4xl overflow-hidden border border-transparent focus-within:border-primary/20 focus-within:ring-2 focus-within:ring-primary/10 transition-all">
        <MenuBar editor={editor} />

        <EditorContent
          editor={editor}
          className="bg-white border-none [&_.ProseMirror]:outline-none "
        />
      </div>
    </main>
  );
};

export default Test;
