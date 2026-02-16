"use client";

import { type ReactNode, useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { FadeOverlay } from "../shared/FadeOverlay";

interface CarouselContainerProps {
  children: ReactNode;
  className?: string;
  activeButton?: boolean;
}

export function CarouselContainer({
  children,
  className,
  activeButton = true,
}: CarouselContainerProps) {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    api.on("reInit", () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      className={cn("w-full relative overflow-hidden md:overflow-visible", className)}
      setApi={setApi}
      opts={{
        slidesToScroll: 1,
        align: "start",
        containScroll: "trimSnaps",
      }}
    >
      <CarouselContent className="mr-8 gap-3 pr-50">{children}</CarouselContent>
      {activeButton && (
        <>
          {current > 0 && <CarouselPrevious />}
          {current < count - 1 && <CarouselNext />}
        </>
      )}
      {current > 0 && (
        <FadeOverlay
          variant="left"
          intensity="2xl"
          size="2xl"
          className="w-10 md:w-40 lg:w-48 transition-all duration-300"
        />
      )}
      {current < count - 1 && (
        <FadeOverlay
          variant="right"
          intensity="2xl"
          size="2xl"
          className="w-10 md:w-40 lg:w-48 transition-all duration-300"
        />
      )}
    </Carousel>
  );
}
