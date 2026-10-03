"use client";

import { useVideoPlayer } from "../context";

interface VideoSurfaceProps {
  src: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  crossOrigin?: "anonymous" | "use-credentials";
}

export function VideoSurface({
  src,
  autoPlay,
  loop,
  muted,
  playsInline,
  crossOrigin,
}: VideoSurfaceProps) {
  const { videoRef, containerRef, togglePlay } = useVideoPlayer();

  const handleClick = () => {
    containerRef.current?.focus();
    togglePlay();
  };

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      crossOrigin={crossOrigin}
      preload="metadata"
      onClick={handleClick}
      className="h-full w-full bg-black object-contain"
    />
  );
}
