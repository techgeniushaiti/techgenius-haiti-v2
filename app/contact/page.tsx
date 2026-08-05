import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import GoogleMap from "@/components/contact/GoogleMap";

export const metadata = {
  title: "Contact | Techgenius Haiti",
  description:
    "Contactez Techgenius Haiti pour obtenir un devis ou une assistance technique.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#050816]">

      <ContactHero />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

          <ContactInfo />

          <ContactForm />

        </div>
      </section>

      <GoogleMap />

    </main>
  );
}