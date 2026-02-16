import { PrincipalText } from "./PrincipalText";
import { SubTitle } from "./SubTitle";

export function LeadingSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <PrincipalText>Alisson</PrincipalText>
      <SubTitle>Fullstack Developer & UI/UX Designer</SubTitle>
    </div>
  );
}
