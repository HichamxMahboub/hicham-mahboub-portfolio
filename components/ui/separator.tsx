import { cn } from "@/lib/utils";

function Separator({
  className,
  ...props
}: React.HTMLAttributes<HTMLHRElement>) {
  return (
    <hr
      className={cn("border-gray-200 dark:border-gray-800", className)}
      {...props}
    />
  );
}

export { Separator };
