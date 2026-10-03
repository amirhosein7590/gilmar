"use client";

import { Pause, Play } from "lucide-react";
import { useVideoPlayer } from "../context";
import { ControlButton } from "./ControllButton";

export function PlayPauseButton() {
  const { isPlaying, togglePlay } = useVideoPlayer();

  return (
    <ControlButton
      onClick={togglePlay}
      aria-label={isPlaying ? "Pause" : "Play"}
    >
      {isPlaying ? (
        <Pause className="h-5 w-5 fill-current" />
      ) : (
        <Play className="h-5 w-5 fill-current" />
      )}
    </ControlButton>
  );
}
