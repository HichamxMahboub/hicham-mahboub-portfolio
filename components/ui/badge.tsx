import { cn } from "@/lib/utils";

function Badge({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "outline";
}) {
  const variants = {
    default: "border border-white bg-white text-slate-950",
    secondary: "border border-white/10 bg-white/10 text-white",
    outline: "border border-white/10 bg-transparent text-slate-300",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-3 py-1 text-xs font-medium",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
