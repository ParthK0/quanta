"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";


const teamMembers = [
  {
    name: "Manjeet",
    role: "p1",
    bio: "Dedicated to advancing Quanta's mission through technical excellence.",
    image: "/team-members/1-manjeet.webp",
    github: "#",
    linkedin: "#"
  },
  {
    name: "Ansh Vashisth",
    role: "p2",
    bio: "Driving innovation and team synergy across all internal projects and initiatives.",
    image: "/team-members/2-ansh-vashisth.jpeg",
    github: "#",
    linkedin: "#"
  },
  {
    name: "Parth Khowal",
    role: "Core Member",
    bio: "Leveraging core data architecture to scale Quanta's external presence.",
    image: "/team-members/3-parth-khowal.jpeg", // Using proper public served path
    github: "#",
    linkedin: "#"
  },
  {
    name: "Divya Sharma",
    role: "Core Member",
    bio: "Pushing boundaries in data science integrations and project pipelines.",
    image: "/team-members/4-divya-sharma.jpeg",
    github: "#",
    linkedin: "#"
  },
  {
    name: "Deepankar",
    role: "Core Member",
    bio: "Focused on machine learning optimizations and model deployments.",
    image: "/team-members/5-deepankar.png",
    github: "#",
    linkedin: "#"
  },
  {
    name: "Bhavit",
    role: "Core Member",
    bio: "Dedicated data engineering expert ensuring high availability across datasets.",
    image: "/team-members/6-bhavit.png",
    github: "#",
    linkedin: "#"
  },
  {
    name: "Adarsh",
    role: "Core Member",
    bio: "Bringing creative problem solving to complex analytical workflows.",
    image: "/team-members/7-adarsh.jpg",
    github: "#",
    linkedin: "#"
  },
  {
    name: "Akarshit",
    role: "Core Member",
    bio: "Ensuring rigorous testing and validation for all predictive engines.",
    image: "/team-members/8-akarshit.jpg",
    github: "#",
    linkedin: "#"
  },
  {
    name: "Vaishnavi",
    role: "Core Member",
    bio: "Specializing in natural language processing and scalable team mechanics.",
    image: "/team-members/9-vaishnavi.jpg",
    github: "#",
    linkedin: "#"
  }
];

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B1120] selection:bg-[#00E5FF] selection:text-black">
      
      {/* Banner Image */}
      <section className="relative w-full h-[65vh] min-h-[500px] border-b border-white/10 overflow-hidden mt-16">
        <img 
          src="/p2.jpeg" 
          alt="Quanta Team Background" 
          className="w-full h-full object-cover object-[center_30%] opacity-50 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[#00E5FF]/5 mix-blend-overlay pointer-events-none" />
        
        <div className="absolute bottom-0 left-0 p-6 md:p-12 lg:px-24 w-full">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-[8rem] font-bold font-syne text-white uppercase tracking-tighter leading-none"
            >
              MEMBERS<span className="text-[#00E5FF] animate-pulse">_</span>
            </motion.h1>
        </div>
      </section>

      {/* Team Grid */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-24">
        <div className="mb-16 border-b border-white/10 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <h2 className="text-4xl md:text-5xl font-black font-syne uppercase tracking-tighter text-white/80">
              MEET THE CORE
            </h2>
            <span className="text-[#00E5FF] font-mono tracking-widest uppercase">// 2026 Board</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
              className="group relative w-full aspect-[3/4] overflow-hidden border border-white/20 bg-[#050A14]"
            >
              {/* Image */}
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover transition-all duration-700 scale-110 group-hover:scale-100"
              />
              
              {/* Initial Overlay (Name at bottom before hover) */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-xl font-bold font-syne text-white uppercase tracking-tight">{member.name}</h3>
              </div>
              
              {/* Full Hover Overlay */}
              <div className="absolute inset-0 bg-[#00E5FF]/95 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-end p-6 border-t-4 border-black">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                  <h3 className="text-2xl md:text-3xl font-black font-syne text-black uppercase tracking-tighter leading-none mb-2">
                    {member.name}
                  </h3>
                  <div className="w-full h-[2px] bg-black/20 mb-4" />
                  <p className="text-black font-mono font-bold text-sm tracking-widest uppercase mb-4">
                    {member.role}
                  </p>
                  <p className="text-black/80 font-mono text-xs mb-8 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="flex gap-2">
                    {member.github && (
                      <a href={member.github} className="text-black hover:text-[#00E5FF] font-mono font-bold text-xs tracking-widest transition-colors bg-black/10 px-2 py-1 border border-black/20 hover:bg-black">
                        [GH]
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} className="text-black hover:text-[#00E5FF] font-mono font-bold text-xs tracking-widest transition-colors bg-black/10 px-2 py-1 border border-black/20 hover:bg-black">
                        [IN]
                      </a>
                    )}
                    <a href="#" className="text-black hover:text-[#00E5FF] font-mono font-bold text-xs tracking-widest transition-colors bg-black/10 px-2 py-1 border border-black/20 hover:bg-black">
                      [WEB]
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
