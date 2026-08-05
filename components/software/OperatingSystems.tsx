export default function OperatingSystems() {
  const systems = [
    "Windows 10 & 11",
    "macOS",
    "Ubuntu",
    "Kali Linux",
    "Debian",
    "Linux Mint",
  ];

  return (
    <section className="py-24 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-white text-center">
          Systèmes d'exploitation pris en charge
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-12">
          Nous installons, configurons et optimisons les principaux systèmes d'exploitation.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {systems.map((system) => (
            <div
              key={system}
              className="rounded-2xl border border-blue-600/30 bg-[#0b1228] p-6 text-center hover:border-blue-500 transition"
            >
              <h3 className="text-xl font-semibold text-white">
                {system}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}