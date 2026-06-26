import WebIlustration from '@/components/elements/WebIlustration';
import MobileIlustration from '@/components/elements/MobileIlustration';

interface ServicesCardProps {
  id: string;
  tag: string;
  title: string;
  description: string;
}

export default function ServicesCard({
  tag,
  title,
  description,
  id,
}: ServicesCardProps) {
  const isWeb = id === 'clw0yxaqk0000ab3s7p118cw7';
  const isMobile = id === 'clw0yyejt0001ab3su66betrb';
  const hoverBorder = isWeb ? 'hover:border-primary/30' : 'hover:border-accent-teal/30';
  const gradientColor = isWeb ? 'from-primary/5' : 'from-accent-teal/5';

  return (
    <div
      className={`glass-card p-6 md:p-8 rounded-2xl flex flex-col gap-4 group ${hoverBorder} transition-all duration-300 relative overflow-hidden`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />
      <div className="relative z-10 flex items-center justify-center px-6 py-4">
        {isWeb ? <WebIlustration /> : null}
        {isMobile ? <MobileIlustration /> : null}
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_20%,#000_80%,transparent_100%)]" />
      <span className="relative z-10 w-max rounded-lg border border-neutral-200 bg-neutral-200 bg-opacity-40 px-2 text-xs text-neutral-500 dark:border-teal-200 dark:bg-teal-900 dark:text-teal-200 font-geist">
        {tag}
      </span>
      <h3 className="relative z-10 font-geist text-headline-lg-mobile text-on-surface">
        {title}
      </h3>
      <p className="relative z-10 font-inter text-body-md text-on-surface-variant">
        {description}
      </p>
    </div>
  );
}
