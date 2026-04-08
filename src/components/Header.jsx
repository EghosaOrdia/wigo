import { LayoutGrid, List, Moon, Search } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto bg-white/70  backdrop-blur-3xl docked full-width top-0 sticky gap-x-8 no-border bg-linear-to-b from-slate-50/50 shadow-sm shadow-blue-900/5 z-40">
      <div className="flex items-center gap-6 grow max-w-2xl">
        <div className="relative w-full group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
          <input
            className="w-full bg-surface-container-highest/50 border-none rounded-full py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all text-sm font-medium placeholder:text-slate-400"
            placeholder="Search your sparks..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
            <LayoutGrid />
          </button>
          <button className="p-2 rounded-xl text-slate-400 hover:text-on-surface transition-colors">
            <List />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-500 hover:bg-slate-100/50 rounded-full transition-all">
          <Moon />
        </button>
        <div className="h-10 w-10 rounded-full overflow-hidden bg-primary-container p-0.5">
          <img
            className="h-full w-full object-cover rounded-full"
            data-alt="portrait of a creative professional woman with a bright friendly expression in a modern studio setting"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxOM1qcG6sQz2IV4Nt87PXh_kIJs1OpS7z9qMrOe4YmXPuvRWcQDEIaaW5PeWCkxKNCi7Ac6_7c5vsx1oJcov6oIzASQDVmKU0s98akm5-m-WpfIcpWsfyBUVvOJ_x-WoEE602Ji3DQMK3qdyQaYJjYUNEL_-oOayCxHefudDPV5dHs9z3-Oo6nW88TQAwb0oz23TynbSaKndtg4G0OTQHrIby_iRqQEtYEKXdwoDQJ2D--qZuFrQ8UF1vb-bOEaXLA0tvujlnyv0"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
