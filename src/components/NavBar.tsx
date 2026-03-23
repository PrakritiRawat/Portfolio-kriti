"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Architecture", href: "#architecture" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

export default function NavBar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const overrideHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) setActiveSection(hash);
    };
    window.addEventListener("hashchange", overrideHash);
    return () => window.removeEventListener("hashchange", overrideHash);
  }, []);

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full pointer-events-none"
    >
      <nav className="pointer-events-auto bg-[#0a0f1d]/80 backdrop-blur-md border border-neon-blue/20 rounded-full px-6 py-3 shadow-[0_0_15px_rgba(125,211,252,0.1)]">
        <ul className="flex items-center space-x-6 text-sm font-mono text-gray-300">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setActiveSection(item.href.replace("#", ""))}
                className={clsx(
                  "hover:text-neon-blue transition-colors duration-200 relative",
                  activeSection === item.href.replace("#", "") && "text-neon-blue glow-text"
                )}
              >
                {activeSection === item.href.replace("#", "") && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
