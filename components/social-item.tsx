"use client";

import Link from "next/link";
import { IconType } from "react-icons";

interface SocialItemProp {
  icon: IconType;
  href: string;
}
export const SocialItem = ({ icon: Icon, href }: SocialItemProp) => {
  return (
    <Link href={href} target="__blank" className="hover:scale-110 transition">
      <Icon className="h-6 w-6 text-white" />
    </Link>
  );
};
