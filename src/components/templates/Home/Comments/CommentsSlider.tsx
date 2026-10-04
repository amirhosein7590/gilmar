"use client";

import CommentSlide from "@/components/modules/CommentSlide";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useRef } from "react";
import { commentSlides } from "@/constants/ui/comments/slides";

function CommentsSlider() {
  const paginationRef = useRef<HTMLDivElement>(null);

  const paginationConfig = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return `<span class="${className} comment-bullet"></span>`;
    },
    el: paginationRef.current,
  };

  return (
    <>
      <Swiper
        slidesPerView={1}
        modules={[Pagination]}
        className="comment-slider absolute top-4/12 right-1/3 z-1"
        pagination={paginationConfig}
        autoplay={false}
      >
        {commentSlides.map((commentSlide) => (
          <SwiperSlide key={commentSlide.id}>
            <CommentSlide {...commentSlide} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        ref={paginationRef}
        className="pagination-container w-full z-10 absolute bottom-1/8  right-3 flex justify-center items-center gap-x-2"
      ></div>
    </>
  );
}

export default CommentsSlider;
