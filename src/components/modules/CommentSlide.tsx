import type { CommentSlide } from "@/constants/ui/comments/slides";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { memo } from "react";

function CommentSlide({ author, comment, role }: CommentSlide) {
  return (
    <div
      className={cn(
        "w-125 h-73.5 bg-nav-background border border-hero-section-border",
        "flex flex-col items-center justify-center p-10 rounded-3xl",
      )}
    >
      <Image
        width={28}
        height={20}
        alt="comment slide carrier icon"
        src="/images/comment-slide-carrier-icon.svg"
      />

      <p className="font-abar-semi-bold text-[14px] text-center text-[#4C4C4D] my-6 leading-8">
        {comment}
      </p>

      <span className="font-abar-extra-bold text-[14px] mb-2">{author}</span>
      <span className="text-[14px] font-abar-semi-bold text-[#4C4C4D]">
        {role}
      </span>
    </div>
  );
}

export default memo(CommentSlide);
