"use client";
import * as m from "motion/react-m";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProjectsProps {
  children: ReactNode;
  className?: string;
}

export function ContainerProjects({ children, className }: ContainerProjectsProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true}}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={cn("grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-3", className)}
    >
      {children}
    </m.div>
  );
}
