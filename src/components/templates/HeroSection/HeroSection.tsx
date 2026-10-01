import { cn } from "@/lib/utils";
import Navbar from "../../modules/Navbar";
import Introduction from "./Introduction";

function HeroSection() {
  return (
    <div className={cn("flex flex-col", "w-full")}>
      {/* hero section float backgrounds */}

      <div
        className={cn(
          "right-float-hero-section-background border-hero-section-border bg-hero-section-background",
          "absolute w-160 h-160 -top-35 left-235 ",
          "-z-10 blur-[200px]",
        )}
      ></div>

      <div
        className={cn(
          "left-float-hero-section-background border-hero-section-border bg-hero-section-background",
          "absolute w-160 h-160 -top-35 -left-35 ",
          "-z-10 blur-[200px]",
        )}
      ></div>

      <div className="children-container w-10/12 mx-auto z-10">
        <Navbar />
        <Introduction />
      </div>
    </div>
  );
}

export default HeroSection;
