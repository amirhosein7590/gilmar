import Image from "next/image";
import { Button } from "@/components/modules/button";
import { cn } from "@/lib/utils";

function Introduction() {
  return (
    <div className="introduction-to-gilmar flex flex-col mt-14 mx-auto items-center gap-y-6 w-183">
      <h1 className="font-abar-extra-bold text-center text-[40px] text-nowrap">
        اقامتگاه بوم‌گردی گیلمار جایی که طبیعت خانه است
      </h1>

      <h3 className="font-abar-semi-bold leading-8 text-center text-[14px] text-[#4C4C4D]">
        اقامتگاه بومگردی گیلمار بزرگ ترین مجموعه اکولوژ شمال کشور دارای امکانات
        رفاهی و تفریحی در فضایی منحصر به فرد با مجوز رسمی از اداره میراث فرهنگی،
        صنایع دستی و گردشگری گیلان فعالیت دارد.
      </h3>

      <Button
        className={cn(
          "flex items-center gap-x-3",
          "py-2.5 px-5",
          "bg-light-green shadow-brand-shadow mt-2 w-47.75 h-13 rounded-[80px]",
          "cursor-pointer",
        )}
        type="button"
      >
        <span className="text-[16px] text-white font-abar-semi-bold">
          مهمان گیلمار شو
        </span>

        <Image
          width={40}
          height={40}
          src="/images/left-arrow.svg"
          alt="left arrow icon"
        />
      </Button>
    </div>
  );
}

export default Introduction;
