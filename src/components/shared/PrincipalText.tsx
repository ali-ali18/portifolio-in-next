"use client";
import * as m from "motion/react-m";
import type { ComponentPropsWithRef } from "react";
import { pilowlava } from "@/app/fonts";
import { cn } from "@/lib/utils";

interface PrincipalTextProps extends ComponentPropsWithRef<typeof m.h1> {
  className?: string;
}

export function PrincipalText({
  children,
  className,
  ...props
}: PrincipalTextProps) {
  return (
    <m.h1
      {...props}
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.3 }}
      className={cn(
        pilowlava.className,
        "text-6xl md:text-9xl font-bold tracking-wider",
        className,
      )}
    >
      {children}
    </m.h1>
  );
}
