import Link from "next/link";
import { SiCodeforces, SiLeetcode } from "react-icons/si";

export const DsaProfile = () => {
  return (
    <div className="flex items-center justify-center gap-x-10 w-1/2">
      <Link href="https://leetcode.com/garvim" target="__blank">
        <SiLeetcode className="h-16 w-16 text-green-600 cursor-pointer" />
      </Link>
      <Link href="https://codeforces.com/profile/GAUmar" target="__blank">
        <SiCodeforces className="h-16 w-16 text-white cursor-pointer" />
      </Link>
    </div>
  );
};
