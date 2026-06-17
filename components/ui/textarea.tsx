"use client";

import { cn } from "@/lib/utils";

function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "flex min-h-32 w-full rounded-lg border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white shadow-none transition-colors placeholder:text-slate-500 focus:border-cyan-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-200/10 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
