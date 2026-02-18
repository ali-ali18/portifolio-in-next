"use client";

import { useScroll, useSpring, useTransform } from "motion/react";
import * as m from "motion/react-m";
import { type ReactNode, useRef } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { cn } from "@/lib/utils";

interface ContainerFooterProps {
  children: ReactNode;
  className?: string;
}

const containerClassName =
  "absolute bottom-0 md:bottom-2 left-1/2 -translate-x-1/2 overflow-hidden origin-bottom w-full md:w-[calc(100vw-1.3rem)] h-[calc(100vh-0.8rem)] md:h-[calc(100vh-1.3rem)] bg-primary rounded-t-3xl md:rounded-3xl";

function AnimatedContainerFooter({
  children,
  className,
}: ContainerFooterProps) {
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
        style={{ scale: scaleSpring }}
        className={cn(containerClassName, className)}
      >
        <div
          className="absolute inset-0 z-0 rounded-t-3xl md:rounded-3xl bg-[url('/noise-texture.svg')] bg-repeat opacity-[0.06] pointer-events-none"
          aria-hidden
        />
        <div className="relative z-10 h-full w-full px-4 py-6 md:px-8 md:py-10">
          {children}
        </div>
      </m.div>
    </section>
  );
}

function StaticContainerFooter({ children, className }: ContainerFooterProps) {
  return (
    <section className="w-full min-h-screen relative">
      <div className="h-screen" />
      <div className={cn(containerClassName, className)}>
        <div
          className="absolute inset-0 z-0 rounded-t-3xl md:rounded-3xl bg-[url('/noise-texture.svg')] bg-repeat opacity-[0.06] pointer-events-none"
          aria-hidden
        />
        <div className="relative z-10 h-full w-full px-4 py-6 md:px-8 md:py-10">
          {children}
        </div>
      </div>
    </section>
  );
}

export function ContainerFooter({ children, className }: ContainerFooterProps) {
  const isMobile = useIsMobile();
  return isMobile ? (
    <StaticContainerFooter className={className}>
      {children}
    </StaticContainerFooter>
  ) : (
    <AnimatedContainerFooter className={className}>
      {children}
    </AnimatedContainerFooter>
  );
}
