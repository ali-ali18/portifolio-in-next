import {
  FolderLibraryIcon,
  HomeIcon,
  UserIcon,
} from "@hugeicons/core-free-icons";
import type { NavLink } from "@/types/NavLinkstypes";

const navLinks: NavLink[] = [
  {
    icon: HomeIcon,
    label: "Home",
    href: "/",
  },
  {
    icon: FolderLibraryIcon,
    label: "Projects",
    href: "projects",
  },
  {
    icon: UserIcon,
    label: "About",
    href: "about",
  },
];

export { navLinks };
