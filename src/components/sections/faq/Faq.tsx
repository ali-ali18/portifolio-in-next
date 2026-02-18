import { AccordionApp } from "@/components/bases/AccordionApp";
import { Container } from "@/components/shared/Container";
import { ItemSection } from "@/components/shared/ItemSection";
import { faqItems } from "@/lib/data/faq.data";

export function Faq() {
  return (
    <Container>
      <ItemSection
        titleSection="FAQ"
        itemsAlignment="start"
        actionButton={
          <AccordionApp
            defaultValue={["item-1"]}
            items={faqItems}
            className=" p-2 rounded-xl max-w-2xl"
          />
        }
      ></ItemSection>
    </Container>
  );
}
