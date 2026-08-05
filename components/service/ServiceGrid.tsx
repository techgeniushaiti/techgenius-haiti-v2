import { LucideIcon } from "lucide-react";

type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type Props = {
  title: string;
  subtitle: string;
  services: ServiceItem[];
};

export default function ServiceGrid({
  title,
  subtitle,
  services,
}: Props) {
  return (
    <section className="bg-[#070b1d] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-bold text-white">
          {title}
        </h2>

        <p className="mx-auto mt-5 mb-16 max-w-3xl text-center text-gray-400">
          {subtitle}
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-3xl border border-blue-500/20 bg-[#0d142b] p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,.30)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20">
                  <Icon className="h-8 w-8 text-blue-400" />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}