import { memo } from "react";

import type { TServicesSlide } from "@/constants/ui/servicesSlides/slides";

function ServicesSlide({ imageSrc, title }: TServicesSlide) {
  return (
    <div
      className="service-slide relative w-63 h-76 bg-cover bg-center rounded-lg bg-no-repeat"
      style={{ backgroundImage: `url('${imageSrc}')` }}
    >
      <span className="service-slide-title z-10 text-white font-abar-extra-bold text-[16px] absolute bottom-4 right-5">
        {title}
      </span>
    </div>
  );
}

export default memo(ServicesSlide);
