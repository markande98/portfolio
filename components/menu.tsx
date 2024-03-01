import { MenuItem } from "./menu-item";

const items = [
  {
    label: "Leetcode",
    href: "https://leetcode.com/garvim",
    isOpenTab: true,
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Connect",
    href: "#connect",
  },
];

export const Menu = () => {
  return (
    <div className="flex flex-col mb-10 md:mb-0 space-y-10 md:space-y-0 md:flex-row items-center justify-between gap-x-8">
      {items.map((item) => (
        <MenuItem
          key={item.label}
          href={item.href}
          label={item.label}
          isOpen={item.isOpenTab}
        />
      ))}
    </div>
  );
};
