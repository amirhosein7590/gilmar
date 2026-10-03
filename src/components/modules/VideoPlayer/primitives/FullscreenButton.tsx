"use client";

import { Maximize, Minimize } from "lucide-react";
import { useVideoPlayer } from "../context";
import { ControlButton } from "./ControllButton";

export function FullscreenButton() {
  const { isFullscreen, toggleFullscreen } = useVideoPlayer();

  return (
    <ControlButton
      onClick={toggleFullscreen}
      aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
    >
      {isFullscreen ? (
        <Minimize className="h-5 w-5" />
      ) : (
        <Maximize className="h-5 w-5" />
      )}
    </ControlButton>
  );
}
