"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { VideoPlayerContextValue } from "../types";

const CONTROLS_HIDE_DELAY_MS = 2500;

export function useVideoPlayerState(): VideoPlayerContextValue {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hideTimerRef = useRef<number | null>(null);
  const seekingRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRateState] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);

  const clearHideTimer = useCallback(() => {
    if (hideTimerRef.current !== null) {
      window.clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  }, []);

  const showControls = useCallback(() => {
    setControlsVisible(true);
    clearHideTimer();

    const video = videoRef.current;
    if (!video || video.paused) return;

    hideTimerRef.current = window.setTimeout(() => {
      setControlsVisible(false);
    }, CONTROLS_HIDE_DELAY_MS);
  }, [clearHideTimer]);

  const hideControls = useCallback(() => {
    clearHideTimer();
    setControlsVisible(false);
  }, [clearHideTimer]);

  const setSeeking = useCallback(
    (seeking: boolean) => {
      seekingRef.current = seeking;
      if (seeking) showControls();
    },
    [showControls],
  );

  // Bind DOM video events to React state.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      setIsPlaying(true);
      setHasStarted(true);
    };
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      setControlsVisible(true);
    };
    const handleTimeUpdate = () => {
      if (seekingRef.current) return;
      setCurrentTime(video.currentTime);
    };
    const syncDuration = () => {
      setDuration(Number.isFinite(video.duration) ? video.duration : 0);
    };
    const syncVolume = () => {
      setVolumeState(video.volume);
      setIsMuted(video.muted);
    };
    const syncRate = () => setPlaybackRateState(video.playbackRate);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", syncDuration);
    video.addEventListener("durationchange", syncDuration);
    video.addEventListener("volumechange", syncVolume);
    video.addEventListener("ratechange", syncRate);

    if (video.readyState >= 1) syncDuration();
    syncVolume();
    syncRate();

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", syncDuration);
      video.removeEventListener("durationchange", syncDuration);
      video.removeEventListener("volumechange", syncVolume);
      video.removeEventListener("ratechange", syncRate);
    };
  }, []);

  // Use rAF for smoother progress while playing; timeupdate handles the rest.
  useEffect(() => {
    if (!isPlaying) return;

    let frameId: number;
    const tick = () => {
      const video = videoRef.current;
      if (video && !seekingRef.current) setCurrentTime(video.currentTime);
      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [isPlaying]);

  // Keep the controls visible whenever playback is paused.
  useEffect(() => {
    if (isPlaying) {
      showControls();
    } else {
      clearHideTimer();
      setControlsVisible(true);
    }
  }, [isPlaying, showControls, clearHideTimer]);

  // Sync fullscreen state with the container element.
  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(document.fullscreenElement === containerRef.current);
    };

    document.addEventListener("fullscreenchange", handleChange);
    return () => document.removeEventListener("fullscreenchange", handleChange);
  }, []);

  const play = useCallback(() => {
    // Autoplay policies may reject the promise; swallow it silently.
    void videoRef.current?.play().catch(() => undefined);
  }, []);

  const pause = useCallback(() => {
    videoRef.current?.pause();
  }, []);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) play();
    else pause();
  }, [play, pause]);

  const seek = useCallback((time: number) => {
    const video = videoRef.current;
    if (!video) return;

    const max = Number.isFinite(video.duration) ? video.duration : 0;
    const next = Math.min(Math.max(time, 0), max);
    video.currentTime = next;
    setCurrentTime(next);
  }, []);

  const seekBy = useCallback(
    (delta: number) => {
      const video = videoRef.current;
      if (!video) return;
      seek(video.currentTime + delta);
    },
    [seek],
  );

  const setVolume = useCallback((value: number) => {
    const video = videoRef.current;
    if (!video) return;

    const clamped = Math.min(Math.max(value, 0), 1);
    video.volume = clamped;
    if (clamped > 0 && video.muted) video.muted = false;
  }, []);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
  }, []);

  const setPlaybackRate = useCallback((rate: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = rate;
  }, []);

  const toggleFullscreen = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    if (document.fullscreenElement) {
      void document.exitFullscreen();
      return;
    }

    void container.requestFullscreen();
  }, []);

  return {
    videoRef,
    containerRef,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    playbackRate,
    isFullscreen,
    hasStarted,
    controlsVisible,
    play,
    pause,
    togglePlay,
    seek,
    seekBy,
    setVolume,
    toggleMute,
    setPlaybackRate,
    toggleFullscreen,
    showControls,
    hideControls,
    setSeeking,
  };
}
