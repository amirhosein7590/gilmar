"use client";

import { useCallback } from "react";
import { cn } from "@/lib/utils";
import { VideoPlayerContext } from "./context";
import { useVideoPlayerState } from "./hooks/useVideoPlayerState";
import { CenterPlayButton } from "./primitives/CenterPlayButton";
import { ControlsBar } from "./primitives/ControlsBar";
import { PosterOverlay } from "./primitives/PosterOverlay";
import { VideoSurface } from "./primitives/VideoSurface";

const SEEK_STEP_SECONDS = 5;
const VOLUME_STEP = 0.05;

export interface VideoPlayerSlots {
  poster?: React.ReactNode;
  centerPlayButton?: React.ReactNode;
  controls?: React.ReactNode;
}

export interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  crossOrigin?: "anonymous" | "use-credentials";
  /** Override the default primitives to fully customize the UI. */
  slots?: VideoPlayerSlots;
}

export function VideoPlayer({
  src,
  poster,
  className,
  autoPlay = false,
  loop = false,
  muted = false,
  playsInline = true,
  crossOrigin,
  slots,
}: VideoPlayerProps) {
  const state = useVideoPlayerState();

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      switch (event.key) {
        case " ":
        case "k":
        case "K":
          event.preventDefault();
          state.togglePlay();
          break;
        case "ArrowLeft":
          event.preventDefault();
          state.seekBy(-SEEK_STEP_SECONDS);
          break;
        case "ArrowRight":
          event.preventDefault();
          state.seekBy(SEEK_STEP_SECONDS);
          break;
        case "ArrowUp":
          event.preventDefault();
          state.setVolume(state.volume + VOLUME_STEP);
          break;
        case "ArrowDown":
          event.preventDefault();
          state.setVolume(state.volume - VOLUME_STEP);
          break;
        case "m":
        case "M":
          event.preventDefault();
          state.toggleMute();
          break;
        case "f":
        case "F":
          event.preventDefault();
          state.toggleFullscreen();
          break;
      }
    },
    [state],
  );

  const handlePointerLeave = useCallback(() => {
    if (state.isPlaying) state.hideControls();
  }, [state]);

  return (
    <VideoPlayerContext.Provider value={state}>
      <div
        ref={state.containerRef}
        role="region"
        aria-label="Video player"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onPointerMove={state.showControls}
        onPointerLeave={handlePointerLeave}
        className={cn(
          "group relative aspect-video w-full select-none overflow-hidden rounded-lg bg-black text-white outline-none",
          "focus-visible:ring-2 focus-visible:ring-white/40",
          className,
        )}
      >
        <VideoSurface
          src={src}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          crossOrigin={crossOrigin}
        />

        {slots?.poster ?? <PosterOverlay poster={poster} />}
        {slots?.centerPlayButton ?? <CenterPlayButton />}
        {slots?.controls ?? <ControlsBar />}
      </div>
    </VideoPlayerContext.Provider>
  );
}
