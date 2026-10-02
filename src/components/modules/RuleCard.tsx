import { memo, PropsWithChildren } from "react";
import Image from "next/image";
import type { RuleCard as TRuleCard } from "@/constants/ui/rulesSection/ruleCard";
import { cn } from "cn";

type RuleCardProps = TRuleCard &
  PropsWithChildren & {
    iconBoxClassName?: string;
  };

function RuleCard({
  children,
  iconBoxClassName = "",
  rotation = 0,
  iconSrc,
  iconAlt = "Card content",
  title,
  description,
  floatingCubes,
}: RuleCardProps) {
  return (
    <div className="card-container flex flex-col gap-y-5 w-2/12">
      {/* Icon Box Container */}

      <div
        className={`nox-container relative flex items-center justify-center p-8 ${iconBoxClassName}`}
      >
        <div
          className={cn(
            "relative z-10 w-35 h-42 bg-[#FCFCFD] shadow-rule-card",
            "rounded-[2rem] flex items-center justify-center overflow-hidden",
            "transition-all duration-300 border border-[#F4F5F6] relative",
          )}
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {iconSrc ? (
            <Image
              src={iconSrc}
              alt={iconAlt}
              width={118}
              height={118}
              className="w-24 h-24 scale-[1.1]"
              // style={{transform : `rotate(${rotation}deg)`}}
            />
          ) : (
            children
          )}
        </div>

        {/* Floating Cubes */}

        {floatingCubes.map(({ className, id }) => (
          <div key={id} className={`floating-cube ${className}`}></div>
        ))}
      </div>

      {/* Rules Content */}

      <div className="rules-content flex flex-col mt-6 gap-y-2">
        <p className="font-abar-extra-bold text-[16px] text-center">{title}</p>
        <span className="text-center text-[14px] font-abar-semi-bold text-[#4C4C4D] leading-8">
          {description}
        </span>
      </div>
    </div>
  );
}

export default memo(RuleCard);
