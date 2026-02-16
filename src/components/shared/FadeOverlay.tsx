"use client";

import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithRef } from "react";
import { cn } from "@/lib/utils";

const fadeOverlayVariants = cva("pointer-events-none absolute z-10", {
  variants: {
    variant: {
      top: "inset-x-0 top-0 bg-gradient-to-b to-transparent",
      bottom: "inset-x-0 bottom-0 bg-gradient-to-t to-transparent",
      left: "inset-y-0 left-0 bg-gradient-to-r to-transparent",
      right: "inset-y-0 right-0 bg-gradient-to-l to-transparent",
      full: "inset-0",
    },
    size: {
      xs: "",
      sm: "",
      md: "",
      lg: "",
      xl: "",
      "2xl": "",
    },
    intensity: {
      xs: "",
      sm: "",
      md: "",
      lg: "",
      xl: "",
      "2xl": "",
    },
  },
  defaultVariants: {
    variant: "bottom",
    size: "md",
    intensity: "md",
  },
  compoundVariants: [
    { variant: "top", size: "xs", class: "h-8" },
    { variant: "top", size: "sm", class: "h-12" },
    { variant: "top", size: "md", class: "h-16" },
    { variant: "top", size: "lg", class: "h-24" },
    { variant: "top", size: "xl", class: "h-32" },
    { variant: "top", size: "2xl", class: "h-40" },
    { variant: "bottom", size: "xs", class: "h-8" },
    { variant: "bottom", size: "sm", class: "h-12" },
    { variant: "bottom", size: "md", class: "h-16" },
    { variant: "bottom", size: "lg", class: "h-24" },
    { variant: "bottom", size: "xl", class: "h-32" },
    { variant: "bottom", size: "2xl", class: "h-40" },
    { variant: "left", size: "xs", class: "w-8" },
    { variant: "left", size: "sm", class: "w-12" },
    { variant: "left", size: "md", class: "w-16" },
    { variant: "left", size: "lg", class: "w-24" },
    { variant: "left", size: "xl", class: "w-32" },
    { variant: "left", size: "2xl", class: "w-40" },
    { variant: "right", size: "xs", class: "w-8" },
    { variant: "right", size: "sm", class: "w-12" },
    { variant: "right", size: "md", class: "w-16" },
    { variant: "right", size: "lg", class: "w-24" },
    { variant: "right", size: "xl", class: "w-32" },
    { variant: "right", size: "2xl", class: "w-40" },
    { variant: "top", intensity: "xs", class: "from-background/30" },
    { variant: "top", intensity: "sm", class: "from-background/50" },
    { variant: "top", intensity: "md", class: "from-background/70" },
    { variant: "top", intensity: "lg", class: "from-background/80" },
    { variant: "top", intensity: "xl", class: "from-background/90" },
    { variant: "top", intensity: "2xl", class: "from-background/95" },
    { variant: "bottom", intensity: "xs", class: "from-background/30" },
    { variant: "bottom", intensity: "sm", class: "from-background/50" },
    { variant: "bottom", intensity: "md", class: "from-background/70" },
    { variant: "bottom", intensity: "lg", class: "from-background/80" },
    { variant: "bottom", intensity: "xl", class: "from-background/90" },
    { variant: "bottom", intensity: "2xl", class: "from-background/95" },
    { variant: "left", intensity: "xs", class: "from-background/30" },
    { variant: "left", intensity: "sm", class: "from-background/50" },
    { variant: "left", intensity: "md", class: "from-background/70" },
    { variant: "left", intensity: "lg", class: "from-background/80" },
    { variant: "left", intensity: "xl", class: "from-background/90" },
    { variant: "left", intensity: "2xl", class: "from-background/95" },
    { variant: "right", intensity: "xs", class: "from-background/30" },
    { variant: "right", intensity: "sm", class: "from-background/50" },
    { variant: "right", intensity: "md", class: "from-background/70" },
    { variant: "right", intensity: "lg", class: "from-background/80" },
    { variant: "right", intensity: "xl", class: "from-background/90" },
    { variant: "right", intensity: "2xl", class: "from-background/95" },
    { variant: "full", intensity: "xs", class: "bg-background/30" },
    { variant: "full", intensity: "sm", class: "bg-background/40" },
    { variant: "full", intensity: "md", class: "bg-background/50" },
    { variant: "full", intensity: "lg", class: "bg-background/60" },
    { variant: "full", intensity: "xl", class: "bg-background/70" },
    { variant: "full", intensity: "2xl", class: "bg-background/80" },
  ],
});

export interface FadeOverlayProps
  extends ComponentPropsWithRef<"div">,
    VariantProps<typeof fadeOverlayVariants> {}

export function FadeOverlay({
  className,
  variant = "bottom",
  size = "md",
  intensity = "md",
  ...props
}: FadeOverlayProps) {
  return (
    <div
      aria-hidden
      className={cn(
        fadeOverlayVariants({ variant, size, intensity }),
        className,
      )}
      {...props}
    />
  );
}

export { fadeOverlayVariants };
