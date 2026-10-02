import { cn } from "cn";
import { Button } from "./Button";
import Image from "next/image";
import { PropsWithChildren } from "react";

function CTA({ children }: PropsWithChildren) {
  return (
    <Button
      className={cn(
        "flex items-center gap-x-3",
        "py-2.5 px-5",
        "bg-light-green shadow-brand-shadow mt-2 w-47.75 h-13 rounded-[80px]",
        "cursor-pointer",
      )}
      type="button"
    >
      <span className="text-[16px] text-white font-abar-semi-bold">
        {children}
      </span>

      <Image
        width={40}
        height={40}
        src="/images/left-arrow.svg"
        alt="left arrow icon"
      />
    </Button>
  );
}

export default CTA;
