"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { servicesSlides } from "@/constants/ui/servicesSlides/slides";
import ServicesSlide from "@/components/modules/ServicesSlide";
import { Button } from "@/components/modules/Button/Button";
import Image from "next/image";
import { cn } from "cn";

function Slider() {
  return (
    <div className="relative w-full">
      <Swiper
        slidesPerView={3}
        pagination={false}
        modules={[Navigation]}
        className="w-full relative"
        navigation={{
          nextEl: ".slide-next-btn",
        }}
      >
        {servicesSlides.map(({ id, imageSrc, title }) => (
          <SwiperSlide
            key={id}
            className="h-auto flex mx-4 transition-transform duration-300 [&.swiper-slide-active]:scale-1.1"
          >
            <ServicesSlide id={id} imageSrc={imageSrc} title={title} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        type="button"
        className={cn(
          "slide-next-btn cursor-pointer",
          "absolute top-[38%] -right-4 z-100 border-0 outline-0",
        )}
      >
        <Image
          width={25.23}
          height={25.23}
          alt="slider next button"
          src="/images/slider-next-btn.svg"
          className="w-12 h-12"
        />
      </Button>
    </div>
  );
}

export default Slider;
