import { memo } from "react";
import type { Residence } from "@/constants/ui/Residence/Residences";
import Image from "next/image";

function ResidenceCard({ title, description, imageSrc }: Residence) {
  return (
    <div className="residence-card-container h-60.5 w-2/12 relative shadow-residence-card rounded-3xl mt-10">
      <Image
        width={2000}
        height={2000}
        src={imageSrc}
        alt="residence card"
        className="w-full h-full rounded-3xl"
      />

      <div className="absolute residence-info flex flex-col bottom-5 right-3">
        <p className="font-abar-extra-bold text-[16px] mb-2 text-white">
          {title}
        </p>
        <span className="font-abar-semi-bold text-[14px] text-[#FFFFFFCC]">
          {description}
        </span>
      </div>
    </div>
  );
}

export default memo(ResidenceCard);
