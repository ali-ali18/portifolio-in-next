import type { MDXComponents } from "mdx/types";
import { cn } from "@/lib/utils";

const baseHeading = "font-medium text-foreground";

const components = {
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className={cn("text-muted-foreground text-base leading-relaxed", props.className)} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} className={cn(baseHeading, "text-2xl mt-6 mb-4 first:mt-0", props.className)} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 {...props} className={cn(baseHeading, "text-xl mt-6 mb-3", props.className)} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 {...props} className={cn(baseHeading, "text-lg mt-4 mb-2", props.className)} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul {...props} className={cn("list-disc pl-6 space-y-1.5 text-muted-foreground my-4", props.className)} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol {...props} className={cn("list-decimal pl-6 space-y-1.5 text-muted-foreground my-4", props.className)} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li {...props} className={cn("leading-relaxed", props.className)} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...props} className={cn("text-foreground hover:underline underline-offset-4", props.className)} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong {...props} className={cn("font-semibold text-foreground", props.className)} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      {...props}
      className={cn(
        "bg-muted text-foreground px-1.5 py-0.5 rounded-md text-sm font-mono",
        props.className
      )}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      {...props}
      className={cn(
        "bg-muted text-foreground p-4 rounded-lg overflow-x-auto text-sm my-4 border border-border [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-inherit",
        props.className
      )}
    />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      {...props}
      className={cn(
        "border-l-4 border-border pl-4 italic text-muted-foreground my-4",
        props.className
      )}
    />
  ),
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr {...props} className={cn("border-border my-8", props.className)} />
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
