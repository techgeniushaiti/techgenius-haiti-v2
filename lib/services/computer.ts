import {
  HardDrive,
  Cpu,
  Monitor,
  ShieldCheck,
  Wrench,
  Database,
} from "lucide-react";

export const computerServices = [
  {
    icon: HardDrive,
    title: "Remplacement SSD",
    description:
      "Installation SSD SATA et NVMe pour améliorer les performances.",
  },
  {
    icon: Cpu,
    title: "Upgrade RAM",
    description:
      "Ajout ou remplacement de mémoire RAM.",
  },
  {
    icon: Monitor,
    title: "Écran & Clavier",
    description:
      "Réparation écran, clavier, charnières et coque.",
  },
  {
    icon: ShieldCheck,
    title: "Installation Windows",
    description:
      "Installation Windows 10/11, pilotes et logiciels.",
  },
  {
    icon: Database,
    title: "Récupération de données",
    description:
      "Sauvegarde et récupération des fichiers perdus.",
  },
  {
    icon: Wrench,
    title: "Maintenance complète",
    description:
      "Nettoyage, optimisation et remplacement de pâte thermique.",
  },
];