import Link from "next/link";
import { Terminal, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/20 bg-[#0B1120] selection:bg-[#00E5FF] selection:text-black">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 py-12 border-b border-white/10">

          {/* Brand & Socials */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block group">
                <img
                  src="/logo.png"
                  alt="Quanta Logo"
                  className="h-10 w-auto object-contain brightness-0 invert group-hover:drop-shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all"
                />
              </Link>
              <p className="font-mono text-[11px] text-white/40 uppercase tracking-widest leading-relaxed mt-4">
                The Official Data Science Community of Galgotias University.
              </p>
            </div>
            <div className="flex space-x-3 mt-6">
              <a href="https://github.com/quantaclub" target="_blank" rel="noopener noreferrer" className="p-2.5 border border-white/15 hover:border-[#00E5FF] hover:bg-[#00E5FF] hover:text-black transition-all duration-200 text-white/70 hover:scale-105">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/quanta-club" target="_blank" rel="noopener noreferrer" className="p-2.5 border border-white/15 hover:border-[#00E5FF] hover:bg-[#00E5FF] hover:text-black transition-all duration-200 text-white/70 hover:scale-105">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/quanta.guofficial/" target="_blank" rel="noopener noreferrer" className="p-2.5 border border-white/15 hover:border-[#00E5FF] hover:bg-[#00E5FF] hover:text-black transition-all duration-200 text-white/70 hover:scale-105">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2">
            <h3 className="font-mono font-bold text-[#00E5FF] mb-5 tracking-[0.2em] uppercase text-xs">
              {"< ROUTING >"}
            </h3>
            <ul className="space-y-3 font-mono text-xs uppercase tracking-widest text-white/60">
              <li>
                <Link href="/" className="hover:text-[#00E5FF] hover:pl-2 transition-all duration-200 before:content-['>'] before:mr-2 before:opacity-0 hover:before:opacity-100 before:text-[#00E5FF]">HOME</Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#00E5FF] hover:pl-2 transition-all duration-200 before:content-['>'] before:mr-2 before:opacity-0 hover:before:opacity-100 before:text-[#00E5FF]">TEAM</Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-[#00E5FF] hover:pl-2 transition-all duration-200 before:content-['>'] before:mr-2 before:opacity-0 hover:before:opacity-100 before:text-[#00E5FF]">EVENTS</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#00E5FF] hover:pl-2 transition-all duration-200 before:content-['>'] before:mr-2 before:opacity-0 hover:before:opacity-100 before:text-[#00E5FF]">GALLERY</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h3 className="font-mono font-bold text-[#00E5FF] mb-5 tracking-[0.2em] uppercase text-xs">
              {"< CONTACT >"}
            </h3>
            <ul className="space-y-4 font-mono text-xs uppercase tracking-widest text-white/60">
              <li className="flex items-center space-x-3 group cursor-default">
                <Terminal size={14} className="text-[#00E5FF] flex-shrink-0 group-hover:animate-pulse" />
                <span className="group-hover:text-white transition-colors">HELLO@QUANTA.CLUB</span>
              </li>
              <li className="flex items-start space-x-3 group">
                <MapPin size={14} className="text-[#00E5FF] flex-shrink-0 mt-0.5" />
                <a 
                  href="https://www.google.com/maps/place/Galgotias+University/@28.3668904,77.5413398,15.91z" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group-hover:text-white transition-colors leading-relaxed"
                >
                  PLOT NO. 2, YAMUNA EXPY,<br/>
                  SECTOR 17A, GREATER NOIDA,<br/>
                  UTTAR PRADESH 203201
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="md:col-span-4">
            <h3 className="font-mono font-bold text-[#00E5FF] mb-5 tracking-[0.2em] uppercase text-xs">
              {"< LOCATION >"}
            </h3>
            <div className="relative h-48 w-full border border-white/10 bg-[#050A14] overflow-hidden group/map">
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
                <div className="px-2 py-0.5 bg-black/80 border border-[#00E5FF]/30 text-[8px] font-mono text-[#00E5FF] uppercase tracking-widest">
                  GU_LOC: [28.36, 77.54]
                </div>
              </div>
            </div>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="py-5 flex flex-col md:flex-row justify-between items-center gap-3 font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">
          <p>{"(C) "}{new Date().getFullYear()} QUANTA — ARCHITECTING INTELLIGENCE</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#00E5FF] transition-colors">PRIVACY.MD</Link>
            <span className="text-white/10">|</span>
            <Link href="/terms" className="hover:text-[#00E5FF] transition-colors">TERMS.MD</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
