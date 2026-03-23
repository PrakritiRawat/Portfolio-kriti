"use client";

import { motion } from "framer-motion";
import { CopySlash, Server, Blocks, CloudCog, Settings2, CodeSquare, GitBranch, Terminal, Globe, BrainCircuit } from "lucide-react";
import React from "react";

const stackLayers = [
  {
     id: "frontend",
     title: "Frontend Systems",
     icon: Globe,
     techs: ["React", "Next.js", "Tailwind CSS", "Three.js", "Framer Motion"],
     color: "from-sky-400 to-indigo-300"
  },
  {
     id: "backend",
     title: "Backend APIs",
     icon: Server,
     techs: ["Python", "FastAPI", "Node.js", "tRPC", "gRPC"],
     color: "from-indigo-400 to-white/30"
  },
  {
     id: "ml",
     title: "Machine Learning Pipelines",
     icon: BrainCircuit,
     techs: ["PyTorch", "TensorFlow", "LangChain", "OpenCV", "Vector DBs"],
     color: "from-purple-500 to-indigo-400"
  },
  {
     id: "cloud",
     title: "Cloud Infrastructure",
     icon: CloudCog,
     techs: ["AWS Core Services", "Lambda", "DynamoDB", "CloudWatch", "IoT Core"],
     color: "from-orange-300/80 to-amber-200/40"
  },
  {
     id: "devops",
     title: "DevOps Automation",
     icon: GitBranch,
     techs: ["Docker", "Kubernetes", "Terraform", "CI/CD", "GitHub Actions"],
     color: "from-teal-400/80 to-emerald-200/40"
  }
];

const designPipeline = ["User", "API Layer", "Model", "Vector DB", "Cloud Infrastructure", "Monitoring"];

export default function TechStack() {
  return (
    <section id="tech-stack" className="w-full relative z-10 py-32 scroll-mt-32">
       <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Left: Layered Engineering Stack */}
          <div>
             <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               className="mb-12"
             >
                <div className="flex items-center gap-4 mb-4">
                   <CodeSquare className="w-8 h-8 text-white" />
                   <h2 className="text-3xl md:text-5xl font-bold text-white">Full <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-sky-300">Stack</span></h2>
                </div>
                <p className="text-gray-400">Layered approach to building robust intelligence platforms.</p>
             </motion.div>

             <div className="flex flex-col gap-4 relative pl-4 md:pl-8">
                {/* Connecting spine */}
                <div className="absolute left-0 top-6 bottom-6 w-px bg-white/10" />

                {stackLayers.map((layer, i) => {
                   const Icon = layer.icon;

                   return (
                      <motion.div
                         key={layer.id}
                         initial={{ opacity: 0, x: -50 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true, margin: "-50px" }}
                         transition={{ duration: 0.5, delay: i * 0.15 }}
                         className="relative group cursor-default"
                      >
                         <div className={`absolute top-1/2 -left-4 md:-left-8 w-8 h-px bg-white/20 opacity-50`}/>
                         <div className={`absolute top-1/2 -left-[18px] md:-left-[34px] w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]`} />

                         <div className="bg-white/5 border border-white/10 p-5 md:p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-6 group-hover:bg-white/10 group-hover:border-white/30 transition-colors">
                            <div className={`p-4 rounded-xl bg-gradient-to-br ${layer.color} text-white shadow-lg`}>
                               <Icon className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                               <h3 className="text-lg font-bold text-white mb-3">{layer.title}</h3>
                               <div className="flex flex-wrap gap-2">
                                  {layer.techs.map(tech => (
                                     <span key={tech} className="text-xs bg-white/5 border border-white/5 px-2 py-1 rounded text-gray-300">
                                        {tech}
                                     </span>
                                  ))}
                               </div>
                            </div>
                         </div>
                      </motion.div>
                   )
                })}
             </div>
          </div>

          {/* Right: Architecture Design Pipeline */}
          <div>
             <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               className="mb-12 sticky top-32"
             >
                <div className="flex items-center gap-4 mb-4">
                   <Settings2 className="w-8 h-8 text-neon-purple" />
                   <h2 className="text-3xl md:text-5xl font-bold text-white">System <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple/80 to-neon-blue/80">Thinking</span></h2>
                </div>
                <p className="text-gray-400 mb-12">How I Design Production AI Systems</p>

                <div className="bg-[#0a0f1d] border border-white/10 rounded-2xl p-6 md:p-10 relative overflow-hidden">
                   <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
                   
                   <div className="relative z-10 flex flex-col gap-2 w-full max-w-[300px] mx-auto">
                      {designPipeline.map((node, i) => (
                         <React.Fragment key={node}>
                            <motion.div
                               initial={{ opacity: 0, y: 20 }}
                               whileInView={{ opacity: 1, y: 0 }}
                               viewport={{ once: true, margin: "-50px" }}
                               transition={{ duration: 0.5, delay: i * 0.1 }}
                               className={`p-4 rounded-xl border flex items-center justify-center relative cursor-default transition-all duration-300 ${
                                 i === 2 || i === 3 ? "bg-neon-purple/10 border-neon-purple/50 text-neon-purple glow-purple shadow-[0_0_15px_rgba(192,132,252,0.2)]" : 
                                 i === 4 ? "bg-orange-500/10 border-orange-500/30 text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.1)]" :
                                 i === 5 ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]" :
                                 "bg-white/5 border-white/10 text-white"
                               }`}
                            >
                               <span className="font-bold tracking-wide">{node}</span>
                               <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 rounded-xl transition-opacity" />
                            </motion.div>

                            {/* Arrow Connection */}
                            {i < designPipeline.length - 1 && (
                               <div className="flex items-center justify-center py-2 h-10 relative">
                                  <div className="w-px h-full bg-white/20 relative">
                                     <motion.div
                                        initial={{ y: "-100%" }}
                                        whileInView={{ y: "100%" }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                                        className={`absolute w-full h-full ${i === 2 ? "bg-neon-purple" : i === 4 ? "bg-emerald-400" : "bg-neon-blue"} glow-blue`}
                                     />
                                  </div>
                               </div>
                            )}
                         </React.Fragment>
                      ))}
                   </div>
                </div>

             </motion.div>
          </div>

       </div>
    </section>
  );
}
