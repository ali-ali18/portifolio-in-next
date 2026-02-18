import { GithubIcon, LinkedinIcon } from "@hugeicons/core-free-icons";
import { Icon } from "@/components/shared/Icon";
import { cn } from "@/lib/utils";

interface FooterBottomBarProps {
  className?: string;
}

export function FooterBottomBar({ className }: FooterBottomBarProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-4 text-sm text-secondary/80",
        className,
      )}
    >
      <div className="flex flex-col md:flex-row gap-2.5 md:gap-5">
        <span className="hidden md:block">Copyright © {currentYear}</span>
        <p className="text-secondary/50">
          Desenvolvido por{" "}
          <span className="text-secondary font-semibold">Alisson</span>
        </p>
        <p className="text-secondary/50 hidden md:block">
          Powered by{" "}
          <span className="text-secondary font-semibold">Next.js</span>
        </p>
      </div>
      <div className="flex items-center gap-4">
        {/* Ícones/botões à direita: adicione links ou botões conforme necessário */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-secondary transition-colors"
          aria-label="GitHub"
        >
          <Icon
            icon={GithubIcon}
            className="text-secondary/60 hover:text-secondary transition-colors"
          />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-secondary transition-colors"
          aria-label="LinkedIn"
        >
          <Icon
            icon={LinkedinIcon}
            className="text-secondary/60 hover:text-secondary transition-colors"
          />
        </a>
      </div>
    </div>
  );
}
