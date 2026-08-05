import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaGoogle,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { SiBluesky } from "react-icons/si";

const socials = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/share/1EDLKMdP37/",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/techgeniushaiti",
  },
  {
    icon: FaTiktok,
    href: "https://www.tiktok.com/@techgeniushaiti",
  },
  {
    icon: FaYoutube,
    href: "https://youtube.com/@techgeniushaiti",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/50938813277",
  },
  {
    icon: SiBluesky,
    href: "https://bsky.app/profile/techgeniushaiti.bsky.social",
  },
  {
    icon: FaGoogle,
    href: "https://share.google/TydQjCbV6mvcrMj3U",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#04070f] border-t border-blue-500/10">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 gap-14">

          {/* Logo */}

          <div>

            <Image
              src="/images/logo.png"
              alt="Techgenius Haiti"
              width={180}
              height={60}
            />

            <p className="text-gray-400 mt-6 leading-8">
              Techgenius Haiti accompagne particuliers et entreprises
              avec des solutions informatiques, réparation,
              cybersécurité, réseaux et technologies innovantes.
            </p>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-white text-xl font-bold mb-6">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Réparation Téléphone</li>

              <li>Réparation Ordinateur</li>

              <li>Installation Logiciels</li>

              <li>Business Solutions</li>

              <li>Cybersécurité</li>

            </ul>

          </div>

          {/* Entreprise */}

          <div>

            <h3 className="text-white text-xl font-bold mb-6">
              Entreprise
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link href="/about">
                  À propos
                </Link>
              </li>

              <li>
                <Link href="/contact">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="/privacy-policy">
                  Confidentialité
                </Link>
              </li>

              <li>
                <Link href="/terms">
                  Conditions
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-xl font-bold mb-6">
              Contact
            </h3>

            <p className="text-gray-400">
              📞 +509 3881-3277
            </p>

            <p className="text-gray-400 mt-3">
              ✉ contact@techgeniushaiti.com
            </p>

            <div className="flex gap-4 mt-8">

              {socials.map((social, index) => {

                const Icon = social.icon;

                return (

                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    className="w-11 h-11 rounded-full bg-[#0b1228] flex items-center justify-center border border-blue-500/20 hover:border-blue-500 hover:text-blue-400 transition"
                  >
                    <Icon size={18} />
                  </Link>

                );

              })}

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-blue-500/10 py-6">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Techgenius Haiti.
            Tous droits réservés.
          </p>

          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            Conçu avec ❤️ en Haïti
          </p>

        </div>

      </div>

    </footer>
  );
}