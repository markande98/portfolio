import { Exo_2 } from "next/font/google";

import { About } from "./about";
import { ProfileImage } from "./profile-image";
import { cn } from "@/lib/utils";

const font = Exo_2({
  subsets: ["latin"],
  weight: ["700"],
});

export const Hero = () => {
  return (
    <div
      className={cn(
        "h-full flex flex-col-reverse gap-y-6 justify-center px-20 md:flex-row md:h-2/3",
        font.className
      )}
    >
      <About />
      <ProfileImage />
    </div>
  );
};
