import { useRef, useState } from "react";

export default function ColorSelector() {
  const [hex, setHex] = useState("FFFFFF");
  const pickerRef = useRef(null);

  const isValidHex = (h) =>
    /^[0-9A-Fa-f]{6}$/.test(h) || /^[0-9A-Fa-f]{3}$/.test(h);

  const expandHex = (h) =>
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h;

  const onPickerChange = (e) => {
    setHex(e.target.value.replace("#", "").toUpperCase());
  };

  const onHexInput = (e) => {
    const clean = e.target.value.replace(/[^0-9A-Fa-f]/g, "").toUpperCase();
    setHex(clean);
  };

  const onHexBlur = () => {
    if (isValidHex(hex)) {
      setHex(expandHex(hex));
    } else {
      setHex("FFFFFF");
    }
  };

  const fullHex = isValidHex(hex) ? expandHex(hex) : "FFFFFF";

  return (
    <div className="flex items-center gap-3 bg-surface-container-low rounded-full px-4 py-2 w-fit">
      <button
        onClick={() => pickerRef.current.click()}
        className="w-8 h-8 rounded-full border-2 border-white shadow-sm transition-transform active:scale-90"
        style={{ background: `#${fullHex}` }}
      />
      <input
        type="color"
        ref={pickerRef}
        value={`#${fullHex}`}
        onChange={onPickerChange}
        className="sr-only"
      />
      <div className="flex items-center gap-1">
        <span className="text-sm font-medium text-on-surface-variant">#</span>
        <input
          type="text"
          value={hex}
          maxLength={6}
          onChange={onHexInput}
          onBlur={onHexBlur}
          className="text-sm font-medium text-on-surface-variant bg-transparent border-none outline-none w-16 font-mono"
        />
      </div>
    </div>
  );
}
