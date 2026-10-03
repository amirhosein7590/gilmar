import Image from "next/image";
import { cn } from "@/lib/utils";
import Background from "@/components/modules/Background";
import CTA from "@/components/modules/Button/CTA";

function Introduction() {
  return (
    <div className="introduction-to-gilmar flex flex-col mt-14 w-full">
      <div className="cta-section-container flex flex-col w-183 gap-y-6 mx-auto  items-center">
        <h1 className="font-abar-extra-bold text-center text-[40px] text-nowrap">
          اقامتگاه بوم‌گردی گیلمار جایی که طبیعت خانه است
        </h1>

        <h3 className="font-abar-semi-bold leading-8 text-center text-[14px] text-[#4C4C4D]">
          اقامتگاه بومگردی گیلمار بزرگ ترین مجموعه اکولوژ شمال کشور دارای
          امکانات رفاهی و تفریحی در فضایی منحصر به فرد با مجوز رسمی از اداره
          میراث فرهنگی، صنایع دستی و گردشگری گیلان فعالیت دارد.
        </h3>

        <CTA>مهمان گیلمار شو</CTA>
      </div>

      <div
        className="image-container mt-10 relative w-full h-145.25 bg-contain bg-no-repeat"
        style={{
          backgroundImage: "url('/images/gilmar-ecological-resort.png')",
        }}
      >
        {/* image-container backgrounds */}

        <Background
          className={cn(
            "left-rectangle-background absolute -z-10 blur-[50px]",
            "w-50 h-50.5 top-124.75 left-0 bg-[#D9D9D9]",
          )}
        />

        <Background
          className={cn(
            "right-rectangle-background absolute -z-10 blur-[50px]",
            "w-71.25 h-28 top-117.25 left-248.75 bg-[#D9D9D9]",
          )}
        />

        <Background
          className={cn(
            "overlay-rectangle-background absolute -z-10 blur-[50px]",
            "w-7xl h-94 top-20.25 rounded-[24px] bg-[#D9D9D9]",
          )}
        />

        <Background
          className={cn(
            "transparent-background-image -z-11 absolute w-full h-full top-7 left-0",
          )}
          src="/images/gilmar-transparent-bg-image.png"
        />

        {/* Customers Experiences */}

        <div
          className={cn(
            "cutomers-expriences absolute flex justify-between items-center",
            "w-41.5 h-12 bg-white rounded-[80px] gap-x-1.5",
            "absolute bottom-13 left-0 pr-3.5 pt-2 pb-2 pl-2",
          )}
        >
          <div className="customers-profile flex justify-between itesm-center">
            <Image
              src="/images/Customer-1.svg"
              width={26}
              height={26}
              alt="customer 1"
              className="z-10 rounded-full border border-white -ml-2.5"
            />

            <Image
              src="/images/Customer-2.svg"
              width={26}
              height={26}
              alt="Customer 1"
              className="z-5 rounded-full border border-white -ml-2.5"
            />

            <Image
              src="/images/Customer-3.svg"
              width={26}
              height={26}
              alt="Customer 1"
              className="z-1 rounded-full border border-white"
            />
          </div>

          <span className="font-abar-semi-bold text-[14px] text-nowrap">
            +۱۲۰ رزرو موفق
          </span>
        </div>

        {/* Subtitle */}

        <div className="subtitle absolute bottom-13 right-4 text-[14px] font-abar-semi-bold w-62.75 leading-8">
          فرار از شلوغی شهر و تجربه‌ی اقامتی اصیل در دل طبیعت شمال
        </div>
      </div>
    </div>
  );
}

export default Introduction;
