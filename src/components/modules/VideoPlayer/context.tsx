"use client";

import { createContext, useContext } from "react";
import type { VideoPlayerContextValue } from "./types";

export const VideoPlayerContext = createContext<VideoPlayerContextValue | null>(
  null,
);

export function useVideoPlayer(): VideoPlayerContextValue {
  const context = useContext(VideoPlayerContext);

  if (!context) {
    throw new Error("useVideoPlayer must be used inside a <VideoPlayer />.");
  }

  return context;
}
