// src/Tiptap.tsx
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

// Local imports
import { MenuBar } from "../components/MenuBar";
import { useState } from "react";

const extensions = [StarterKit];

const Test = () => {
  const [output, setOutput] = useState("");

  const editor = useEditor({
    extensions,
    content: "",
    //  onUpdate,
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
      <div className="px-8 py-6 border-t border-outline-variant/10 flex justify-end items-center gap-4">
        <button
          onClick={() => {
            if (editor) {
              setOutput(editor.getHTML());
            }
          }}
          className="px-10 py-3 bg-linear-to-r from-blue-600 to-blue-400 text-white rounded-full font-black shadow-lg shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all focus:scale-95 outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
        >
          GetOutput
        </button>
      </div>
      <div className="">
        <h1>Hello world</h1>
        {output}
      </div>
    </main>
  );
};

export default Test;
