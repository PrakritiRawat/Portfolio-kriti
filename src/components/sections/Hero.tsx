"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, Server, Database, BrainCircuit, Activity, LineChart, User } from "lucide-react";
import React, { useEffect, useState } from "react";

const pipelineNodes = [
  { id: "input", label: "User Input", icon: User },
  { id: "processing", label: "Data Processing", icon: Database },
  { id: "model", label: "Model", icon: BrainCircuit },
  { id: "api", label: "API Layer", icon: Server },
  { id: "aws", label: "AWS Services", icon: Server }, // AWS icon is not in lucide by default, using Server
  { id: "monitoring", label: "Monitoring", icon: LineChart },
];

const PipelineVisualization = () => {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % pipelineNodes.length);
    }, 2000); // Sequence every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-square md:aspect-auto md:h-full flex items-center justify-center min-h-[400px]">
      {/* Background glow for the active node sequence area */}
      <div className="absolute inset-0 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 md:gap-8 relative z-10 w-full max-w-2xl px-4">
        {pipelineNodes.map((node, index) => {
          const isActive = index === activeNode;
          const isPast = index < activeNode;
          const Icon = node.icon;

          return (
            <React.Fragment key={node.id}>
              {/* Node */}
              <motion.div
                className="relative flex flex-col items-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center border backdrop-blur-md transition-all duration-300 ${
                    isActive
                      ? "bg-white/20 border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                      : isPast
                      ? "bg-white/5 border-white/20 text-white/70"
                      : "bg-black/40 border-white/10 text-white/40"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon className={`w-8 h-8 md:w-10 md:h-10 ${isActive ? "text-white" : ""}`} />
                </motion.div>
                <div className="absolute -bottom-8 whitespace-nowrap text-sm font-mono tracking-wider">
                  <span className={isActive ? "text-white glow-text" : isPast ? "text-white/70" : "text-white/40"}>
                    {node.label}
                  </span>
                </div>
              </motion.div>

              {/* Connecting Line */}
              {index < pipelineNodes.length - 1 && (
                <div className="hidden md:block h-px w-8 lg:w-12 bg-white/10 relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={
                      isActive || (activeNode === 0 && index === pipelineNodes.length - 1) // reset cycle logic
                        ? { x: "100%", opacity: [0, 1, 0] }
                        : { x: "-100%", opacity: 0 }
                    }
                    transition={{
                      duration: 1,
                      ease: "linear",
                      repeat: isActive ? Infinity : 0,
                      repeatDelay: 1,
                    }}
                  />
                  {/* Static glow for past connections */}
                  {isPast && (
                    <div className="absolute inset-0 bg-white/20 shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                  )}
                </div>
              )}
              
              {/* Vertical connector for mobile */}
              {index < pipelineNodes.length - 1 && (
                <div className="md:hidden w-px h-8 bg-white/10 relative">
                   {isPast && (
                    <div className="absolute inset-0 bg-white/20 shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
                  )}
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default function Hero() {
  return (
    <section id="about" className="min-h-screen pt-24 pb-12 flex items-center w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 w-full items-center">
        {/* Left: Text Content */}
        <div className="flex flex-col space-y-8 z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-blue-100/60 font-mono mb-4 text-sm md:text-base tracking-[0.3em] uppercase glow-text">
              Hello, I&apos;m Prakriti Rawat
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              AI Engineer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-sky-300 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                Cloud Infrastructure
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-xl font-light leading-relaxed border-l-4 border-white/20 pl-4 py-1">
              &quot;I design and deploy scalable LLM systems, automation pipelines, and AWS-native intelligent platforms.&quot;
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-lg bg-white/5 border border-white/20 text-white font-medium hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/prakriti_rawat_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right: Pipeline Visualization */}
        <div className="w-full lg:h-[600px] flex items-center justify-center relative">
          <PipelineVisualization />
        </div>
      </div>
    </section>
  );
}
