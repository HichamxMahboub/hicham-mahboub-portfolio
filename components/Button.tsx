import type { ReactNode } from "react";
import { Button as UiButton } from "@/components/ui/button";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantMap = {
  primary: "default",
  secondary: "secondary",
  outline: "outline",
} as const;

const sizeMap = {
  sm: "sm",
  md: "default",
  lg: "lg",
} as const;

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  return (
    <UiButton
      href={href}
      variant={variantMap[variant]}
      size={sizeMap[size]}
      onClick={onClick}
      className={className}
      type={type}
      disabled={disabled}
    >
      {children}
    </UiButton>
  );
}
