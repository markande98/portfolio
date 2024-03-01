"use client";

import Link from "next/link";

interface MenuItemProps {
  label: string;
  href: string;
  isOpen?: boolean;
}

export const MenuItem = ({ label, href, isOpen }: MenuItemProps) => {
  return (
    <Link
      href={href}
      className="flex items-center group cursor-pointer relative"
      target={isOpen ? "__blank" : ""}
    >
      <p className="group-hover:scale-110 transition">{label}</p>
      <div className="h-1 absolute -bottom-1 bg-white transition-width group-hover:w-full" />
    </Link>
  );
};
