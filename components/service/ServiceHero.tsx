import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
type Props = {
  badge: string;
  title: string;
  subtitle: string;
  image: string;
};

export default function ServiceHero({
  badge,
  title,
  subtitle,
  image,
  buttonText = "Demander un devis",
  badges,
}: {
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  buttonText?: string;
  badges?: string[];
}) {
  return (
    <section className="bg-[#050816] pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="inline-flex rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-blue-400">
              {badge}
            </span>

            <h1 className="mt-6 text-6xl font-extrabold text-white leading-tight">
              {title}
            </h1>

            <p className="mt-6 text-gray-400 text-xl leading-9">
              {subtitle}
            
              {badges && (
  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
    {badges.map((item) => (
      <div
        key={item}
        className="flex items-center gap-2 text-green-400 font-medium"
      >
        <span>✓</span>
        <span>{item}</span>
      </div>
    ))}
  </div>
)}
            </p>

            <div className="flex gap-5 mt-10">

              <a
                href="/contact"
                className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-500"
              >
                {buttonText}
              </a>

              <a
                href="https://wa.me/50900000000"
                className="rounded-xl border border-blue-500 px-8 py-4 text-white hover:bg-blue-500/10"
              >
                WhatsApp
              </a>

            </div>

          </div>

          <div>

            <Image
              src={image}
              alt={title}
              width={650}
              height={650}
              className="rounded-3xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
}