"use client";

import { useScroll, useSpring, useTransform } from "motion/react";
import * as m from "motion/react-m";
import { type ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

interface ContainerFooterProps {
  children: ReactNode;
  className?: string;
}

export function ContainerFooter({ children, className }: ContainerFooterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scaleSpring = useSpring(scale, { stiffness: 160, damping: 28 });

  return (
    <section className="w-full min-h-screen relative">
      <div ref={ref} className="h-screen" />

      <m.div
        style={{
          scale: scaleSpring,
        }}
        className={cn(
          "absolute bottom-0 md:bottom-2 left-1/2 -translate-x-1/2 overflow-hidden origin-bottom",
          "w-full md:w-[calc(100vw-1.3rem)]",
          "h-[calc(100vh-0.8rem)] md:h-[calc(100vh-1.3rem)]",
          "bg-zinc-950 rounded-t-3xl md:rounded-3xl",
          className,
        )}
      >
        <div className="h-full w-full">{children}</div>
      </m.div>
    </section>
  );
}
