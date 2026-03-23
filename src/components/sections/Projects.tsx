"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code, Newspaper, Users, DollarSign, X } from "lucide-react";

interface Project {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  architecture: string[];
  links: { github?: string; live?: string };
}

const projects: Project[] = [
  {
    id: "news-engine",
    title: "AI News Intelligence Engine",
    icon: Newspaper,
    description: "Real-time AI pipeline aggregating, summarizing, and categorizing global tech news using LLMs and vector search.",
    architecture: ["RSS/API Ingestion (Python)", "OpenAI Summarization", "Pinecone Vector DB", "Next.js Dashboard"],
    links: { github: "#" },
  },
  {
    id: "recruit-desk",
    title: "RecruitDesk Automation",
    icon: Users,
    description: "Autonomous HR agent screening candidates, scheduling interviews, and generating dynamic evaluation rubrics.",
    architecture: ["FastAPI Backend", "LangChain Agents", "AWS SES Notifications", "React Frontend"],
    links: { github: "#", live: "#" },
  },
  {
    id: "cost-optimizer",
    title: "Cloud Cost Optimizer",
    icon: DollarSign,
    description: "FinOps dashboard using machine learning to detect AWS spend anomalies and predict future resource costs.",
    architecture: ["AWS Cost Explorer API", "Prophet Time-series", "Lambda Cron", "Streamlit UI"],
    links: { github: "#" },
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <section id="projects" className="w-full relative z-10 py-24 scroll-mt-32">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="text-center mb-20"
        >
           <div className="flex justify-center items-center gap-4 mb-4">
              <Code className="w-8 h-8 text-white/40" />
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                 System <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-sky-300">Modules</span>
              </h2>
           </div>
           <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Independent projects architected as robust, connected system modules.
           </p>
        </motion.div>

        {/* Connected Modules Visualization */}
        <div className="relative max-w-5xl mx-auto py-12">
           <div className="flex flex-col md:flex-row items-center justify-between relative z-10 gap-16 md:gap-0">
              {projects.map((proj, i) => {
                 const Icon = proj.icon;
                 
                 return (
                    <div key={proj.id} className="relative z-20 flex-1 flex flex-col items-center w-full">
                       <motion.div
                          layoutId={`proj-${proj.id}`}
                          onClick={() => setSelectedProject(proj.id)}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.5, delay: i * 0.2 }}
                          whileHover={{ scale: 1.05 }}
                          className="w-full max-w-[280px] bg-black/40 border border-white/10 p-6 rounded-2xl cursor-pointer group hover:border-white/30 hover:bg-white/5 transition-all shadow-lg"
                       >
                          <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-white/50 mb-6 group-hover:text-white transition-all">
                             <Icon className="w-7 h-7" />
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">
                             {proj.title}
                          </h3>
                          <p className="text-sm text-gray-400 line-clamp-2">
                             {proj.description}
                          </p>
                       </motion.div>

                       {/* Connectors between modules */}
                       {i < projects.length - 1 && (
                          <div className="hidden md:block absolute top-[100px] left-[70%] w-[80%] h-px bg-white/5 -z-10">
                             <motion.div
                                className="h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                             />
                          </div>
                       )}

                       {/* Mobile down connector */}
                       {i < projects.length - 1 && (
                          <div className="md:hidden absolute top-[100%] left-[50%] h-16 w-px bg-white/5 -z-10">
                             <motion.div
                                className="w-full bg-gradient-to-b from-transparent via-white/20 to-transparent"
                                initial={{ y: "-100%" }}
                                animate={{ y: "16px" }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                             />
                          </div>
                       )}
                    </div>
                 );
              })}
           </div>
        </div>

        {/* Detail Modal overlay */}
        <AnimatePresence>
           {selectedProject && (
              <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050811]/90 backdrop-blur-md"
                 onClick={() => setSelectedProject(null)}
              >
                 {projects.map((proj) => {
                    if (proj.id !== selectedProject) return null;
                    const Icon = proj.icon;

                    return (
                       <motion.div
                          key={proj.id}
                          layoutId={`proj-${proj.id}`}
                          onClick={(e) => e.stopPropagation()}
                          className="bg-black border border-white/20 w-full max-w-2xl rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.05)]"
                       >
                          <div className="p-8 relative">
                             <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 text-gray-400 hover:text-white"
                             >
                                <X className="w-6 h-6" />
                             </button>
                             
                             <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 text-white/80 flex items-center justify-center border border-white/10">
                                   <Icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white">{proj.title}</h3>
                             </div>

                             <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                {proj.description}
                             </p>

                             <h4 className="text-sm font-mono text-neon-purple uppercase tracking-wider mb-4">Architecture Stack</h4>
                             <div className="flex flex-wrap gap-3 mb-8">
                                {proj.architecture.map((item) => (
                                   <span key={item} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">
                                      {item}
                                   </span>
                                ))}
                             </div>

                             <div className="flex gap-4">
                                {proj.links.github && (
                                   <a href={proj.links.github} className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-colors">
                                      <Github className="w-5 h-5" /> Code Repository
                                   </a>
                                )}
                                {proj.links.live && (
                                   <a href={proj.links.live} className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg text-white/90 transition-colors group">
                                      <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" /> Live Demo
                                   </a>
                                )}
                             </div>
                          </div>
                       </motion.div>
                    );
                 })}
              </motion.div>
           )}
        </AnimatePresence>
      </div>
    </section>
  );
}
