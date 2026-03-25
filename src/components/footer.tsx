import Link from "next/link";
import { Globe, Link as LinkIcon, Send, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-syne font-bold text-2xl text-white text-glow">
                QUANTA
              </span>
            </Link>
            <p className="max-w-xs text-muted-foreground text-sm">
              Where Data Meets Intelligence. The premier data science, AI, and ML club empowering students.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-primary transition-colors text-muted-foreground">
                <Globe size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-secondary transition-colors text-muted-foreground">
                <LinkIcon size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-accent transition-colors text-muted-foreground">
                <Send size={18} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-syne font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors">Events</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/resources" className="hover:text-primary transition-colors">Resources</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-syne font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>hello@quanta.club</span>
              </li>
              <li>
                <Link href="/contact" className="inline-block mt-2 px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full transition-colors text-xs uppercase tracking-wider font-semibold">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/40 text-center flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Quanta Data Science Club. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
