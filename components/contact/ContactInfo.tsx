import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-6">

      <div>
        <h2 className="text-4xl font-bold text-white">
          Informations de contact
        </h2>

        <p className="mt-4 text-gray-400 leading-8">
          Nous sommes disponibles pour répondre à vos questions et vous
          accompagner dans tous vos projets technologiques.
        </p>
      </div>

      <div className="space-y-5">

        {/* Téléphone */}
        <div className="rounded-2xl border border-blue-500/20 bg-[#0b1228] p-6 flex items-start gap-4">
          <Phone className="text-blue-500 w-7 h-7 mt-1" />

          <div>
            <h3 className="text-white font-bold text-lg">
              Téléphone
            </h3>

            <p className="text-gray-400 mt-2">
              +509 3881-3277
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="rounded-2xl border border-blue-500/20 bg-[#0b1228] p-6 flex items-start gap-4">
          <Mail className="text-blue-500 w-7 h-7 mt-1" />

          <div>
            <h3 className="text-white font-bold text-lg">
              Email
            </h3>

            <p className="text-gray-400 mt-2 break-all">
              techgeniushaiti@gmail.com
            </p>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="rounded-2xl border border-blue-500/20 bg-[#0b1228] p-6 flex items-start gap-4">
          <MessageCircle className="text-green-500 w-7 h-7 mt-1" />

          <div>
            <h3 className="text-white font-bold text-lg">
              WhatsApp
            </h3>

            <p className="text-gray-400 mt-2">
              +509 3881-3277
            </p>
          </div>
        </div>

        {/* Adresse */}
        <div className="rounded-2xl border border-blue-500/20 bg-[#0b1228] p-6 flex items-start gap-4">
          <MapPin className="text-red-500 w-7 h-7 mt-1" />

          <div>
            <h3 className="text-white font-bold text-lg">
              Adresse
            </h3>

            <p className="text-gray-400 mt-2">
              Pétion-Ville, Haïti
            </p>
          </div>
        </div>

        {/* Horaires */}
        <div className="rounded-2xl border border-blue-500/20 bg-[#0b1228] p-6 flex items-start gap-4">
          <Clock className="text-yellow-500 w-7 h-7 mt-1" />

          <div>
            <h3 className="text-white font-bold text-lg">
              Horaires
            </h3>

            <div className="mt-3 space-y-1 text-gray-400">
              <p>Lundi - Vendredi : 8h00 - 17h00</p>
              <p>Samedi : 8h00 - 13h00</p>
              <p>Dimanche : Sur rendez-vous</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}