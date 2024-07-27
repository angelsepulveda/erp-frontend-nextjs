import { Logo } from "./Logo";
import { SidebarRoutes } from "./partials";

export const Sidebar = () => {
  return (
    <div className="h-screen">
      <div className="h-full flex flex-col border-r">
        <Logo />
        <SidebarRoutes />
      </div>
    </div>
  );
};
