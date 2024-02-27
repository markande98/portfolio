import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const ProfileImage = () => {
  return (
    <div className="flex items-center justify-center w-full md:w-1/3">
      <Avatar className="w-32 h-32 md:h-48 md:w-48 lg:w-64 lg:h-64">
        <AvatarImage
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyiXaQ_tNJCf01W4_GPYn_G1YTd7WCOPafkYiV3dcRDDb0UHCs2ugGCQom0hkrOuNTZyA&usqp=CAU"
          alt="profile"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};
