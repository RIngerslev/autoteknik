import React from 'react';
import { Settings, CheckCircle } from 'lucide-react';
import { IconButton } from "@/app/buttons/iconButton";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Professionelt Hjulskift | JMV Autoteknik - Silkeborg",
    description:
        "Professionelt hjulskift med momentspænding for din bil. Mercedes specialist. Ring på +45 30237077.",
    openGraph: {
        title: "Professionelt Hjulskift — JMV Autoteknik",
        description:
            "Professionelt hjulskift med korrekt momentspænding og inspektion.",
        url: "https://jmv-autoteknik.dk/reparation/hjulskift",
        siteName: "JMV Autoteknik",
        type: "website",
        locale: "da_DK",
    },
    alternates: {
        canonical: "https://jmv-autoteknik.dk/reparation/hjulskift",
    }
};

export default function HjulskiftPage() {
    return (
        <div className="min-h-screen bg-gray-50 text-shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="flex justify-center items-center my-10">
                    <h1 className="text-primary font-bold text-2xl md:text-3xl md:my-5">Professionelt Hjulskift</h1>
                </div>

                {/* Main Content */}
                <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
                    <div className="flex items-center mb-6">
                        <Settings className="w-12 h-12 text-primary mr-4" />
                        <h2 className="text-3xl font-bold text-gray-900">Sikkerhed og Kvalitet</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Hjulskift er afgørende for din sikkerhed og bilens ydeevne. Vinterdæk i sommervarme slides hurtigere, mens sommerdæk på is og sne reducerer vejgrebet markant og øger risikoen for ulykker.
                            </p>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Ved professionelt hjulskift kontrollerer vi også hjullejer, bremser og undervogn for slitage og skader. Særligt på Mercedes er korrekt momentspænding kritisk for at undgå skader på fælge og bolte.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Vi bruger moderne værktøj og følger producentens specifikationer til det bogstav.
                            </p>
                        </div>

                        <div className="bg-green-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-lg mb-4 text-gray-900">Hvorfor professionelt hjulskift?</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">Korrekt momentspænding for din bilmodel</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">Inspektion af bremser og undervogn</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">Kontrol af dæktryk og mønsterdybde</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">TPMS (dæktrykssensor) håndtering</span>
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
                                <Settings className="w-6 h-6 text-primary" />
                                Hjulskift Service
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Komplette hjulskiftsservice med alt hvad der skal til for at sikre din sikkerhed.
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Dæk på-/afmontering</li>
                                <li>• Momentspænding</li>
                                <li>• Dæktrykkontrol</li>
                                <li>• Bremseinspektion</li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Settings className="w-6 h-6 text-primary" />
                                Ekstra Kontroller
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Vi tjekker mere end bare hjulene for at sikre optimal sikkerhed og holdbarhed.
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Hjullejer inspektion</li>
                                <li>• Kontrol af bremser</li>
                                <li>• Kontrol af undervogn</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Important Info */}
                <section className="mb-16 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                    <h3 className="font-bold text-lg text-gray-900 mb-3">Vigtigt at vide</h3>
                    <p className="text-gray-700 mb-3">
                        <strong>TPMS (Dæktrykssensorer):</strong> Moderne biler med dæktrykssensorer kræver særlig håndtering ved hjulskift for at undgå fejlmeddelelser.
                    </p>
                    <p className="text-gray-700">
                        <strong>Mercedes-Specifikke Krav:</strong> Mercedes har ofte strengere krav til momentspænding og hjulspecifikationer. Vi følger fabrikantens anbefalinger.
                    </p>
                </section>

                {/* CTA Section */}
                <div className="bg-primary rounded-xl shadow-xl p-8 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Book dit hjulskift i dag</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Lad os tage hånd om dine hjul og sikre din sikkerhed på vejen
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
