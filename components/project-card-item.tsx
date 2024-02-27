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

interface ProjectCardItemProps {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  tools: string[];
}

export const ProjectCardItem = ({
  title,
  description,
  imageUrl,
  githubUrl,
  tools,
}: ProjectCardItemProps) => {
  return (
    <Card className="w-[400px] h-fit bg-zinc-800/50 border-zinc-800/10 cursor-pointer hover:scale-105 transition text-white">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          width={400}
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
      <CardFooter className="flex flex-col">
        <div className="flex justify-end w-full gap-x-2">
          <Button variant="ghost" asChild>
            <Link href={githubUrl} target="__blank">
              <BsGithub className="h-6 w-6" />
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
