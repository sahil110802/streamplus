import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="bg-white rounded-full p-1">
        <Image
          src="/spooky.svg"
          alt="Gamehub"
          height="80"
          width="80"
        />
      </div>
      <div className={cn(
        "flex flex-col items-center animate-pulse",
        font.className,
      )}>
        <p className=" flex ">
          <h1 className="text-8xl py-9 justify-center text-center">Stream</h1>
          <h1 className="text-9xl">+</h1>
        </p>
        <p className="text-sm text-muted-foreground">
          Let&apos;s play
        </p>
      </div>
    </div>
  );
};