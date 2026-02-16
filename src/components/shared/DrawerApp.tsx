import type { ReactNode } from "react";
import type { NavLink } from "@/types/NavLinkstypes";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Icon } from "./Icon";

interface DrawerAppProps {
  trigger: ReactNode;
  headerTitle: string;
  headerDescription: string;
  footer: ReactNode;
  items: NavLink[];
  classNameTrigger?: string;
}

export function DrawerApp({
  trigger,
  headerTitle,
  headerDescription,
  footer,
  items,
  classNameTrigger,
}: DrawerAppProps) {
  return (
    <Drawer>
      <DrawerTrigger className={classNameTrigger}>{trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="font-semibold text-lg">{headerTitle}</DrawerTitle>
          <DrawerDescription>{headerDescription}</DrawerDescription>
        </DrawerHeader>
        <section className="flex flex-col gap-2 p-2.5">
          {items.map((item) => (
            <Button variant={"ghost"} key={item.href}>
              {item.icon && <Icon icon={item.icon} size={22} />}
              {item.label}
            </Button>
          ))}
        </section>
        <DrawerFooter>{footer}</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
