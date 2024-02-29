import { FaNode, FaNodeJs, FaReact } from "react-icons/fa6";
import { SkillCardItem } from "./skill-card-item";

const skills = [
  {
    name: "NodeJs",
    href: "/node.png",
  },
  {
    name: "ReactJs",
    href: "/react.png",
  },
  {
    name: "NextJs",
    href: "/nextjs.png",
  },
  {
    name: "Redux-Toolkit",
    href: "/redux.png",
  },
  {
    name: "ExpreesJs",
    href: "/express.png",
  },
  {
    name: "JavaScript",
    href: "/javascript.png",
  },
  {
    name: "TypeScript",
    href: "/typescript.png",
  },
  {
    name: "AWS",
    href: "/aws.png",
  },
  {
    name: "PostgreSQL",
    href: "/postgresql.png",
  },
  {
    name: "MySQL",
    href: "/mysql.png",
  },
  {
    name: "MongoDB",
    href: "/mongodb.png",
  },
  {
    name: "Tailwind",
    href: "/tailwind.png",
  },
  {
    name: "Shadcn",
    href: "/shadcn.png",
  },
  {
    name: "Git",
    href: "/git.png",
  },
  {
    name: "Docker",
    href: "/docker.png",
  },
  {
    name: "Postman",
    href: "/postman.png",
  },
];

export const SkillsCard = () => {
  return (
    <div className="px-10 py-20 flex flex-wrap gap-x-20 gap-y-10 justify-center items-center">
      {skills.map((skill) => (
        <SkillCardItem key={skill.name} name={skill.name} href={skill.href} />
      ))}
    </div>
  );
};
