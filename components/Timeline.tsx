import type { TimelineItemType } from "@/types";
import { Card } from "@/components/ui/card";

interface TimelineProps {
  items: TimelineItemType[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <Card key={item.id} className="rounded-[1.5rem] p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-gray-950 dark:bg-white" />
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500 dark:text-gray-400">
                  {item.date}
                </p>
              </div>
              <h3 className="text-xl font-semibold text-gray-950 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {item.subtitle}
              </p>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-300">
              {item.description}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}
