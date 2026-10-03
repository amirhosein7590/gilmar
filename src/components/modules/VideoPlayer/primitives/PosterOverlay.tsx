"use client";

import { useVideoPlayer } from "../context";

interface PosterOverlayProps {
  poster?: string;
}

/**
 * Renders the poster only until playback has started once.
 * It intentionally never returns after pause/seek, matching first-play semantics.
 */
export function PosterOverlay({ poster }: PosterOverlayProps) {
  const { hasStarted } = useVideoPlayer();

  if (!poster || hasStarted) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
