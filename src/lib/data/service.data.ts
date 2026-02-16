import {
  BashIcon,
  GlobalSearchIcon,
  ReactIcon,
  WebDesign01FreeIcons,
} from "@hugeicons/core-free-icons";
import type { CardServiceProps } from "@/components/sections/services/CardServices";

interface ServiceData extends CardServiceProps {
  id: number;
}

const serviceData: ServiceData[] = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    icon: ReactIcon,
    color: "#DDF0FF ",
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    icon: BashIcon,
    color: "#cfffb2",
  },
  {
    id: 3,
    title: "SEO Optimization",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    icon: GlobalSearchIcon,
    color: "#e5daf6",
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    icon: WebDesign01FreeIcons,
    color: "#fedca6",
  },
];

export { serviceData };
