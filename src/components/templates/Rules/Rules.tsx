import Background from "@/components/modules/Background";
import RuleCard from "@/components/modules/RuleCard";
import { ruleCards } from "@/constants/ui/rulesSection/ruleCard";
import Image from "next/image";

function Rules() {
  return (
    <div className="mt-20 flex flex-col">
      <div className="text-container flex flex-col items-center gap-y-5">
        <Image
          width={84}
          height={52}
          alt="icon container 1"
          src="/images/icon-container-1.svg"
        />
        <p className="title text-[32px] font-bold font-abar-extra-bold text-center">
          همراهی برای حفظ آرامش و طبیعت گیلمار
        </p>

        <span className="text-[14px] font-abar-semi-bold text-[#4C4C4D] text-center ">
          برای حفظ آرامش، نظم و تجربه‌ای دلنشین برای همه مهمانان، لطفاً قوانین
          اقامتگاه گیلمار را پیش از رزرو مطالعه و رعایت فرمایید.
        </span>
      </div>

      <div className="boxes-container relative gap-x-30 flex justify-center mt-10 items-center">
        {/* Dash Line */}

        <Background
          src="/images/dash-line.svg"
          className="absolute bottom-1/3 h-1/2 w-full"
        />

        {/* Background Vector */}

        <Background
          src="/images/vector-bg.svg"
          className="absolute w-5/12 h-full left-0 top-0"
        />

        {ruleCards.map((ruleCard) => (
          <RuleCard key={ruleCard.id} {...ruleCard} />
        ))}
      </div>
    </div>
  );
}

export default Rules;
