import { SOCIAL_MEDIA } from '@/constants/menu';
import ContactCard from './ContactCard';
import SectionHeading from '@/components/elements/SectionHeading';

export default function ContactList() {
  return (
    <div className="flex flex-col space-y-4 w-full dark:bg-secondary bg-white rounded-md shadow-md p-6 md:p-12">
      <div className="space-y-2">
        <SectionHeading title="Find me on" />
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 w-full">
        {SOCIAL_MEDIA.map((media) => (
          <ContactCard {...media} key={media.id} />
        ))}
      </div>
    </div>
  );
}
