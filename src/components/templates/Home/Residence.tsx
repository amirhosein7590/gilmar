import Image from "next/image";
import Background from "../../modules/Background";
import { residenceCards } from "@/constants/ui/Residence/Residences";
import ResidenceCard from "../../modules/ResidenceCard";

function Residence() {
  return (
    <div className="residence-container relative flex flex-col my-20">
      <Background
        className="absolute w-1/2 h-1/2 left-0 top-0 -z-1"
        src="/images/vector-bg.svg"
      />

      <div className="text-container flex flex-col  items-center gap-y-5">
        <Image
          width={84}
          height={52}
          alt="icon container 3"
          src="/images/icon-container-3.svg"
        />
        <p className="title text-[32px] font-bold font-abar-extra-bold text-center">
          انواع اتاق‌های اقامتگاه گیلمار{" "}
        </p>

        <span className="text-[14px] font-abar-semi-bold text-[#4C4C4D] text-center ">
          اتاق‌های گیلمار با فضایی دنج و امکانات مناسب، برای اقامتی آرام در دل
          طبیعت آماده شده‌اند.
        </span>
      </div>

      {/* Residence Cards */}

      <div className="residence-carts-container flex justify-center items-center gap-x-6">
        {residenceCards.map(({ description, id, imageSrc, title }) => (
          <ResidenceCard
            key={id}
            description={description}
            title={title}
            imageSrc={imageSrc}
          />
        ))}
      </div>
    </div>
  );
}

export default Residence;
