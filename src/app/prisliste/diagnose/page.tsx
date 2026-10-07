import {
  CarFront,
  CheckCircle,
  ClipboardCheck,
  Cpu,
  Search,
} from "lucide-react";
import type { Metadata } from "next";
import { IconButton } from "@/app/buttons/iconButton";

export const metadata: Metadata = {
  title: "Diagnose og Test af Bil | JMV Autoteknik - Silkeborg",
  description:
    "Få læst bilens fejlkoder eller bestil en grundig gennemgang med testkørsel. Diagnose fra 495 kr. og stor gennemgang til 650 kr. inkl. moms.",
  openGraph: {
    title: "Diagnose og Test af Bil — JMV Autoteknik",
    description:
      "Fejlkodeaflæsning og grundig gennemgang af din bil hos JMV Autoteknik i Silkeborg.",
    url: "https://jmv-autoteknik.dk/prisliste/diagnose",
    siteName: "JMV Autoteknik",
    type: "website",
    locale: "da_DK",
  },
  alternates: {
    canonical: "https://jmv-autoteknik.dk/prisliste/diagnose",
  },
};

export default function DiagnosePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <header className="text-center my-10">
          <h1 className="text-primary font-bold text-2xl md:text-3xl mt-4 md:my-5">
            Diagnose og test af bil
          </h1>
          <p className="text-gray-700 mt-4 max-w-3xl mx-auto leading-relaxed">
            Er der en advarselslampe tændt, eller vil du gerne kende bilens
            generelle stand? Vi tilbyder både fejlkodeaflæsning og en grundig
            gennemgang af bilen.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <article className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-5">
              <Cpu className="w-10 h-10 text-primary mr-4 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900">
                Diagnose via tester
              </h2>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Vi tilslutter en diagnosetester for at aflæse bilens fejlkoder.
              Det giver et bedre udgangspunkt for at finde årsagen til en
              advarselslampe eller en fejl i bilens elektroniske systemer.
            </p>
            <p className="text-2xl font-bold text-primary">
              495 kr. inkl. moms
            </p>
          </article>

          <article className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-5">
              <ClipboardCheck className="w-10 h-10 text-primary mr-4 flex-shrink-0" />
              <h2 className="text-2xl font-bold text-gray-900">
                Stor gennemgang
              </h2>
            </div>
            <p className="text-gray-700 mb-5 leading-relaxed">
              Få et grundigt indblik i bilens stand med en testkørsel og
              gennemgang af centrale områder på bilen.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Professionel testkørsel",
                "Gennemgang af bilen på lift",
                "Kontrol af undervogn og motorrum",
                "Kontrol af væsker og elsystem",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-2xl font-bold text-primary">
              650 kr. inkl. moms
            </p>
          </article>
        </section>

        <section className="mb-16 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
          <div className="flex gap-3">
            <Search className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-lg text-gray-900 mb-2">
                Hvad sker der efter diagnosen?
              </h2>
              <p className="text-gray-700">
                En fejlkode hjælper med at pege på et område, men betyder ikke
                altid, at en bestemt del er defekt. Hvis der er behov for
                yderligere fejlsøgning eller reparation, gennemgår vi det videre
                forløb med dig, inden arbejdet fortsætter.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-primary rounded-xl shadow-xl p-8 text-center text-white">
          <div className="flex justify-center mb-4">
            <CarFront className="w-9 h-9" />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Book diagnose eller gennemgang
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Kontakt os, så finder vi den løsning, der passer til din bil og
            situation.
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
