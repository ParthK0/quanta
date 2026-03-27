"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, MapPin } from "lucide-react";

const MOCK_EVENTS = [
  {
    id: 1,
    title: "INTRO TO DEEP LEARNING",
    date: "AUG 15, 2026",
    time: "18:00 - 20:00",
    type: "WORKSHOP",
    location: "MAIN AUDITORIUM",
    status: "upcoming",
    accent: "group-hover:bg-[#00E5FF] group-hover:text-black",
    border: "border-[#00E5FF]"
  },
  {
    id: 2,
    title: "QUANTA DATATHON 2026",
    date: "SEP 20-22, 2026",
    time: "48 HOURS",
    type: "HACKATHON",
    location: "INNOVATION HUB",
    status: "upcoming",
    accent: "group-hover:bg-[#00E5FF] group-hover:text-black",
    border: "border-[#00E5FF]"
  },
  {
    id: 3,
    title: "AI IN HEALTHCARE",
    date: "JUL 10, 2026",
    time: "17:00",
    type: "GUEST TALK",
    location: "VIRTUAL",
    status: "past",
    accent: "group-hover:bg-[#00E5FF] group-hover:text-black",
    border: "border-[#00E5FF]/50"
  },
  {
    id: 4,
    title: "PYTHON FOR DATA ANALYSIS",
    date: "JUN 05, 2026",
    time: "16:00 - 18:00",
    type: "WORKSHOP",
    location: "LAB 4B",
    status: "past",
    accent: "group-hover:bg-[#00E5FF] group-hover:text-black",
    border: "border-[#00E5FF]"
  }
];

export default function EventsPage() {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");
  const filteredEvents = MOCK_EVENTS.filter((e) => filter === "all" || e.status === filter);

  return (
    <div className="flex flex-col min-h-screen bg-[#0B1120] selection:bg-[#00E5FF] selection:text-black pt-32 pb-16">
      <div className="container px-6 md:px-12 lg:px-24">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-2 border-white/20 pb-8 gap-8">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-[8rem] font-bold font-syne text-white uppercase tracking-tighter leading-none"
            >
              EVENTS<span className="text-[#00E5FF] animate-pulse">_</span>
            </motion.h1>
            <p className="text-white/50 font-mono mt-4 tracking-widest uppercase">// HACKATHONS. WORKSHOPS. TALKS.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex border border-white/20"
          >
            {["all", "upcoming", "past"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-6 py-3 text-xs md:text-sm font-mono font-bold uppercase tracking-widest transition-colors ${
                  filter === f 
                    ? "bg-[#00E5FF] text-black" 
                    : "bg-transparent text-white/50 hover:bg-white/5"
                } border-r border-white/20 last:border-r-0`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Brutalist Events List */}
        <motion.div layout className="flex flex-col gap-6">
          <AnimatePresence>
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className={`group relative flex flex-col md:flex-row justify-between items-start md:items-center border border-white/20 bg-[#0B1120] transition-all duration-300 p-8 cursor-pointer ${event.accent}`}
              >
                <div className="flex flex-col space-y-2 mb-6 md:mb-0">
                  <span className={`inline-block px-3 py-1 text-xs font-mono font-bold tracking-widest border ${event.border} text-white group-hover:border-black group-hover:text-black w-fit mb-2 transition-colors`}>
                    {event.type}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-black font-syne uppercase tracking-tighter leading-none">
                    {event.title}
                  </h3>
                </div>

                <div className="flex flex-col md:text-right space-y-1 font-mono text-sm tracking-widest opacity-70 group-hover:opacity-100">
                  <div className="flex items-center md:justify-end">
                    <Terminal className="w-4 h-4 mr-2" />
                    {event.date} // {event.time}
                  </div>
                  <div className="flex items-center md:justify-end">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-24 border border-white/10 mt-6 bg-[#050A14]">
            <p className="font-mono text-[#00E5FF] uppercase tracking-widest">{"> NO EVENTS MATCHING FILTER_"}</p>
          </div>
        )}

      </div>
    </div>
  );
}
