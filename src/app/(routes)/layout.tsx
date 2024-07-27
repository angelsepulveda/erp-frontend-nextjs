import { Navbar, Sidebar } from "@/core/ui/components/layouts";
import { ReactElement } from "react";

type TPrivateLayoutProps = {
  children: ReactElement;
};

export default function PrivateLayout({ children }: TPrivateLayoutProps) {
  return (
    <div className="flex w-full h-full">
      <div className="hidden xl:block w-64 h-full xl:fixed p-5 pr-0">
        <Sidebar />
      </div>
      <div className="w-full xl:ml-64">
        <Navbar />
        <div className="p-6 bg-[#fafbfc] dark:bg-secondary">{children}</div>
      </div>
    </div>
  );
}
