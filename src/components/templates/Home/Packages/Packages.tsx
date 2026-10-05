import Background from "@/components/modules/Background";
import CTA from "@/components/modules/Button/CTA";
import PackageCard from "@/components/modules/PackageCard";
import { packageCards } from "@/constants/ui/packages/packagesCards";
import Image from "next/image";
import PackagesSlider from "./PackagesSlider";

function Packages() {
  return (
    <div className="packages-container relative my-20 flex w-full items-center justify-center">
      {/* Floating Backgrounds */}

      <Background
        className="pointer-events-none absolute right-10 -top-1/5 z-20 h-1/2 w-1/2"
        src="/images/vector-bg.svg"
      />

      <div className="packages-info mr-25 w-1/2  flex flex-col">
        <div className="packages-info-title flex flex-col gap-y-4">
          <Image
            width={84}
            height={52}
            src="/images/icon-container-4.svg"
            alt="icon container video section"
          />

          <p className="font-abar-extra-bold text-[32px]">
            پکیج‌های ویژه اقامت در گیلمار
          </p>

          <p className="font-abar-semi-bold text-[14px] leading-8 text-[#4C4C4D]">
            پکیج‌های ویژه ما ترکیبی از اقامت آرام، غذاهای محلی و تفریحات
            هیجان‌انگیز در دل طبیعت است.
          </p>
        </div>

        <div className="package-info-details flex flex-col mt-10 gap-y-2">
          <p className="font-abar-extra-bold text-[16px]">
            پکیج رمانتیک دو نفره
          </p>

          <p className="font-abar-semi-bold text-[14px] leading-8 text-[#4C4C4D]">
            شامل: ۱ شب اقامت + صبحانه + تور جنگل‌نوردی + قایق‌سواری
          </p>
        </div>

        <div className="package-card-container flex justify-between items-center w-full mt-10">
          {packageCards.map(({ id, imageAlt, imageSrc, title }) => (
            <PackageCard
              key={id}
              imageAlt={imageAlt}
              imageSrc={imageSrc}
              title={title}
            />
          ))}
        </div>

        <div className="dash-line w-full h-1 border-2 border-dashed border-[#4C4C4D1F] mt-10 "></div>

        <div className="price-info flex justify-between items-center mt-10">
          <span className="text-[16px] font-abar-extra-bold text-[#43A047]">
            قیمت: ۲۳0۰۰۰۰ تومان
          </span>

          <CTA className="w-50">همین الان رزرو کن</CTA>
        </div>
      </div>

      <div className="slider-container w-1/2">
      <PackagesSlider />
      </div>
    </div>
  );
}

export default Packages;
