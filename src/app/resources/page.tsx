"use client";

import { motion } from "framer-motion";
import { BookOpen, Map, FileCode2, Database, ExternalLink } from "lucide-react";

const ROADMAPS = [
  {
    title: "Data Science Foundations",
    desc: "A 12-week intensive track covering Probability, Statistics, SQL, and Python.",
    icon: Map,
    color: "text-primary"
  },
  {
    title: "Deep Learning & AI",
    desc: "Master Neural Networks, CNNs, Transformers, and deployment pipelines.",
    icon: BookOpen,
    color: "text-secondary"
  },
  {
    title: "Data Engineering",
    desc: "Build scalable architectures with Spark, Airflow, and Cloud platforms.",
    icon: Database,
    color: "text-accent"
  }
];

const RECOMMENDED_COURSES = [
  {
    title: "Machine Learning by Andrew Ng",
    platform: "Coursera",
    link: "#"
  },
  {
    title: "Deep Learning Specialization",
    platform: "DeepLearning.AI",
    link: "#"
  },
  {
    title: "CS50's Introduction to AI with Python",
    platform: "Harvard",
    link: "#"
  },
  {
    title: "Practical Deep Learning for Coders",
    platform: "Fast.ai",
    link: "#"
  }
];

export default function ResourcesPage() {
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
            Learning <span className="text-primary text-glow">Resources</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground font-dm-mono max-w-2xl mx-auto"
          >
            Curated roadmaps, notes, and datasets to accelerate your journey in Data Science and AI.
          </motion.p>
        </div>

        {/* Roadmaps */}
        <div className="mb-20">
          <div className="flex items-center space-x-4 mb-8">
            <Map className="w-8 h-8 text-white" />
            <h2 className="text-3xl font-bold font-syne text-white">Career Roadmaps</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {ROADMAPS.map((rm, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-2xl border border-white/10 bg-card hover:border-white/30 transition-colors relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full pointer-events-none" />
                <rm.icon className={`w-10 h-10 ${rm.color} mb-6`} />
                <h3 className="text-xl font-bold font-syne text-white mb-2">{rm.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{rm.desc}</p>
                <button className={`inline-flex items-center text-sm font-semibold ${rm.color} group-hover:underline`}>
                  View Roadmap <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mixed Resources Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          
          {/* Courses & Platforms */}
          <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
            <div className="flex items-center space-x-3 mb-8">
              <FileCode2 className="w-6 h-6 text-secondary" />
              <h2 className="text-2xl font-bold font-syne text-white">Top Courses</h2>
            </div>
            <ul className="space-y-4">
              {RECOMMENDED_COURSES.map((course, i) => (
                <li key={i} className="flex justify-between items-center group">
                  <div>
                    <h4 className="text-white font-medium group-hover:text-secondary transition-colors">{course.title}</h4>
                    <span className="text-xs text-muted-foreground font-mono">{course.platform}</span>
                  </div>
                  <a href={course.link} className="p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-white transition-all">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Datasets & Notes Archive */}
          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 flex flex-col justify-center items-center text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
             <div className="relative z-10 w-full">
               <Database className="w-12 h-12 text-primary mx-auto mb-6 opacity-80" />
               <h2 className="text-2xl font-bold font-syne text-white mb-4">Quanta Vault</h2>
               <p className="text-muted-foreground text-sm mx-auto mb-8 max-w-sm">
                 Access our exclusive repository of club notes, workshop materials, and clean datasets for your projects.
               </p>
               <a href="#" className="inline-flex w-full sm:w-auto h-12 items-center justify-center rounded-full bg-white text-black px-8 font-semibold hover:bg-neutral-200 transition-colors">
                 Enter Vault (Members Only)
               </a>
             </div>
          </div>

        </div>

      </div>
    </div>
  );
}
