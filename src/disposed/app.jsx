import { Bell, Clock, Plus } from "lucide-react";
import "./App.css";
import { ideas } from "./disposed/constants/variables";
import { useState } from "react";
import { DragDropProvider } from "@dnd-kit/react";
import DraftColumn from "./disposed/components/DraftColumn";
import IdeaColumn from "./disposed/components/IdeaColumn";
import ReadyColumn from "./disposed/components/ReadyColumn";

function App() {
  const [tasks, setTasks] = useState(ideas);

  const handleDragEnd = (event) => {
    const { operation } = event;

    const taskId = operation?.source?.id;
    const newStatus = operation?.target?.id;

    if (!taskId || !newStatus) return;

    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId || task.id === Number(taskId)
          ? {
              ...task,
              status: newStatus,
            }
          : task,
      ),
    );
  };

  return (
    <>
      <DragDropProvider onDragEnd={handleDragEnd}>
        <main className="w-full h-screen max-w-360 mx-auto overflow-hidden">
          <header className="w-full fixed left-0 top-0 z-50 bg-white border-b-4 border-zinc-100  shadow-[0_4px_0_0_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
              <div className="flex items-center gap-8">
                <span className="text-2xl font-black text-[#58CC02] tracking-tight">
                  Wiggle
                </span>
                <nav className="hidden md:flex gap-6 items-center">
                  <a
                    className="text-[#58CC02] border-b-4 border-[#58CC02] pb-1 font-bold font-plus-jakarta"
                    href="#"
                  >
                    Board
                  </a>
                  <a
                    className="text-zinc-500 dark:text-zinc-400 font-bold font-plus-jakarta hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-transform active:scale-95"
                    href="#"
                  >
                    Drafts
                  </a>
                  <a
                    className="text-zinc-500 dark:text-zinc-400 font-bold font-plus-jakarta hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-transform active:scale-95"
                    href="#"
                  >
                    Archive
                  </a>
                  <a
                    className="text-zinc-500 dark:text-zinc-400 font-bold font-plus-jakarta hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-transform active:scale-95"
                    href="#"
                  >
                    Settings
                  </a>
                </nav>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 rounded-full hover:bg-zinc-50 transition-all">
                  <Bell className="text-on-surface-variant" />
                </button>
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center border-2 border-white overflow-hidden shadow-sm">
                  <img
                    alt="Profile"
                    className="w-full h-full object-cover"
                    data-alt="User avatar with a friendly cartoon face"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlfZV7uhGQc5J19z1yL3IE65S5vBCRetL0wSHmV8aDwjLMDKDsYoNtGKToWOx5E4iSvhNoxh8KQkGVtLN2cVRkOUPJDvCqK_Zwzu-NrdXcoTsFh0Tz6kZY8qrat4iyWDHCKfvRYaST74jyZosxaW-RMpAt8VTXsE4voT8jkS0ZVUxPNKgbX7fn_OEkMOHplaug3KxMDyKmq8CohDVWPjojeMuG_xcg6ZSJFmK8sY-ig_FGuU977PfeKdImw016mwMvKCoyG1KAzPY"
                  />
                </div>
              </div>
            </div>
          </header>
          <button className="fixed bottom-8 right-8 z-60 w-16 h-16 bg-tertiary-container text-on-tertiary-container rounded-2xl tactile-button-shadow border-b-4 border-tertiary flex items-center justify-center group active:translate-y-1 active:border-b-0 transition-all">
            <Plus className=" font-bold group-hover:rotate-90 transition-transform" />
          </button>
          <section className="flex-1 h-screen grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-14 pt-24 overflow-x-auto">
            {/* IDEA */}
            <IdeaColumn ideas={tasks.filter((t) => t.status == "idea")} />

            {/* DRAFT */}
            <DraftColumn ideas={tasks.filter((t) => t.status == "draft")} />

            {/* READY */}
            <ReadyColumn ideas={tasks.filter((t) => t.status == "ready")} />
          </section>
        </main>
      </DragDropProvider>
    </>
  );
}

export default App;
