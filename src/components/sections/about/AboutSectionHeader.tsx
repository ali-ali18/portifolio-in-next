import { cn } from "@/lib/utils";

export function AboutSectionHeader({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 items-center justify-center",
        className,
      )}
    >
      <span className="text-accent-foreground text-base">( SOBRE_MIM )</span>
      <h2 className="text-4xl max-w-xl text-center font-semibold mt-1.5">
        <q>Soluções reais nascem de problemas bem compreendidos.</q>
      </h2>
    </div>
  );
}
