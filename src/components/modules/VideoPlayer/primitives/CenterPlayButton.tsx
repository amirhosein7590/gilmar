"use client";

import { Play } from "lucide-react";
import { useVideoPlayer } from "../context";

interface CenterPlayButtonProps {
  children?: React.ReactNode;
}

export function CenterPlayButton({ children }: CenterPlayButtonProps) {
  const { isPlaying, togglePlay } = useVideoPlayer();

  if (isPlaying) return null;

  return (
    <button
      type="button"
      onClick={() => {
        console.log("clicked");
        togglePlay();
      }}
      aria-label="Play"
      className="pointer-events-auto absolute left-1/2 top-1/2 z-30 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-colors hover:bg-black/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
    >
      {children ?? <Play className="h-7 w-7 translate-x-0.5 fill-current" />}
    </button>
  );
}
