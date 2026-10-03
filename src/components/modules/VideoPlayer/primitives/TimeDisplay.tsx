"use client";

import { useVideoPlayer } from "../context";
import { formatTime } from "../utils/formatTime";

export function TimeDisplay() {
  const { currentTime, duration } = useVideoPlayer();

  return (
    <div className="ml-2 select-none text-xs font-medium tabular-nums text-white/90">
      <span>{formatTime(currentTime)}</span>
      <span className="mx-1 text-white/50">/</span>
      <span className="text-white/60">{formatTime(duration)}</span>
    </div>
  );
}
