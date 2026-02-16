import { FramerIcon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon, type IconProps } from "./Icon";

export interface LogoProps extends Omit<IconProps, "icon"> {
  isLink?: boolean;
  href?: string;
  className?: string;
}

export function Logo({
  isLink = false,
  href = "/",
  className,
  ...props
}: LogoProps) {
  if (isLink) {
    return (
      <Link
        href={href}
        className={cn(
          className,
          "hover:bg-secondary rounded-full p-1 transition-all duration-300 group",
        )}
      >
        <Icon icon={FramerIcon} {...props} />
      </Link>
    );
  }

  return <Icon icon={FramerIcon} className={className} {...props} />;
}
