import { ChatGptFreeIcons } from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";
import { Icon } from "@/components/shared/Icon";
import { cn } from "@/lib/utils";

export interface CardServiceProps {
  title: string;
  description: string;
  icon: IconSvgElement;
  index?: number;
  color: string;
  className?: string;
}

export function CardServices({
  title = "DEVELOPMENT",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  icon = ChatGptFreeIcons,
  index = 0,
  color = "#ffff",
  className,
}: CardServiceProps) {
  const indexNumber = index + 1;
  return (
    <div
      className={cn(
        "w-[285px] h-[312px] md:w-[340px] md:h-[378px] lg:w-[380px] lg:h-[422px] rounded-[40px] px-7 py-4.5 border flex flex-col select-none",
        className,
      )}
      style={{ backgroundColor: color }}
    >
      <div>
        <span className="text-lg">
          ( {indexNumber.toString().padStart(2, "0")} )
        </span>
      </div>

      <div className="flex items-center justify-center w-full h-full">
        <Icon icon={icon} size={65} />
      </div>

      <div className="flex flex-col gap-1 mt-3.5">
        <h3 className="uppercase text-base tracking-wider font-semibold">
          {title}
        </h3>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
}
