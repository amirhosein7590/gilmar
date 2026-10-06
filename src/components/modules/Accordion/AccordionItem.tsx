import { Plus, Minus } from "lucide-react";
import { FaqItem } from "@/constants/ui/faq/accordion";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div
      className={cn(
        "accordion-item-container w-full py-2 px-2 bg-white",
        "transition-[border-radius] duration-300 ease-in-out",
      )}
      style={{ borderRadius: isOpen ? "35px" : "80px" }}
    >
      <div
        className={cn(
          "bg-nav-background overflow-hidden",
          "h-full py-2 shadow-[0px_4px_24px_rgba(0,0,0,0.02)]",
          "border border-hero-section-border",
          "transition-[border-radius] duration-300 ease-in-out",
        )}
        style={{ borderRadius: isOpen ? "35px" : "80px" }}
      >
        <button
          type="button"
          onClick={onToggle}
          className="w-full cursor-pointer flex items-center gap-4 py-2 px-3 text-right transition-colors focus:outline-none"
        >
          <span className="flex-1 text-[14px] font-abar-extra-bold text-gray-800 leading-relaxed">
            {item.question}
          </span>
          <div
            className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full
                       shadow-[0px_0px_0px_6px_#FFFFFF,0px_24px_48px_0px_#002E251F]
                       bg-[linear-gradient(229.52deg,#02ADF7_-18.98%,#26E05A_121.29%),radial-gradient(27.92%_100%_at_50%_0%,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0)_100%)]
                       transition-transform duration-300 ease-in-out"
          >
            {isOpen ? (
              <Minus className="w-5 h-5 text-white" strokeWidth={2.5} />
            ) : (
              <Plus className="w-5 h-5 text-white" strokeWidth={2.5} />
            )}
          </div>
        </button>

        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="px-5 pb-5 pt-0 text-[14px] font-abar-semi-bold text-gray-600 leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
