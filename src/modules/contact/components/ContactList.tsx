import { SOCIAL_MEDIA } from '@/constants/menu';
import ContactCard from './ContactCard';

export default function ContactList() {
  return (
    <div className="glass-card rounded-2xl p-6 md:p-10 border border-glass-border flex flex-col gap-6">
      <div>
        <h2 className="font-geist text-headline-lg text-on-surface">
          Find Me On
        </h2>
        <p className="font-inter text-body-sm text-on-surface-variant mt-1">
          Let&apos;s connect
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 w-full">
        {SOCIAL_MEDIA.map((media) => (
          <ContactCard {...media} key={media.id} />
        ))}
      </div>
    </div>
  );
}
