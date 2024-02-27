"use client";

interface MenuItemProps {
  label: string;
}

export const MenuItem = ({ label }: MenuItemProps) => {
  return (
    <div className="flex items-center group cursor-pointer relative">
      <p className="group-hover:scale-110 transition">{label}</p>
      <div className="h-1 absolute -bottom-1 bg-white transition-width group-hover:w-full" />
    </div>
  );
};
