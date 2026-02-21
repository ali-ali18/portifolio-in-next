import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  id?: string;
}
export function Container({
  children,
  className,
  as: Component = "section",
  id,
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={cn("w-full max-w-7xl mx-auto p-3 md:p-4.5 my-8 md:my-20", className)}
    >
      {children}
    </Component>
  );
}
