import Link from "next/link";
import { Terminal, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/20 bg-[#0B1120] py-16 md:py-24 selection:bg-[#00E5FF] selection:text-black">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/20 pb-16">
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="inline-block group">
              <h2 className="text-4xl font-black font-syne text-white uppercase tracking-tighter leading-none group-hover:text-[#00E5FF] transition-colors">
                QUANTA<span className="text-[#00E5FF] group-hover:text-white animate-pulse">_</span>
              </h2>
            </Link>
            <p className="max-w-md font-mono text-sm text-white/50 uppercase tracking-widest leading-relaxed">
              // WHERE DATA MEETS INTELLIGENCE. THE PREMIER DATA SCIENCE, AI, AND ML CELL.
            </p>
            <div className="flex space-x-4 pt-4 font-mono font-bold text-sm tracking-widest">
              <a href="#" className="p-3 border border-white/20 hover:border-[#00E5FF] hover:bg-[#00E5FF] hover:text-black transition-colors text-white">
                {"[ GH ]"}
              </a>
              <a href="#" className="p-3 border border-white/20 hover:border-[#00E5FF] hover:bg-[#00E5FF] hover:text-black transition-colors text-white">
                {"[ IN ]"}
              </a>
              <a href="#" className="p-3 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-colors text-white">
                {"[ X ]"}
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-mono font-bold text-[#00E5FF] mb-6 tracking-[0.2em] uppercase text-sm">
              {"< ROUTING >"}
            </h3>
            <ul className="space-y-4 font-mono text-sm uppercase tracking-widest text-white/70">
              <li><Link href="/events" className="hover:text-[#00E5FF] hover:pl-2 transition-all before:content-['>'] before:mr-2 before:opacity-0 hover:before:opacity-100">EVENTS</Link></li>
              <li><Link href="/projects" className="hover:text-[#00E5FF] hover:pl-2 transition-all before:content-['>'] before:mr-2 before:opacity-0 hover:before:opacity-100">PROJECTS</Link></li>
              <li><Link href="/gallery" className="hover:text-[#00E5FF] hover:pl-2 transition-all before:content-['>'] before:mr-2 before:opacity-0 hover:before:opacity-100">GALLERY</Link></li>
              <li><Link href="/team" className="hover:text-white hover:pl-2 transition-all before:content-['>'] before:mr-2 before:opacity-0 hover:before:opacity-100">TEAM</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-mono font-bold text-[#00E5FF] mb-6 tracking-[0.2em] uppercase text-sm">
              {"< CONTACT >"}
            </h3>
            <ul className="space-y-4 font-mono text-xs uppercase tracking-widest text-white/70">
              <li className="flex items-start space-x-3 group cursor-default">
                <Terminal size={16} className="text-[#00E5FF] mt-0.5 group-hover:animate-pulse" />
                <span className="group-hover:text-white transition-colors">HELLO@QUANTA.CLUB</span>
              </li>
              <li className="flex items-start space-x-3 group cursor-default">
                <MapPin size={16} className="text-[#00E5FF] mt-0.5 group-hover:animate-bounce" />
                <span className="group-hover:text-white transition-colors leading-relaxed">MAIN UNIVERSITY CAMPUS<br/>COMPUTER SCIENCE DEPT.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center font-mono text-xs text-white/40 uppercase tracking-widest">
          <p>{"(C) "}{new Date().getFullYear()} QUANTA SYS_ DAEMON. EXIT(0)</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link href="/privacy" className="hover:text-white hover:underline decoration-[#00E5FF]">PRIVACY.MD</Link>
            <Link href="/terms" className="hover:text-white hover:underline decoration-[#00E5FF]">TERMS.MD</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
