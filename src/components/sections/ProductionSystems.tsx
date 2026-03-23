"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, ShieldCheck, Box, Zap, Settings, X, Network, Link2 } from "lucide-react";

interface Module {
  id: string;
  title: string;
  category: string;
  icon: React.ElementType;
  tech: string[];
  architecture: {
    components: string[];
    description: string;
  };
}

const modules: Module[] = [
  {
    id: "hr-intelligence",
    title: "Enterprise HR Intelligence Platform",
    category: "SaaS Application",
    icon: LayoutDashboard,
    tech: ["Next.js", "Trpc", "PostgreSQL", "Tailwind"],
    architecture: {
      components: ["Role-Based Access (RBAC)", "Intelligent Dashboards", "Automated Workflows", "Reporting Engine"],
      description: "A centralized platform transforming scattered HR operations into a streamlined, automated workflow.",
    },
  },
  {
    id: "llm-eval",
    title: "LLM Evaluation Pipeline",
    category: "AI Infrastructure",
    icon: ShieldCheck,
    tech: ["Python", "LangChain", "OpenAI", "Vector DB"],
    architecture: {
      components: ["Prompt Ingestion", "Rubric Generator", "LLM Judge", "Metric Dashboard"],
      description: "Pipeline to systematically evaluate language model outputs against dynamic rubrics to ensure production quality.",
    },
  },
  {
    id: "recruitment",
    title: "Recruitment Automation System",
    category: "Workflow Automation",
    icon: Network,
    tech: ["AWS Lambda", "SNS", "FastAPI", "Docker"],
    architecture: {
      components: ["Resume Parser API", "Candidate Scoring", "Interview Scheduler", "Notification Service"],
      description: "Automates the hiring funnel from resume screening to initial interview scheduling using autonomous agents.",
    },
  },
  {
    id: "backend-opt",
    title: "Backend Model Serving Optimization",
    category: "Performance Engineering",
    icon: Zap,
    tech: ["TensorRT", "Kubernetes", "Redis", "gRPC"],
    architecture: {
      components: ["Request Batching", "Inference Cache", "Load Balancer", "Auto-scaling Workers"],
      description: "High-throughput serving architecture designed to minimize latency for real-time model inferences.",
    },
  },
];

export default function ProductionSystems() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  return (
    <section id="production" className="w-full relative z-10 py-24 scroll-mt-32">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-4 mb-4">
            <Box className="w-8 h-8 text-neon-blue" />
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Production <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-sky-300">Systems</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Engineering scalable cloud infrastructure and executing complex enterprise solutions.
          </p>
        </motion.div>

        {/* System Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((mod, index) => {
            const Icon = mod.icon;
            const isSelected = selectedModule === mod.id;

            return (
              <motion.div
                key={mod.id}
                layoutId={`module-${mod.id}`}
                onClick={() => setSelectedModule(mod.id)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`cursor-pointer rounded-2xl border p-6 bg-white/5 backdrop-blur-md relative overflow-hidden group hover:border-white/30 transition-colors ${
                  isSelected ? "border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.05)]" : "border-white/10"
                }`}
              >
                {/* Glowing orb background effect on hover */}
                <div className="absolute -inset-24 bg-white/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="relative z-10 flex items-start gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-white/80">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-blue transition-colors">
                      {mod.title}
                    </h3>
                    <span className="text-[10px] font-mono text-blue-200/70 uppercase border-b border-blue-200/20 mb-3 tracking-widest">
                      {mod.category}
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {mod.tech.map((t) => (
                        <span key={t} className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Click Hint */}
                <div className="absolute bottom-6 right-6 text-white/30 group-hover:text-neon-blue/70 transition-colors flex items-center gap-1">
                  <span className="text-xs font-mono uppercase">Expand</span>
                  <Settings className="w-4 h-4 animate-spin-slow" style={{ animationDuration: '4s' }} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Expandable Architecture Overlay Panel */}
      <AnimatePresence>
        {selectedModule && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#050811]/90 backdrop-blur-sm"
            onClick={() => setSelectedModule(null)}
          >
            <motion.div
              layoutId={`module-${selectedModule}`}
              className="bg-black border border-white/20 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(255,255,255,0.05)]"
              onClick={(e) => e.stopPropagation()}
            >
              {modules.map((mod) => {
                if (mod.id !== selectedModule) return null;
                const Icon = mod.icon;

                return (
                  <div key={mod.id} className="p-8 md:p-12 relative">
                    <button 
                      onClick={() => setSelectedModule(null)}
                      className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>

                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-4 rounded-xl bg-white/5 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        <Icon className="w-10 h-10" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">{mod.title}</h2>
                        <span className="text-sm font-mono text-neon-purple tracking-wider uppercase">
                          Architecture Visualization
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-base md:text-lg mb-10 leading-relaxed border-l-4 border-neon-blue/30 pl-4 py-1">
                      {mod.architecture.description}
                    </p>

                    {/* Architecture Node Map Visualization */}
                    <div className="bg-[#050811] border border-white/10 rounded-xl p-6 md:p-10 relative overflow-hidden">
                       <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
                       
                       <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 relative z-10 w-full overflow-x-auto pb-4 md:pb-0">
                          {mod.architecture.components.map((comp, idx) => (
                             <React.Fragment key={idx}>
                               <motion.div 
                                 initial={{ opacity: 0, y: 20 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 transition={{ delay: 0.2 + idx * 0.1 }}
                                 className="relative bg-[#0a0f1d] border border-neon-blue/30 p-4 rounded-lg min-w-[160px] text-center shadow-[0_0_15px_rgba(125,211,252,0.1)] shrink-0 group hover:border-neon-blue hover:shadow-[0_0_20px_rgba(125,211,252,0.4)] transition-all"
                               >
                                  <span className="text-sm font-semibold text-white group-hover:text-neon-blue transition-colors">
                                    {comp}
                                  </span>
                               </motion.div>

                               {/* Connector logic */}
                               {idx < mod.architecture.components.length - 1 && (
                                  <motion.div 
                                    initial={{ opacity: 0 }} 
                                    animate={{ opacity: 1 }} 
                                    transition={{ delay: 0.5 }}
                                    className="hidden md:flex items-center justify-center px-4"
                                  >
                                     <div className="h-px w-12 bg-gradient-to-r from-neon-blue/20 via-neon-blue to-neon-blue/20 relative">
                                        <div className="absolute w-2 h-2 rounded-full bg-neon-blue top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glow-blue" />
                                     </div>
                                  </motion.div>
                               )}

                               {idx < mod.architecture.components.length - 1 && (
                                  <div className="md:hidden flex h-8 w-px bg-neon-blue/50 my-2" />
                               )}
                             </React.Fragment>
                          ))}
                       </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
