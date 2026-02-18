import lazyLoad from "next/dynamic";
import { Suspense } from "react";
import { Header } from "@/components/sections/header/Header";
import { Hero } from "@/components/sections/hero/Hero";
import { MotionContext } from "@/components/shared/MotionContext";
import { Skeleton } from "@/components/ui/skeleton";
import { navLinks } from "@/lib/data/links.data";

const Services = lazyLoad(() =>
  import("@/components/sections/services/Services").then((mod) => mod.Services),
);
const Projects = lazyLoad(() =>
  import("@/components/sections/projects/Projects").then((mod) => mod.Projects),
);

const Footer = lazyLoad(() =>
  import("@/components/sections/footer/Footer").then((mod) => mod.Footer),
);

const About = lazyLoad(() =>
  import("@/components/sections/about/About").then((mod) => mod.About),
);

const Faq = lazyLoad(() =>
  import("@/components/sections/faq/Faq").then((mod) => mod.Faq),
);

export default function Page() {
  const loading = (
    <Skeleton className="w-full h-[300px] rounded-xl max-w-7xl mx-auto" />
  );

  return (
    <MotionContext>
      <Header navLinks={navLinks} variant={"default"} />
      <Hero />

      <Suspense fallback={loading}>
        <Services />
      </Suspense>

      <Suspense fallback={loading}>
        <Projects />
      </Suspense>

      <Suspense fallback={loading}>
        <About />
      </Suspense>

      <Suspense fallback={loading}>
        <Faq />
      </Suspense>

      <Suspense fallback={loading}>
        <Footer />
      </Suspense>
    </MotionContext>
  );
}
