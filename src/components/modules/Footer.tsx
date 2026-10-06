import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./Button/Button";
import React from "react";
import SocialIcon from "./SocialIcon";

function Footer() {
  const links = [
    {
      id: 1,
      text: "سوئیت‌ها و اقامت",
    },
    {
      id: 2,
      text: "راهنمای مهمان‌ها",
    },
    {
      id: 3,
      text: "درباره گیلمار",
    },
    {
      id: 4,
      text: "مجله گیلمار",
    },
  ];

  const socialMedias = [
    {
      id : 1,
      imageSrc : "/images/linkedin.svg",
    },
    {
      id : 2,
      imageSrc : "/images/telegram.svg"
    },
    {
      id : 3,
      imageSrc : "/images/youtube.svg"
    },
    {
      id : 4,
      imageSrc : "/images/twitter.svg"
    },
  ]

  return (
    <>
    <div className="footer-container w-10/12 mx-auto rounded-[30px] py-3 px-2 bg-white">
      <footer
        className={cn(
          "bg-nav-background border rounded-[30px] border-hero-section-border",
          "flex justify-between items-center gap-x-10 py-8 px-5",
        )}
      >
        <div className="gilmar-info flex flex-col w-1/3">
          <Image
            width={169}
            height={53}
            alt="gilmar logo"
            src="/images/Gilmar_Logo.svg"
          />

          <p className="text-[14px] font-abar-semi-bold leading-8 text-[#4C4C4D] mt-2">
            اقامتگاه بوم‌گردی گیلمار، بزرگ‌ترین مجموعه اکولوژ شمال کشور با
            امکانات رفاهی و تفریحی متنوع، در فضایی منحصربه‌فرد و با مجوز رسمی
            میراث فرهنگی گیلان فعالیت می‌کند.
          </p>
        </div>

        {/* Links Container */}

        <div className="links-container flex flex-col gap-y-4 w-1/3">
          <p className="text-[16px] font-abar-extra-bold">کاوش در گیلما</p>

          <ul className="links flex flex-col gap-y-2">
            {links.map(({ id, text }) => (
              <li key={id} className="list-disc">
                <Button
                  type="button"
                  variant="ghost"
                  href="#"
                  className="text-[14px] text-[#4C4C4D] font-abar-semi-bold cursor-pointer"
                >
                  {text}
                </Button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}

        <div className="contact-us-info flex flex-col gap-y-4 w-1/3">
          <p className="text-[16px] font-abar-extra-bold">راه های ارتباط با گیلمار</p>
          <span className="text-[14px] text-[#4C4C4D] leading-8 font-abar-semi-bold">
            تلفن پشتیبانی: 01334775400 - 01334775411
            <br />
            ایمیل: info@gilmar-gilan.com
            <br />
            موقعیت گیلمار: گیلان، جاده رشت به فومن، روستای ملاسرا، خیابان
            <br />
            کوزه‌گران، اقامتگاه گیلمار
          </span>

      </div>
      </footer>
    </div>  

    <div className="navbar-container bg-white p-2 rounded-[80px] w-10/12 mx-auto mt-10">
            <div className="navbar bg-nav-background border rounded-[80px] border-hero-section-border py-2 px-4 flex justify-between">
              <span className="w-1/2 self-center font-abar-semi-bold text-[14px] text-[#4C4C4D]">
              © تمامی حقوق برای اقامتگاه بوم‌گردی گیلمار محفوظ است.
              </span>

              {/* Social Media Contacts */}

              <div className="social-media flex justify-end  w-1/2 items-center gap-x-4">
                {socialMedias.map(({id , imageSrc})=> (
                    <SocialIcon key={id} imageSrc={imageSrc} />
                ))}
              </div>

            </div>
      </div>
    </>
  );
}

export default Footer;
