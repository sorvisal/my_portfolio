import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

type ButtonProps = BaseProps &
  (
    | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
    | ({ href: string; download?: boolean | string } & Omit<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        "href"
      >)
  );

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-card hover:bg-accent-hover hover:shadow-card-hover active:bg-accent-hover",
  secondary:
    "border border-border bg-surface text-foreground shadow-card hover:border-border-hover hover:bg-surface-secondary active:bg-surface-secondary",
  ghost:
    "text-muted hover:bg-surface-secondary hover:text-foreground active:bg-surface-secondary active:text-foreground",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({ variant = "primary", size = "md", className, children, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-control font-medium transition-[color,background-color,border-color,box-shadow]",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  if ("href" in props && props.href) {
    const { href, download, target, rel, ...rest } = props;
    const isExternal = /^https?:\/\//.test(href);

    if (isExternal || download) {
      return (
        <a
          href={href}
          download={download}
          target={isExternal ? "_blank" : target}
          rel={isExternal ? "noopener noreferrer" : rel}
          className={classes}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

 const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
   <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}