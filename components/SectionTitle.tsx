interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  description,
}: SectionTitleProps) {
  return (
    <div className="max-w-3xl space-y-4">
      {subtitle && <p className="text-sm font-medium text-cyan-100">{subtitle}</p>}
      <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
