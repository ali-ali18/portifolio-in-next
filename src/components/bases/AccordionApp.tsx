import type { AccordionValue } from "@base-ui/react";
import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface AccordionAppProps {
  defaultValue: string | string[];
  items: AccordionItemType[];
  className?: string;
}

type AccordionItemType = {
  value: string;
  trigger: ReactNode | string;
  content: ReactNode | string;
};

export function AccordionApp({
  defaultValue,
  items,
  className,
}: AccordionAppProps) {
  return (
    <Accordion
      defaultValue={defaultValue as AccordionValue}
      className={className}
    >
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger className='font-semibold '>{item.trigger}</AccordionTrigger>
          <AccordionContent className='font-medium'>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
