import { cn } from "@/lib/utils";
import { FooterIntro } from "./FooterIntro";
import { FooterLinksGrid } from "./FooterLinksGrid";

interface MainFooterProps {
  className?: string;
}

export function MainFooter({ className }: MainFooterProps) {
  return (
    <section
      className={cn(
        "flex flex-col md:flex-row items-start justify-between md:mt-30",
        className,
      )}
    >
      <FooterIntro />
      <FooterLinksGrid />
    </section>
  );
}
