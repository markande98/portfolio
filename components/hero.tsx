import { About } from "./about";
import { ProfileImage } from "./profile-image";

export const Hero = () => {
  return (
    <div className="h-2/3 flex justify-center px-32">
      <About />
      <ProfileImage />
    </div>
  );
};
