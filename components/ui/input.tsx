"use client";

import { cn } from "@/lib/utils";

function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "flex h-11 w-full rounded-2xl border border-gray-200 bg-white px-4 py-2 text-sm text-gray-950 shadow-sm transition-colors placeholder:text-gray-400 focus:border-gray-950 focus:outline-none focus:ring-2 focus:ring-gray-950/10 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:text-white dark:focus:border-white dark:focus:ring-white/10",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
