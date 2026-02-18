import { PrincipalText } from "@/components/shared/PrincipalText";
import { Separator } from "@/components/ui/separator";

export function HeaderFooter() {
  return (
    <div className="flex flex-col gap-3 md:gap-6">
      <PrincipalText className="text-secondary font-bold tracking-widest">
        Alisson
      </PrincipalText>
      <Separator className="bg-[#262626] h-px rounded-full" />
    </div>
  );
}
