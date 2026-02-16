import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProjectsProps {
  children: ReactNode;
  className?: string;
}

export function ContainerProjects({
  children,
  className,
}: ContainerProjectsProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-3", className)}>
      {children}
    </div>
  );
}
