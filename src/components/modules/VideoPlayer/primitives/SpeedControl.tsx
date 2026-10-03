"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useVideoPlayer } from "../context";

const SPEED_OPTIONS = [0.5, 0.75, 1, 1.25, 1.5, 2] as const;

export function SpeedControl() {
  const { playbackRate, setPlaybackRate } = useVideoPlayer();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Playback speed"
        className="flex h-9 min-w-9 items-center justify-center rounded px-2 text-xs font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
      >
        {playbackRate}x
      </button>

      {open && (
        <div
          role="menu"
          className="absolute bottom-11 right-0 z-30 min-w-21 overflow-hidden rounded-md border border-white/10 bg-neutral-900/95 py-1 text-sm text-white shadow-xl backdrop-blur"
        >
          {SPEED_OPTIONS.map((rate) => (
            <button
              key={rate}
              type="button"
              role="menuitemradio"
              aria-checked={rate === playbackRate}
              onClick={() => {
                setPlaybackRate(rate);
                setOpen(false);
              }}
              className={cn(
                "flex w-full items-center px-3 py-1.5 text-left text-xs transition-colors hover:bg-white/10",
                rate === playbackRate ? "text-white" : "text-white/70",
              )}
            >
              {rate}x
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
