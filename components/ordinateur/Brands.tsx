import Image from "next/image";
import Marquee from "react-fast-marquee";

const brands = [
  { name: "Apple", logo: "/images/brands/apple.svg" },
  { name: "Dell", logo: "/images/brands/dell.svg" },
  { name: "HP", logo: "/images/brands/hp.svg" },
  { name: "Lenovo", logo: "/images/brands/lenovo.svg" },
  { name: "ASUS", logo: "/images/brands/asus.svg" },
  { name: "Acer", logo: "/images/brands/acer.svg" },
  { name: "Intel", logo: "/images/brands/intel.svg" },
  { name: "AMD", logo: "/images/brands/amd.svg" },
  { name: "Ubuntu", logo: "/images/brands/ubuntu.svg" },
  { name: "Kali Linux", logo: "/images/brands/kalilinux.svg" },
];

export default function Brands() {
  return (
    <section className="bg-[#050816] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-5xl font-bold text-white">
          Marques prises en charge
        </h2>

        <p className="mx-auto mt-4 mb-16 max-w-3xl text-center text-gray-400">
          Nous réparons les principales marques d'ordinateurs et utilisons des
          composants compatibles de haute qualité pour garantir des réparations
          fiables et durables.
        </p>

        <Marquee
          speed={40}
          gradient={false}
          pauseOnHover
          autoFill
        >
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group mx-4 flex h-36 w-64 items-center justify-center rounded-3xl border border-blue-500/20 bg-gradient-to-br from-[#10192f] to-[#0b1228] transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,.25)]"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={180}
                height={80}
                className="h-20 w-auto object-contain transition-all duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}