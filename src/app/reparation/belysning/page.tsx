import { AlertCircle, CheckCircle, Lightbulb, Palette } from "lucide-react";
import type { Metadata } from "next";
import { IconButton } from "@/app/buttons/iconButton";

export const metadata: Metadata = {
  title: "Ambient Belysning | JMV Autoteknik - Silkeborg",
  description:
    "Få eftermonteret eller opgraderet ambient belysning med originale dele. Basic-pakke fra 4.495 kr. hos JMV Autoteknik.",
  openGraph: {
    title: "Ambient Belysning — JMV Autoteknik",
    description:
      "Opgradering eller eftermontering af ambient belysning med originale dele.",
    url: "https://jmv-autoteknik.dk/reparation/belysning",
    siteName: "JMV Autoteknik",
    type: "website",
    locale: "da_DK",
  },
  alternates: {
    canonical: "https://jmv-autoteknik.dk/reparation/belysning",
  },
};

export default function BelysningPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex justify-center items-center my-10">
          <h1 className="text-primary font-bold text-2xl md:text-3xl mt-4 md:my-5">
            Ambient Belysning
          </h1>
        </div>

        <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Lightbulb className="w-12 h-12 text-primary mr-4 flex-shrink-0" />
            <h2 className="text-3xl font-bold text-gray-900">
              Giv kabinen et mere personligt udtryk
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Vi kan opgradere bilens eksisterende ambient belysning eller
                eftermontere systemet, hvis bilen ikke har det i forvejen.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Der er mange muligheder for placering, farver og lyseffekter. Vi
                hjælper med at finde den løsning, der passer til netop din bil.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-4 text-gray-900">
                Basic-pakken indeholder
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    12 farver og 12 multifarvede kombinationer
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Lys under dørlisterne og i de indvendige dørhåndtag
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Lys ved fødderne foran og bagi
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Lys langs instrumentbordet
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Vælg den løsning, der passer til dig
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Palette className="w-6 h-6 text-primary" />
                Farver og styring
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Basic-pakken giver dig 64 farver samt mulighed for multifarvede
                kombinationer. Nogle kombinationer skifter langsomt mellem to
                farver for en dynamisk lyseffekt.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Efter monteringen styres belysningen typisk via bilens originale
                skærm eller en separat kontakt, afhængigt af bilens model og udstyr.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-primary" />
                Muligt tilvalg
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Ønsker du endnu mere lys i kabinen, kan vi også montere
                andet belysning i bilen. Mulighederne afhænger af bilens
                model og udstyr.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Kontakt os gerne, så gennemgår vi mulighederne for netop din bil
                og sammensætter den rette løsning.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
          <div className="flex gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Vigtigt at vide om kodning
              </h3>
              <p className="text-gray-700">
                Monteringen kan kræve kodning i bilens styresystemer.
                Kodningerne kan blive overskrevet, hvis bilens styresystem efterfølgende opdateres.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-white rounded-lg shadow-lg p-8 text-center">
          <p className="text-gray-700 mb-2">Ambient belysning</p>
          <p className="text-3xl font-bold text-primary">
            Pris fra 4.495 kr.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Den endelige pris afhænger af bilens model og valgte udstyr.
          </p>
        </section>

        <div className="bg-primary rounded-xl shadow-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Klar til ambient belysning?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Kontakt os for at høre om mulighederne for din bil og få et tilbud.
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
