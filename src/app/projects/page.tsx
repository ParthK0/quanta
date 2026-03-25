"use client";

import { motion } from "framer-motion";
import { Globe, ExternalLink, Code2 } from "lucide-react";
import Image from "next/image";

const PROJECTS = [
  {
    title: "NeuroScan Framework",
    desc: "An open-source deep learning framework for early detection of neurological anomalies using MRI scans. Built entirely by Quanta members.",
    tags: ["Python", "TensorFlow", "Computer Vision"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
  },
  {
    title: "Campus Analytics Dashboard",
    desc: "Real-time dashboard analyzing foot traffic, library occupancy, and cafeteria wait times using deployed IoT sensors.",
    tags: ["React", "Next.js", "PostgreSQL", "Data Viz"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    title: "Algorithmic Trading Bot",
    desc: "A reinforcement learning agent trained to paper-trade crypto markets based on sentiment analysis of financial news.",
    tags: ["RL", "NLP", "Pandas", "API"],
    github: "#",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"
  },
  {
    title: "Quanta AutoGrad",
    desc: "A lightweight, numpy-based autograd engine designed for educational purposes to help students understand backpropagation.",
    tags: ["Mathematics", "Python", "NumPy"],
    github: "#",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80"
  }
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16">
      <div className="container px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-syne mb-6 text-white"
          >
            Showcase & <span className="text-accent text-glow">Open Source</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground font-dm-mono max-w-2xl mx-auto"
          >
            Explore the projects we've built. From low-level AI engines to full-stack data dashboards.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2 mb-20">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-background hover:bg-white/5 transition-all flex flex-col h-full"
            >
              <div className="relative w-full h-64 overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold font-syne text-white group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex space-x-3 text-muted-foreground">
                    {project.github && (
                      <a href={project.github} className="hover:text-white transition-colors" target="_blank" rel="noreferrer">
                        <Globe className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} className="hover:text-white transition-colors" target="_blank" rel="noreferrer">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span 
                      key={j} 
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner */}
        <div className="rounded-2xl border border-secondary/30 bg-secondary/5 p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white opacity-5" />
          <div className="relative z-10 flex flex-col items-center">
            <Code2 className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-2xl font-bold font-syne text-white mb-2">Want to collaborate?</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              We are always open to new project ideas and collaborations. Check out our GitHub or reach out to us!
            </p>
            <a href="https://github.com/quantaclub" className="inline-flex h-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground px-8 font-semibold hover:bg-secondary/90 transition-colors shadow-[0_0_20px_rgba(56,189,248,0.3)]">
              Visit our GitHub
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
