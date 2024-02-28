import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectCardItemProps {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  hasLiveUrl: boolean;
  tools: string[];
}

export const ProjectCardItem = ({
  title,
  description,
  imageUrl,
  githubUrl,
  liveUrl,
  hasLiveUrl,
  tools,
}: ProjectCardItemProps) => {
  return (
    <Card className="h-fit bg-zinc-800/50 border-zinc-800/10 cursor-pointer hover:scale-105 transition text-white hover:border-white duration-300">
      <CardHeader>
        <CardTitle className="text-sm">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          width={650}
          height={500}
          src={imageUrl}
          alt="project-image"
          className="rounded-md"
        />
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <span
            key={tool}
            className="p-2 bg-zinc-200 rounded-md text-sm font-semibold text-black"
          >
            {tool}
          </span>
        ))}
      </CardFooter>
      <CardFooter
        className={cn(
          "flex justify-between items-center",
          !hasLiveUrl && "justify-end"
        )}
      >
        {hasLiveUrl && (
          <Button variant="link" size="sm" asChild>
            <Link href={liveUrl} target="__blank" replace>
              Live
            </Link>
          </Button>
        )}
        <Button variant="ghost" size="sm" asChild>
          <Link href={githubUrl} target="__blank">
            <BsGithub className="h-6 w-6" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
