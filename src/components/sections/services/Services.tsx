import { CarouselContainer } from "@/components/bases/CarouselContainer";
import { Container } from "@/components/shared/Container";
import { ItemSection } from "@/components/shared/ItemSection";
import { CarouselItem } from "@/components/ui/carousel";
import { serviceData } from "@/lib/data/service.data";
import { CardServices } from "./CardServices";

export function Services() {
  return (
    <Container className="mt-1">
      <ItemSection titleSection="Services.">
        <CarouselContainer>
          {serviceData.map((service, index) => (
            <CarouselItem
              key={service.id}
              className="pl-4 shrink-0 min-w-[280px] basis-[280px] md:min-w-[340px] md:basis-[340px] lg:min-w-[380px] lg:basis-[380px]"
            >
              <CardServices {...service} index={index} />
            </CarouselItem>
          ))}
        </CarouselContainer>
      </ItemSection>
    </Container>
  );
}
