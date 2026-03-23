import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import ProductionSystems from "@/components/sections/ProductionSystems";
import Pipelines from "@/components/sections/Pipelines";
import FinOps from "@/components/sections/FinOps";
import Research from "@/components/sections/Research";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-12 md:gap-24 overflow-x-hidden">
      <Hero />
      <Experience />
      <ProductionSystems />
      <Pipelines />
      <FinOps />
      <Research />
      <Projects />
      <TechStack />
      <Contact />
    </div>
  );
}
