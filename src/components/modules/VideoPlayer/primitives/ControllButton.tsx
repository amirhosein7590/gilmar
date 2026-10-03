"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ControlButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ControlButton = forwardRef<HTMLButtonElement, ControlButtonProps>(
  function ControlButton({ className, type = "button", ...props }, ref) {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded text-white/90 transition-colors",
          "hover:bg-white/10 hover:text-white",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
          "disabled:cursor-not-allowed disabled:opacity-40",
          className,
        )}
        {...props}
      />
    );
  },
);
