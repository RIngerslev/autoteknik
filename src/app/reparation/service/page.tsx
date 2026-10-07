import React from 'react';
import { Wrench, CheckCircle, AlertCircle } from 'lucide-react';
import { IconButton } from "@/app/buttons/iconButton";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Regelmæssig Service | JMV Autoteknik - Silkeborg",
    description:
        "Professionel regelmæssig service og vedligeholdelse for alle bilmærker. Mercedes specialist. Ring på +45 30237077.",
    openGraph: {
        title: "Regelmæssig Service — JMV Autoteknik",
        description:
            "Regelmæssig service efter producentens anbefalinger sikrer optimal performance.",
        url: "https://jmv-autoteknik.dk/reparation/service",
        siteName: "JMV Autoteknik",
        type: "website",
        locale: "da_DK",
    },
    alternates: {
        canonical: "https://jmv-autoteknik.dk/reparation/service",
    }
};

export default function ServicePage() {
    return (
        <div className="min-h-screen bg-gray-50 text-shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="flex justify-center items-center my-10">
                    <h1 className="text-primary font-bold text-2xl md:text-3xl md:my-5">Regelmæssig Service</h1>
                </div>

                {/* Main Content */}
                <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
                    <div className="flex items-center mb-6">
                        <Wrench className="w-12 h-12 text-primary mr-4" />
                        <h2 className="text-3xl font-bold text-gray-900">Vedligeholdelse er Nøglen</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Regelmæssig service er den bedste investering i din bils levetid. Mercedes og andre premium biler er konstrueret til at holde i mange år, men kun hvis de vedligeholdes korrekt efter producentens anbefalinger.
                            </p>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Ved et serviceeftersyn udskifter vi motorolie og filtre, kontrollerer væsker, bremser, dæk, lys og alle sikkerhedskritiske komponenter. Dette forebygger nedbrud og sikrer optimal brændstofeffektivitet.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Vi følger fabrikantens serviceprogram til det nøjagtige tidspunkt og komponenter.
                            </p>
                        </div>

                        <div className="bg-green-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-lg mb-4 text-gray-900">Fordele ved regelmæssig service</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">Forlænger bilens levetid</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">Opretholder garantien på nyere biler</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">Bedre gensalgsværdi</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">Reducerer risikoen for dyre akutreparationer</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">Lavere brændstofforbrug</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">Øget sikkerhed for dig og dine passagerer</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Service Types */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Vores servicetyper</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Olieskift</h3>
                            <p className="text-gray-700 mb-4 text-sm">
                                Motorolie er bilens livsnerve. Gammel olie mister sine smøreegenskaber.
                            </p>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Motorolieskift</li>
                                <li>• Oliefilter</li>
                                <li>• Olieniveaukontrol</li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Kølervæske</h3>
                            <p className="text-gray-700 mb-4 text-sm">
                                Holder motoren ved optimal temperatur og beskytter mod frost og korrosion.
                            </p>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Væskeskift</li>
                                <li>• Trykprøvning</li>
                                <li>• Slangekontrol</li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Filtre</h3>
                            <p className="text-gray-700 mb-4 text-sm">
                                Filtre holder bilen ren og motoren beskyttet fra forurening.
                            </p>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Luftfilter</li>
                                <li>• Brændstoffilter</li>
                                <li>• Kabinefilter</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Full Service Checklist */}
                <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Typisk service inkluderer</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Olie- og filterskift</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Kontrol af kølevæske</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Kontrol af bremsevæske</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Inspektion af bremser</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Dækkontrol</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Lys- og lygtecheck</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Computerdiagnostik</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Undervognskontrol</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Stempel i servicebogen</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Important Info */}
                <section className="mb-16 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                    <div className="flex gap-3">
                        <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5"/>
                        <div>
                            <h3 className="font-bold text-lg text-gray-900 mb-2">Bemærk</h3>
                            <p className="text-gray-700">
                                Serviceintervaller kan variere afhængigt af bilmodel, årgang og køremønster. Mercedes modeller har ofte specifikke krav. Kontakt os for et service tilbud til din bil.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <div className="bg-primary rounded-xl shadow-xl p-8 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Klar til Service?</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Book dit næste service i dag og få professionel pleje af din bil
                    </p>
                    <div className="flex justify-center items-center gap-x-3 flex-wrap">
                        <IconButton className="bg-white text-primary" text='Bestil tid' iconName='phonePrimary' href="tel:+4530237077"/>
                        <IconButton className="bg-white text-primary" text='Send e-mail' iconName='mailPrimary' href="mailto:kontakt@jmv-autoteknik.dk"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
