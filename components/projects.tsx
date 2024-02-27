import { Heading } from "./heading";
import { ProjectsCard } from "./projects-card";

export const Projects = () => {
  return (
    <div className="h-full">
      <Heading label="Projects" />
      <ProjectsCard />
    </div>
  );
};
