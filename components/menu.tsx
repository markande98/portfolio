import { FolderDot, Home, Settings } from "lucide-react";
import { MenuItem } from "./menu-item";

const items = [
  {
    label: "Home",
  },
  {
    label: "About",
  },
  {
    label: "Projects",
  },
  {
    label: "Skills",
  },
];

export const Menu = () => {
  return (
    <div className="flex items-center justify-between gap-x-8">
      {items.map((item) => (
        <MenuItem key={item.label} label={item.label} />
      ))}
    </div>
  );
};
