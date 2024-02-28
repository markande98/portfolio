import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BsGithub } from "react-icons/bs";

interface ItemProps {
  title: string;
  href: string;
}

export const Item = ({ title, href }: ItemProps) => {
  return (
    <Button variant="zinc" size="sm" asChild className="group w-[200px]">
      <Link
        href={href}
        target="__blank"
        className="flex items-center justify-between gap-x-2"
      >
        <BsGithub className="mr-2" />
        {title}
        <ArrowRight className="group-hover:translate-x-1 duration-300" />
      </Link>
    </Button>
  );
};
