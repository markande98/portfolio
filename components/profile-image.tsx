import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const ProfileImage = () => {
  return (
    <div className="flex items-center justify-end w-1/2">
      <Avatar className="w-[300px] h-[300px]">
        <AvatarImage
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyiXaQ_tNJCf01W4_GPYn_G1YTd7WCOPafkYiV3dcRDDb0UHCs2ugGCQom0hkrOuNTZyA&usqp=CAU"
          alt="profile"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};
