import ServicesCard from "./ServicesCard";
import { IServices } from "@/types/services";
import { servicesMock } from "@/constants/services";

export default function ServicesList({ services }: { services?: IServices[] }) {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="font-geist text-headline-lg text-on-surface text-center">
        Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {(services || servicesMock).map((item, index) => (
          <ServicesCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
