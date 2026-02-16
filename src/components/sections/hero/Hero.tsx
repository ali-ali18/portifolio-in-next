import { heroData } from "@/lib/data/hero.data";
import { ContainerCard } from "./ContainerCard";
import { LeadingSection } from "./LeadingSection";

export function Hero() {
  return (
    <section className="w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-10 md:gap-35 overflow-hidden">
      <LeadingSection />
      <ContainerCard items={heroData} />
    </section>
  );
}
