import { cn } from "@/lib/utils";
import Navbar from "../modules/Navbar";

function HeroSection() {
  return (
    <div
      className={cn(
        "flex flex-col",
        "border border-solid border-hero-section-border",
        "bg-hero-section-background w-full",
      )}
    >
      <Navbar />
    </div>
  );
}

export default HeroSection;