import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex flex-col gap-y-4 bg-gray-900">
      <h1 className="font-extrabold text-white animate-pulse">Dashboard</h1>
      <UserButton
      afterSignOutUrl="/"
      />

    </main>
  );
}
 