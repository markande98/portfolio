import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CiCircleMore } from "react-icons/ci";
import { Item } from "./item";

const items = [
  {
    title: "Memories",
    href: "https://github.com/markande98/memories",
  },
  {
    title: "Airbnb-Clone",
    href: "https://github.com/markande98/nextjs-airbnb-clone",
  },
  {
    title: "Twitter-Clone",
    href: "https://github.com/markande98/plitter-deploy",
  },
  {
    title: "Snake Game",
    href: "https://github.com/markande98/Snake-Game-Pygame-",
  },
];

export const MoreProjects = () => {
  return (
    <div className="p-10 space-y-5">
      <div className="flex justify-center md:justify-start">
        <Button className="text-4xl py-8 px-2" variant="ghost">
          <CiCircleMore className="h-10 w-10 mr-2" /> More Projects
        </Button>
      </div>
      <div className="flex flex-wrap gap-4 flex-col sm:flex-row justify-center sm:justify-between items-center">
        {items.map((item) => (
          <Item key={item.href} title={item.title} href={item.href} />
        ))}
      </div>
    </div>
  );
};
