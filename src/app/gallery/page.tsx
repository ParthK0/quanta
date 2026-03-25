"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Star } from "lucide-react";
import Image from "next/image";

const ACHIEVEMENTS = [
  {
    title: "1st Place - Global Datathon 2025",
    desc: "Quanta's core team secured 1st place among 500+ universities worldwide in predicting climate change anomalies.",
    icon: Trophy,
    color: "text-yellow-400"
  },
  {
    title: "Best Open Source Contribution",
    desc: "Awarded by the National AI Foundation for our work on the NeuroScan framework.",
    icon: Star,
    color: "text-primary"
  },
  {
    title: "University Club of the Year",
    desc: "Recognized consecutive years for outstanding student engagement and impactful tech workshops.",
    icon: Award,
    color: "text-secondary"
  }
];

const GALLERY = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
  "https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=800&q=80",
  "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80"
];

export default function GalleryPage() {
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
            Club <span className="text-secondary text-glow">Legacy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground font-dm-mono max-w-2xl mx-auto"
          >
            Celebrating our milestones, competition wins, and the vibrant memories from our events.
          </motion.p>
        </div>

        {/* Achievements Banner */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {ACHIEVEMENTS.map((ach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white/10 transition-colors"
            >
              <div className={`p-4 rounded-full bg-white/5 mb-6 ${ach.color}`}>
                <ach.icon size={32} />
              </div>
              <h3 className="text-xl font-bold font-syne text-white mb-3">{ach.title}</h3>
              <p className="text-muted-foreground text-sm">{ach.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Photo Gallery Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold font-syne text-white mb-8">Event Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="relative aspect-square overflow-hidden rounded-xl border border-white/10 group cursor-pointer"
              >
                <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={img} 
                  alt={`Gallery image ${i + 1}`} 
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
