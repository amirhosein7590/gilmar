"use client";

import { Button } from "@/components/modules/Button/Button";
import { useVideoPlayer } from "@/components/modules/VideoPlayer";
import Image from "next/image";

function CustomPlayButton() {
  const { isPlaying, togglePlay } = useVideoPlayer();

  if (isPlaying) return null;
  return (
    <Button
      type="button"
      onClick={togglePlay}
      className=" absolute right-1/2 top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 border-0 outline-0"
    >
      <Image
        width={120}
        height={120}
        alt="video play button"
        src="/images/play-button.svg"
        className="w-15 h-15"
      />
    </Button>
  );
}

export default CustomPlayButton;
