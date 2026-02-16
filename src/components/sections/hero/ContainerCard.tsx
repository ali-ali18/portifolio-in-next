"use client";
import * as m from "motion/react-m";
import type { ComponentPropsWithRef } from "react";
import { FadeOverlay } from "@/components/shared/FadeOverlay";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { CardAssets, type CardAssetsProps } from "./CardAssets";

interface ContainerCardProps extends ComponentPropsWithRef<typeof m.section> {
  items: CardAssetsProps[];
}

export function ContainerCard({
  items,
  className,
  ...props
}: ContainerCardProps) {
  return (
    <m.section
      className={cn(className, "w-full relative")}
      {...props}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <Marquee startDelaySeconds={1.3} className="w-full [--gap:12px]">
        {items.map((item) => (
          <CardAssets
            key={item.id}
            id={item.id}
            url={item.url}
            alt={item.alt}
            variant={"bow"}
          />
        ))}
      </Marquee>
      <FadeOverlay variant={"right"} className="w-36 " intensity={"xl"} />
      <FadeOverlay variant={"left"} className="w-36 z-0" intensity={"xl"} />
    </m.section>
  );
}
