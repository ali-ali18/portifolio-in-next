import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
  as?: "span" | "h2" | "h3" | "h4";
}

export function SectionTitle({
  children,
  className,
  as: Component = "h2",
}: SectionTitleProps) {
  return (
    <Component className={cn("text-3xl md:text-5xl font-semibold", className)}>
      {children}
    </Component>
  );
}
