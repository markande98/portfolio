"use client";

import { FaMedium } from "react-icons/fa6";
import { DsaProfile } from "./dsa-profile";
import { Heading } from "./heading";
import { Social } from "./social";
import { SocialItem } from "./social-item";

export const Connect = () => {
  return (
    <div>
      <Heading label="Connect" />
      <div className="p-10 flex flex-col space-y-8 md:flex-row items-center justify-between">
        <div className="flex flex-col space-y-6 w-1/2 items-center">
          <h1 className="text-xs sm:text-sm md:text-2xl lg:text-4xl text-yellow-400">
            🤝 Connect with me
          </h1>
          <div className="flex items-center gap-x-4">
            <Social />
            <SocialItem icon={FaMedium} href="https://gaurav1998.medium.com" />
          </div>
        </div>
        <DsaProfile />
      </div>
    </div>
  );
};
