import AnimateCounter from '@/components/elements/AnimateCounter';

interface OverviewItemProps {
  label: string;
  value: number;
  unit?: string;
}

export default function OverviewItem({
  label,
  value,
  unit = '',
}: OverviewItemProps) {
  return (
    <div className="glass-card rounded-xl border border-glass-border p-4 flex flex-col">
      <span className="font-geist text-label-caps text-on-surface-variant">{label}</span>
      <div>
        <AnimateCounter
          className="text-xl font-medium text-green-500 lg:text-2xl"
          total={value}
        />
        {unit && <span className="font-inter text-body-sm text-on-surface-variant"> {unit}</span>}
      </div>
    </div>
  );
}
