import Image from "next/image";
import Background from "@/components/modules/Background";
import CTA from "@/components/modules/Button/CTA";
import { VideoPlayer } from "@/components/modules/VideoPlayer";
import CustomPlayButton from "./CustomPlayButton";

function Video() {
  return (
    <div className="video-container relative my-20 flex w-full items-center justify-center">
      {/* Floating Backgrounds */}

      <Background
        className="pointer-events-none absolute right-10 top-0 z-20 h-full   w-1/2"
        src="/images/vector-bg.svg"
      />

      <Background
        className="pointer-events-none absolute left-1/4 top-0 z-11 h-full w-1/3 bg-cover bg-no-repeat"
        src="/images/Vector.png"
      />

      <div className="text-container mr-25 flex w-1/2 flex-col gap-y-4">
        <Image
          width={84}
          height={52}
          src="/images/icon-container-4.svg"
          alt="icon container video section"
        />

        <p className="font-abar-extra-bold text-[32px]">
          تور ویدیویی اقامتگاه گیلمار
        </p>

        <p className="font-abar-semi-bold text-[14px] leading-8 text-[#4C4C4D]">
          در این تور ویدیویی، گوشه‌ای از آرامش، طبیعت بکر و فضای گرم اقامتگاه
          گیلمار را از نزدیک تماشا کنید و پیش از سفر، حال‌وهوای دلنشین آن را
          تجربه کنید.
        </p>
        <CTA className="gap-x-5">اقامت در گیلمار</CTA>
      </div>

      <div className="video-player-container relative z-10 ml-10 w-1/2 isolate">
        <VideoPlayer
          src="/videos/sample-video.mp4"
          poster="/images/video-poster.png"
          slots={{
            centerPlayButton: <CustomPlayButton />,
          }}
        />
      </div>

      <Image
        width={134}
        height={139}
        src="/images/gold-star-icon.png"
        alt="gold star icon"
        className="absolute z-20 -bottom-15 rotate-45 right-1/2 w-33.5 h-34.75"
      />
    </div>
  );
}

export default Video;
