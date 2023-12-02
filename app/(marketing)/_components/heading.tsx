// I also create _components folder under marketing folder to affect just marketting issues!!!!

// This page is not gonna be a server component, so we use "use client";

"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function Heading() {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, Plans. Unified. Welcome to
        <span className="underline"> Yigition</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Yigition is the connected workspace where <br />{" "}
        better, faster work happens.
      </h3>
      <Button className="bg-red-600 ">
        Enter Yigition
        <ArrowRight className="h-4 w- ml-2"></ArrowRight>
      </Button>
    </div>
  );
}

export default Heading;
