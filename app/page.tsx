import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="h-full text-white pt-[60px]">
      <Hero />
      <Projects />
    </div>
  );
}
