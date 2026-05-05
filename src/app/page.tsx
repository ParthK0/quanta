"use client";

import { motion } from "framer-motion";
import { Users, Calendar, Image as ImageIcon, ArrowUpRight, Zap, GitBranch } from "lucide-react";
import Link from "next/link";
import { AnimatedBackground } from "@/components/animated-background";

const STATS = [
  { value: "13+", label: "CORE MEMBERS", icon: Users },
  { value: "6+", label: "EVENTS DEPLOYED", icon: Zap },
  { value: "4+", label: "OPEN SOURCE PROJECTS", icon: GitBranch },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedBackground />

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden px-4 md:px-6 z-10 bg-transparent">
        <div className="container mx-auto space-y-8 mt-12 mix-blend-difference">

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-7xl md:text-[10rem] font-black font-syne text-white uppercase tracking-tighter leading-none mix-blend-difference"
          >
            QUANTCRAFT<span className="text-[#2ECC71] animate-pulse mix-blend-normal">_</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col space-y-4"
          >
            <p className="max-w-[700px] text-white/90 font-mono text-lg md:text-xl uppercase tracking-widest leading-relaxed">
              // THE OFFICIAL DATA SCIENCE COMMUNITY.
              <br />
              ARCHITECTING INTELLIGENCE.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT US (Image Composition Style) */}
      <section className="w-full py-24 md:py-32 px-4 md:px-6 z-10 bg-[#0B1120] border-y border-white/10 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Text Content */}
            <div className="flex-1 w-full max-w-2xl lg:max-w-none">
              <h2 className="text-5xl md:text-7xl font-black font-syne text-transparent uppercase tracking-tighter"
                style={{ WebkitTextStroke: "2px white" }}>
                {"<sys>"} MISSION {"</sys>"}
              </h2>
              <div className="mt-8 space-y-6">
                <p className="text-xl md:text-2xl text-[#2ECC71] font-mono tracking-widest uppercase">
                  Crafting Intelligence.
                </p>
                <p className="text-base md:text-xl text-white/60 font-mono uppercase tracking-widest leading-relaxed">
                  Quanta is a premier student-led research cell dedicated to advancing Machine Learning, Artificial Intelligence, and Data Engineering through open-source architecture and rigorous deployment cycles.
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
                  alt="Quanta Team Activity"
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
                  alt="Quanta Workspace Session"
                  className="w-full h-full object-cover transition-opacity duration-500 hover:scale-105"
                />
              </motion.div>

              {/* Decorative Corner */}
              <div className="absolute left-10 -bottom-8 w-24 h-24 border-b-2 border-l-2 border-[#00E5FF]/50 z-0 pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* 3. STATS STRIP */}
      <section className="w-full z-10 bg-[#2ECC71] border-y-4 border-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center justify-center py-12 md:py-16 border border-black/10 group hover:bg-black transition-colors duration-300 cursor-default"
            >
              <stat.icon className="w-6 h-6 text-black/40 group-hover:text-[#00E5FF] mb-4 transition-colors" />
              <span className="text-5xl md:text-7xl font-black font-syne text-black group-hover:text-[#00E5FF] tracking-tighter transition-colors">
                {stat.value}
              </span>
              <span className="font-mono text-[10px] md:text-xs text-black/60 group-hover:text-white/60 tracking-[0.3em] uppercase mt-3 transition-colors">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. EXPLORE (Team, Events, Gallery) */}
      <section className="w-full py-32 px-4 md:px-6 z-10 bg-[#0B1120] border-y border-white/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 border-b border-white/20 pb-8 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black font-syne uppercase tracking-tighter text-white">
                EXPLORE_THE_ECOSYSTEM
              </h2>
              <p className="font-mono text-[#2ECC71] tracking-widest uppercase mt-4">
                // World Nodes of QuantCraft
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Team Node */}
            <Link href="/team">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative h-[500px] border border-white/20 overflow-hidden bg-[#050A14] cursor-pointer"
              >
                <img src="/p2.jpeg" alt="Team" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-[#050A14]/60 to-transparent" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-4">
                  <Users className="w-10 h-10 text-[#00E5FF] mb-6 transform group-hover:scale-110 transition-transform" />
                  <h3 className="text-4xl font-black font-syne text-white uppercase tracking-tighter mb-2">
                    TEAM
                  </h3>
                  <p className="font-mono text-sm text-white/50 uppercase tracking-widest mb-6">
                    Meet the architects building the next generation of predictive systems.
                  </p>
                  
                  <div className="flex items-center gap-2 text-[#00E5FF] font-mono text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span>Initialize Sequence</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Events Node */}
            <Link href="/events">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative h-[500px] border border-white/20 overflow-hidden bg-[#050A14] cursor-pointer"
              >
                <img src="/whatsapp.jpeg" alt="Events" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-[#050A14]/60 to-transparent" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-4">
                  <Calendar className="w-10 h-10 text-[#00E5FF] mb-6 transform group-hover:scale-110 transition-transform" />
                  <h3 className="text-4xl font-black font-syne text-white uppercase tracking-tighter mb-2">
                    EVENTS
                  </h3>
                  <p className="font-mono text-sm text-white/50 uppercase tracking-widest mb-6">
                    Datathons, AI workshops, and open-source contribution sprints.
                  </p>
                  
                  <div className="flex items-center gap-2 text-[#00E5FF] font-mono text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span>Access Logs</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Gallery Node */}
            <Link href="/gallery">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative h-[500px] border border-white/20 overflow-hidden bg-[#050A14] cursor-pointer"
              >
                <img src="/p2.jpeg" alt="Gallery" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 scale-x-[-1]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-[#050A14]/60 to-transparent" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-4">
                  <ImageIcon className="w-10 h-10 text-[#00E5FF] mb-6 transform group-hover:scale-110 transition-transform" />
                  <h3 className="text-4xl font-black font-syne text-white uppercase tracking-tighter mb-2">
                    GALLERY
                  </h3>
                  <p className="font-mono text-sm text-white/50 uppercase tracking-widest mb-6">
                    Visual archives documenting our legacy and achievements.
                  </p>
                  
                  <div className="flex items-center gap-2 text-[#00E5FF] font-mono text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span>View Archives</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
}
