"use client";

import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { Menu } from "./menu";
import { MobileMenu } from "./mobile-menu";
import { Social } from "./social";

export const Navigation = () => {
  const scrolled = useScroll();
  return (
    <div
      className={cn(
        "w-full p-2 text-white fixed h-[60px] flex items-center justify-between z-[100]",
        scrolled && " border-b-slate-400 shadow-md bg-zinc-800 backdrop-blur"
      )}
    >
      <div className="flex items-center pl-4">
        <h1 className="text-3xl shadow-md space-x-2">
          <b className="text-yellow-600">G</b>aurav
          <b className="text-yellow-600">T</b>iwari
        </h1>
      </div>
      <div className="hidden px-4 md:flex items-center space-x-8">
        <Menu />
        <div className="w-[2px] h-5 bg-white" />
        <Social />
      </div>
      <div className="md:hidden block">
        <MobileMenu />
      </div>
    </div>
  );
};
