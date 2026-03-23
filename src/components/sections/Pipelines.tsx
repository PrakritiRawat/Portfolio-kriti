"use client";

import { motion } from "framer-motion";
import { Cloud, Database, Cpu, SearchCode, MessageSquareCode, ArrowRight, Layers, Workflow, Link } from "lucide-react";

const awsNodes = [
  { id: "iot", label: "IoT Core", desc: "Device Data" },
  { id: "lambda", label: "Lambda", desc: "Processing" },
  { id: "dynamodb", label: "DynamoDB", desc: "Event Store" },
  { id: "sns", label: "SNS", desc: "Alerts" },
  { id: "quicksight", label: "QuickSight", desc: "Dashboards" },
];

const llmNodes = [
  { id: "prompt", label: "Prompt", desc: "User Input" },
  { id: "embeddings", label: "Embeddings", desc: "Vectorization" },
  { id: "vectordb", label: "Vector DB", desc: "Retrieval" },
  { id: "llm", label: "LLM", desc: "Generation" },
  { id: "response", label: "Structured", desc: "Output" },
];

export default function Pipelines() {
  return (
    <section id="architecture" className="w-full relative z-10 py-24 scroll-mt-32">
      <div className="max-w-6xl mx-auto px-4 space-y-32">
        
        {/* AWS Pipeline */}
        <div>
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
             <h3 className="text-3xl md:text-5xl font-bold text-white flex items-center justify-center gap-4 mb-4">
                <Cloud className="w-8 h-8 text-neon-blue" />
                <span>AWS Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-sky-300">Architecture</span></span>
             </h3>
             <p className="text-gray-400">Interactive serverless pipeline processing millions of events.</p>
           </motion.div>

           <div className="relative py-12">
              <div className="flex flex-col md:flex-row items-center justify-between w-full relative z-10">
                 {awsNodes.map((node, i) => (
                    <motion.div
                       key={node.id}
                       initial={{ opacity: 0, scale: 0.8 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true, margin: "-50px" }}
                       transition={{ duration: 0.5, delay: i * 0.2 }}
                       className="relative group flex flex-col items-center flex-1 my-4 md:my-0"
                    >
                       <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/5 border border-white/10 flex shadow-[0_0_15px_rgba(255,255,255,0.05)] items-center justify-center relative z-20 group-hover:border-white/30 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all">
                          <Layers className="w-8 h-8 md:w-10 md:h-10 text-white/70" />
                          
                          {/* Pulsing ring */}
                          <div className="absolute inset-0 rounded-2xl border border-white/20 scale-[1.1] opacity-0 group-hover:animate-ping" />
                       </div>
                       
                       <div className="mt-6 text-center">
                          <h4 className="font-bold text-white text-lg group-hover:text-blue-200 transition-colors">{node.label}</h4>
                          <p className="text-[10px] font-mono text-blue-200/50 mt-1 uppercase tracking-widest">{node.desc}</p>
                       </div>

                       {/* Connectors */}
                       {i < awsNodes.length - 1 && (
                         <div className="hidden md:block absolute top-[40px] md:top-[48px] left-[50%] w-full h-px bg-white/10 z-0">
                           <motion.div
                              className="h-full bg-gradient-to-r from-transparent via-neon-blue to-transparent glow-blue"
                              initial={{ x: "-100%" }}
                              whileInView={{ x: "100%" }}
                              viewport={{ once: false }} // Allows re-animating when scrolled back
                              transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                           />
                         </div>
                       )}

                       {/* Vertical connector mobile */}
                       {i < awsNodes.length - 1 && (
                         <div className="md:hidden h-12 w-px bg-white/10 my-2 relative">
                            <motion.div
                              className="absolute top-0 right-0 left-0 h-1/2 bg-neon-blue glow-blue"
                              initial={{ y: "-100%" }}
                              whileInView={{ y: "200%" }}
                              transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                            />
                         </div>
                       )}
                    </motion.div>
                 ))}
              </div>
           </div>
        </div>

        {/* LLM Workflow */}
        <div>
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
             <h3 className="text-3xl md:text-5xl font-bold text-white flex items-center justify-center gap-4 mb-4">
                <Workflow className="w-8 h-8 text-neon-purple" />
                <span>LLM Integration <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-indigo-300">Pipeline</span></span>
             </h3>
             <p className="text-gray-400">RAG lifecycle token flow from raw prompt to structured intelligence.</p>
           </motion.div>

           <div className="relative p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">
               <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
               <div className="flex flex-col md:flex-row justify-between items-center relative z-10 w-full gap-8 md:gap-0">
                  {llmNodes.map((node, i) => (
                    <motion.div
                       key={node.id}
                       initial={{ opacity: 0, y: 30 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.5, delay: i * 0.15 }}
                       className="relative w-full md:w-auto flex flex-col items-center"
                    >
                       <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/20 bg-black flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)] glow-purple relative">
                          <MessageSquareCode className="w-6 h-6 md:w-8 md:h-8 text-white/70" />
                       </div>
                       <div className="text-center mt-4">
                          <span className="block font-bold text-white text-base md:text-lg">{node.label}</span>
                          <span className="text-xs text-gray-500 font-mono tracking-widest">{node.desc}</span>
                       </div>

                       {/* Token Flow effect */}
                       {i < llmNodes.length - 1 && (
                         <div className="hidden md:flex absolute top-8 md:top-10 left-[80%] md:left-[90px] w-full md:w-[150%] max-w-[200px] h-px justify-center pointer-events-none">
                            <div className="w-full h-px border-t border-dashed border-neon-purple/30 relative">
                               <motion.div
                                 className="absolute -top-[2px] w-2 h-2 rounded-full bg-neon-purple glow-purple blur-[1px]"
                                 initial={{ left: "0%" }}
                                 animate={{ left: "100%" }}
                                 transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
                               />
                               <motion.div
                                 className="absolute -top-[2px] w-1.5 h-1.5 rounded-full bg-white glow-text"
                                 initial={{ left: "0%" }}
                                 animate={{ left: "100%" }}
                                 transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: (i * 0.3) + 0.2 }}
                               />
                            </div>
                         </div>
                       )}
                       {i < llmNodes.length - 1 && (
                         <div className="md:hidden flex h-10 w-px border-l border-dashed border-neon-purple/30 my-2 relative">
                            <motion.div
                                 className="absolute -left-[2px] w-2 h-2 rounded-full bg-neon-purple glow-purple blur-[1px]"
                                 initial={{ top: "0%" }}
                                 animate={{ top: "100%" }}
                                 transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
                               />
                         </div>
                       )}
                    </motion.div>
                  ))}
               </div>
           </div>
        </div>

      </div>
    </section>
  );
}
