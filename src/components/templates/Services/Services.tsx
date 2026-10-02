import Background from "@/components/modules/Background";
import Image from "next/image";
import Slider from "./Slider";

function Services() {
  return (
    <div className="relative services-container my-20 flex justify-between items-center w-full">
      <Background
        className="absolute w-1/2 h-1/3 -z-1 top-0 right-10"
        src="/images/vector-bg.svg"
      />
      <div className="text-container flex flex-col mr-25 w-1/2 gap-y-4">
        <Image
          width={84}
          height={52}
          src="/images/icon-container-2.svg"
          alt="icon container services section"
        />

        <p className="font-abar-extra-bold text-[32px]">
          گیلمار؛ آرامش ناب در آغوش طبیعت گیلان
        </p>

        <p className="text-[14px] leading-8 text-[#4C4C4D] font-abar-semi-bold">
          گیلمار با فضایی آرام، سرسبز و چشم‌اندازی زیبا از دریاچه‌ها، میزبان
          لحظاتی دلنشین و به‌یادماندنی برای شماست. طبیعت بکر تالابی، حضور
          پرندگان بومی و مهاجر، نزدیکی به جاذبه‌های گردشگری گیلان، مسیر دسترسی
          مناسب و انواع تفریحات و گشت‌های گیلان‌گردی، این اقامتگاه را به مقصدی
          متفاوت برای سفر تبدیل کرده است.
        </p>
      </div>

      <div className="slider-container w-1/2">
        <Slider />
      </div>
    </div>
  );
}

export default Services;
