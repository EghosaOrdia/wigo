import { useRef } from "react";
import { Bold, Italic, List, ListChecks, Link2 } from "lucide-react";

export default function DescriptionEditor({ value, onChange }) {
  const taRef = useRef(null);

  const getSelection = () => {
    const ta = taRef.current;
    return {
      start: ta.selectionStart,
      end: ta.selectionEnd,
      text: ta.value.slice(ta.selectionStart, ta.selectionEnd),
    };
  };

  const replace = (start, end, replacement, cursorAfter) => {
    const ta = taRef.current;
    const before = ta.value.slice(0, start);
    const after = ta.value.slice(end);
    const next = before + replacement + after;
    onChange(next);
    requestAnimationFrame(() => {
      const pos =
        cursorAfter !== undefined ? cursorAfter : start + replacement.length;
      ta.setSelectionRange(pos, pos);
      ta.focus();
    });
  };

  const applyFormat = (type) => {
    const ta = taRef.current;
    const { start, end, text } = getSelection();

    if (type === "bold") {
      if (text) {
        replace(start, end, `**${text}**`);
        requestAnimationFrame(() => ta.setSelectionRange(start + 2, end + 2));
      } else replace(start, end, "****", start + 2);
    }
    if (type === "italic") {
      if (text) {
        replace(start, end, `*${text}*`);
        requestAnimationFrame(() => ta.setSelectionRange(start + 1, end + 1));
      } else replace(start, end, "**", start + 1);
    }
    if (type === "ul") {
      const lineStart = ta.value.lastIndexOf("\n", start - 1) + 1;
      const line = ta.value.slice(lineStart, end);
      if (line.startsWith("- ")) {
        replace(lineStart, end, line.slice(2));
        return;
      }
      if (text) {
        replace(
          start,
          end,
          text
            .split("\n")
            .map((l) => "- " + l)
            .join("\n"),
        );
        return;
      }
      const needsNewline = start > 0 && ta.value[start - 1] !== "\n";
      const prefix = needsNewline ? "\n- " : "- ";
      replace(start, end, prefix, start + prefix.length);
    }
    if (type === "checklist") {
      const lineStart = ta.value.lastIndexOf("\n", start - 1) + 1;
      const line = ta.value.slice(lineStart, end);
      if (line.startsWith("- [ ] ")) {
        replace(lineStart, end, line.slice(6));
        return;
      }
      if (text) {
        replace(
          start,
          end,
          text
            .split("\n")
            .map((l) => "- [ ] " + l)
            .join("\n"),
        );
        return;
      }
      const needsNewline = start > 0 && ta.value[start - 1] !== "\n";
      const prefix = needsNewline ? "\n- [ ] " : "- [ ] ";
      replace(start, end, prefix, start + prefix.length);
    }
    if (type === "link") {
      if (text) {
        replace(start, end, `[${text}](url)`);
        requestAnimationFrame(() =>
          ta.setSelectionRange(
            start + text.length + 3,
            start + text.length + 6,
          ),
        );
      } else replace(start, end, "[](url)", start + 1);
    }
  };

  const handleKeydown = (e) => {
    const ta = taRef.current;
    if ((e.metaKey || e.ctrlKey) && e.key === "b") {
      e.preventDefault();
      applyFormat("bold");
    }
    if ((e.metaKey || e.ctrlKey) && e.key === "i") {
      e.preventDefault();
      applyFormat("italic");
    }

    if (e.key === "Enter") {
      const pos = ta.selectionStart;
      const lineStart = ta.value.lastIndexOf("\n", pos - 1) + 1;
      const line = ta.value.slice(lineStart, pos);
      const clMatch = line.match(/^(\s*- \[[ x]\] )/);
      const ulMatch = line.match(/^(\s*- )/);

      if (clMatch) {
        e.preventDefault();
        if (!line.slice(clMatch[1].length).trim()) replace(lineStart, pos, "");
        else replace(pos, pos, "\n- [ ] ", pos + 7);
      } else if (ulMatch) {
        e.preventDefault();
        if (!line.slice(ulMatch[1].length).trim()) replace(lineStart, pos, "");
        else replace(pos, pos, "\n- ", pos + 3);
      }
    }
  };

  const btnCls =
    "p-1.5 rounded-lg hover:bg-white transition-colors text-on-surface-variant focus:ring-2 focus:ring-primary/20 outline-none";

  return (
    <div className="flex flex-col gap-2 grow">
      <label className="text-xs font-bold uppercase tracking-widest text-outline ml-4">
        Description
      </label>
      <div className="bg-surface-container-low rounded-4xl overflow-hidden border border-transparent focus-within:border-primary/20 focus-within:ring-2 focus-within:ring-primary/10 transition-all">
        <div className="flex items-center gap-1 px-4 py-2 border-b border-outline-variant/10 bg-surface-container/30">
          <button className={btnCls} onClick={() => applyFormat("bold")}>
            <Bold size={18} />
          </button>
          <button className={btnCls} onClick={() => applyFormat("italic")}>
            <Italic size={18} />
          </button>
          <div className="w-px h-4 bg-outline-variant/30 mx-1" />
          <button className={btnCls} onClick={() => applyFormat("ul")}>
            <List size={18} />
          </button>
          <button className={btnCls} onClick={() => applyFormat("checklist")}>
            <ListChecks size={18} />
          </button>
          <div className="w-px h-4 bg-outline-variant/30 mx-1" />
          <button className={btnCls} onClick={() => applyFormat("link")}>
            <Link2 size={18} />
          </button>
        </div>
        <textarea
          ref={taRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeydown}
          className="w-full bg-transparent border-none focus:ring-0 min-h-40 p-6 text-sm leading-relaxed placeholder:text-outline/40 outline-none font-mono"
          placeholder="Describe your idea..."
        />
      </div>
    </div>
  );
}
