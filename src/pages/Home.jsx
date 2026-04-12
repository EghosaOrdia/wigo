import { Plus } from "lucide-react";
import { useState } from "react";
import Aside from "../components/Aside";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import AddIdea from "../components/_dashboard/AddIdea";

function Home() {
  const [isEditingIdea, setIsEditingIdea] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {isEditingIdea && <AddIdea setIsEditingIdea={setIsEditingIdea} />}

      <Aside />
      <main className="grow flex flex-col overflow-y-auto hide-scrollbar bg-surface relative">
        <Header />
        <Dashboard />
        <button
          onClick={() => setIsEditingIdea(true)}
          className="hidden md:flex fixed bottom-12 right-12 z-50 items-center gap-3 bg-linear-to-br from-blue-600 to-blue-400 text-white rounded-full px-8 py-5 shadow-[0_20px_50px_rgba(0,122,255,0.3)] hover:scale-110 hover:rotate-3 transition-transform duration-300 active:scale-90 cursor-pointer"
        >
          <Plus />
          <span className="material-symbols-outlined">Add Idea</span>
        </button>
      </main>
    </div>
  );
}

export default Home;
