// import { FaServicestack } from 'react-icons/fa';

import ServicesCard from './ServicesCard';
import SectionHeading from '@/components/elements/SectionHeading';
import SectionSubHeading from '@/components/elements/SectionSubHeading';
import { IServices } from '@/types/services';
import { servicesMock } from '@/constants/services';
import { GoDotFill } from 'react-icons/go';

export default function ServicesList({ services }: { services: IServices[] }) {
  return (
    <section className="md:w-[75vw] rounded-md bg-secondary shadow-md p-4 md:px-16 md:py-12">
      <div className="space-y-2">
        <SectionHeading
          title="Services"
          icon={<GoDotFill size={20} className="mr-1" />}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">
            I can deliver the following services
          </p>
        </SectionSubHeading>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {(services || servicesMock).map((item, index) => (
          <ServicesCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
