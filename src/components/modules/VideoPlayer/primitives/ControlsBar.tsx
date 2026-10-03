"use client";

import { cn } from "@/lib/utils";
import { useVideoPlayer } from "../context";
import { FullscreenButton } from "./FullscreenButton";
import { PlayPauseButton } from "./PlayPauseButton";
import { ProgressBar } from "./ProgressBar";
import { SpeedControl } from "./SpeedControl";
import { TimeDisplay } from "./TimeDisplay";
import { VolumeControl } from "./VolumeControl";

/**
 * The bottom control strip. It is never mounted until playback has started
 * at least once, which keeps the pre-play state clean (poster + center play).
 */
export function ControlsBar() {
  const { hasStarted, isPlaying, controlsVisible } = useVideoPlayer();

  if (!hasStarted) return null;

  const visible = controlsVisible || !isPlaying;

  return (
    <div
      className={cn(
        "absolute inset-x-0 bottom-0 z-20 bg-linear-to-t from-black/90 via-black/60 to-transparent px-3 pb-2 pt-8 transition-opacity duration-200",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <ProgressBar />

      <div className="mt-1 flex items-center gap-1">
        <PlayPauseButton />
        <VolumeControl />
        <TimeDisplay />

        <div className="ml-auto flex items-center gap-1">
          <SpeedControl />
          <FullscreenButton />
        </div>
      </div>
    </div>
  );
}
