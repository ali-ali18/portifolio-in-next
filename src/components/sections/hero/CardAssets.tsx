import { cva, type VariantProps } from "class-variance-authority";
import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

const variants = cva(
  "h-[380px] w-[200px] md:h-[500px] md:w-[220px] overflow-hidden rounded-none select-none",
  {
    variants: {
      variant: {
        oval: "odd:rounded-none odd:rounded-br-full odd:rounded-tl-full even:rounded-none even:rounded-bl-full even:rounded-tr-full",
        bow: "odd:rounded-none odd:rounded-br-[100px] odd:rounded-tl-[100px] even:rounded-none even:rounded-bl-[100px] even:rounded-tr-[100px]",
      },
      defaultVariants: {
        variant: "oval",
      },
    },
  },
);

export interface CardAssetsProps extends VariantProps<typeof variants> {
  className?: string;
  id: string;
  url: string | StaticImageData;
  alt: string;
  variant?: "oval" | "bow";
  priority?: boolean;
}

export function CardAssets({
  id,
  url,
  alt,
  className,
  variant,
  priority = false,
  ...props
}: CardAssetsProps) {
  return (
    <div key={id} className={cn(variants({ variant }), className)} {...props}>
      <Image
        src={url}
        alt={alt}
        width={320}
        height={320}
        sizes="(max-width: 768px) 200px, 320px"
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        quality={65}
        className="h-full w-full border object-cover"
      />
    </div>
  );
}
