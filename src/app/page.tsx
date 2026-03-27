"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Cpu } from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";

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
            QUANTA<span className="text-[#00E5FF] animate-pulse mix-blend-normal">_</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col space-y-4"
          >
            <p className="max-w-[700px] text-white/90 font-mono text-lg md:text-xl uppercase tracking-widest leading-relaxed">
              // THE OFFICIAL DATA SCIENCE COMMUNITY.
              <br/>
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
                <p className="text-xl md:text-2xl text-[#00E5FF] font-mono tracking-widest uppercase">
                  Architecting Intelligence.
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
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 hover:scale-105"
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
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 hover:scale-105 filter grayscale hover:grayscale-0"
                />
              </motion.div>

              {/* Decorative Corner */}
              <div className="absolute left-10 -bottom-8 w-24 h-24 border-b-2 border-l-2 border-[#00E5FF]/50 z-0 pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* 3. DOMAINS (Strict High-Contrast Grid) */}
      <section className="w-full py-32 px-4 md:px-6 bg-[#050A14] z-10">
        <div className="container mx-auto">
          <div className="mb-16 border-b border-white/20 pb-4">
            <h2 className="text-4xl md:text-5xl font-black font-syne uppercase tracking-tighter text-white">
              CORE DOMAINS_
            </h2>
          </div>

          <div className="grid gap-0 md:grid-cols-3 border border-white/10">
            {/* Domain 00 */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group flex flex-col justify-between p-10 min-h-[450px] border border-white/10 bg-[#0B1120] hover:bg-[#00E5FF] hover:text-black transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-6xl font-black font-syne text-white/20 group-hover:text-black/30 transition-colors">00</span>
                <Terminal className="w-8 h-8 text-white group-hover:text-black transition-colors" />
              </div>
              <div>
                <h3 className="text-3xl font-black font-syne uppercase tracking-tighter mb-4 transition-colors">Machine Learning</h3>
                <p className="font-mono text-sm opacity-60 group-hover:opacity-100 uppercase tracking-widest leading-relaxed transition-colors">
                  Predictive engines and autonomous systems trained on massive telemetry datasets.
                </p>
              </div>
            </motion.div>

            {/* Domain 01 */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group flex flex-col justify-between p-10 min-h-[450px] border border-white/10 bg-[#0B1120] hover:bg-[#00E5FF] hover:text-black transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-6xl font-black font-syne text-white/20 group-hover:text-black/30 transition-colors">01</span>
                <Database className="w-8 h-8 text-white group-hover:text-black transition-colors" />
              </div>
              <div>
                <h3 className="text-3xl font-black font-syne uppercase tracking-tighter mb-4 transition-colors">Data Engineering</h3>
                <p className="font-mono text-sm opacity-60 group-hover:opacity-100 uppercase tracking-widest leading-relaxed transition-colors">
                  Architecting robust pipelines and analytical clustered data warehouses.
                </p>
              </div>
            </motion.div>

            {/* Domain 02 */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group flex flex-col justify-between p-10 min-h-[450px] border border-white/10 bg-[#0B1120] hover:bg-[#00E5FF] hover:text-black transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-6xl font-black font-syne text-white/20 group-hover:text-black/30 transition-colors">02</span>
                <Cpu className="w-8 h-8 text-white group-hover:text-black transition-colors" />
              </div>
              <div>
                <h3 className="text-3xl font-black font-syne uppercase tracking-tighter mb-4 transition-colors">Artificial Intelligence</h3>
                <p className="font-mono text-sm opacity-60 group-hover:opacity-100 uppercase tracking-widest leading-relaxed transition-colors">
                  Deploying autonomous agents and structured reinforcement learning vectors.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
