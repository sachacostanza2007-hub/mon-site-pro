import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "./magnetic-button";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  magnetic?: boolean;
};

const variants = {
  primary:
    "text-white bg-gradient-to-r from-mauve-500 to-trust-500 shadow-[0_10px_24px_-8px_rgba(139,95,166,0.45)] hover:shadow-[0_14px_30px_-8px_rgba(139,95,166,0.55)]",
  secondary:
    "text-ink bg-transparent border border-border-strong hover:border-mauve-500 hover:text-mauve-700",
  ghost: "text-ink bg-transparent hover:text-mauve-700",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  magnetic = true,
}: ButtonProps) {
  const link = (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.9375rem] font-semibold transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );

  if (!magnetic) return link;

  return <MagneticButton className="inline-block">{link}</MagneticButton>;
}
