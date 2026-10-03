"use client";

import { useCallback, useRef, useState } from "react";
import { Volume1, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import { useVideoPlayer } from "../context";
import { ControlButton } from "./ControllButton";

export function VolumeControl() {
  const { volume, isMuted, setVolume, toggleMute } = useVideoPlayer();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  const effectiveVolume = isMuted ? 0 : volume;

  const updateFromClientX = useCallback(
    (clientX: number) => {
      const slider = sliderRef.current;
      if (!slider) return;

      const rect = slider.getBoundingClientRect();
      const ratio = (clientX - rect.left) / rect.width;
      setVolume(Math.min(Math.max(ratio, 0), 1));
    },
    [setVolume],
  );

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    updateFromClientX(event.clientX);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
    updateFromClientX(event.clientX);
  };

  const Icon =
    effectiveVolume === 0 ? VolumeX : effectiveVolume < 0.5 ? Volume1 : Volume2;

  return (
    <div
      className="flex items-center"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <ControlButton
        onClick={toggleMute}
        aria-label={effectiveVolume === 0 ? "Unmute" : "Mute"}
      >
        <Icon className="h-5 w-5" />
      </ControlButton>

      <div
        className={cn(
          "overflow-hidden transition-[width,opacity] duration-200 ease-out",
          expanded ? "w-20 opacity-100" : "w-0 opacity-0",
        )}
      >
        <div
          ref={sliderRef}
          role="slider"
          aria-label="Volume"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(effectiveVolume * 100)}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          className="relative mx-2 h-1 cursor-pointer rounded-full bg-white/25"
        >
          <div
            className="pointer-events-none absolute inset-y-0 left-0 rounded-full bg-white"
            style={{ width: `${effectiveVolume * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
