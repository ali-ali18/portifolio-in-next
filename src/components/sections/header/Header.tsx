"use client";

import { cva, type VariantProps } from "class-variance-authority";
import * as m from "motion/react-m";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/types/NavLinkstypes";
import { Navigation } from "./Navigation";

const headerVariants = cva("w-full p-3 md:p-4.5", {
  variants: {
    variant: {
      default: "bg-background",
      rounded:
        "rounded-full border p-2.5 my-3.5 w-full sm:w-1/2 mx-auto bg-white/10 backdrop-blur-md",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface HeaderProps {
  navLinks: NavLink[];
}

export function Header({
  navLinks,
  variant,
}: HeaderProps & VariantProps<typeof headerVariants>) {
  return (
    <m.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={cn(headerVariants({ variant }))}
    >
      <Navigation navLinks={navLinks} />
    </m.header>
  );
}
