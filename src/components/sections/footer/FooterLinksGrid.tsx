import Link from "next/link";
import { TextPushButton } from "@/components/bases/TextPushButton";
import { type FooterLinkGroup, links } from "@/lib/data/footer.data";
import { cn } from "@/lib/utils";

interface FooterLinksGridProps {
  className?: string;
}

interface FooterLinkColumnProps {
  group: FooterLinkGroup;
}

function FooterLinkColumn({ group }: FooterLinkColumnProps) {
  return (
    <div>
      <h3 className="text-secondary/80 uppercase tracking-widest text-sm font-semibold">
        {group.title}
      </h3>
      <ul className="flex flex-col gap-4.5 mt-4.5 md:gap-8.5 md:mt-8.5">
        {group.links.map((link) => (
          <li
            key={link.label}
            className="text-secondary/80 text-sm hover:text-secondary transition-colors"
          >
            {group.title === "Sitemap" ? (
              <TextPushButton
                as="link"
                href={link.href}
                label={link.label}
                className="p-0"
              />
            ) : (
              <Link href={link.href}>
                <TextPushButton label={link.label} className="p-0"/>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FooterLinksGrid({ className }: FooterLinksGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-3 gap-10 md:gap-30 mt-16 md:mt-0",
        className,
      )}
    >
      {links.map((group) => (
        <FooterLinkColumn key={group.title} group={group} />
      ))}
    </div>
  );
}
