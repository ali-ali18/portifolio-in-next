import { Container } from "@/components/shared/Container";
import { ItemSection } from "@/components/shared/ItemSection";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { projects } from "@/lib/data/projects.data";
import { CardProjects } from "./CardProjects";
import { ContainerProjects } from "./ContainerProjects";

export function Projects() {
  return (
    <Container id="projects">
      <ItemSection
        animateContent={false}
        titleSection={<SectionTitle as="h2">Últimos Projetos.</SectionTitle>}
      >
        <ContainerProjects>
          {projects.map((project, index) => (
            <CardProjects key={project.title} {...project} index={index} />
          ))}
        </ContainerProjects>
      </ItemSection>
    </Container>
  );
}
