import { IoMdStar } from "react-icons/io";
import { Heading } from "./heading";
import { ProjectsCard } from "./projects-card";
import { Button } from "./ui/button";
import { MoreProjects } from "./more-projects";

export const Projects = () => {
  return (
    <div className="h-full">
      <Heading label="My Work" />
      <div className="px-10 py-10 flex justify-center md:justify-start">
        <Button className="text-4xl py-8 px-2" variant="ghost">
          <IoMdStar className="h-10 w-10 mr-2" /> Feature Projects
        </Button>
      </div>
      <ProjectsCard />
      <MoreProjects />
    </div>
  );
};
