"use client";

import * as m from "motion/react-m";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SectionTitle } from "./SectionTitle";

interface ItemSectionProps {
  children: ReactNode;
  className?: string;
  titleSection: ReactNode | string;
  actionButton?: ReactNode;
  animateContent?: boolean;
}

export function ItemSection({
  children,
  className,
  titleSection,
  actionButton,
  animateContent = true,
}: ItemSectionProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <m.div
        className="flex items-center justify-between mb-3 md:mb-4"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6 }}
      >
        {typeof titleSection === "string" ? (
          <SectionTitle as="h2">{titleSection}</SectionTitle>
        ) : (
          titleSection
        )}

        {actionButton && actionButton}
      </m.div>

      <m.div
        initial={animateContent ? { opacity: 0, y: 50 } : undefined}
        whileInView={animateContent ? { opacity: 1, y: 0 } : undefined}
        viewport={animateContent ? { once: true, amount: 0.8 } : undefined}
        transition={animateContent ? { duration: 0.6 } : undefined}
        className="w-full h-full"
      >
        {children}
      </m.div>
    </div>
  );
}
