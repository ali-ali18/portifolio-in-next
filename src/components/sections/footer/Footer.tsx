import { ContainerFooter } from "./ContainerFooter";
import { FooterBottomBar } from "./FooterBottomBar";
import { HeaderFooter } from "./HeaderFooter";
import { MainFooter } from "./MainFooter";

export function Footer() {
  return (
    <footer className="w-full h-full flex flex-col">
      <ContainerFooter>
        <div className="flex min-h-full flex-col justify-between">
          <div className="flex flex-col gap-10 md:gap-14">
            <HeaderFooter />
            <MainFooter />
          </div>
          <FooterBottomBar />
        </div>
      </ContainerFooter>
    </footer>
  );
}
