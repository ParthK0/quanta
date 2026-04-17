"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Star, Target } from "lucide-react";

const ACHIEVEMENTS = [
  {
    title: "1ST PLACE - GLOBAL DATATHON",
    desc: "Secured 1st out of 500+ global competing institutions predicting climate anomalies via remote telemetry.",
    icon: Trophy,
    border: "border-[#00E5FF]/50 hover:bg-[#00E5FF] group-hover:text-black"
  },
  {
    title: "BEST OPEN SOURCE",
    desc: "Recognized by the National AI Foundation for raw architectural contributions to the NeuroScan framework.",
    icon: Star,
    border: "border-[#00E5FF]/50 hover:bg-[#00E5FF] group-hover:text-black"
  },
  {
    title: "ELITE TECH OUTPOST",
    desc: "Consecutive institutional recognition for executing scalable student-led engineering workshops.",
    icon: Target,
    border: "border-[#00E5FF]/50 hover:bg-[#00E5FF] group-hover:text-black"
  }
];

const GALLERY = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
  "https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=800&q=80",
  "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
  "https://images.unsplash.com/photo-1574169208507-84376144848b?w=800&q=80",
  "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?w=800&q=80"
];

export default function GalleryPage() {
  const [showAllLogs, setShowAllLogs] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#0B1120] selection:bg-[#00E5FF] selection:text-black pt-32 pb-16">
      <div className="container px-6 md:px-12 lg:px-24">

        {/* Header */}
        <div className="mb-20 border-b border-white/20 pb-8">
          <motion.h1

            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[8rem] font-black font-syne text-white uppercase tracking-tighter leading-none"
          >
            LEGACY<span className="text-[#00E5FF] animate-pulse">_</span>
          </motion.h1>
          <p className="text-white/50 font-mono mt-6 tracking-widest uppercase">// ARCHIVES OF SUCCESS</p>
        </div>

        {/* Active Archive Highlight - Overlapping Image Composition */}
        <div className="w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">
          {/* Legacy Context */}
          <div className="flex-1 w-full max-w-2xl lg:max-w-none">
            <h2 className="text-4xl md:text-5xl font-black font-syne text-transparent uppercase tracking-tighter"
              style={{ WebkitTextStroke: "1px white" }}>
              {"<sys>"} HIGHLIGHT {"</sys>"}
            </h2>
            <div className="mt-8 space-y-6">
              <p className="text-xl md:text-2xl text-[#00E5FF] font-mono tracking-widest uppercase">
                The Workspace Flow.
              </p>
              <p className="text-base md:text-xl text-white/60 font-mono uppercase tracking-widest leading-relaxed">
                A visual representation of late nights, deep hardware tuning, and our relentless pursuit of state-of-the-art predictive architectures.
              </p>
            </div>
          </div>

          {/* Overlapping Image Composition */}
          <div className="flex-1 w-full relative min-h-[400px] md:min-h-[550px] mt-10 lg:mt-0">
            {/* Reference Frame Accent */}
            <div className="absolute -right-4 top-4 md:-right-8 md:top-8 w-full h-[90%] border border-[#00E5FF]/20 mix-blend-screen pointer-events-none" />

            {/* Large Back Image (p2) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute right-0 top-0 w-[80%] h-[85%] border border-white/10 bg-[#050A14] overflow-hidden"
            >
              <img
                src="/p2.jpeg"
                alt="Quanta Legacy Background"
                className="w-full h-full object-cover transition-opacity duration-500 hover:scale-105"
              />
            </motion.div>

            {/* Small Overlapping Front Image (whatsapp) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute left-0 bottom-0 w-[60%] h-[55%] border-8 border-[#0B1120] bg-[#050A14] overflow-hidden z-10 shadow-2xl shadow-black/80"
            >
              <img
                src="/whatsapp.jpeg"
                alt="Quanta Highlight"
                className="w-full h-full object-cover transition-opacity duration-500 hover:scale-105"
              />
            </motion.div>

            {/* Decorative Corner */}
            <div className="absolute left-10 -bottom-8 w-24 h-24 border-b-2 border-l-2 border-[#00E5FF]/50 z-0 pointer-events-none" />
          </div>
        </div>

        {/* Brutalist Achievements Strip */}
        <div className="grid md:grid-cols-3 gap-0 border border-white/20 mb-24">
          {ACHIEVEMENTS.map((ach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`group border border-white/20 p-10 flex flex-col justify-start transition-colors duration-300 cursor-default ${ach.border}`}
            >
              <ach.icon className="w-12 h-12 text-white group-hover:text-black mb-8 transition-colors" strokeWidth={1.5} />
              <h3 className="text-3xl font-black font-syne text-white group-hover:text-black uppercase tracking-tighter mb-4 transition-colors">
                {ach.title}
              </h3>
              <p className="font-mono text-sm opacity-60 group-hover:opacity-100 group-hover:text-black uppercase tracking-widest leading-relaxed transition-colors">
                {ach.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visual Logs - Grid View */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
            <h2 className="text-4xl md:text-5xl font-black font-syne uppercase tracking-tighter text-white border-l-8 border-[#00E5FF] pl-6">
              VISUAL LOGS
            </h2>
            {GALLERY.length > 6 && (
              <button
                onClick={() => setShowAllLogs(!showAllLogs)}
                className="px-6 py-3 border border-[#00E5FF] text-[#00E5FF] hover:bg-[#00E5FF] hover:text-black transition-colors font-mono uppercase tracking-widest text-sm flex items-center gap-2 group"
              >
                {showAllLogs ? "Collapse Data >" : "Expand Logs >"}
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {GALLERY.slice(0, showAllLogs ? GALLERY.length : 6).map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                  className="group relative aspect-[4/3] border border-white/20 overflow-hidden bg-[#050A14] cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`Log ${i}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale-[0.2] group-hover:grayscale-0"
                  />

                  {/* Detail Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[#00E5FF] font-mono text-[10px] tracking-[0.3em] mb-2 uppercase block">DATA_STREAM_{i.toString().padStart(3, '0')}</span>
                    <h4 className="text-white font-syne font-bold text-xl uppercase tracking-tighter">ENVIRONMENTAL_LOG</h4>
                    <div className="w-8 h-0.5 bg-[#00E5FF] mt-2 mb-2" />
                    <p className="text-white/60 font-mono text-[9px] uppercase tracking-[0.2em] leading-relaxed">
                      SNAPSHOT_ACTIVE // STABILITY: 98.4%
                    </p>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-black/80 border border-white/20 px-3 py-1">
                    <span className="text-[#00E5FF] font-mono text-[10px] tracking-widest uppercase">LOG_{i.toString().padStart(3, '0')}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
