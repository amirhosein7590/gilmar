import { Accordion } from "@/components/modules/Accordion/Accordion";
import Background from "@/components/modules/Background";
import Image from "next/image";

function Faq() {
  return (
    <div className="faq-container relative my-20 flex w-full items-center justify-center">
      {/* Floating Backgrounds */}

      <Background
        className="pointer-events-none absolute right-10 -top-1/8 z-20 h-1/2 w-1/2"
        src="/images/vector-bg.svg"
      />
      <div className="text-container mr-25 w-1/2  flex flex-col">
        <div className="faq-info-title flex flex-col gap-y-4">
          <Image
            width={84}
            height={52}
            src="/images/icon-container-7.svg"
            alt="icon faq container"
          />

          <p className="font-abar-extra-bold text-[32px]">
            سوالات متداول مهمانان گیلمار{" "}
          </p>

          <p className="font-abar-semi-bold text-[14px] leading-8 text-[#4C4C4D]">
            پاسخ رایج‌ترین سوالات درباره رزرو، اقامت و امکانات گیلمار را اینجا
            پیدا کنید تا با خیال راحت سفر خود را برنامه‌ریزی کنید.
          </p>
        </div>

        <Image
          width={420}
          height={382}
          src="/images/camera.png"
          alt="camera icon"
          className="w-full h-80 object-contain"
        />
      </div>

      <div className="accordion-container ml-5 w-1/2 ">
        <Accordion />
      </div>
    </div>
  );
}

export default Faq;
