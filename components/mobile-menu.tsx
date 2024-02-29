import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IoMdMenu } from "react-icons/io";
import { Menu } from "./menu";
import { Social } from "./social";
import { Button } from "./ui/button";

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default" className="bg-zinc-900">
          <IoMdMenu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-zinc-900 text-white w-[200px] border-none">
        <div className="flex flex-col p-10 justify-center items-center">
          <Menu />
          <Social />
        </div>
      </SheetContent>
    </Sheet>
  );
};
