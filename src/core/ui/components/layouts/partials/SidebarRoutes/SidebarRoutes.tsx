"use client";

import { dataGeneralSidebar } from "./utils/sidebarData";
import { SidebarItem } from "./partials";

export const SidebarRoutes = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <nav className="flex flex-col space-y-1 py-6">
        {dataGeneralSidebar.map((item, index) => (
          <SidebarItem item={item} key={index} />
        ))}
      </nav>
    </div>
  );
};
