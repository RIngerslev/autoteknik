import {
  AlertCircle,
  Cable,
  CarFront,
  CheckCircle,
  Smartphone,
} from "lucide-react";
import type { Metadata } from "next";
import { IconButton } from "@/app/buttons/iconButton";

export const metadata: Metadata = {
  title: "Apple CarPlay og Android Auto | JMV Autoteknik - Silkeborg",
  description:
    "Få Apple CarPlay eller Android Auto i din Mercedes. Vi undersøger mulighederne for original kodning eller eftermontering. Pris fra 995 kr.",
  openGraph: {
    title: "Apple CarPlay og Android Auto — JMV Autoteknik",
    description:
      "Brug mobilens kompatible apps på bilens skærm med CarPlay eller Android Auto.",
    url: "https://jmv-autoteknik.dk/reparation/carplay",
    siteName: "JMV Autoteknik",
    type: "website",
    locale: "da_DK",
  },
  alternates: {
    canonical: "https://jmv-autoteknik.dk/reparation/carplay",
  },
};

export default function CarPlayPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex justify-center items-center my-10">
          <h1 className="text-primary font-bold text-2xl md:text-3xl mt-4 md:my-5">
            Apple CarPlay og Android Auto
          </h1>
        </div>

        <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Smartphone className="w-12 h-12 text-primary mr-4 flex-shrink-0" />
            <h2 className="text-3xl font-bold text-gray-900">
              Mobilens funktioner på bilens skærm
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Med Apple CarPlay eller Android Auto kan du bruge udvalgte
                funktioner fra din telefon via bilens skærm og
                lydanlæg. Betjeningen foregår gennem bilens system, så du nemt
                kan holde fokus på kørslen.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Brug blandt andet navigation, musik, podcasts og lydbøger, og
                håndter opkald og beskeder med kompatible apps. Hvilke
                funktioner der er tilgængelige, afhænger af telefonen og appene.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">
                Vælg system efter din telefon
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Apple CarPlay bruges med iPhone
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Android Auto bruges med Android-telefoner
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Kompatible apps vises på bilens skærm og afspilles gennem
                    bilens anlæg
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Muligheder for din Mercedes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CarFront className="w-6 h-6 text-primary" />
                Kodning eller eftermontering
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                På udvalgte modeller med NTG 3.0 til NTG 5.5 eller MBUX kan CarPlay
                eller Android Auto ofte aktiveres eller eftermonteres. På nogle
                biler kan telefonmærket ved et USB-stik være en indikation af,
                at systemet kan aktiveres med original kodning.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Hvis bilen ikke understøtter original aktivering, kan en
                eftermonteret boks i visse tilfælde være en løsning. Biler med
                MBUX-touchskærm kan kræve aktivering via Mercedes me. Vi
                kontrollerer altid mulighederne ud fra bilens model, årgang og
                udstyr.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Cable className="w-6 h-6 text-primary" />
                Trådløs forbindelse
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Hvis bilen har fået CarPlay aktiveret med original kodning, kan
                du tilvælge en trådløs adapter. Adapteren sættes i bilens
                USB-stik og gør det muligt at forbinde telefonen trådløst.
              </p>
              <p className="text-gray-700 font-semibold">
                Trådløs adapter: 695 kr. inkl. moms
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
          <div className="flex gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Godt at vide
              </h3>
              <p className="text-gray-700">
                CarPlay og Android Auto er beregnet til funktioner som
                navigation, musik, opkald og beskeder – ikke til
                videoafspilning. Muligheden for aktivering eller eftermontering
                varierer.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-white rounded-lg shadow-lg p-8 text-center">
          <p className="text-gray-700 mb-2">
            Aktivering eller eftermontering af CarPlay/Android Auto
          </p>
          <p className="text-3xl font-bold text-primary">Pris fra 995,00 kr.</p>
          <p className="text-sm text-gray-600 mt-2">
            Prisen afhænger af bilens model og den nødvendige løsning.
          </p>
        </section>

        <div className="bg-primary rounded-xl shadow-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Undersøg mulighederne for din bil
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
        </div>
      </div>
    </div>
  );
}
