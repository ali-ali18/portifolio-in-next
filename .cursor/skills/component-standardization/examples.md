# Exemplos de padronização

## Button (CVA + variant + size)

Componente com variantes e tamanhos; usa CVA e exporta `buttonVariants`.

```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "rounded-md border ... inline-flex items-center justify-center ...",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline: "border-border bg-background ...",
        // ...
      },
      size: {
        default: "h-9 gap-1.5 px-2.5 ...",
        xs: "h-6 gap-1 ... px-2 text-xs ...",
        sm: "h-8 gap-1 ...",
        lg: "h-10 gap-1.5 ...",
        // padronizar para xs | sm | md | lg | xl
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
```

## Header (CVA + VariantProps nas props)

Componente com variante única; tipos compartilhados em `src/types/`.

```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/types/NavLinkstypes";

const headerVariants = cva("w-full p-4.5", {
  variants: {
    variant: {
      default: "bg-background",
      rounded: "rounded-full border p-2.5 ... bg-white/10 backdrop-blur-md",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface HeaderProps {
  navLinks: NavLink[];
}

export function Header({
  navLinks,
  variant,
}: HeaderProps & VariantProps<typeof headerVariants>) {
  return (
    <m.header className={cn(headerVariants({ variant }))}>
      ...
    </m.header>
  );
}
```

## SubTitle (sem CVA, só cn + ComponentPropsWithRef)

Componente sem variantes; estende props do elemento e usa `cn` para base + override.

```tsx
import type { ComponentPropsWithRef } from "react";
import { cn } from "@/lib/utils";

interface SubTitleProps extends ComponentPropsWithRef<typeof m.p> {
  className?: string;
}

export function SubTitle({ children, className, ...props }: SubTitleProps) {
  return (
    <m.p {...props} className={cn("text-2xl font-medium", className)}>
      {children}
    </m.p>
  );
}
```
