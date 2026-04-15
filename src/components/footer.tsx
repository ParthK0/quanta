import Link from "next/link";
import { Terminal, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/20 bg-[#0B1120] py-4 selection:bg-[#00E5FF] selection:text-black">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-white/20 pb-3">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <img
                src="/logo.png"
                alt="Quanta Logo"
                className="h-10 w-auto object-contain brightness-0 invert group-hover:drop-shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all"
              />
            </Link>
            <p className="max-w-md font-mono text-sm text-white/50 uppercase tracking-widest leading-relaxed">
              
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
          
          <div className="md:col-span-1">
            <h3 className="font-mono font-bold text-[#00E5FF] mb-3 tracking-[0.2em] uppercase text-sm">
              {"< ROUTING >"}
            </h3>
            <ul className="space-y-4 font-mono text-sm uppercase tracking-widest text-white/70">
              <li><Link href="/events" className="hover:text-[#00E5FF] hover:pl-2 transition-all before:content-['>'] before:mr-2 before:opacity-0 hover:before:opacity-100">EVENTS</Link></li>
              <li><Link href="/resources" className="hover:text-[#00E5FF] hover:pl-2 transition-all before:content-['>'] before:mr-2 before:opacity-0 hover:before:opacity-100">RESOURCES</Link></li>
              <li><Link href="/gallery" className="hover:text-[#00E5FF] hover:pl-2 transition-all before:content-['>'] before:mr-2 before:opacity-0 hover:before:opacity-100">GALLERY</Link></li>
              <li><Link href="/team" className="hover:text-white hover:pl-2 transition-all before:content-['>'] before:mr-2 before:opacity-0 hover:before:opacity-100">TEAM</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="font-mono font-bold text-[#00E5FF] mb-3 tracking-[0.2em] uppercase text-sm">
              {"< CONTACT >"}
            </h3>
            <div className="flex flex-col lg:flex-row gap-8">
              <ul className="space-y-4 font-mono text-xs uppercase tracking-widest text-white/70 flex-shrink-0">
                <li className="flex items-start space-x-3 group cursor-default">
                  <Terminal size={16} className="text-[#00E5FF] mt-0.5 group-hover:animate-pulse" />
                  <span className="group-hover:text-white transition-colors">HELLO@QUANTA.CLUB</span>
                </li>
                <li className="flex items-start space-x-3 group transition-colors hover:text-white">
                  <MapPin size={16} className="text-[#00E5FF] mt-0.5 group-hover:animate-bounce" />
                  <a 
                    href="https://www.google.com/maps/place/Galgotias+University/@28.3668904,77.5413398,15.91z/data=!4m6!3m5!1s0x390cc7365a740e65:0xd0d60a62e55ab171!8m2!3d28.3668904!4d77.5413398" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group-hover:text-white transition-colors leading-relaxed"
                  >
                    PLOT NO. 2, YAMUNA EXPY,<br/>
                    OPPOSITE BUDDHA CIRCUIT,<br/>
                    SECTOR 17A, GREATER NOIDA,<br/>
                    UTTAR PRADESH 203201
                  </a>
                </li>
              </ul>

              {/* Mini Map Integration */}
              <div className="relative h-44 w-full border border-white/10 bg-[#050A14] overflow-hidden transition-all duration-700 group/map">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.337775531988!2d77.5381699!3d28.3647373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc7365a740e65%3A0xd0d60a62e55ab171!2sGalgotias%20University!5e0!3m2!1sen!2sin!4v1712433000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="relative z-10"
                ></iframe>
                <div className="absolute top-2 right-2 z-20 pointer-events-none opacity-0 group-hover/map:opacity-100 transition-opacity">
                  <div className="px-2 py-0.5 bg-black/80 border border-[#00E5FF]/20 text-[8px] font-mono text-[#00E5FF] uppercase tracking-widest">
                    GU_LOC: [28.36, 77.54]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-2 flex flex-col md:flex-row justify-between items-center font-mono text-xs text-white/40 uppercase tracking-widest">
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
