"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Code, BrainCircuit, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background pointer-events-none" />
        
        {/* glowing orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary mb-4 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse mr-2" />
              Join the data revolution
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-syne tracking-tighter text-white">
              Where <span className="text-glow text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Data</span> Meets Intelligence
            </h1>
            
            <p className="mx-auto max-w-[700px] text-lg md:text-xl text-muted-foreground mt-4 font-dm-mono">
              Quanta is the premier student community for Artificial Intelligence, Machine Learning, and Data Analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8">
              <Link
                href="/join"
                className="group w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-white text-black px-8 text-sm font-semibold transition-all hover:bg-neutral-200"
              >
                Join the Club
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/events"
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full border border-border bg-background/50 backdrop-blur-sm px-8 text-sm font-medium text-white transition-colors hover:bg-white/5"
              >
                Explore Events
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Highlights */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold font-syne">Empowering the <span className="text-secondary text-glow">Future</span></h2>
            <p className="max-w-[800px] text-muted-foreground font-dm-mono">
              We bridge the gap between academic theory and industry practice through hands-on projects, workshops, and expert talks.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Machine Learning", icon: BrainCircuit, color: "text-primary", desc: "Dive deep into algorithms, neural networks, and model deployment." },
              { title: "Data Engineering", icon: Code, color: "text-secondary", desc: "Learn to build scalable data pipelines and handle big data architectures." },
              { title: "Community Events", icon: Users, color: "text-accent", desc: "Connect with like-minded peers through hackathons and datathons." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-secondary/50 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <feature.icon className={`h-10 w-10 ${feature.color} mb-6`} />
                <h3 className="text-xl font-bold font-syne mb-2 text-white">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-syne text-white">Ready to start your data journey?</h2>
            <p className="text-muted-foreground font-dm-mono">
              Access exclusive resources, join our upcoming events, and network with leading industry professionals.
            </p>
            <Link
              href="/join"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary text-primary-foreground px-8 font-semibold hover:opacity-90 transition-opacity"
            >
              Become a Member Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
