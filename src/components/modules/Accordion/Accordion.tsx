"use client";

import { useState } from "react";
import { faqData } from "@/constants/ui/faq/accordion";
import { AccordionItem } from "./AccordionItem";

export function Accordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-6 py-10 px-4">
      {faqData.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
}
