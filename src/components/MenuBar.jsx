import { useEditorState } from "@tiptap/react";
import { menuBarStateSelector } from "../utils/MenuState.js";
import {
  Bold,
  BrushCleaning,
  CaseSensitive,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Italic,
  List,
  ListOrdered,
  Minus,
  Quote,
  Redo,
  SquareDashedBottomCode,
  Strikethrough,
  TextWrap,
  Undo,
} from "lucide-react";

const btnClass =
  "flex items-center justify-center w-8 h-8 rounded-lg text-sm transition-all duration-150 outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/40 text-gray-500 hover:bg-white hover:text-gray-800 hover:shadow-sm";

const activeBtnClass =
  "bg-white text-gray-900 shadow-sm border border-gray-200";
export const MenuBar = ({ editor }) => {
  const editorState = useEditorState({
    editor,
    selector: menuBarStateSelector,
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="control-group">
      <div className="flex justify-between items-center gap-0.5 px-3 py-2 bg-gray-50/80 border-b border-gray-100 relative flex-wrap md:flex-nowrap">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editorState.canBold}
          className={`${editorState.isBold ? activeBtnClass : ""} ${btnClass}`}
        >
          <Bold size={15} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editorState.canItalic}
          className={`${editorState.isItalic ? activeBtnClass : ""} ${btnClass}`}
        >
          <Italic size={15} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editorState.canStrike}
          className={`${editorState.isStrike ? activeBtnClass : ""} ${btnClass}`}
        >
          <Strikethrough size={15} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editorState.canCode}
          className={`${editorState.isCode ? activeBtnClass : ""} ${btnClass}`}
        >
          <Code size={15} />
        </button>
        <button
          className={btnClass}
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
        >
          <BrushCleaning size={15} />
        </button>

        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`${editorState.isParagraph ? activeBtnClass : ""} ${btnClass}`}
        >
          <CaseSensitive size={15} />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`${editorState.isHeading1 ? activeBtnClass : ""} ${btnClass}`}
        >
          <Heading1 size={15} />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`${editorState.isHeading2 ? activeBtnClass : ""} ${btnClass}`}
        >
          <Heading2 size={15} />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={`${editorState.isHeading3 ? activeBtnClass : ""} ${btnClass}`}
        >
          <Heading3 size={15} />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={`${editorState.isHeading4 ? activeBtnClass : ""} ${btnClass}`}
        >
          <Heading4 size={15} />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={`${editorState.isHeading5 ? activeBtnClass : ""} ${btnClass}`}
        >
          <Heading5 size={15} />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={`${editorState.isHeading6 ? activeBtnClass : ""} ${btnClass}`}
        >
          <Heading6 size={15} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`${editorState.isBulletList ? activeBtnClass : ""} ${btnClass}`}
        >
          <List size={15} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`${editorState.isOrderedList ? activeBtnClass : ""} ${btnClass}`}
        >
          <ListOrdered size={15} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`${editorState.isCodeBlock ? activeBtnClass : ""} ${btnClass}`}
        >
          <SquareDashedBottomCode size={15} />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`${editorState.isBlockquote ? activeBtnClass : ""} ${btnClass}`}
        >
          <Quote size={15} />
        </button>
        <button
          className={btnClass}
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <Minus size={15} />
        </button>
        <button
          className={btnClass}
          onClick={() => editor.chain().focus().setHardBreak().run()}
        >
          <TextWrap size={15} />
        </button>
        <button
          className={btnClass}
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editorState.canUndo}
        >
          <Undo size={15} />
        </button>
        <button
          className={btnClass}
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editorState.canRedo}
        >
          <Redo size={15} />
        </button>
      </div>
    </div>
  );
};
