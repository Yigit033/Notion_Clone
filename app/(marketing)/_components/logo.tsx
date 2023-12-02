import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"]
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/gss.jpg"
        height="40"
        width="40"
        alt="Logo"
        className="dark:hidden"
        // in dark mode it is
      />
      <Image
        src="/gs.svg"
        height="40"
        width="40"
        alt="Logo"
        className="hidden dark:block"
        // hidden in default and in dark it will be shown
      />
      <p className={cn("font-semibold", font.className)}>
        Yigition
      </p>
    </div>
  );
};
