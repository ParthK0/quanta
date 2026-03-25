"use client";

import { motion } from "framer-motion";
import { Clock, User } from "lucide-react";
import Link from "next/link";

const POSTS = [
  {
    id: 1,
    title: "Understanding Transformer Architectures in 2026",
    excerpt: "A deep dive into how attention mechanisms have evolved and reshaped the NLP landscape, with PyTorch implementations.",
    author: "Alex Rahman",
    date: "March 20, 2026",
    readTime: "8 min read",
    tag: "Deep Learning",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80"
  },
  {
    id: 2,
    title: "Recap: Quanta Spring Datathon",
    excerpt: "See the winning projects, algorithms, and key takeaways from our biggest campus event of the year.",
    author: "David Kim",
    date: "March 15, 2026",
    readTime: "5 min read",
    tag: "Event Recap",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
  },
  {
    id: 3,
    title: "Optimizing SQL Queries for Big Data",
    excerpt: "Stop crashing your clusters. Learn advanced indexing, window functions, and execution plan analysis.",
    author: "Sarah Chen",
    date: "March 10, 2026",
    readTime: "12 min read",
    tag: "Data Engineering",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
  }
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16">
      <div className="container px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-bold font-syne mb-6 text-white"
          >
            Quanta <span className="text-secondary text-glow">Insights</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground font-dm-mono max-w-2xl mx-auto"
          >
            Tutorials, technical deep-dives, and event recaps written by our members.
          </motion.p>
        </div>

        {/* Featured Post (First one) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 group relative overflow-hidden rounded-3xl border border-white/10 bg-card hover:border-white/30 transition-colors cursor-pointer"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-full w-full overflow-hidden">
               <img src={POSTS[0].image} alt={POSTS[0].title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
               <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 w-max">
                 {POSTS[0].tag}
               </span>
               <h2 className="text-3xl font-bold font-syne text-white mb-4 group-hover:text-primary transition-colors">
                 {POSTS[0].title}
               </h2>
               <p className="text-muted-foreground mb-8 text-lg">
                 {POSTS[0].excerpt}
               </p>
               <div className="flex items-center text-sm text-muted-foreground font-mono space-x-6">
                 <div className="flex items-center"><User className="w-4 h-4 mr-2" /> {POSTS[0].author}</div>
                 <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {POSTS[0].readTime}</div>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Other Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {POSTS.slice(1).map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card hover:border-white/20 transition-colors flex flex-col h-full cursor-pointer"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur border border-white/20 rounded-full text-xs font-bold text-white tracking-wider uppercase">
                      {post.tag}
                    </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-syne text-white mb-3 group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground font-mono pt-4 border-t border-white/10">
                  <span className="flex items-center"><User className="w-3 h-3 mr-2" /> {post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
