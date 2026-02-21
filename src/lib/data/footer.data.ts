export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLinkItem[];
}

const footerIntro = {
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  ctaLabel: "Conectar-se",
  ctaHref: "#",
};

const links: FooterLinkGroup[] = [
  {
    title: "Sitemap",
    links: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Projects",
        href: "projects",
      },
      {
        label: "About",
        href: "about",
      },
      {
        label: "FAQ",
        href: "faq",
      },
    ],
  },
  {
    title: "Social",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/alisson",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/alisson",
      },
    ],
  },
  {
    title: "Projetos",
    links: [
      {
        label: "Project 1",
        href: "/project-1",
      },
      {
        label: "Project 2",
        href: "/project-2",
      },
    ],
  },
];

export { links, footerIntro };
