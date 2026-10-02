import Image from "next/image";
import CTA from "../modules/Button/CTA";
import Background from "../modules/Background";

function AboutUs() {
  return (
    <div className="about-us flex justify-center relative items-center mt-20">
      <Background
        className="absolute w-1/2 h-[68%] -z-1 top-0 right-10"
        src="/images/vector-bg.svg"
      />
      <div className="about-us-introduction-container h-160.5 w-1/2 mr-25 flex flex-col justify-center gap-y-4">
        <Image
          width={84}
          height={52}
          src="/images/icon-container.svg"
          alt="about us title icon"
        />
        <h3 className="font-abar-extra-bold text-[32px] ">
          گیلمار؛ آرامش ناب در آغوش طبیعت گیلان
        </h3>

        <p className="text-[14px] leading-8 text-[#4C4C4D] font-abar-semi-bold">
          گیلمار با فضایی آرام، سرسبز و چشم‌اندازی زیبا از دریاچه‌ها، میزبان
          لحظاتی دلنشین و به‌یادماندنی برای شماست. طبیعت بکر تالابی، حضور
          پرندگان بومی و مهاجر، نزدیکی به جاذبه‌های گردشگری گیلان، مسیر دسترسی
          مناسب و انواع تفریحات و گشت‌های گیلان‌گردی، این اقامتگاه را به مقصدی
          متفاوت برای سفر تبدیل کرده است.
        </p>

        <CTA className="gap-x-5">اقامت در گیلمار</CTA>
      </div>

      <div
        className="image-container w-1/2 h-160.5 bg-contain bg-right bg-no-repeat"
        style={{ backgroundImage: "url('/images/about-us-bg.png')" }}
      ></div>
    </div>
  );
}

export default AboutUs;
