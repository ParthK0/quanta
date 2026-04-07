"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, MapPin, X, Calendar, Clock, Globe } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  type: string;
  location: string;
  status: "upcoming" | "past";
  description: string;
  image: string;
  accent: string;
  border: string;
}

const REAL_EVENTS: Event[] = [
  {
    id: 1,
    title: "INTRO TO DEEP LEARNING",
    date: "AUG 15, 2026",
    time: "18:00 - 20:00",
    type: "WORKSHOP",
    location: "MAIN AUDITORIUM",
    status: "upcoming",
    description: "Join us for a deep dive into the fundamentals of neural networks and deep learning. Perfect for beginners and enthusiasts looking to understand the core mechanics of AI.",
    image: "/next.svg",
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
    description: "48 hours of intense data analysis and problem solving. Compete with the best minds to uncover insights and build predictive models that matter.",
    image: "/next.svg",
    accent: "group-hover:bg-[#00E5FF] group-hover:text-black",
    border: "border-[#00E5FF]"
  },
  {
    id: 3,
    title: "INNOVISION: TCU VERSE BUILDSTATION",
    date: "JAN 10, 2026",
    time: "8 HOURS",
    type: "HACKATHON",
    location: "GALGOTIAS UNIVERSITY",
    status: "past",
    description: "An intensive 8-hour technology-building event organized by the Department of AI and Data Science. Participants tackled real-world challenges using emerging technologies, transforming creative concepts into functional prototypes. Features mentoring, brainstorming, and project pitching to bridge academic theory with industry standards.",
    image: "/events/event1.png",
    accent: "group-hover:bg-[#00E5FF] group-hover:text-black",
    border: "border-[#00E5FF]/50"
  },
  {
    id: 4,
    title: "HANDS-ON WITH NVIDIA: DEEP LEARNING",
    date: "DEC 13, 2025",
    time: "1 DAY",
    type: "WORKSHOP",
    location: "ONLINE / NVIDIA PLATFORM",
    status: "past",
    description: "A specialized NVIDIA workshop designed to bridge the gap between AI theory and real-world application. Participants used GPU-accelerated containers to implement deep learning workflows, covering data augmentation, neural network architectures, and transfer learning in a practical software environment.",
    image: "/events/event2.jpg",
    accent: "group-hover:bg-[#00E5FF] group-hover:text-black",
    border: "border-[#00E5FF]/50"
  },
  {
    id: 5,
    title: "ALL ABOUT MOVE: TECH SESSION",
    date: "DEC 20, 2025",
    time: "11:00 AM",
    type: "INVITED TALK",
    location: "SCSE, GALGOTIAS UNIVERSITY",
    status: "past",
    description: "An interactive session exploring emerging ideas in tech and career growth. Featured speakers Anshul Kanswal and Anmol Ratan shared their professional journeys and real-world exposure, helping students navigate challenges in AI and Data Science domains with a forward-looking mindset.",
    image: "/events/event3.png",
    accent: "group-hover:bg-[#00E5FF] group-hover:text-black",
    border: "border-[#00E5FF]/50"
  },
  {
    id: 6,
    title: "AI INNOVATION UNLEASHED",
    date: "NOV 21-22, 2025",
    time: "2 DAYS",
    type: "WORKSHOP",
    location: "GALGOTIAS UNIVERSITY",
    status: "past",
    description: "A transformative workshop covering Grant Writing and hands-on Generative AI with NVIDIA tech. Serving as a nexus for academic excellence and technical prowess, it equipped students with the resilience and expertise to pioneer groundbreaking solutions in the evolving digital era.",
    image: "/events/event4.png",
    accent: "group-hover:bg-[#00E5FF] group-hover:text-black",
    border: "border-[#00E5FF]/50"
  }
];

export default function EventsPage() {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const filteredEvents = REAL_EVENTS.filter((e) => filter === "all" || e.status === filter);

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
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedEvent(event)}
                className={`group relative flex flex-col md:flex-row justify-between items-start md:items-center border border-white/20 bg-[#0B1120] hover:border-[#00E5FF]/50 transition-all duration-300 p-8 cursor-pointer ${event.accent}`}
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
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
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

        {/* Event Detail Modal */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#0B1120]/95 backdrop-blur-xl"
              onClick={(e) => {
                if (e.target === e.currentTarget) setSelectedEvent(null);
              }}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                className="relative w-full max-w-4xl max-h-[90vh] bg-[#0B1120] border-2 border-[#00E5FF] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-6 right-6 z-10 p-2 bg-[#00E5FF] text-black hover:scale-110 transition-transform"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col lg:flex-row">
                  {/* Image Section */}
                  <div className="lg:w-1/2 h-64 lg:h-auto relative bg-black flex items-center justify-center border-b lg:border-b-0 lg:border-r border-[#00E5FF]/20 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={selectedEvent.image} 
                      alt={selectedEvent.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent opacity-60" />
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-1/2 p-10 flex flex-col">
                    <span className="inline-block px-3 py-1 text-xs font-mono font-bold tracking-widest border border-[#00E5FF] text-[#00E5FF] w-fit mb-6">
                      {selectedEvent.type}
                    </span>
                    
                    <h2 className="text-4xl md:text-5xl font-black font-syne uppercase tracking-tighter leading-none mb-8">
                      {selectedEvent.title}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 font-mono text-sm tracking-widest uppercase">
                      <div className="flex items-center text-white/50">
                        <Calendar className="w-5 h-5 mr-3 text-[#00E5FF]" />
                        <span>{selectedEvent.date}</span>
                      </div>
                      <div className="flex items-center text-white/50">
                        <Clock className="w-5 h-5 mr-3 text-[#00E5FF]" />
                        <span>{selectedEvent.time}</span>
                      </div>
                      <div className="flex items-center text-white/50">
                        <MapPin className="w-5 h-5 mr-3 text-[#00E5FF]" />
                        <span>{selectedEvent.location}</span>
                      </div>
                      <div className="flex items-center text-white/50">
                        <Globe className="w-5 h-5 mr-3 text-[#00E5FF]" />
                        <span className="text-[#00E5FF]">{selectedEvent.status}</span>
                      </div>
                    </div>

                    <div className="space-y-4 font-mono text-white/80 leading-relaxed">
                      <p>{selectedEvent.description}</p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10">
                      <button 
                        onClick={() => setSelectedEvent(null)}
                        className="w-full py-4 bg-transparent border border-[#00E5FF] text-[#00E5FF] font-bold font-mono tracking-widest hover:bg-[#00E5FF] hover:text-black transition-all group"
                      >
                        CLOSE <span className="inline-block transition-transform group-hover:rotate-45 ml-2">_</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
