"use client";

import { ChatGptFreeIcons } from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LogoProjectCard } from "./LogoProjectCard";

export interface CardProjectsProps {
  title: string;
  date: string;
  src: string | StaticImageData;
  logo: IconSvgElement;
  className?: string;
  index: number;
  href?: string;
}

export function CardProjects({
  title = "Project Title",
  date = "Project Date",
  src,
  logo = ChatGptFreeIcons,
  className,
  index,
  href,
}: CardProjectsProps) {
    
  const CardContent = (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut", delay: index * 0.3 }}
      viewport={{ once: true, amount: 0.2 }}
      className={cn(
        "w-full h-full rounded-3xl overflow-hidden select-none flex flex-col py-2 group",
        className,
      )}
    >
      <div className="w-full h-[550px] relative rounded-3xl overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-3xl scale-110 group-hover:scale-100 transition-all duration-700"
          priority={false}
          loading="lazy"
          quality={95}
          sizes="(max-width: 768px) 250px, 500px"
        />

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 backdrop-blur-md group-hover:bg-black/20  rounded-3xl transition-all duration-700 z-10" />
        <AnimatePresence>
          <LogoProjectCard logo={logo} title={title} />
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between px-1 pt-1.5">
        <span className="text-sm uppercase ">{title}</span>
        <span className="text-sm uppercase">_{date}</span>
      </div>
    </m.div>
  );

  if (href) {
    return <Link href={href}>{CardContent}</Link>;
  }

  return CardContent;
}
