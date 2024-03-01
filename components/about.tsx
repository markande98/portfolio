import { Button } from "@/components/ui/button";
import Link from "next/link";

export const About = () => {
  return (
    <div className="flex flex-col w-full items-center md:items-start md:w-2/3 space-y-4 justify-center">
      <div className="text-yellow-400 text-xs sm:text-sm md:text-md lg:text-2xl">
        Hi Everyone
      </div>
      <h1 className="text-xs sm:text-sm md:text-md lg:text-4xl text-zinc-300">
        I&apos;m Gaurav Tiwari
      </h1>
      <h2 className="text-xs sm:text-sm md:text-md lg:text-2xl text-muted-foreground text-white">
        Full Stack Developer & Competetive Programmer
      </h2>
      <p className="text-muted-foreground text-white text-xs sm:text-sm md:text-md lg:text-lg leading-8">
        My name is Gaurav Tiwari with over 2 years of industry experience. I do
        competetive programming and Knight on Leetcode with 950+ problems
        solved,represented my college in{" "}
        <strong className="font-bold bg-zinc-600 p-1 rounded-md hover:bg-zinc-500">
          ACM ICPC
        </strong>{" "}
        in 2018 and 2019 regional&apos;s. I like challenge myself that&apos;s
        how you become better everyday.😎
      </p>
      <Button className="w-fit text-black" variant="outline" asChild>
        <Link
          href="https://drive.google.com/file/d/1GgV2xLL6JgkeoriusfKzPCBCoaMdXJqO/view?usp=sharing"
          target="__blank"
        >
          View Cv
        </Link>
      </Button>
    </div>
  );
};
