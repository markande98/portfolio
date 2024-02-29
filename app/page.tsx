import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <div className="h-full text-white pt-[30px]">
      <Hero />
      <Projects />
      <Skills />
    </div>
  );
}
