"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface MenuItemProps {
  label: string;
}

export const MenuItem = ({ label }: MenuItemProps) => {
  return (
    <div className="flex items-center group cursor-pointer relative">
      <p className="group-hover:scale-110 transition">{label}</p>
      <div className="h-1 absolute -bottom-1 bg-white transition-all group-hover:w-full" />
    </div>
  );
};
