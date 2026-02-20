import Image from "next/image";
import Link from "next/link";
import agroervas from "@/assets/Image.webp";
import { Container } from "./Container";
import { ContainerProjects } from "./ContainerProjects";
export interface HeroProjectsProps {
  title: string;
  description: string;
  infosProject: InfoProjectProps;
  children: React.ReactNode;
}

interface InfoProjectProps {
  date: string;
  technologies: string[];
  linkProject: string;
}

export function HeroProjects({ title, description, infosProject, children }: HeroProjectsProps) {
    return (
      <Container as="section" className="py-0">
        <ContainerProjects className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
          <aside className="md:sticky md:top-10 space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl tracking-wider">{title}</h1>
              <p className="text-lg">{description}</p>
            </div>
  
            <dl className="divide-y divide-zinc-200 border-y border-zinc-200 text-sm">
              <div className="grid grid-cols-2 py-4">
                <dt className="text-muted-foreground">Year</dt>
                <dd className="text-right text-muted-foreground">{infosProject.date}</dd>
              </div>
              <div className="grid grid-cols-2 py-4">
                <dt className="text-muted-foreground">Tech</dt>
                <dd className="text-right text-muted-foreground">{infosProject.technologies.join(", ")}</dd>
              </div>
              <div className="grid grid-cols-2 py-4">
                <dt className="text-muted-foreground">Live project</dt>
                <dd className="text-right text-muted-foreground">
                  <Link href={infosProject.linkProject} target="_blank" className="hover:underline">
                    Preview +
                  </Link>
                </dd>
              </div>
            </dl>
          </aside>
  
          <section className="space-y-6 min-h-screen">
            <Image
              className="w-full rounded-3xl object-cover"
              src={agroervas}
              alt="Agroervas"
              priority
            />
  
            <article className="prose prose-zinc max-w-none">
              {children}
            </article>
          </section>
        </ContainerProjects>
      </Container>
    );
  }
  