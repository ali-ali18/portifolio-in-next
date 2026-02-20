import { Nunito } from "next/font/google";
import { Footer } from "@/components/sections/footer/Footer";
import { Header } from "@/components/sections/header/Header";
import { Container } from "@/components/shared/Container";
import { MotionContext } from "@/components/shared/MotionContext";
import { navLinks } from "@/lib/data/links.data";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MotionContext>
      <Header navLinks={navLinks} variant="default" />
      <Container className={`my-0 md:my-0 ${nunito.className}`} as="section">
        <main>{children}</main>
      </Container>
      <Footer />
    </MotionContext>
  );
}
