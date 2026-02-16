"use client";

import type { IconSvgElement } from "@hugeicons/react";
import * as m from "motion/react-m";
import type { ComponentPropsWithRef } from "react";
import { Icon } from "@/components/shared/Icon";
import { cn } from "@/lib/utils";

interface LogoProjectCardProps extends ComponentPropsWithRef<typeof m.div> {
  logo: IconSvgElement;
  title: string;
  className?: string;
}

export function LogoProjectCard({
  logo,
  title,
  className,
  ...props
}: LogoProjectCardProps) {
  return (
    <m.div
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      {...props}
      className={cn(
        "flex items-center justify-center absolute inset-0 z-20 gap-2",
        className,
      )}
    >
      <Icon icon={logo} size={40} className="text-white" />
      <span className="text-2xl font-bold uppercase text-white tracking-widest">{title}</span>
    </m.div>
  );
}
