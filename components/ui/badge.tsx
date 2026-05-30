import { cn } from "@/lib/utils";

function Badge({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "outline";
}) {
  const variants = {
    default: "bg-gray-950 text-white dark:bg-white dark:text-gray-950",
    secondary: "bg-gray-100 text-gray-950 dark:bg-gray-800 dark:text-white",
    outline:
      "border border-gray-300 text-gray-700 dark:border-gray-700 dark:text-gray-300",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
