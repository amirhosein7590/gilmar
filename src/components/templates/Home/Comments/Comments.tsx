import Background from "@/components/modules/Background";
import { floatingUsersProfile } from "@/constants/ui/comments/floatingUsersProfile";
import Image from "next/image";
import CommentsSlider from "./CommentsSlider";

function Comments() {
  return (
    <div className="comments-container relative flex flex-col my-20">
      <div className="text-container flex flex-col items-center gap-y-5">
        <Image
          width={84}
          height={52}
          alt="icon container 5"
          src="/images/icon-container-5.svg"
        />
        <p className="title text-[32px] font-bold font-abar-extra-bold text-center">
          گیلمار از نگاه مهمانان
        </p>

        <span className="text-[14px] font-abar-semi-bold text-[#4C4C4D] text-center ">
          تجربه واقعی مهمانان، بهترین روایت از آرامش، طبیعت و حال خوب گیلمار
          است.
        </span>
      </div>

      <div className="relative mt-10 h-149.25">
        <Background
          src="/images/comments-vector.svg"
          className="w-fulll h-full absolute inset-0 z-1 bg-no-repeat bg-contain bg-right"
        />

        {/* Customers Floating Profile Section */}

        {floatingUsersProfile.map((user) => (
          <Image
            key={user.id}
            width={user.width}
            height={user.height}
            alt={user.alt}
            src={user.src}
            className={user.className}
          />
        ))}

        {/* Customers Opinions Slider */}

        <CommentsSlider />
      </div>
    </div>
  );
}

export default Comments;
