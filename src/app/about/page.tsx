"use client";

import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16">
      <div className="container px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-bold font-syne mb-6"
          >
            About <span className="text-glow text-primary">Quanta</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-dm-mono"
          >
            We are the vanguard of student innovation, fostering a community where curiosity meets cutting-edge data science.
          </motion.p>
        </div>

        {/* Mission & Vision */}
        <div className="grid gap-8 md:grid-cols-2 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
          >
            <Target className="w-12 h-12 text-secondary mb-6" />
            <h2 className="text-2xl font-bold font-syne mb-4 text-white">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To democratize technical knowledge by providing students with hands-on experience, resources, and mentorship in AI, ML, and Data Analytics. We aim to bridge the gap between academic theory and real-world application.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
          >
            <Eye className="w-12 h-12 text-accent mb-6" />
            <h2 className="text-2xl font-bold font-syne mb-4 text-white">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To be the leading student hub for artificial intelligence and data science, cultivating the next generation of data-driven leaders, researchers, and engineers who will shape the future of technology responsibly.
            </p>
          </motion.div>
        </div>

        {/* Why Join Us */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold font-syne text-center mb-12">Why Join the Club?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Hands-on Projects", desc: "Build real-world portfolios with our curated open-source projects." },
              { title: "Industry Network", desc: "Connect with alumni and professionals at top tech companies." },
              { title: "Skill Workshops", desc: "Exclusive bi-weekly training sessions on the latest tech stacks." }
            ].map((perk, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border border-white/5 bg-background flex flex-col items-center text-center group"
              >
                <ShieldCheck className="w-8 h-8 text-white/50 group-hover:text-primary transition-colors mb-4" />
                <h3 className="font-syne font-semibold mb-2 text-white">{perk.title}</h3>
                <p className="text-sm text-muted-foreground">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Domains */}
        <div className="relative p-1 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent overflow-hidden">
          <div className="bg-background rounded-xl p-8 md:p-12 relative z-10 w-full h-full">
            <h2 className="text-3xl font-bold font-syne mb-8 text-center text-white">Our Domains</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {["Artificial Intelligence", "Machine Learning", "Data Analytics", "Cloud Computing"].map((domain, i) => (
                <div key={i} className="flex flex-col items-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group hover:border-white/30 hover:bg-white/10 transition-all">
                    <Zap className="w-6 h-6 text-muted-foreground group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-dm-mono text-sm font-medium text-white/80">{domain}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
