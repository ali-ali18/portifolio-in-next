import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { TextPushButton } from "@/components/bases/TextPushButton";
import { Icon } from "@/components/shared/Icon";
import { footerIntro } from "@/lib/data/footer.data";
import { cn } from "@/lib/utils";

interface FooterIntroProps {
  className?: string;
}

export function FooterIntro({ className }: FooterIntroProps) {
  return (
    <div className={cn("flex flex-col gap-2.5 md:gap-5", className)}>
      <p className="text-secondary/80 text-lg max-w-sm">
        {footerIntro.description}
      </p>
      <Link href={footerIntro.ctaHref}>
        <TextPushButton
          label={
            <span className="text-primary flex items-center gap-2.5">
              {footerIntro.ctaLabel}
              <Icon
                icon={ArrowRight02Icon}
                className="group-hover:translate-x-1 group-hover:-rotate-45 transition-transform duration-300"
              />
            </span>
          }
          variant="radiusShrink"
          className="bg-secondary text-primary hover:bg-secondary hover:text-primary w-fit group"
        />
      </Link>
    </div>
  );
}
