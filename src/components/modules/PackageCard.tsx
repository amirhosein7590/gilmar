import type { PackageCard } from "@/constants/ui/packages/packagesCards";
import Image from "next/image";

function PackageCard({ imageSrc, title, imageAlt }: PackageCard) {
  return (
    <div className="w-29 h-29 rounded-xl border bg-white shadow-package-card flex flex-col items-center justify-center gap-y-4">
      <Image
        width={52}
        height={52}
        src={imageSrc}
        alt={imageAlt}
        className="package-card-image"
      />

      <p className="package-card-title text-[14px] font-abar-semi-bold">
        {title}
      </p>
    </div>
  );
}

export default PackageCard;
