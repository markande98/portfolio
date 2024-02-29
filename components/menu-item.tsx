"use client";

import Link from "next/link";

interface MenuItemProps {
  label: string;
  href: string;
}

export const MenuItem = ({ label, href }: MenuItemProps) => {
  return (
    <Link
      href={href}
      className="flex items-center group cursor-pointer relative"
    >
      <p className="group-hover:scale-110 transition">{label}</p>
      <div className="h-1 absolute -bottom-1 bg-white transition-width group-hover:w-full" />
    </Link>
  );
};
