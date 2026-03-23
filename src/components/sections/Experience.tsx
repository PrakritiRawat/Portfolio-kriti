"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ChevronRight, Server, Database, BrainCircuit, Activity, Code2, LineChart, Cpu } from "lucide-react";

interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  outputs: { title: string; icon: React.ElementType }[];
}

const experiences: Experience[] = [
  {
    id: "rabbitt",
    company: "Rabbitt AI",
    role: "AI Researcher",
    period: "2023 - Present",
    description: "Researching, developing, and deploying production LLM integrations and evaluating systems.",
    outputs: [
      { title: "Production LLM integrations and automation tooling", icon: BrainCircuit },
      { title: "LLM-based evaluation systems and rubric generation engines", icon: Activity },
      { title: "Model inference performance improvements", icon: Cpu },
    ],
  },
  {
    id: "binary-keeda",
    company: "Binary Keeda",
    role: "Full Stack Intern",
    period: "2022 - 2023",
    description: "Developed end-to-end SaaS platforms and backend architecture optimizations.",
    outputs: [
      { title: "Enterprise HR SaaS automation workflows", icon: Code2 },
      { title: "Role-based intelligent dashboards", icon: LineChart },
      { title: "Backend optimization reducing load times", icon: Server },
    ],
  },
  {
    id: "ibm",
    company: "IBM",
    role: "AI & ML Intern",
    period: "2022",
    description: "Built scalable cloud architectures and intelligent pipelines for IoT devices.",
    outputs: [
      { title: "Cloud-native IoT platform architecture", icon: Database },
      { title: "AWS IoT Core, Lambda, DynamoDB integration", icon: Server },
      { title: "Real-time analytics pipelines", icon: Activity },
    ],
  },
];

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="experience" className="w-full relative z-10 scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-16 justify-center">
          <Briefcase className="w-8 h-8 text-neon-blue" />
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-sky-300">
              Experience
            </span>
          </h2>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12">
          {experiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;

            return (
               <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[7px] top-6 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] border border-white/20" />

                {/* Card Container */}
                <motion.div
                  layout
                  onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                  className={`cursor-pointer rounded-2xl border backdrop-blur-md overflow-hidden transition-all duration-300 ${
                    isExpanded 
                      ? "bg-white/5 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)]" 
                      : "bg-[#050811]/60 border-white/5 hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  {/* Header Row */}
                  <div className="p-6 md:p-8 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-neon-blue font-mono text-sm md:text-base mb-2">
                        {exp.role}
                      </p>
                      <p className="text-gray-400 text-sm">{exp.description}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0 ml-4">
                      <span className="text-gray-500 font-mono text-sm">{exp.period}</span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 90 : 0 }}
                        className="text-gray-400"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Expandable Architecture Contributions Panel */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="border-t border-white/10"
                      >
                        <div className="p-6 md:p-8 bg-[#050811]/50 space-y-6">
                           <h4 className="text-xs font-mono text-blue-200 uppercase tracking-[0.2em] opacity-80">
                            Engineering Architecture & Outputs
                           </h4>
                           
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {exp.outputs.map((output, i) => {
                                const Icon = output.icon;
                                return (
                                  <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors"
                                  >
                                    <div className="mt-1 p-2 rounded-lg bg-white/10 text-white/80">
                                      <Icon className="w-5 h-5" />
                                    </div>
                                    <span className="text-gray-300 text-sm leading-relaxed">
                                      {output.title}
                                    </span>
                                  </motion.div>
                                );
                              })}
                           </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
