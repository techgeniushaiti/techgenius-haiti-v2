import Image from "next/image";


const brands = [
  {
    name: "QuickBooks POS",
    logo: "/images/brands/quickbooks.svg",
  },
  {
    name: "Cash Register Express",
    logo: "/images/brands/cash-register-express.svg",
  },
  {
    name: "Microsoft",
    logo: "/images/brands/microsoft.svg",
  },
  {
    name: "Windows",
    logo: "/images/brands/windows.svg",
  },
  {
    name: "Zebra",
    logo: "/images/brands/zebra.svg",
  },
  {
    name: "Epson",
    logo: "/images/brands/epson.svg",
  },
  {
    name: "Honeywell",
    logo: "/images/brands/honeywell.svg",
  },
  {
    name: "Datalogic",
    logo: "/images/brands/datalogic.svg",
  },
  {
    name: "Star Micronics",
    logo: "/images/brands/star-micronics.svg",
  },
  {
    name: "HP",
    logo: "/images/brands/hp.svg",
  },
  {
    name: "Dell",
    logo: "/images/brands/dell.svg",
  },
  {
    name: "Lenovo",
    logo: "/images/brands/lenovo.svg",
  },
];

export default function Brands() {
  return (
    <section className="py-24 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-white text-center">
          Logiciels & Marques Compatibles
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-14 max-w-3xl mx-auto">
          Nous travaillons avec des technologies reconnues pour offrir des
          solutions fiables, performantes et adaptées aux besoins des
          entreprises.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {brands.map((brand) => (

            <div
              key={brand.name}
              className="group rounded-3xl border border-blue-500/20 bg-[#0b1228] p-8 flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,.25)]"
            >

              <Image
                src={brand.logo}
                alt={brand.name}
                width={160}
                height={70}
                className="h-12 w-auto object-contain transition duration-300 group-hover:scale-110"
              />

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}