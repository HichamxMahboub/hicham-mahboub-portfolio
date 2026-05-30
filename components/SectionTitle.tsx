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
    <div className="space-y-4">
      {subtitle && (
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-600">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}
