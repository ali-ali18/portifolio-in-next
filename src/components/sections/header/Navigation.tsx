import { MenuIcon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { TextPushButton } from "@/components/bases/TextPushButton";
import { DrawerApp } from "@/components/shared/DrawerApp";
import { Icon } from "@/components/shared/Icon";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import type { NavLink } from "@/types/NavLinkstypes";

interface NavigationProps {
  navLinks: NavLink[];
}

export function Navigation({ navLinks }: NavigationProps) {
  return (
    <nav className="items-center justify-between flex">
      <div className="flex items-center gap-5">
        <Logo isLink href="/" size={30} />

        <div className="items-center gap-5 hidden md:flex">
          {navLinks.map((link) => (
            <TextPushButton
              key={link.href}
              label={link.label}
              duration={0.8}
              as="link"
              href={link.href}
            />
          ))}
        </div>
      </div>

      <div className="items-center gap-5 hidden md:flex">
        <TextPushButton label="FAQ" as="link" href="#faq"  />
        <TextPushButton
          variant="radiusShrink"
          label="Contact"
          as="link"
          href="#contact"
        />
      </div>

      <DrawerApp
        classNameTrigger="md:hidden"
        trigger={<Icon icon={MenuIcon} size={22} />}
        headerTitle="Menu de navegação"
        headerDescription="Para onde vamos?"
        footer={
          <Button
            variant={"outline"}
            className={"rounded-lg"}
            render={<Link href="#contact">Contato</Link>}
            nativeButton={false}
          />
        }
        items={navLinks}
      />
    </nav>
  );
}
