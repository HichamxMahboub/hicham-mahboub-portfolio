import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("mx-auto max-w-7xl", className)}>{children}</div>;
}

export function SectionBand({
  children,
  className,
  withBorder = true,
}: {
  children: ReactNode;
  className?: string;
  withBorder?: boolean;
}) {
  return (
    <section
      className={cn(
        "px-4 py-16 sm:px-6 sm:py-20 lg:px-8",
        withBorder && "border-t border-white/10",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#080a0f] to-transparent" aria-hidden="true" />
      <Container className="relative">
        <div className="max-w-4xl space-y-5">
          <p className="inline-flex rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-cyan-100">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-semibold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            {description}
          </p>
        </div>
        {children && <div className="mt-10">{children}</div>}
      </Container>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl space-y-4", className)}>
      <p className="text-sm font-medium text-cyan-100">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {description && <p className="text-base leading-7 text-slate-400">{description}</p>}
    </div>
  );
}

export function GlassCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-lg border border-white/10 bg-white/[0.04] text-white shadow-[0_18px_60px_rgba(0,0,0,0.16)]", className)}>
      {children}
    </div>
  );
}

export function Chip({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex rounded-md border border-white/10 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-slate-300", className)}>
      {children}
    </span>
  );
}
