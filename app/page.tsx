import { Connect } from "@/components/connect";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <div className="h-full text-white pt-[30px]">
      <Hero />
      <Projects />
      <Skills />
      <Connect />
      <footer className="w-full flex items-center justify-center p-4 border-t border-zinc-400/10">
        <p className="text-muted-foreground text-sm">
          &copy; Copyright 2024 - All right reserved
        </p>
      </footer>
    </div>
  );
}
