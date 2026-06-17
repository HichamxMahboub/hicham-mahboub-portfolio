"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type ButtonVariant = "default" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "default" | "lg";

export interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  download?: boolean | string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

const baseStyles =
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-offset-slate-950";

const variantStyles: Record<ButtonVariant, string> = {
  default:
    "bg-slate-950 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-100",
  secondary:
    "bg-slate-100 text-slate-950 hover:bg-slate-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/15",
  outline:
    "border border-slate-300 bg-transparent text-slate-950 hover:bg-slate-50 dark:border-white/15 dark:text-white dark:hover:bg-white/10",
  ghost:
    "bg-transparent text-slate-950 hover:bg-slate-100 dark:text-white dark:hover:bg-white/10",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4",
  default: "h-10 px-5",
  lg: "h-12 px-6 text-base",
};

export function Button({
  children,
  href,
  variant = "default",
  size = "default",
  className,
  type = "button",
  disabled,
  download,
  target,
  rel,
  onClick,
}: ButtonProps) {
  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (href) {
    const isExternal = href.startsWith("http");
    const linkRel = rel ?? (target === "_blank" || isExternal ? "noopener noreferrer" : undefined);

    if (download || isExternal) {
      return (
        <a href={href} className={classes} download={download} target={target} rel={linkRel}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} target={target} rel={linkRel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
