import type { TimelineItemType } from "@/types";
import { GlassCard } from "@/components/PageSection";

interface TimelineProps {
  items: TimelineItemType[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <GlassCard key={item.id} className="p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-200" />
                <p className="text-xs font-medium text-slate-500">{item.date}</p>
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm font-medium text-cyan-100">{item.subtitle}</p>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-300">
              {item.description}
            </p>
          </div>
        </GlassCard>
      ))}
    </div>
  );
}
