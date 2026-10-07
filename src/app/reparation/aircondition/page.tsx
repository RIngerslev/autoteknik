import {
  AlertCircle,
  CheckCircle,
  Droplets,
  ShieldCheck,
  Snowflake,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import { IconButton } from "@/app/buttons/iconButton";

export const metadata: Metadata = {
  title: "Aircondition og Klimaanlæg | JMV Autoteknik - Silkeborg",
  description:
    "Vedligeholdelse og service af bilens aircondition og klimaanlæg. Få hjælp til bedre køling, komfort og luftkvalitet hos JMV Autoteknik.",
  openGraph: {
    title: "Aircondition og Klimaanlæg — JMV Autoteknik",
    description:
      "Hold bilens aircondition ved lige for bedre komfort, køling og luftkvalitet.",
    url: "https://jmv-autoteknik.dk/reparation/aircondition",
    siteName: "JMV Autoteknik",
    type: "website",
    locale: "da_DK",
  },
  alternates: {
    canonical: "https://jmv-autoteknik.dk/reparation/aircondition",
  },
};

export default function AirconditionPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex justify-center items-center my-10">
          <h1 className="text-primary font-bold text-2xl md:text-3xl mt-4 md:my-5">
            Aircondition og klimaanlæg
          </h1>
        </div>

        <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Snowflake className="w-12 h-12 text-primary mr-4 flex-shrink-0" />
            <h2 className="text-3xl font-bold text-gray-900">
              Komfort året rundt starter med et anlæg i god stand
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Bilens aircondition gør mere end at køle kabinen på varme dage.
                Klimaanlægget hjælper også med at regulere luftfugtigheden og
                affugte ruderne, så du får et behageligt og klart udsyn under
                kørslen.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Kølemiddel kan gradvist sive ud af anlægget over tid. Når
                mængden bliver for lav, kan køleeffekten falde, og anlægget
                risikerer at arbejde hårdere end nødvendigt. Regelmæssig
                vedligeholdelse hjælper med at bevare effektiviteten og kan
                mindske risikoen for unødigt slid.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">
                Fordele ved et velfungerende klimaanlæg
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Effektiv køling og et mere stabilt klima i kabinen
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Hurtigere affugtning af ruderne og bedre udsyn
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Mindre risiko for dårlig lugt og forringet luftkvalitet
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Bedre energieffektivitet, når anlægget fungerer korrekt
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tegn på, at anlægget bør undersøges
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Snowflake className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Køler dårligere
              </h3>
              <p className="text-gray-700">
                Hvis luften ikke bliver så kold som tidligere, kan anlægget
                have brug for service eller nærmere fejlfinding.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Droplets className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Dug eller dårlig lugt
              </h3>
              <p className="text-gray-700">
                Vedvarende dug på ruderne eller en ubehagelig lugt fra
                ventilationen kan være tegn på, at anlægget bør kontrolleres.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <ShieldCheck className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Ujævn komfort
              </h3>
              <p className="text-gray-700">
                Hvis temperaturen i kabinen er ustabil, eller ventilationen
                ikke føles effektiv, kan vi hjælpe med at undersøge årsagen.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
          <div className="flex gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Særligt vigtigt for el- og hybridbiler
              </h3>
              <p className="text-gray-700">
                På Mercedes-Benz EQ-modeller og hybridbiler er klimaanlægget
                også en del af bilens energistyring. Et ineffektivt anlæg kan
                bruge mere energi på at regulere temperaturen og dermed påvirke
                bilens rækkevidde. Følg bilens serviceanbefalinger, og få
                anlægget undersøgt, hvis kølingen ikke fungerer som forventet.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-primary rounded-xl shadow-xl p-8 text-center text-white">
          <div className="flex justify-center mb-4">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Få tjekket bilens klimaanlæg
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Oplever du svag køling, dug på ruderne eller dårlig lugt? Kontakt os
            for at høre mere om service og fejlfinding.
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