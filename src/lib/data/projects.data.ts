import { ChatGptFreeIcons } from "@hugeicons/core-free-icons";
import project1 from "@/assets/projects/image-2.webp";
import type { CardProjectsProps } from "@/components/sections/projects/CardProjects";

interface ProjectsData extends Omit<CardProjectsProps, "index"> {}

const projects: ProjectsData[] = [
  {
    href: "/projects/agroervas",
    title: "Agroervas",
    date: "09.25",
    src: project1,
    logo: ChatGptFreeIcons,
  },
  {
    href: "/",
    title: "Project 2",
    date: "09.25",
    src: "https://framerusercontent.com/images/mBH6kth6L7OWKHbrGNTsxRpqEg0.jpg",
    logo: ChatGptFreeIcons,
  },
  {
    href: "/",
    title: "Project 3",
    date: "09.25",
    src: "https://framerusercontent.com/images/mBH6kth6L7OWKHbrGNTsxRpqEg0.jpg",
    logo: ChatGptFreeIcons,
  },
  {
    href: "/",
    title: "Project 4",
    date: "09.25",
    src: "https://framerusercontent.com/images/mBH6kth6L7OWKHbrGNTsxRpqEg0.jpg",
    logo: ChatGptFreeIcons,
  },
];

export { projects };
