import MarqueeElement from '@/components/elements/MarqueeElement';
import SkillCard from './SkillCard';
import { STACKS } from '@/constants/stacks';

export default function SkillList() {
  const stacksInArray: Array<[string, JSX.Element]> = Object.entries(
    STACKS,
  ).sort(() => Math.random() - 0.5);

  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className="font-geist text-headline-lg text-on-surface">
          Skills
        </h2>
        <p className="font-inter text-body-sm text-on-surface-variant mt-1">
          My coding skills
        </p>
      </div>

      <div className="flex flex-col gap-2 overflow-hidden">
        {Array.from({ length: 2 }, (_, index) => {
          const slider = [...stacksInArray].sort(() => Math.random() - 0.5);
          return (
            <MarqueeElement
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              {slider.map(([name, icon], index) => (
                <SkillCard key={index} name={name} icon={icon} />
              ))}
            </MarqueeElement>
          );
        })}
      </div>
    </section>
  );
}
