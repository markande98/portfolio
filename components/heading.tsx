import { Separator } from "@/components/ui/separator";

interface HeadingProps {
  label: string;
}

export const Heading = ({ label }: HeadingProps) => {
  return (
    <div className="w-full flex items-center relative">
      <Separator className="bg-zinc-800" />
      <h1 className="absolute p-4 rounded-md text-4xl w-fit text-center z-[10] bg-zinc-900 left-1/2 transform -translate-x-[50%]">
        {label}
      </h1>
    </div>
  );
};
