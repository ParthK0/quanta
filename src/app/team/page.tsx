"use client";

import { motion } from "framer-motion";
import { Globe, Link as LinkIcon, Mail } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Alex Rahman",
    role: "President & AI Lead",
    bio: "Passionate about generative AI and scalable data architectures. Former Data Intern at TopTech.",
    image: "https://i.pravatar.cc/300?img=11",
    github: "#",
    linkedin: "#"
  },
  {
    name: "Sarah Chen",
    role: "Vice President",
    bio: "Specializes in Predictive Analytics and Natural Language Processing. Data nerd by day, gamer by night.",
    image: "https://i.pravatar.cc/300?img=9",
    github: "#",
    linkedin: "#"
  },
  {
    name: "David Kim",
    role: "Events Coordinator",
    bio: "Connecting people with data. Organizes the biggest Datathons and workshops on campus.",
    image: "https://i.pravatar.cc/300?img=33",
    linkedin: "#"
  },
  {
    name: "Priya Varma",
    role: "Technical Lead",
    bio: "Cloud computing enthusiast. Builds ML pipelines and mentors junior club members.",
    image: "https://i.pravatar.cc/300?img=20",
    github: "#",
    linkedin: "#"
  },
  {
    name: "Marcus Johnson",
    role: "Marketing Head",
    bio: "Bridging the gap between code and community. Designer and content creator for Quanta.",
    image: "https://i.pravatar.cc/300?img=59",
    linkedin: "#"
  },
  {
    name: "Emma Watson",
    role: "Research Coordinator",
    bio: "Publishing papers on Computer Vision. Always looking for innovative research collaborations.",
    image: "https://i.pravatar.cc/300?img=47",
    github: "#",
    linkedin: "#"
  }
];

export default function TeamPage() {
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
            Meet the <span className="text-secondary text-glow">Core Team</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground font-dm-mono max-w-2xl mx-auto"
          >
            The dedicated minds driving Quanta forward. We are students, developers, and researchers united by our passion for data.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 hover:border-secondary/50 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative mb-6 flex justify-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-background group-hover:border-secondary/20 transition-colors">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
              
              <div className="text-center space-y-2 relative z-10">
                <h3 className="text-xl font-bold font-syne text-white">{member.name}</h3>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
                  {member.role}
                </span>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {member.bio}
                </p>
                
                <div className="flex justify-center space-x-4 pt-4">
                  {member.github && (
                    <a href={member.github} className="text-muted-foreground hover:text-white transition-colors">
                      <Globe size={20} />
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} className="text-muted-foreground hover:text-secondary transition-colors">
                      <LinkIcon size={20} />
                    </a>
                  )}
                  <a href={`mailto:contact@quanta.com`} className="text-muted-foreground hover:text-accent transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
