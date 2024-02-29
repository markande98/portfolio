import { Exo_2 } from "next/font/google";

import { cn } from "@/lib/utils";
import { About } from "./about";
import { ProfileImage } from "./profile-image";

const font = Exo_2({
  subsets: ["latin"],
  weight: ["700"],
});

export const Hero = () => {
  return (
    <div
      className={cn(
        "h-full md:h-2/3 flex flex-col-reverse justify-evenly md:justify-center px-5 md:px-10 md:flex-row",
        font.className
      )}
    >
      <About />
      <ProfileImage />
    </div>
  );
};
