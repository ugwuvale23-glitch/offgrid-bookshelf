import React from "react";
import { Check, Flame, Trophy, Droplets, Zap, Shield, Home, Compass, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Task {
  id: string;
  category: "water" | "energy" | "shelter" | "projects";
  title: string;
  xp: number;
  bookLink: string;
  bookVolume: string;
  tip: string;
}

const ROADMAP_TASKS: Task[] = [
  // WATER
  {
    id: "wat-1",
    category: "water",
    title: "Calculate Rooftop Runoff Yield",
    xp: 15,
    bookVolume: "Volume I & IV",
    bookLink: "#book-card-4",
    tip: "Use the formula: 1 inch of rain on 1,000 sq ft yields 623 gallons of pure water."
  },
  {
    id: "wat-2",
    category: "water",
    title: "Construct PVC First-Flush Diverter",
    xp: 25,
    bookVolume: "Volume I",
    bookLink: "#book-card-1",
    tip: "Diverts the first dirty gallon of rainfall containing 95% of atmospheric debris."
  },
  {
    id: "wat-3",
    category: "water",
    title: "Anchor Water Storage Cisterns",
    xp: 20,
    bookVolume: "Volume I & IV",
    bookLink: "#book-card-1",
    tip: "Always use food-grade, UV-shielded polyethylene tanks on level, gravel-packed pads."
  },
  {
    id: "wat-4",
    category: "water",
    title: "Install Multi-Stage Micron Filtration",
    xp: 25,
    bookVolume: "Volume I",
    bookLink: "#book-card-1",
    tip: "A 5-micron sediment filter followed by active carbon block renders rainwater drinkable."
  },

  // ENERGY
  {
    id: "nrg-1",
    category: "energy",
    title: "Perform Appliance Wattage Audit",
    xp: 15,
    bookVolume: "Volume IV",
    bookLink: "#book-card-4",
    tip: "List all items, calculate daily watt-hours, and reduce phantom standby loads first."
  },
  {
    id: "nrg-2",
    category: "energy",
    title: "Wire Monocrystalline Solar Panels",
    xp: 25,
    bookVolume: "Volume I",
    bookLink: "#book-card-1",
    tip: "Series connections boost voltage for long runs; parallel wiring maintains current."
  },
  {
    id: "nrg-3",
    category: "energy",
    title: "Assemble LiFePO4 Battery Bank",
    xp: 25,
    bookVolume: "Volume I",
    bookLink: "#book-card-1",
    tip: "Lithium iron phosphate cells offer 4,000+ deep cycles, far outperforming lead-acid."
  },
  {
    id: "nrg-4",
    category: "energy",
    title: "Mount Inverter & AC Breaker Panel",
    xp: 20,
    bookVolume: "Volume IV",
    bookLink: "#book-card-4",
    tip: "A Pure Sine Wave inverter guarantees clean AC power, safeguarding sensitive laptops."
  },

  // SHELTER
  {
    id: "shl-1",
    category: "shelter",
    title: "Perform Site Soil Percolation Test",
    xp: 15,
    bookVolume: "Volume II",
    bookLink: "#book-card-2",
    tip: "Ensures soil absorbs water efficiently before selecting your septic or composting setup."
  },
  {
    id: "shl-2",
    category: "shelter",
    title: "Pour Gravel-Packed Pier Foundation",
    xp: 25,
    bookVolume: "Volume II",
    bookLink: "#book-card-2",
    tip: "Post-and-pier concrete piers keep your cabin elevated, safe from moisture and pests."
  },
  {
    id: "shl-3",
    category: "shelter",
    title: "Frame Cabin Floor & Rafters",
    xp: 30,
    bookVolume: "Volume II",
    bookLink: "#book-card-2",
    tip: "Standard 16-inch on-center framing creates bulletproof timber skeleton structures."
  },
  {
    id: "shl-4",
    category: "shelter",
    title: "Seal Off-Grid Corrugated Roof",
    xp: 20,
    bookVolume: "Volume II",
    bookLink: "#book-card-2",
    tip: "Galvanized corrugated sheet metal resists heavy snow, UV, and creates maximum runoff."
  },

  // PROJECTS
  {
    id: "prj-1",
    category: "projects",
    title: "Map Permaculture Zone 1 Garden",
    xp: 15,
    bookVolume: "Volume III",
    bookLink: "#book-card-3",
    tip: "Situate high-intensity herbs, kitchen garden, and starter seedlings within steps of the porch."
  },
  {
    id: "prj-2",
    category: "projects",
    title: "Construct Deep-Litter Coop",
    xp: 20,
    bookVolume: "Volume III",
    bookLink: "#book-card-3",
    tip: "Maintains optimal hygiene, natural composting soil heat, and harvests organic egg protein."
  },
  {
    id: "prj-3",
    category: "projects",
    title: "Dig Passive Irrigation Swales",
    xp: 25,
    bookVolume: "Volume III",
    bookLink: "#book-card-3",
    tip: "On-contour dirt mounds capture and retain ground moisture, reducing manual watering."
  },
  {
    id: "prj-4",
    category: "projects",
    title: "Excavate Sub-Ground Root Cellar",
    xp: 25,
    bookVolume: "Volume III",
    bookLink: "#book-card-3",
    tip: "A simple 6-ft deep chamber preserves root vegetables for months using ground thermal memory."
  }
];

export default function SovereigntyRoadmap() {
  const [checkedIds, setCheckedIds] = React.useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("sovereignty-roadmap-checklist");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeTab, setActiveTab] = React.useState<"all" | "water" | "energy" | "shelter" | "projects">("all");

  const handleToggle = (id: string) => {
    let nextChecked = [...checkedIds];
    if (nextChecked.includes(id)) {
      nextChecked = nextChecked.filter((i) => i !== id);
    } else {
      nextChecked.push(id);
    }
    setCheckedIds(nextChecked);
    try {
      localStorage.setItem("sovereignty-roadmap-checklist", JSON.stringify(nextChecked));
    } catch (e) {
      console.error("Failed storing checklist items", e);
    }
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset your Sovereignty Roadmap progress?")) {
      setCheckedIds([]);
      try {
        localStorage.removeItem("sovereignty-roadmap-checklist");
      } catch (e) {
        console.error(e);
      }
    }
  };

  // Math totals
  const totalAvailableXP = ROADMAP_TASKS.reduce((acc, t) => acc + t.xp, 0);
  const earnedXP = ROADMAP_TASKS.filter((t) => checkedIds.includes(t.id)).reduce((acc, t) => acc + t.xp, 0);
  const progressPercent = Math.min(100, Math.round((earnedXP / totalAvailableXP) * 100));

  // Ranks
  let rankName = "Pioneer Novice";
  let rankDesc = "You are taking your very first steps toward breaking away from municipal grids.";
  let rankIcon = <Compass className="w-6 h-6 text-stone-400" />;

  if (earnedXP >= 50 && earnedXP < 140) {
    rankName = "Homestead Apprentice";
    rankDesc = "You have active DIY setups and are beginning to harness true off-grid resources.";
    rankIcon = <Home className="w-6 h-6 text-amber-600" />;
  } else if (earnedXP >= 140 && earnedXP < 250) {
    rankName = "Resource Craftsman";
    rankDesc = "Substantial resource mastery achieved. Your independence is becoming airtight.";
    rankIcon = <Shield className="w-6 h-6 text-forest-600" />;
  } else if (earnedXP >= 250) {
    rankName = "Sovereign Master";
    rankDesc = "Complete off-grid independence unlocked. You are the ultimate master of your water, light, and soil.";
    rankIcon = <Trophy className="w-6 h-6 text-accent-gold" />;
  }

  const filteredTasks = ROADMAP_TASKS.filter(
    (t) => activeTab === "all" || t.category === activeTab
  );

  return (
    <div className="bg-white rounded-3xl border border-earth-200 p-6 md:p-8 shadow-md">
      {/* Upper header block */}
      <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between pb-6 border-b border-earth-100">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-forest-50 text-forest-800 border border-forest-100">
            <Flame className="w-3.5 h-3.5 text-forest-600 animate-pulse" /> Live Sovereignty Planner
          </div>
          <h3 className="font-serif text-2xl font-bold text-earth-950 tracking-tight">
            Off-Grid Blueprint &amp; Readiness Checklist
          </h3>
          <p className="text-sm text-forest-700 max-w-xl font-medium">
            Plan your physical homestead by checking off key targets. Earn XP points and see where Asher’s textbooks guide you!
          </p>
        </div>

        {/* Current XP Display box */}
        <div className="flex items-center gap-4 bg-earth-50/50 p-4 rounded-2xl border border-earth-100 w-full lg:w-auto shrink-0">
          <div className="p-3 bg-white rounded-xl border border-earth-200 shadow-xs shrink-0">
            {rankIcon}
          </div>
          <div className="text-left">
            <span className="text-[10px] uppercase font-bold tracking-wider text-earth-800 block">Current Rank</span>
            <span className="font-serif font-bold text-base text-earth-950 block">{rankName}</span>
            <span className="text-[11px] text-forest-600 leading-none">{earnedXP} / {totalAvailableXP} XP Earned</span>
          </div>
        </div>
      </div>

      {/* Progress Bar Section */}
      <div className="py-6 space-y-2">
        <div className="flex items-center justify-between text-xs font-bold text-earth-800">
          <span>Overall Independence Progress</span>
          <span className="text-forest-700 bg-forest-50 px-2 py-0.5 rounded-md border border-forest-100 font-mono">
            {progressPercent}% Complete
          </span>
        </div>
        <div className="w-full h-3.5 bg-earth-100 rounded-full overflow-hidden border border-earth-200/50 relative">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-forest-600 via-forest-800 to-forest-900 rounded-full"
          />
        </div>
        <p className="text-[11px] text-forest-600 italic">
          {rankDesc}
        </p>
      </div>

      {/* Category Tabs & Reset */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-t border-earth-100">
        <div className="flex flex-wrap gap-1.5 bg-earth-50 p-1 rounded-xl border border-earth-200 w-fit">
          {(["all", "water", "energy", "shelter", "projects"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === tab
                  ? "bg-forest-900 text-white shadow-xs"
                  : "text-earth-800 hover:bg-earth-100/50 hover:text-earth-950"
              }`}
            >
              {tab === "all" ? "Show All" : tab}
            </button>
          ))}
        </div>

        {checkedIds.length > 0 && (
          <button
            onClick={handleReset}
            className="text-xs font-semibold text-rose-600 hover:text-rose-800 hover:underline flex items-center gap-1 cursor-pointer self-end sm:self-auto"
          >
            Reset Progress
          </button>
        )}
      </div>

      {/* Grid checklist card layouts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        <AnimatePresence mode="popLayout">
          {filteredTasks.map((task) => {
            const isChecked = checkedIds.includes(task.id);
            const categoryIcon = 
              task.category === "water" ? <Droplets className="w-4 h-4 text-sky-600" /> :
              task.category === "energy" ? <Zap className="w-4 h-4 text-amber-500" /> :
              task.category === "shelter" ? <Home className="w-4 h-4 text-emerald-600" /> :
              <Compass className="w-4 h-4 text-stone-600" />;

            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                key={task.id}
                onClick={() => handleToggle(task.id)}
                className={`group flex items-start gap-4 p-4 rounded-2xl border transition-all duration-200 select-none cursor-pointer text-left relative overflow-hidden ${
                  isChecked 
                    ? "bg-forest-50/40 border-forest-200/60 shadow-inner" 
                    : "bg-white border-earth-200 hover:border-earth-300 hover:shadow-sm"
                }`}
              >
                {/* Checkbox circle element */}
                <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border mt-0.5 transition-all ${
                  isChecked 
                    ? "bg-forest-800 border-forest-800 text-white" 
                    : "border-earth-300 group-hover:border-earth-400 bg-white"
                }`}>
                  {isChecked && <Check className="w-3.5 h-3.5 stroke-[3px]" />}
                </div>

                <div className="flex-1 space-y-1 text-left relative z-10">
                  <div className="flex items-center gap-1.5">
                    <span className="p-1 rounded bg-earth-50 border border-earth-200/50 shrink-0">
                      {categoryIcon}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-earth-800">
                      {task.category}
                    </span>
                    <span className="ml-auto inline-flex items-center gap-0.5 px-2 py-0.5 rounded bg-amber-50 text-[9px] font-extrabold text-amber-800 border border-amber-100">
                      +{task.xp} XP
                    </span>
                  </div>

                  <h4 className={`text-sm font-bold leading-snug transition-colors ${isChecked ? "text-forest-950 line-through opacity-70" : "text-earth-950"}`}>
                    {task.title}
                  </h4>

                  <p className="text-xs text-forest-700/80 leading-normal line-clamp-2">
                    {task.tip}
                  </p>

                  {/* Textbook Guide Reference */}
                  <div className="pt-2 flex items-center justify-between text-[10px]">
                    <span className="text-stone-400 font-medium">Mapped Tutorial:</span>
                    <a 
                      href={task.bookLink}
                      onClick={(e) => {
                        e.stopPropagation();
                        const el = document.getElementById(task.bookLink.substring(1));
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="inline-flex items-center gap-0.5 text-forest-800 hover:text-accent-gold font-bold transition-all underline"
                    >
                      <Sparkles className="w-2.5 h-2.5" /> Study {task.bookVolume}
                    </a>
                  </div>
                </div>

                {/* Micro clean background subtle glow */}
                <div className={`absolute -right-8 -bottom-8 w-24 h-24 rounded-full blur-2xl pointer-events-none transition-all ${isChecked ? "bg-forest-100/40" : "bg-transparent"}`} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Helpful Hint banner */}
      <div className="mt-6 p-4 rounded-2xl bg-earth-50 border border-earth-200 text-xs text-earth-800 text-center font-medium leading-relaxed">
        🏡 Progress is saved automatically. Complete physical homestead tasks to unlock the ultimate <span className="font-serif font-bold text-forest-900">Sovereign Master</span> rank! All steps are backed by detailed technical design specifications found inside the booklets.
      </div>
    </div>
  );
}
