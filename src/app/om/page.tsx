import React from 'react';
import {Car, Clock, MapPin, Users, Wrench} from 'lucide-react';
import {OpenMapsText} from "@/app/openMaps";
import {OrganizationSchema} from "@/components/OrganizationSchema";
import Image from "next/image";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Om JMV Autoteknik | Dit ekspert værksted i Silkeborg - Industrivej 1",
    description:
        "Lær mere om JMV Autoteknik, dit pålidelige autoværksted i Silkeborg med speciale i Mercedes. Vi tilbyder ærlig rådgivning og kvalitetsservice.",
    openGraph: {
        title: "Om JMV Autoteknik – Autoværksted i Silkeborg",
        description:
            "Dit værksted i Silkeborg. Læs om JMV Autotekniks erfaring, værdier og engagement i kvalitetsservice.",
        locale: "da_DK",
        type: "website",
    },
    alternates: {
        canonical: 'https://jmv-autoteknik.dk/om',
    }
}

export default function AboutPage() {
    return (
        <>
            <OrganizationSchema/>
            <div className="min-h-screen bg-gray-50 text-shadow-md">
                {/* Hero Section */}
                <div className="text-primary py-10 pt-30">
                    <div className="max-w-6xl mx-auto text-center">
                        <div className="text-2xl md:text-3xl font-bold">Om JMV Autoteknik</div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 pb-8 pt-4">
                    {/* Main Content Grid */}
                    <div className="gap-12 mb-16">
                        {/* About Text */}
                        <div>
                            <div className="space-y-4 text-black leading-relaxed">
                                <div className="flex flex-col md:flex-row items-center gap-6">
                                    <div className="mr-5">
                                        <h1 className="flex text-primary">Erfaring, kvalitet og passion for Mercedes</h1>
                                    <p>
                                        Hos JMV Autoteknik står mange års erfaring fra autoriserede og specialiserede
                                        værksteder bag. Vi har speciale i Mercedes, men servicerer alle bilmærker med
                                        moderne diagnoseudstyr og kvalitets dele.
                                    </p>
                                    <p>
                                        Vi tror på ærlig rådgivning og transparent kommunikation. Du får altid en
                                        grundig
                                        gennemgang af din bils tilstand og en klar forklaring på, hvad der skal gøres.
                                        Her
                                        er ingen overraskelser, kun professionelt håndværk vi selv kan stå inde for.
                                    </p>
                                        <h1 className="flex pt-4 text-primary">Ærlighed, kvalitet og faglig
                                            stolthed</h1>
                                        <p>Et godt værkstedsbesøg handler om tillid. Derfor er ærlig rådgivning og klar
                                            kommunikation i fokus. Alle reparationer forklares tydeligt – ingen overraskelser,
                                            kun det nødvendige.</p>

                                        <h1 className="flex pt-4 text-primary">Din bil er i trykke hænder</h1>
                                        <p>JMV Autoteknik kombinerer mange års erfaring med faglig stolthed og passion for
                                            detaljen. Med speciale i Mercedes bliver hver bil behandlet med samme omhu og
                                            professionalisme – uanset om det er service eller reparation.</p>
                                    </div>
                                    <Image
                                        src="/jacob-desk.webp"
                                        alt="Ejer af værkstedet står med arme over kors"
                                        width={350}
                                        height={250}
                                        className="mx-auto p-1 rounded-xl"
                                    />
                                </div>
                            </div>

                            {/* Features */}
                            <div className="grid md:grid-cols-2 gap-4 mt-8">
                                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow">
                                    <Car className="w-6 h-6 text-primary flex-shrink-0 mt-1"/>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Alle Bilmærker</h3>
                                        <p className="text-sm text-gray-600">Specialister i Mercedes</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow">
                                    <Wrench className="w-6 h-6 text-primary flex-shrink-0 mt-1"/>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Moderne Udstyr</h3>
                                        <p className="text-sm text-gray-600">Avanceret diagnostik</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow">
                                    <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1"/>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Bred Erfaring</h3>
                                        <p className="text-sm text-gray-600">Certificered mekaniker</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow">
                                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1"/>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Fleksible Tider</h3>
                                        <p className="text-sm text-gray-600">Ring eller send mail</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Google Maps Embed */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="p-6 bg-gray-50 border-b border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                                <MapPin className="w-6 h-6 text-primary"/>
                                Find værkstedet her
                            </h2>
                        </div>
                        <div className="relative w-full h-96 lg:h-[500px]">
                            <iframe
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Industrivej%201+(JMV%20Autoteknik)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                width="100%"
                                height="100%"
                                style={{border: 0}}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="JMV Autoteknik Location"
                            />
                        </div>

                        <div className="p-4 bg-gray-50 text-black text-center">
                            <OpenMapsText/>
                        </div>
                    </div>

                    {/* Why Choose Us Section */}
                    <div className="mt-16 bg-primary rounded-xl shadow-xl p-12 text-white">
                        <h2 className="text-3xl font-bold mb-8 text-center">Hvorfor Vælge Os?</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div
                                    className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Wrench className="w-8 h-8"/>
                                </div>
                                <h3 className="font-semibold text-xl mb-2">Kvalitet</h3>
                                <p className="text-blue-100">
                                    Vi står 100% bag vores arbejde og bruger kun kvalitetsdele
                                </p>
                            </div>
                            <div className="text-center">
                                <div
                                    className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-8 h-8"/>
                                </div>
                                <h3 className="font-semibold text-xl mb-2">Erfaring</h3>
                                <p className="text-blue-100">
                                    Mange års erfaring med Mercedes og forskellige bilmærker
                                </p>
                            </div>
                            <div className="text-center">
                                <div
                                    className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Clock className="w-8 h-8"/>
                                </div>
                                <h3 className="font-semibold text-xl mb-2">Service</h3>
                                <p className="text-blue-100">
                                    Personlig service og ærlig rådgivning uden skjulte gebyrer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}