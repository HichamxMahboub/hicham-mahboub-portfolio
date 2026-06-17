"use client";

import { cn } from "@/lib/utils";

function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "flex h-11 w-full rounded-lg border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-white shadow-none transition-colors placeholder:text-slate-500 focus:border-cyan-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-200/10 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
