"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export const Logo = () => {
  const router = useRouter();
  return (
    <div
      className="min-h-20 flex items-center px-1 border-b cursor-pointer"
      onClick={() => router}
    >
      <Image src="/Logo.png" alt="alt" width={30} height={30} />
      <h1 className="font-bold text-xl">DASSoluciones</h1>
    </div>
  );
};
