"use client";

import { motion } from "framer-motion";
import { DollarSign, ShieldAlert, BarChart3, Bot, CloudRain, LockKeyhole, ArrowDownToLine } from "lucide-react";

export default function FinOps() {
  const steps = [
    { label: "AWS Accounts", icon: CloudRain, desc: "Multi-Account" },
    { label: "STS AssumeRole", icon: LockKeyhole, desc: "Cross-Account Auth" },
    { label: "CloudWatch", icon: BarChart3, desc: "Metrics Ingestion" },
    { label: "Cost Engine", icon: ArrowDownToLine, desc: "Anomaly Detection" },
    { label: "AI Assistant", icon: Bot, desc: "Recommendations" },
  ];

  return (
    <section id="finops" className="w-full relative z-10 py-24 scroll-mt-32">
       <div className="max-w-6xl mx-auto px-4">
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
           >
              <div className="flex justify-center items-center gap-4 mb-4">
                 <DollarSign className="w-10 h-10 text-white/40" />
                 <h2 className="text-3xl md:text-5xl font-bold text-white">
                    Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-sky-300">FinOps Platform</span>
                 </h2>
              </div>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                 Monitoring and anomaly detection logic for enterprise cloud cost optimization.
              </p>
           </motion.div>

           <div className="relative max-w-5xl mx-auto border border-white/10 rounded-3xl bg-black p-8 md:p-16 overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
              
              <div className="flex flex-col md:flex-row items-center justify-between relative z-10 w-full">
                 {steps.map((step, i) => {
                    const Icon = step.icon;
                    return (
                        <div key={i} className="flex flex-col md:flex-row items-center w-full">
                           <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true, margin: "-50px" }}
                              transition={{ duration: 0.5, delay: i * 0.15 }}
                              className="relative flex flex-col items-center group z-20"
                           >
                              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:border-white/30 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                                 <Icon className="w-8 h-8 text-white/80" />
                              </div>
                              <div className="mt-4 text-center absolute top-[85px] w-32 -mx-4">
                                 <h4 className="text-sm font-bold text-white group-hover:text-emerald-400">{step.label}</h4>
                                 <p className="text-xs text-gray-500 font-mono mt-1">{step.desc}</p>
                              </div>
                           </motion.div>

                           {/* Connecting animated arrow lines */}
                           {i < steps.length - 1 && (
                              <div className="hidden md:flex w-full h-px border-t border-dashed border-emerald-400/30 relative items-center mx-2 z-10 min-w-[40px]">
                                 <motion.div
                                    className="absolute w-2 h-2 rounded-full bg-white/50 shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                                    initial={{ left: "0%" }}
                                    animate={{ left: "100%" }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
                                 />
                              </div>
                           )}

                           {i < steps.length - 1 && (
                              <div className="md:hidden flex h-16 w-px border-l border-dashed border-emerald-400/30 my-2 relative z-10">
                                 <motion.div
                                    className="absolute -left-[3px] w-2 h-2 rounded-full bg-white/50 shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                                    initial={{ top: "0%" }}
                                    animate={{ top: "100%" }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
                                 />
                              </div>
                           )}
                        </div>
                    );
                 })}
              </div>

              {/* Anomaly Detection Sub-panel */}
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 1 }}
                 className="mt-32 md:mt-40 border-t border-emerald-400/20 pt-8"
              >
                 <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white/[0.02] border border-white/10 p-6 rounded-2xl relative overflow-hidden group hover:border-white/30 transition-colors">
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="p-4 rounded-xl bg-white/5 text-white/80 relative z-10">
                       <ShieldAlert className="w-8 h-8 md:w-10 md:h-10 opacity-70" />
                    </div>
                    <div className="relative z-10 text-center md:text-left">
                       <h4 className="text-xl font-bold text-white mb-2">Automated Anomaly Detection</h4>
                       <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">
                          The Cost Engine continuously monitors CloudWatch metrics against historical baselines using standard deviation thresholds and machine learning models. When anomalous spend is detected (e.g., unintended EC2 scalar spikes), the AI Assistant immediately formulates remediation steps.
                       </p>
                    </div>
                 </div>
              </motion.div>
           </div>
       </div>
    </section>
  );
}
