import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./button";
import { navLinks } from "@/constants/ui/nav/links";

function Navbar() {
  return (
    <nav
      className={cn(
        "flex justify-between items-center mt-10 rounded-[80px]",
        "bg-nav-background py-[6.5px] px-[8px] w-10/12 mx-auto",
      )}
    >
      <div className="logo-container w-2/12">
        <Image
          width={169}
          height={53}
          src="/images/Gilmar_Logo.svg"
          alt="Gilmar Logo"
          priority
        />
      </div>

      <div className="nav-links flex items-center justify-center gap-2 w-8/12">
        {navLinks.map(({ text, href }) => (
          <Button
            key={text}
            href={href}
            type="button"
            className="text-black border-0 outline-0 bg-transparent shadow-none font-abar-semi-bold text-[14px]"
          >
            {text}
          </Button>
        ))}
      </div>

      <Button
        type="button"
        className={cn(
          "w-2/12 flex items-center justify-between gap-2",
          "py-2.5 px-5",
          "bg-light-green shadow-brand-shadow w-38.5 h-13 rounded-[80px]",
          "text-[14px] cursor-pointer"
        )}
      >
        <Image
          width={20}
          height={20}
          src="/images/user.svg"
          alt="user icon"
        />
        <span className="text-white text-[14px] font-abar-semi-bold">
          ورود یا ثبت نام
        </span>
      </Button>
    </nav>
  );
}

export default Navbar;