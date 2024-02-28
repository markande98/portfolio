import { ProjectCardItem } from "./project-card-item";

const items = [
  {
    title: "Nextjs-Notion",
    Description: "A notion clone supports creating and editing page",
    imageUrl: "/notion.png",
    githubUrl: "https://github.com/markande98/nextjs-notion",
    liveUrl: "https://nextjs-notion-two-kohl.vercel.app",
    tools: [
      "Nextjs",
      "Convex",
      "Clerk",
      "Zod",
      "Zustand",
      "Shadcn",
      "Tailwind CSS",
    ],
    hasLiveUrl: true,
  },
  {
    title: "Messenger Clone",
    Description: "A real time messenger clone using SocketIO",
    imageUrl: "/messenger.png",
    githubUrl: "https://github.com/markande98/messenger-nextjs-clone",
    liveUrl: "https://messenger-nextjs-clone.vercel.app",
    tools: [
      "Nextjs",
      "Next-auth",
      "MongoDB",
      "Cloudinary",
      "Zustand",
      "SocketIO",
      "Shadcn",
      "Tailwind CSS",
    ],
    hasLiveUrl: true,
  },
  {
    title: "Social Pedia",
    Description: "A social media MERN app with all CRUD operations.",
    imageUrl: "/socialmedia.png",
    githubUrl: "https://github.com/markande98/Social-Media",
    liveUrl: "#",
    tools: ["ReactJs", "Redux Toolkit", "MUI", "Express", "MongoDB", "Formik"],
    hasLiveUrl: false,
  },
];

export const ProjectsCard = () => {
  return (
    <div className="h-fit p-10 flex flex-col md:flex-row gap-8">
      {items.map((item) => (
        <ProjectCardItem
          key={item.githubUrl}
          title={item.title}
          description={item.Description}
          imageUrl={item.imageUrl}
          githubUrl={item.githubUrl}
          tools={item.tools}
          liveUrl={item.liveUrl}
          hasLiveUrl={item.hasLiveUrl}
        />
      ))}
    </div>
  );
};
