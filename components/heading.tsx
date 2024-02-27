import { Separator } from "@/components/ui/separator";

interface Heading {
  label: string;
}

export const Heading = () => {
  return (
    <div className="w-full flex items-center relative">
      <Separator />
      <h1 className="absolute p-4 rounded-md text-4xl w-48 text-center z-[10] bg-zinc-900 left-1/2 transform -translate-x-[50%]">
        Projects
      </h1>
    </div>
  );
};
