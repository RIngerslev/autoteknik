import {
  Camera,
  Code2,
  DoorOpen,
  Gauge,
  Lightbulb,
  MoveUpRight,
  Rotate3D,
  Scan,
} from "lucide-react";
import type { Metadata } from "next";
import { IconButton } from "@/app/buttons/iconButton";

export const metadata: Metadata = {
  title: "Eftermontering af Mercedes-udstyr | JMV Autoteknik",
  description:
    "Se mulighederne for eftermontering og kodning af udstyr til Mercedes-Benz hos JMV Autoteknik i Silkeborg.",
  openGraph: {
    title: "Eftermontering af Mercedes-udstyr — JMV Autoteknik",
    description:
      "Eftermontering og kodning af udstyr til Mercedes-Benz, tilpasset bilens model og specifikationer.",
    url: "https://jmv-autoteknik.dk/prisliste/eftermontering",
    siteName: "JMV Autoteknik",
    type: "website",
    locale: "da_DK",
  },
  alternates: {
    canonical: "https://jmv-autoteknik.dk/prisliste/eftermontering",
  },
};

const upgrades = [
  {
    title: "Mercedes-kodning",
    description:
      "Tilpas bilens funktioner med specialkodning, aktivering af skjulte features eller nye styreenheder.",
    icon: <Code2 className="w-7 h-7" />,
  },
  {
    title: "Adaptiv fartpilot",
    description:
      "Få eftermonteret original adaptiv fartpilot, der hjælper med at holde afstand til trafikken foran.",
    icon: <Gauge className="w-7 h-7" />,
  },
  {
    title: "Keyless entry",
    description:
      "Få komforten ved nøglefri adgang med aktivering af bilens funktioner eller montering af nødvendigt udstyr.",
    icon: <DoorOpen className="w-7 h-7" />,
  },
  {
    title: "Elektrisk bagklap",
    description:
      "Opgrader bilen med elektrisk åbning og lukning af bagklappen.",
    icon: <MoveUpRight className="w-7 h-7" />,
  },
  {
    title: "Ambient belysning",
    description:
      "Tilføj ambient belysning med betjening via bilens originale skærm, hvor modellen understøtter det.",
    icon: <Lightbulb className="w-7 h-7" />,
  },
  {
    title: "Bakkamera",
    description:
      "Få monteret originalt eller uoriginalt bakkamera, afhængigt af bilens model og ønsker.",
    icon: <Camera className="w-7 h-7" />,
  },
  {
    title: "Elektrisk foldbare sidespejle",
    description:
      "Gør hverdagen nemmere med sidespejle, der kan foldes ind elektrisk.",
    icon: <Rotate3D className="w-7 h-7" />,
  },
  {
    title: "360° kamera",
    description:
      "Få et samlet overblik omkring bilen med 360° kamerasystem.",
    icon: <Scan className="w-7 h-7" />,
  },
];

export default function EftermonteringPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <header className="text-center my-10">
          <h1 className="text-primary font-bold text-2xl md:text-3xl mt-4 md:my-5">
            Eftermontering af Mercedes-udstyr
          </h1>
          <p className="text-gray-700 mt-4 max-w-3xl mx-auto leading-relaxed">
            Gør din Mercedes-Benz endnu bedre med udstyr og funktioner, der
            passer til dine behov. Mulighederne afhænger af bilens model,
            årgang og eksisterende udstyr.
          </p>
        </header>

        <section
          aria-label="Muligheder for eftermontering"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {upgrades.map((upgrade) => (
            <article
              key={upgrade.title}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="text-primary mb-4" aria-hidden="true">
                {upgrade.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                {upgrade.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {upgrade.description}
              </p>
            </article>
          ))}
        </section>

        <section className="bg-primary rounded-xl shadow-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Hør, hvad der kan lade sig gøre på din bil
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Kontakt os med bilens model og årgang, så hjælper vi med at finde
            den rette løsning.
          </p>
          <div className="flex justify-center items-center gap-x-3 flex-wrap">
            <IconButton
              className="bg-white text-primary"
              text="Ring til os"
              iconName="phonePrimary"
              href="tel:+4530237077"
            />
            <IconButton
              className="bg-white text-primary"
              text="Send e-mail"
              iconName="mailPrimary"
              href="mailto:kontakt@jmv-autoteknik.dk"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
