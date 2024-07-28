import { Menu, Search } from "lucide-react";
import { Input, Sheet, SheetContent, SheetTrigger } from "../ui";
import { SidebarRoutes } from "./partials";
import { ToggleTheme } from "../ToggleTheme";

export const Navbar = () => {
  return (
    <div className="flex items-center px-2 gap-x-4 md:px-6 justify-between w-full bg-background border-b h-20">
      <div className="block xl:hidden w-64">
        <Sheet>
          <SheetTrigger className="flex items-center">
            <Menu />
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <SidebarRoutes />
          </SheetContent>
        </Sheet>
      </div>
      <div className="relative w-[300px]">
        <Input placeholder="Buscar..." className="rounded-lg" />
        <Search strokeWidth={1} className="absolute top-2 right-2" />
      </div>
      <div className="flex gap-x-2 items-center">
        <ToggleTheme />
      </div>
    </div>
  );
};
