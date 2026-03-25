"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate simple password check (e.g., password is "q")
    if (password === "admin123") {
      document.cookie = "admin_session=authenticated; path=/; max-age=86400";
      router.push("/admin");
    } else {
      setError("Invalid admin password. (Hint: admin123)");
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-background px-4">
      <div className="absolute inset-0 bg-grid-white opacity-5" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md bg-card border border-border rounded-2xl p-8 shadow-2xl"
      >
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-primary/10 rounded-full border border-primary/20">
            <Lock className="w-8 h-8 text-primary" />
          </div>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold font-syne text-white mb-2">Admin Panel Login</h1>
          <p className="text-muted-foreground text-sm">Secure area for Quanta executives.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="text-sm font-medium text-white/80 block mb-2">Master Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 bg-background border border-border rounded-lg px-4 text-white focus:outline-none focus:border-primary transition-colors text-center tracking-widest"
              placeholder="••••••••"
            />
            {error && <p className="text-destructive text-sm mt-2 text-center">{error}</p>}
          </div>
          
          <button 
            type="submit" 
            className="w-full h-12 rounded-lg bg-primary text-primary-foreground font-bold text-sm tracking-wide hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(255,107,184,0.3)]"
          >
            Access Dashboard
          </button>
        </form>
        
        <div className="mt-8 text-center">
           <a href="/" className="text-muted-foreground text-sm hover:text-white transition-colors">
             &larr; Return to Website
           </a>
        </div>
      </motion.div>
    </div>
  );
}
