import {
  CirclePlus,
  List,
  Pin,
  Play,
  Plus,
  Sparkles,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";
import { categoryColors, tasks } from "../utils/constants";
import Card from "./_dashboard/Card";
import Random from "./_dashboard/Random";
import Snippet from "./_dashboard/Snippet";

function getRandomHexColor() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
}

const Dashboard = () => {
  const [ideas, setIdeas] = useState(tasks);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // async function getTodos() {
    //   const { data: ideas } = await supabase.from("Idea").select();
    //   if (ideas) {
    //     setIdeas(ideas);
    //     const uniqueCategories = [
    //       ...new Set(ideas.map((item) => item.category)),
    //     ];
    //     setCategories(uniqueCategories);
    //   }
    // }
    // getTodos();
    function getCategories() {
      const uniqueCategories = [...new Set(ideas.map((idea) => idea.category))];
      setCategories(uniqueCategories);
    }

    getCategories();
  }, [ideas]);

  return (
    <div className="p-8 max-w-screen-2xl mx-auto w-full">
      {/* <!-- Tag Filters --> */}
      <div className="flex flex-wrap items-center gap-3 mb-10">
        <button className="px-5 py-2 rounded-full bg-primary text-on-primary font-bold text-sm transition-transform hover:scale-105">
          #all_ideas
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-5 py-2 rounded-full ${categoryColors[cat]} font-bold text-sm transition-transform hover:scale-105`}
          >
            #{cat}
          </button>
        ))}

        <button className="p-2 rounded-full bg-surface-container-low text-on-surface-variant flex items-center justify-center">
          <Plus />
        </button>
      </div>
      {/* <!-- Bento Grid Layout --> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-start">
        {ideas.map((idea) => (
          <Card key={idea.id} idea={idea} />
        ))}

        {/* <!-- Empty State Card (Add New) --> */}
        <div className="group border-2 border-dashed border-outline-variant/30 rounded-4xl p-8 flex flex-col items-center justify-center gap-4 text-outline hover:border-primary/50 hover:text-primary transition-all cursor-pointer">
          <CirclePlus />
          <span className="font-bold text-sm tracking-wide text-center">
            Drop an image or note here
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
