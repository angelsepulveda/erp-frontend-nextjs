"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/core/ui/components/ui";
import { IDataSidebar } from "../utils/sidebarData";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

type TSidebarItemProps = {
  item: IDataSidebar;
};

export const SidebarItem = ({ item }: TSidebarItemProps) => {
  return (
    <Collapsible className="group">
      <CollapsibleTrigger className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
        <div className="flex items-center gap-3">
          {<item.icon></item.icon>}
          <span>{item.label}</span>
        </div>
        <ChevronRightIcon className="h-4 w-4 transition-transform group-[data-state=open]:rotate-90" />
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-1 pl-9">
        {item.items.map((subMenu, index) => (
          <Link
            key={index}
            href={subMenu.href}
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            prefetch={false}
          >
            <span>{subMenu.label}</span>
          </Link>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};
