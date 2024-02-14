import { Navigation } from "./navigation";

export const BodyWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full">
      <Navigation />
      <div className="h-full">{children}</div>
    </div>
  );
};
