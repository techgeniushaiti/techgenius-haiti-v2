export default function Schema() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.techgeniushaiti.com/#organization",
      name: "Techgenius Haiti",
      url: "https://www.techgeniushaiti.com",
      logo: "https://www.techgeniushaiti.com/images/logo.png",
      image: "https://www.techgeniushaiti.com/og-image.png",
      email: "techgeniushaiti@gmail.com",
      telephone: "+50938813277",
      sameAs: [
        "https://www.facebook.com/techgeniushaiti",
        "https://www.instagram.com/techgeniushaiti",
        "https://www.tiktok.com/@techgeniushaiti",
        "https://www.youtube.com/@techgeniushaiti"
      ]
    },

    {
      "@context": "https://schema.org",
      "@type": "ComputerStore",
      "@id": "https://www.techgeniushaiti.com/#business",
      name: "Techgenius Haiti",
      url: "https://www.techgeniushaiti.com",
      image: "https://www.techgeniushaiti.com/og-image.png",
      logo: "https://www.techgeniushaiti.com/images/logo.png",
      description:
        "Réparation téléphone, informatique, cybersécurité, développement web, marketing digital et vente de matériel électronique.",

      telephone: "+50938813277",
      email: "techgeniushaiti@gmail.com",

      address: {
        "@type": "PostalAddress",
        streetAddress: "Pétion-Ville",
        addressLocality: "Pétion-Ville",
        addressRegion: "Ouest",
        postalCode: "6140",
        addressCountry: "HT"
      },

      areaServed: [
        {
          "@type": "Country",
          name: "Haïti"
        },
        {
          "@type": "Place",
          name: "International"
        }
      ],

      openingHours: "Mo-Sa 08:00-18:00",

      priceRange: "$$",

      sameAs: [
        "https://www.facebook.com/techgeniushaiti",
        "https://www.instagram.com/techgeniushaiti",
        "https://www.tiktok.com/@techgeniushaiti",
        "https://www.youtube.com/@techgeniushaiti"
      ]
    },

    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://www.techgeniushaiti.com/#website",
      url: "https://www.techgeniushaiti.com",
      name: "Techgenius Haiti",
      description: "La nouvelle génération de la technologie.",
      inLanguage: "fr",
      publisher: {
        "@id": "https://www.techgeniushaiti.com/#organization"
      }
    },

    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Réparation Téléphone",
      provider: {
        "@id": "https://www.techgeniushaiti.com/#organization"
      },
      areaServed: [
        "Haïti",
        "International"
      ]
    },

    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Réparation Ordinateur",
      provider: {
        "@id": "https://www.techgeniushaiti.com/#organization"
      },
      areaServed: [
        "Haïti",
        "International"
      ]
    },

    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Développement Web",
      provider: {
        "@id": "https://www.techgeniushaiti.com/#organization"
      },
      areaServed: [
        "Haïti",
        "International"
      ]
    },

    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Marketing Digital",
      provider: {
        "@id": "https://www.techgeniushaiti.com/#organization"
      },
      areaServed: [
        "Haïti",
        "International"
      ]
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quels services propose Techgenius Haiti ?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Nous proposons la réparation de téléphones, d'ordinateurs, des solutions réseau, le développement web, le marketing digital et la cybersécurité."
          }
        },
        {
          "@type": "Question",
          name: "Intervenez-vous partout en Haïti ?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Oui. Nous desservons toutes les régions d'Haïti et proposons également des services à distance à l'international."
          }
        },
        {
          "@type": "Question",
          name: "Comment vous contacter ?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Vous pouvez nous joindre par téléphone, WhatsApp, email ou via notre formulaire de contact."
          }
        }
      ]
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}