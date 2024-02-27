import { ProjectCardItem } from "./project-card-item";

const items = [
  {
    title: "Nextjs-Notion",
    Description: "A notion clone supports creating and editing page",
    imageUrl: "/notion.png",
    githubUrl: "https://github.com/markande98/nextjs-notion",
    tools: [
      "Nextjs",
      "Convex",
      "Clerk",
      "Zod",
      "Zustand",
      "Shadcn",
      "Tailwind CSS",
    ],
  },
];

export const ProjectsCard = () => {
  return (
    <div className="h-full py-20 px-10 flex flex-col md:flex-row gap-x-2 gap-y-2">
      {items.map((item) => (
        <ProjectCardItem
          key={item.githubUrl}
          title={item.title}
          description={item.Description}
          imageUrl={item.imageUrl}
          githubUrl={item.githubUrl}
          tools={item.tools}
        />
      ))}
    </div>
  );
};
