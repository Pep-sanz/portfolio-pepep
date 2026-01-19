import { FaServicestack } from "react-icons/fa";

import ServicesCard from "./ServicesCard";
import SectionHeading from "@/components/elements/SectionHeading";
import SectionSubHeading from "@/components/elements/SectionSubHeading";
import { IServices } from "@/types/services";
import { servicesMock } from "@/constants/services";

export default function ServicesList({ services }: { services?: IServices[] }) {
  return (
    <div className="w-full rounded-md bg-white dark:bg-secondary shadow-md p-6 md:p-12">
      <div className="space-y-2">
        <SectionHeading
          title="Services"
          icon={<FaServicestack size={20} className="mr-1" />}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">
            I can deliver the following services
          </p>
        </SectionSubHeading>
      </div>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {(services || servicesMock).map((item, index) => (
          <ServicesCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
