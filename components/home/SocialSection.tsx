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
    name: "Facebook",
    url: "https://www.facebook.com/share/1EDLKMdP37/",
    icon: FaFacebookF,
    color: "hover:text-blue-500",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/techgeniushaiti?igsh=MW4wdHhyZ2pxZTRtMQ==",
    icon: FaInstagram,
    color: "hover:text-pink-500",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@techgeniushaiti?_r=1&_t=ZS-98anuamvM28",
    icon: FaTiktok,
    color: "hover:text-white",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@techgeniushaiti?si=ICOPTQ04tzv-m4lV",
    icon: FaYoutube,
    color: "hover:text-red-500",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/50938813277",
    icon: FaWhatsapp,
    color: "hover:text-green-500",
  },
  {
    name: "Google",
    url: "https://share.google/TydQjCbV6mvcrMj3U",
    icon: FaGoogle,
    color: "hover:text-yellow-400",
  },
  {
    name: "Bluesky",
    url: "https://bsky.app/profile/techgeniushaiti.bsky.social",
    icon: SiBluesky,
    color: "hover:text-sky-400",
  },
];

export default function SocialSection() {
  return (
    <section className="py-24 bg-[#07111f]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white">
          Suivez Techgenius Haiti
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16 max-w-3xl mx-auto">
          Retrouvez-nous sur nos réseaux sociaux officiels pour découvrir nos
          réalisations, conseils techniques et dernières actualités.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group rounded-3xl border border-blue-500/20 bg-[#0b1228] p-8 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,.25)] ${social.color}`}
              >
                <Icon className="text-4xl transition-transform duration-300 group-hover:scale-125" />
                <span className="mt-4 text-white font-semibold text-center">
                  {social.name}
                </span>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}