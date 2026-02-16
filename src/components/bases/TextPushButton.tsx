"use client";

import { cva } from "class-variance-authority";
import * as m from "motion/react-m";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const containerVariants = cva(
  "inline-flex items-center justify-center cursor-pointer",
  {
    variants: {
      variant: {
        default: "rounded-full p-2",
        radiusShrink:
          "h-11 px-5 bg-primary text-white rounded-[22px] hover:rounded-[8px] transition-all duration-500 hover:bg-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type TextPushButtonProps = {
  label: ReactNode;
  className?: string;
  duration?: number;
  as?: "button" | "link";
  href?: string;
  variant?: "default" | "radiusShrink" 
};

export function TextPushButton({
  label,
  duration = 0.6,
  as = "button",
  href,
  className,
  variant = "default",
}: TextPushButtonProps) {
  if (as === "link") {
    return (
      <Link href={href as string} className={className}>
        <TextPushButton label={label} duration={duration} variant={variant} />
      </Link>
    );
  }

  return (
    <m.button
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      className={cn(containerVariants({ variant }), className)}
    >
      <span className="relative block overflow-hidden h-[1.2em] leading-[1.2]">
        <m.span
          className="block"
          variants={{
            rest: { y: "0%" },
            hover: { y: "-50%" },
          }}
          transition={{ duration, ease: [0.2, 0.8, 0.2, 1] }}
          style={{ willChange: "transform" }}
        >
          <span className="block">{label}</span>
          <span className="block" aria-hidden>
            {label}
          </span>
        </m.span>
      </span>
    </m.button>
  );
}
