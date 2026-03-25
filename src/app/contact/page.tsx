"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

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
            Let's <span className="text-primary text-glow">Connect</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground font-dm-mono max-w-2xl mx-auto"
          >
            Have a question, want to collaborate, or ready to join the club? Drop us a message below.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold font-syne text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary/20 text-secondary rounded-full">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-syne font-semibold text-white">Email Us</h3>
                    <p className="text-muted-foreground text-sm mt-1">contact@quantaclub.org</p>
                    <p className="text-muted-foreground text-sm">sponsorships@quantaclub.org</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/20 text-accent rounded-full">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-syne font-semibold text-white">Find Us</h3>
                    <p className="text-muted-foreground text-sm mt-1">Tech Hub, Room 404</p>
                    <p className="text-muted-foreground text-sm">Main University Campus</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-center items-center text-center">
              <h3 className="font-syne font-semibold text-white mb-2">Want to skip the form?</h3>
              <p className="text-muted-foreground text-sm mb-6">Fill out our official Google Form to apply for membership immediately.</p>
              <a href="#" className="inline-flex h-10 items-center justify-center rounded-full bg-white text-black px-8 font-semibold hover:bg-neutral-200 transition-colors">
                Open Google Form
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-4">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold font-syne text-white">Message Sent!</h3>
                <p className="text-muted-foreground">Thanks for reaching out. Our team will get back to you within 24-48 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2 border border-white/10 rounded-full hover:bg-white/5 transition-colors text-sm"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/80">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full h-12 bg-background border border-border rounded-lg px-4 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/80">University Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full h-12 bg-background border border-border rounded-lg px-4 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@university.edu"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-white/80">Subject</label>
                  <select 
                    id="subject"
                    className="w-full h-12 bg-background border border-border rounded-lg px-4 text-white focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="join">Membership Inquiry</option>
                    <option value="collab">Project Collaboration</option>
                    <option value="sponsor">Sponsorship</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
                  <textarea 
                    id="message" 
                    required
                    rows={4}
                    className="w-full bg-background border border-border rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about yourself..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </div>
  );
}
