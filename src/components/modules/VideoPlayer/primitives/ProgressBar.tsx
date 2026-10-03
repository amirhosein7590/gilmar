"use client";

import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useVideoPlayer } from "../context";
import { formatTime } from "../utils/formatTime";

export function ProgressBar() {
  const { currentTime, duration, seek, setSeeking, showControls } =
    useVideoPlayer();

  const barRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [hoverRatio, setHoverRatio] = useState<number | null>(null);

  const ratioFromClientX = useCallback((clientX: number) => {
    const bar = barRef.current;
    if (!bar) return 0;

    const rect = bar.getBoundingClientRect();
    const ratio = (clientX - rect.left) / rect.width;
    return Math.min(Math.max(ratio, 0), 1);
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (duration <= 0) return;

    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
    setSeeking(true);
    seek(ratioFromClientX(event.clientX) * duration);
    showControls();
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const ratio = ratioFromClientX(event.clientX);
    setHoverRatio(ratio);

    if (!dragging) return;
    seek(ratio * duration);
  };

  const handlePointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setDragging(false);
    setSeeking(false);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const showScrubber = dragging || hoverRatio !== null;

  return (
    <div
      ref={barRef}
      role="slider"
      aria-label="Seek"
      aria-valuemin={0}
      aria-valuemax={Math.round(duration)}
      aria-valuenow={Math.round(currentTime)}
      tabIndex={-1}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
      onPointerLeave={() => setHoverRatio(null)}
      className="group/bar relative h-1 w-full cursor-pointer rounded-full bg-white/25 transition-[height] duration-150 hover:h-1.5"
    >
      {hoverRatio !== null && !dragging && (
        <div
          className="pointer-events-none absolute inset-y-0 left-0 rounded-full bg-white/30"
          style={{ width: `${hoverRatio * 100}%` }}
        />
      )}

      <div
        className="pointer-events-none absolute inset-y-0 left-0 rounded-full bg-red-500"
        style={{ width: `${progress}%` }}
      />

      <div
        className={cn(
          "pointer-events-none absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 transition-opacity",
          showScrubber ? "opacity-100" : "opacity-0",
        )}
        style={{ left: `${progress}%` }}
      />

      {hoverRatio !== null && duration > 0 && (
        <div
          className="pointer-events-none absolute bottom-4 -translate-x-1/2 whitespace-nowrap rounded bg-black/85 px-2 py-0.5 text-[10px] font-medium tabular-nums text-white"
          style={{ left: `${hoverRatio * 100}%` }}
        >
          {formatTime(hoverRatio * duration)}
        </div>
      )}
    </div>
  );
}
