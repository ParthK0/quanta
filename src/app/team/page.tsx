"use client";

import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string | null;
  github?: string;
  linkedin?: string;
  instagram?: string;
}

interface Squad {
  name: string;
  tag: string;
  accent: string;
  accentBg: string;
  members: TeamMember[];
}

const squads: Squad[] = [
  {
    name: "AI-Tech Force",
    tag: "💻",
    accent: "#00E5FF",
    accentBg: "rgba(0,229,255,0.95)",
    members: [
      {
        name: "Ansh Vashisth",
        role: "President",
        bio: "Steering the AI-Tech vision and driving innovation across all technical initiatives.",
        image: "/team-members/2-ansh-vashisth.jpeg",
        github: "#",
        linkedin: "#",
      },
      {
        name: "Deepankar Patel",
        role: "Vice President",
        bio: "Focused on machine learning optimizations and strategic project direction.",
        image: "/team-members/5-deepankar.png",
        github: "#",
        linkedin: "#",
      },
      {
        name: "Parth Khowal",
        role: "Technical Lead",
        bio: "Architecting scalable systems and leading core technical development.",
        image: "/team-members/3-parth-khowal.jpeg",
        github: "#",
        linkedin: "#",
      },
      {
        name: "Akarsh",
        role: "Creative Content Strategist",
        bio: "Crafting compelling narratives and visual storytelling for the tech brand.",
        image: null,
        github: "#",
        linkedin: "#",
      },
      {
        name: "Vaishnavi",
        role: "Creative Content Strategist",
        bio: "Designing creative strategies and content that inspire and engage audiences.",
        image: "/team-members/9-vaishnavi.jpg",
        github: "#",
        linkedin: "#",
      },
      {
        name: "Vanshika",
        role: "Social Media Head",
        bio: "Building digital presence and community engagement across all platforms.",
        image: null,
        github: "#",
        linkedin: "#",
      },
    ],
  },
  {
    name: "Operations Squad",
    tag: "⚙️",
    accent: "#A78BFA",
    accentBg: "rgba(167,139,250,0.95)",
    members: [
      {
        name: "Manjeet",
        role: "President",
        bio: "Overseeing operational excellence and ensuring seamless execution of all club activities.",
        image: "/team-members/1-manjeet.webp",
        github: "#",
        linkedin: "#",
      },
      {
        name: "Divya Sharma",
        role: "Vice President",
        bio: "Coordinating cross-functional teams and pushing boundaries in project pipelines.",
        image: "/team-members/4-divya-sharma.jpeg",
        github: "#",
        linkedin: "#",
      },
      {
        name: "Bhavit",
        role: "Technical Lead",
        bio: "Leading technical infrastructure and ensuring high availability across all systems.",
        image: "/team-members/6-bhavit.png",
        github: "#",
        linkedin: "#",
      },
      {
        name: "Adarsh",
        role: "Event Manager",
        bio: "MERN & PHP-SQL developer with IIT Guwahati Data Science certification, building scalable full-stack and AI-powered solutions while learning TypeScript.",
        image: "/team-members/7-adarsh.jpg",
        instagram: "https://www.instagram.com/adarsh___9777?igsh=MTBzMGp0bGV4aWxxYQ==",
        linkedin: "https://www.linkedin.com/in/adarsh-kumar-srivastava-8198b3387/",
      },
      {
        name: "Akarshit",
        role: "Outreach Head",
        bio: "Expanding partnerships and building bridges with the wider tech community.",
        image: "/team-members/8-akarshit.jpg",
        github: "#",
        linkedin: "#",
      },
      {
        name: "Ram",
        role: "PR Head",
        bio: "Shaping external communications and strengthening the club's public profile.",
        image: null,
        github: "#",
        linkedin: "#",
      },
    ],
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

/* ─── Desktop Card (portrait hover-reveal) ─── */
function DesktopCard({
  member,
  index,
  accentColor,
  accentBg,
}: {
  member: TeamMember;
  index: number;
  accentColor: string;
  accentBg: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 4) * 0.08, duration: 0.5 }}
      className="group relative w-full aspect-[3/4] overflow-hidden border border-white/10 bg-[#050A14] hover:border-white/30 transition-colors duration-300"
    >
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-all duration-700 scale-110 group-hover:scale-100"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0B1120] to-[#131A2E]">
          <span
            className="text-6xl font-black font-syne tracking-tighter opacity-60"
            style={{ color: accentColor }}
          >
            {getInitials(member.name)}
          </span>
          <div className="absolute inset-0 bg-grid-white opacity-30 pointer-events-none" />
        </div>
      )}

      {/* Role badge */}
      <div
        className="absolute top-3 right-3 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest font-bold border z-10"
        style={{
          color: accentColor,
          borderColor: accentColor,
          backgroundColor: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(4px)",
        }}
      >
        {member.role}
      </div>

      {/* Bottom name strip */}
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-xl font-bold font-syne text-white uppercase tracking-tight">
          {member.name}
        </h3>
      </div>

      {/* Hover Overlay */}
      <div
        className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-end p-6 border-t-4 border-black"
        style={{ backgroundColor: accentBg }}
      >
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
          <h3 className="text-2xl md:text-3xl font-black font-syne text-black uppercase tracking-tighter leading-none mb-2">
            {member.name}
          </h3>
          <div className="w-full h-[2px] bg-black/20 mb-3" />
          <p className="text-black font-mono font-bold text-sm tracking-widest uppercase mb-3">
            {member.role}
          </p>
          <p className="text-black/80 font-mono text-xs mb-6 leading-relaxed">
            {member.bio}
          </p>
          <SocialLinks member={member} />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Mobile Card (horizontal layout, always visible info) ─── */
function MobileCard({
  member,
  index,
  accentColor,
}: {
  member: TeamMember;
  index: number;
  accentColor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="flex gap-4 p-4 border border-white/10 bg-[#050A14]/80 backdrop-blur-sm"
    >
      {/* Avatar */}
      <div
        className="relative w-20 h-20 flex-shrink-0 overflow-hidden border"
        style={{ borderColor: accentColor + "40" }}
      >
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0B1120] to-[#131A2E]">
            <span
              className="text-2xl font-black font-syne tracking-tighter opacity-70"
              style={{ color: accentColor }}
            >
              {getInitials(member.name)}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col justify-center min-w-0 flex-1">
        <h3 className="text-base font-bold font-syne text-white uppercase tracking-tight truncate">
          {member.name}
        </h3>
        <p
          className="font-mono text-[10px] tracking-widest uppercase font-bold mt-0.5 mb-1.5"
          style={{ color: accentColor }}
        >
          {member.role}
        </p>
        <p className="text-white/50 font-mono text-[11px] leading-relaxed line-clamp-2">
          {member.bio}
        </p>
        <div className="flex gap-2 mt-2">
          <SocialLinksMobile member={member} accentColor={accentColor} />
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Social Links (Desktop hover overlay) ─── */
function SocialLinks({ member }: { member: TeamMember }) {
  return (
    <div className="flex gap-2">
      {member.github && (
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-white font-mono font-bold text-xs tracking-widest transition-colors bg-black/10 px-2 py-1 border border-black/20 hover:bg-black"
        >
          [GH]
        </a>
      )}
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-white font-mono font-bold text-xs tracking-widest transition-colors bg-black/10 px-2 py-1 border border-black/20 hover:bg-black"
        >
          [IN]
        </a>
      )}
      {member.instagram && (
        <a
          href={member.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-white font-mono font-bold text-xs tracking-widest transition-colors bg-black/10 px-2 py-1 border border-black/20 hover:bg-black"
        >
          [IG]
        </a>
      )}
    </div>
  );
}

/* ─── Social Links (Mobile, accent-colored) ─── */
function SocialLinksMobile({
  member,
  accentColor,
}: {
  member: TeamMember;
  accentColor: string;
}) {
  return (
    <>
      {member.github && (
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono font-bold text-[10px] tracking-widest px-1.5 py-0.5 border transition-colors hover:bg-white/10"
          style={{ color: accentColor, borderColor: accentColor + "40" }}
        >
          GH
        </a>
      )}
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono font-bold text-[10px] tracking-widest px-1.5 py-0.5 border transition-colors hover:bg-white/10"
          style={{ color: accentColor, borderColor: accentColor + "40" }}
        >
          IN
        </a>
      )}
      {member.instagram && (
        <a
          href={member.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono font-bold text-[10px] tracking-widest px-1.5 py-0.5 border transition-colors hover:bg-white/10"
          style={{ color: accentColor, borderColor: accentColor + "40" }}
        >
          IG
        </a>
      )}
    </>
  );
}

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B1120] selection:bg-[#00E5FF] selection:text-black">
      {/* Banner */}
      <section className="relative w-full h-[45vh] md:h-[65vh] min-h-[320px] md:min-h-[500px] border-b border-white/10 overflow-hidden mt-16">
        <img
          src="/p2.jpeg"
          alt="Quanta Team Background"
          className="w-full h-full object-cover object-[center_30%] opacity-50 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[#00E5FF]/5 mix-blend-overlay pointer-events-none" />

        <div className="absolute bottom-0 left-0 p-5 md:p-12 lg:px-24 w-full">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-[#00E5FF]/80 mb-2 md:mb-3"
          >
            // Two Squads. One Mission.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-[8rem] font-bold font-syne text-white uppercase tracking-tighter leading-none"
          >
            OUR TEAM<span className="text-[#00E5FF] animate-pulse">_</span>
          </motion.h1>
        </div>
      </section>

      {/* Squads */}
      {squads.map((squad, squadIdx) => (
        <section
          key={squad.name}
          className="w-full py-12 md:py-20 px-4 md:px-12 lg:px-24"
        >
          {/* Squad Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-14 border-b border-white/10 pb-4 md:pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-3 md:gap-4"
          >
            <div>
              <span
                className="inline-block font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase mb-2 md:mb-3 px-2 md:px-3 py-1 border"
                style={{
                  color: squad.accent,
                  borderColor: squad.accent + "40",
                  backgroundColor: squad.accent + "10",
                }}
              >
                Squad {String(squadIdx + 1).padStart(2, "0")}
              </span>
              <h2 className="text-2xl md:text-5xl font-black font-syne uppercase tracking-tighter text-white/90 flex items-center gap-2 md:gap-4">
                <span>{squad.tag}</span>
                {squad.name}
              </h2>
            </div>
            <span
              className="font-mono tracking-widest uppercase text-xs md:text-sm"
              style={{ color: squad.accent }}
            >
              // {squad.members.length} Members
            </span>
          </motion.div>

          {/* Desktop Grid (hidden on mobile) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {squad.members.map((member, i) => (
              <DesktopCard
                key={member.name}
                member={member}
                index={i}
                accentColor={squad.accent}
                accentBg={squad.accentBg}
              />
            ))}
          </div>

          {/* Mobile List (hidden on desktop) */}
          <div className="flex flex-col gap-3 md:hidden">
            {squad.members.map((member, i) => (
              <MobileCard
                key={member.name}
                member={member}
                index={i}
                accentColor={squad.accent}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
