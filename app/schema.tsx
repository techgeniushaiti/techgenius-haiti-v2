export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ComputerStore",
    name: "Techgenius Haiti",
    url: "https://techgeniushaiti.com",
    logo: "https://techgeniushaiti.com/images/logo.png",
    image: "https://techgeniushaiti.com/images/logo.png",
    description:
      "Réparation téléphone, informatique, cybersécurité, développement web, formation et vente de matériel électronique en Haïti.",
    telephone: "+50939283126",
    email: "contact@techgeniushaiti.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "HT",
    },
    areaServed: "Haiti",
    sameAs: [
      "https://www.facebook.com/techgeniushaiti",
      "https://www.instagram.com/techgeniushaiti",
      "https://www.tiktok.com/@techgeniushaiti",
      "https://www.youtube.com/@techgeniushaiti"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}