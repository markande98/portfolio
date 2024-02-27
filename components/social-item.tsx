"use client";

import Link from "next/link";
import { IconType } from "react-icons";

interface SocialItemProp {
  icon: IconType;
  href: string;
}
export const SocialItem = ({ icon: Icon, href }: SocialItemProp) => {
  return (
    <Link href={href} target="__blank" className="hover:scale-125 transition">
      <Icon className="h-4 w-4 text-white hover:text-red-200 duration-300 transform" />
    </Link>
  );
};
