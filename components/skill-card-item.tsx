import Image from "next/image";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SkillCardItemProps {
  name: string;
  href: string;
}

export const SkillCardItem = ({ name, href }: SkillCardItemProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <div className="relative h-[60px] w-[80px] hover:bg-zinc-600/10 overflow-hidden hover:border hover:border-white rounded-md cursor-pointer hover:scale-110 transition duration-300">
            <Image src={href} alt="skill" fill />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
