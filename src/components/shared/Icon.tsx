import { HugeiconsIcon, type HugeiconsIconProps } from "@hugeicons/react";
import { cn } from "@/lib/utils";

export interface IconProps extends HugeiconsIconProps {}

export function Icon({ size = 20, className, ...props }: IconProps) {
  return (
    <HugeiconsIcon
      {...props}
      size={size}
      className={cn("text-foreground", className)}
    />
  );
}
