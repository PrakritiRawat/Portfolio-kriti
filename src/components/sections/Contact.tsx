"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Terminal } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full relative z-10 py-32 border-t border-white/5 bg-[#050811]/80">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="bg-white/[0.02] border border-white/10 rounded-3xl p-10 md:p-16 relative overflow-hidden group backdrop-blur-sm"
        >
           {/* Animated bg effect */}
           <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
           <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent glow-blue" />
           
           <div className="relative z-10">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 flex items-center justify-center text-white mb-8 glow-blue">
                 <Terminal className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                 Ready to Deploy?
              </h2>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                 Currently open for new opportunities to build scalable AI systems and architect cloud infrastructure for enterprise solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <a 
                   href="mailto:contact@prakritirawat.com" // Update as needed
                   className="px-8 py-4 w-full sm:w-auto rounded-xl bg-white text-black font-bold tracking-wide hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-2"
                 >
                    <Mail className="w-5 h-5" /> Say Hello
                 </a>
                 <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-start">
                    <a href="https://github.com/prakritirawat" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
                       <Github className="w-6 h-6" />
                    </a>
                    <a href="https://linkedin.com/in/prakritirawat" target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all group/linkedin">
                       <Linkedin className="w-6 h-6" />
                    </a>
                 </div>
              </div>
           </div>
        </motion.div>

        <div className="mt-16 text-sm text-gray-500 font-mono flex items-center justify-center gap-2">
           <span className="w-2 h-2 rounded-full bg-emerald-500/60 animate-pulse" />
           System live. Built with Next.js, Framer Motion & React Three Fiber.
        </div>
      </div>
    </section>
  );
}
