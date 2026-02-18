"use client";

import * as m from "motion/react-m";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SectionTitle } from "./SectionTitle";

interface ItemSectionProps {
  children?: ReactNode;
  className?: string;
  titleSection: ReactNode | string;
  actionButton?: ReactNode;
  animateContent?: boolean;
  itemsAlignment?: "start" | "center";
}

export function ItemSection({
  children,
  itemsAlignment = "start",
  className,
  titleSection,
  actionButton,
  animateContent = true,
}: ItemSectionProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <m.div
        className={cn(
          "flex flex-col sm:flex-row gap-4 sm:gap-0 items-cente justify-between mb-3 md:mb-4",
          itemsAlignment === "start" ? "items-start" : "items-center",
        )}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4}}
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
        viewport={animateContent ? { once: true, amount: 0.4 } : undefined}
        transition={animateContent ? { duration: 0.4 } : undefined}
        className="w-full h-full"
      >
        {children}
      </m.div>
    </div>
  );
}
