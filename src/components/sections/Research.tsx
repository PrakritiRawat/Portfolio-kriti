"use client";

import { motion } from "framer-motion";
import { Microscope, Activity, Brain, CheckCircle2, TrendingUp, Target } from "lucide-react";

export default function Research() {
  const metrics = [
     { label: "Classification Accuracy", value: "98%", icon: Target },
     { label: "Dice Score", value: "0.87", icon: Activity },
     { label: "Intersection over Union", value: "0.78", icon: TrendingUp },
  ];

  return (
    <section id="research" className="w-full relative z-10 py-24 scroll-mt-32">
       <div className="max-w-6xl mx-auto px-4">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.7 }}
             className="relative border border-white/10 rounded-3xl bg-black p-8 md:p-12 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.03)] group hover:border-white/20 hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] transition-all"
          >
             {/* Background glow node */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[100px] pointer-events-none group-hover:bg-white/10 transition-all rounded-full" />
             
             <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
                <div className="flex-1">
                   <div className="flex items-center gap-3 mb-4">
                      <Microscope className="w-8 h-8 text-neon-purple" />
                      <span className="text-sm font-mono text-neon-purple tracking-widest uppercase glow-purple border border-neon-purple/50 px-3 py-1 rounded-full">
                         Academic Research
                      </span>
                   </div>
                   <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                      Vision Transformer <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">
                         Brain Tumor Analysis
                      </span>
                   </h2>
                   <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-6">
                      Fine-tuned DINOv3 with Low-Rank Adaptation (LoRA) for zero-shot semantic segmentation and rapid classification of MRI scans. Developed robust cross-dataset validation pipelines emphasizing zero-shot transferability.
                   </p>
                   
                   <div className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="font-mono text-sm tracking-widest uppercase glow-green">
                         IEEE Submission Under Review
                      </span>
                   </div>
                </div>

                <div className="w-full md:w-auto shrink-0 flex flex-col gap-4">
                   {metrics.map((metric, i) => {
                      const Icon = metric.icon;
                      return (
                         <motion.div 
                            key={metric.label}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                            className="bg-[#050811] border border-white/10 p-5 rounded-2xl flex items-center justify-between min-w-[280px] group-hover:border-neon-purple/30 transition-colors"
                         >
                            <div className="flex items-center gap-4">
                               <div className="p-3 bg-neon-purple/10 rounded-xl text-neon-purple">
                                  <Icon className="w-6 h-6" />
                               </div>
                               <span className="text-gray-400 font-mono text-sm uppercase">{metric.label}</span>
                            </div>
                            <span className="text-2xl font-black text-white glow-text">{metric.value}</span>
                         </motion.div>
                      );
                   })}
                   
                   {/* Decorative visual block showing AI analyzing */}
                   <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="mt-4 p-4 rounded-2xl border border-neon-blue/20 bg-neon-blue/5 flex items-center justify-between relative overflow-hidden"
                   >
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-blue/10 to-transparent w-[200%] animate-pulse" style={{ animationDuration: '3s' }} />
                     <div className="flex items-center gap-3 relative z-10">
                        <Brain className="w-5 h-5 text-neon-blue" />
                        <span className="text-xs font-mono text-neon-blue uppercase">Cross-Dataset Validation</span>
                     </div>
                     <div className="flex gap-1 relative z-10">
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-bounce" style={{ animationDelay: '0s' }} />
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-bounce" style={{ animationDelay: '0.2s' }} />
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-bounce" style={{ animationDelay: '0.4s' }} />
                     </div>
                   </motion.div>
                </div>
             </div>
          </motion.div>
       </div>
    </section>
  );
}
