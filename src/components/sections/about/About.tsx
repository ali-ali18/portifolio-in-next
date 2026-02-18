import AboutImage from "@/assets/about/about-me.webp";
import { Container } from "@/components/shared/Container";
import { AboutSectionHeader } from "./AboutSectionHeader";
import { CardAbout } from "./CardAbout";

export function About() {
  return (
    <Container className="flex flex-col gap-12 items-center w-full h-full">
      <AboutSectionHeader />
      <CardAbout src={AboutImage} alt="About" />
    </Container>
  );
}
