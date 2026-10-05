"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import PackageSlide from "@/components/modules/PackageSlide";

function PackagesSlider() {
  return (
    <div className="relative w-full h-full">
      <Swiper
        slidesPerView={1}
        modules={[Pagination]}
        autoplay={false}
        className="packages-slider w-full h-full"
        pagination={{
          clickable: true,
          bulletClass: "custom-bullet", // کلاس سفارشی برای بولت‌ها
          bulletActiveClass: "custom-bullet-active", // کلاس سفارشی برای بولت فعال
        }}
      >
        <SwiperSlide>
          <PackageSlide />
        </SwiperSlide>
        <SwiperSlide>
          <PackageSlide />
        </SwiperSlide>
        <SwiperSlide>
          <PackageSlide />
        </SwiperSlide>
        <SwiperSlide>
          <PackageSlide />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default PackagesSlider;