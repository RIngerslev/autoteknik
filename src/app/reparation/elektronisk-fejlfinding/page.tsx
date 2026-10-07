import React from 'react';
import { Cpu, CheckCircle } from 'lucide-react';
import { IconButton } from "@/app/buttons/iconButton";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Elektronisk Fejlfinding | JMV Autoteknik - Silkeborg",
    description:
        "Professionel elektronisk fejlfinding og diagnostik for alle bilmærker. Mercedes specialist. Ring på +45 30237077.",
    openGraph: {
        title: "Elektronisk Fejlfinding — JMV Autoteknik",
        description:
            "Professionel elektronisk fejlfinding og diagnostik med avanceret udstyr.",
        url: "https://jmv-autoteknik.dk/reparation/elektronisk-fejlfinding",
        siteName: "JMV Autoteknik",
        type: "website",
        locale: "da_DK",
    },
    alternates: {
        canonical: "https://jmv-autoteknik.dk/reparation/elektronisk-fejlfinding",
    }
};

export default function ElektroniskFejlfindingPage() {
    return (
        <div className="min-h-screen bg-gray-50 text-shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="flex justify-center items-center my-10">
                    <h1 className="text-primary font-bold text-2xl md:text-3xl md:my-5">Elektronisk Fejlfinding</h1>
                </div>

                {/* Main Content */}
                <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
                    <div className="flex items-center mb-6">
                        <Cpu className="w-12 h-12 text-primary mr-4" />
                        <h2 className="text-3xl font-bold text-gray-900">Professionel Diagnostik</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Moderne biler, særligt Mercedes, er udstyret med avancerede computersystemer der styrer alt fra motor og gearkasse til sikkerhedssystemer og komfortfunktioner. Når en fejl opstår, viser det sig ofte kun som en advarsellampe på instrumentbrættet.
                            </p>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Med professionel diagnostisk udstyr kan vi læse fejlkoder direkte fra bilens computer og identificere problemets præcise årsag. Dette sparer tid og penge, da vi undgår unødvendig udskiftning af dele.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Vores diagnostiksystem kan detektere fejl før de bliver kritiske, hvilket forlænger bilens levetid og sikrer optimal performance.
                            </p>
                        </div>

                        <div className="bg-green-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-lg mb-4 text-gray-900">Hvorfor er det vigtigt?</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">Præcis diagnose uden gætværk</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">Forebygger større og dyrere skader</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">Sikrer optimal motorydelse og brændstoføkonomi</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">Identificerer skjulte fejl før de bliver kritiske</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">Sparer penge på unødvendig delskift</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Hvad vi tilbyder */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Hvad vi tilbyder</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Cpu className="w-6 h-6 text-primary" />
                                Computerdiagnostik
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Vi læser fejlkoder direkte fra bilens computermodul og analyserer datastrømme for at identificere præcis hvad der er galt.
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Motordiagnostik</li>
                                <li>• Gearkassediagnostik</li>
                                <li>• ABS og sikkerhedssystemer</li>
                                <li>• Klimaanlægsstyringsdiagnostik</li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Cpu className="w-6 h-6 text-primary" />
                                Fejlkodeanalyse
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Efter at have læst fejlkoderne giver vi dig en detaljeret forklaring på hvad der er galt og hvad det betyder for din bil.
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Pålidelig diagnose</li>
                                <li>• Kostningsestimat</li>
                                <li>• Reparationsbetingelser</li>
                                <li>• Skriftlig rapport</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <div className="bg-primary rounded-xl shadow-xl p-8 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Lad os finde problemet</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Book en diagnostik-session i dag og få præcis at vide hvad der skal gøres
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
