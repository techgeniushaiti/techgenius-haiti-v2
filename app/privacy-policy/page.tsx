import Link from "next/link";

export const metadata = {
  title: "Politique de confidentialité | Techgenius Haiti",
  description:
    "Politique de confidentialité de Techgenius Haiti.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#050816] text-white">

      {/* Hero */}
      <section className="py-24 border-b border-blue-500/10">
        <div className="max-w-5xl mx-auto px-6">

          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-blue-400">
            Politique de confidentialité
          </span>

          <h1 className="mt-8 text-5xl font-bold">
            Protection de vos données
          </h1>

          <p className="mt-6 text-xl text-gray-400 leading-9">
            Chez Techgenius Haiti, nous respectons votre vie privée et nous
            protégeons les informations que vous nous confiez.
          </p>

        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-14">

          <div>
            <h2 className="text-3xl font-bold">
              1. Informations collectées
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              Nous pouvons collecter votre nom, votre adresse e-mail,
              votre numéro de téléphone ainsi que les informations
              nécessaires au traitement de votre demande.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              2. Utilisation des données
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              Vos informations sont utilisées uniquement afin de vous
              fournir nos services, répondre à vos demandes et améliorer
              votre expérience sur notre site.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              3. Google Analytics
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              Notre site utilise Google Analytics afin de mesurer
              l'utilisation du site et améliorer nos services.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              4. Google AdSense
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              Des annonces peuvent être diffusées par Google AdSense.
              Google peut utiliser des cookies afin de proposer des
              annonces adaptées aux visiteurs.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              5. Protection des données
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              Nous mettons en œuvre des mesures de sécurité afin de protéger
              les informations personnelles contre tout accès non autorisé.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              6. Contact
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              Pour toute question concernant cette politique de
              confidentialité, contactez-nous à :
            </p>

            <div className="mt-6 rounded-2xl border border-blue-500/20 bg-[#0b1228] p-8">

              <p>
                <strong>Email :</strong> techgeniushaiti@gmail.com
              </p>

              <p className="mt-3">
                <strong>Téléphone :</strong> +509 3881-3277
              </p>

              <p className="mt-3">
                <strong>Adresse :</strong> Pétion-Ville, Haïti
              </p>

            </div>

          </div>

          <div className="pt-8">
            <Link
              href="/contact"
              className="rounded-xl bg-blue-600 hover:bg-blue-500 transition px-8 py-4 font-semibold"
            >
              Nous contacter
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}