import Link from "next/link";
import { Phone, Mail } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { FaTiktok } from "react-icons/fa6";

export default function TopBar() {
  return (
    <div className="hidden lg:block bg-[#08101f] border-b border-blue-500/10">
      <div className="max-w-7xl mx-auto px-6 h-11 flex items-center justify-between">

        <div className="flex items-center gap-6 text-sm text-gray-300">

          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-blue-500" />
            <span>+509 38813277</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-500" />
            <span>techgeniushaiti@gmail.com</span>
          </div>

        </div>

        <div className="flex items-center gap-4">

          <Link
            href="https://facebook.com/"
            target="_blank"
            className="text-gray-300 hover:text-blue-500 transition"
          >
            <FaFacebookF size={18} />
          </Link>

          <Link
            href="https://instagram.com/"
            target="_blank"
            className="text-gray-300 hover:text-pink-500 transition"
          >
            <FaInstagram size={18} />
          </Link>

          <Link
            href="https://tiktok.com/"
            target="_blank"
            className="text-gray-300 hover:text-white transition"
          >
            <FaTiktok size={18} />
          </Link>

          <Link
            href="https://youtube.com/"
            target="_blank"
            className="text-gray-300 hover:text-red-500 transition"
          >
            <FaYoutube size={18} />
          </Link>

        </div>

      </div>
    </div>
  );
}