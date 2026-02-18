import * as m from "motion/react-m";
import Image, { type StaticImageData } from "next/image";

interface CardAboutProps {
  src: StaticImageData;
  alt: string;
}

export function CardAbout({ src, alt }: CardAboutProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className="border w-full h-full rounded-3xl overflow-hidden flex flex-col md:flex-row"
    >
      <div className="relative w-full md:w-[650px] aspect-360/450 md:aspect-auto md:h-[750px] rounded-3xl overflow-hidden">
        <Image
          fill
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-3xl"
          priority={false}
          loading="lazy"
          quality={75}
          sizes="(max-width: 768px) 300px, 650px"
        />
      </div>

      <div className="flex flex-col items-start justify-center md:gap-8.5 gap-6 py-6 px-4.5 md:py-10 md:px-14">
        <span className="text-sm uppercase text-muted-foreground font-medium">
          Desenvolvedor full stack <br /> & UI/UX Designer
        </span>

        <p className="max-w-xl text-xl md:text-2xl leading-tight font-medium">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, ut
          provident? Et ratione sunt quae, non quos distinctio, quisquam tenetur
          accusamus modi commodi corporis id iste molestiae harum rem nostrum?
        </p>

        <span className="text-base uppercase tracking-widest text-muted-foreground font-medium">
          Alisson Camargo Santos
        </span>
      </div>
    </m.div>
  );
}
