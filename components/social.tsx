"use client";

import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SocialItem } from "./social-item";

const items = [
  {
    icon: FaGithub,
    href: "https://github.com/markande98",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/gaurav-tiwari-a8b50a194",
  },
  {
    icon: FaXTwitter,
    href: "https://twitter.com/GauravTiw1998",
  },
];

export const Social = () => {
  return (
    <div className="flex items-center gap-x-6 md:gap-x-0 md:space-x-6">
      {items.map((item) => (
        <SocialItem key={item.href} icon={item.icon} href={item.href} />
      ))}
    </div>
  );
};
