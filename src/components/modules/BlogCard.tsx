import { memo } from "react";
import type { Blog } from "@/constants/ui/Blog/blogs";
import Image from "next/image";

function BlogCard({ title, description, imageSrc }: Blog) {
  return (
    <div className="relative blog-card-container w-102 h-120.5relative shadow-blog-card rounded-3xl mt-10">
      <Image
        width={2000}
        height={2000}
        src={imageSrc}
        alt="blog card"
        className="w-full h-full rounded-3xl"
      />

      <div className="absolute blog-info flex flex-col bottom-5 right-3">
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

export default memo(BlogCard);
