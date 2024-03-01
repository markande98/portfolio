import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const ProfileImage = () => {
  return (
    <div className="flex items-center justify-center md:justify-end w-full md:w-1/3">
      <Avatar className="w-32 h-32 md:h-48 md:w-48 lg:w-64 lg:h-64">
        <AvatarImage src="/profile.png" alt="profile" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};
