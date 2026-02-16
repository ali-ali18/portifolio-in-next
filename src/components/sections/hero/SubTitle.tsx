"use client";

import * as m from "motion/react-m";
import type { ComponentPropsWithRef } from "react";
import { cn } from "@/lib/utils";

interface SubTitleProps extends ComponentPropsWithRef<typeof m.p> {
  className?: string;
}

export function SubTitle({ children, className, ...props }: SubTitleProps) {
  return (
    <m.p
      {...props}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 1.2 }}
      className={cn("text-lg sm:text-xl md:text-2xl font-medium", className)}
    >
      {children}
    </m.p>
  );
}
