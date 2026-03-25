"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const MOCK_EVENTS = [
  {
    id: 1,
    title: "Intro to Deep Learning",
    date: "Aug 15, 2026",
    time: "6:00 PM - 8:00 PM",
    type: "Workshop",
    location: "Main Auditorium",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80"
  },
  {
    id: 2,
    title: "Quanta Datathon 2026",
    date: "Sep 20-22, 2026",
    time: "48 Hours",
    type: "Hackathon",
    location: "Innovation Hub",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"
  },
  {
    id: 3,
    title: "AI in Healthcare Panel",
    date: "July 10, 2026",
    time: "5:00 PM",
    type: "Talk",
    location: "Virtual",
    status: "past",
    image: "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?w=800&q=80"
  },
  {
    id: 4,
    title: "Python for Data Analysis",
    date: "June 05, 2026",
    time: "4:00 PM - 6:00 PM",
    type: "Workshop",
    location: "Lab 4B",
    status: "past",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  }
];

export default function EventsPage() {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");

  const filteredEvents = MOCK_EVENTS.filter((e) => filter === "all" || e.status === filter);

  return (
    <div className="flex flex-col min-h-screen pt-24 pb-16">
      <div className="container px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 space-y-6 md:space-y-0">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl font-bold font-syne mb-2 text-white"
            >
              Our <span className="text-secondary text-glow">Events</span>
            </motion.h1>
            <p className="text-muted-foreground font-dm-mono">Join us for workshops, datathons, and guest talks.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex space-x-2 bg-white/5 p-1 rounded-full border border-white/10"
          >
            {["all", "upcoming", "past"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-6 py-2 rounded-full text-sm font-semibold capitalize transition-all ${
                  filter === f 
                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(255,107,184,0.3)]" 
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Events Grid */}
        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          <AnimatePresence>
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card hover:border-secondary/40 transition-all flex flex-col sm:flex-row h-full"
              >
                {/* Image Section */}
                <div className="relative w-full sm:w-2/5 aspect-video sm:aspect-auto overflow-hidden">
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
                  <img src={event.image} alt={event.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur border border-white/20 rounded-full text-xs font-bold text-white tracking-wider uppercase">
                      {event.type}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col justify-between w-full sm:w-3/5">
                  <div>
                    <h3 className="text-xl font-bold font-syne text-white mb-4 group-hover:text-secondary transition-colors line-clamp-2">
                      {event.title}
                    </h3>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-muted-foreground font-dm-mono">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground font-dm-mono">
                        <Clock className="w-4 h-4 mr-2 text-accent" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground font-dm-mono">
                        <MapPin className="w-4 h-4 mr-2 text-secondary" />
                        {event.location}
                      </div>
                    </div>
                  </div>

                  <div>
                    {event.status === "upcoming" ? (
                      <Link href={`/events/${event.id}`} className="inline-flex items-center text-sm font-semibold text-primary hover:text-white transition-colors">
                        Register Now <ArrowUpRight className="ml-1 w-4 h-4" />
                      </Link>
                    ) : (
                      <Link href={`/events/${event.id}`} className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-white transition-colors">
                        View Recap <ArrowUpRight className="ml-1 w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-20 text-muted-foreground border border-white/5 rounded-2xl bg-white/5">
            No {filter} events found at the moment. Check back soon!
          </div>
        )}

      </div>
    </div>
  );
}
