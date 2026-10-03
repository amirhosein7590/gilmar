import type { RefObject } from "react";

export interface VideoPlayerContextValue {
  videoRef: RefObject<HTMLVideoElement | null>;
  containerRef: RefObject<HTMLDivElement | null>;

  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  playbackRate: number;
  isFullscreen: boolean;

  /** True once playback has started at least once. */
  hasStarted: boolean;
  /** True while the controls should be rendered (activity or paused state). */
  controlsVisible: boolean;

  play: () => void;
  pause: () => void;
  togglePlay: () => void;

  seek: (time: number) => void;
  seekBy: (delta: number) => void;

  setVolume: (volume: number) => void;
  toggleMute: () => void;
  setPlaybackRate: (rate: number) => void;
  toggleFullscreen: () => void;

  showControls: () => void;
  hideControls: () => void;
  setSeeking: (seeking: boolean) => void;
}
