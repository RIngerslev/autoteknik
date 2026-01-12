import React from 'react';
import {Droplets, Thermometer, Calendar, Shield, Clock, CheckCircle, AlertCircle} from 'lucide-react';
import {IconButton} from "@/app/buttons/iconButton";

export const metadata = {
    title: "JMV Autoteknik | Dit ekspert værksted i Silkeborg - Industrivej 1",
    description:
        "Professionelt autoværksted i Silkeborg med speciale i Mercedes. Ring på 30237077. Her foretages service og reparationer af alle bilmærker.",
    openGraph: {
        url: 'https://jmv-autoteknik.dk/service',
    },
    alternates: { canonical: 'https://jmv-autoteknik.dk/service' },
};

export default function ServicePage() {
    const services = [
        {
            icon: <Droplets className="w-12 h-12 text-green-700"/>,
            title: "Olieskift",
            interval: "Hvert år eller 25.000 km",
            description: "Motorolie er bilens livsnerve og afgørende for motorens levetid. Gammel olie mister sine smøreegenskaber og kan føre til øget slitage og i værste fald motorskade.",
            includes: [
                "Udskiftning af motorolie",
                "Nyt oliefilter",
                "Kontrol af olieniveau",
                "Inspektion af lækage",
            ],
            color: "green"
        },
        {
            icon: <Thermometer className="w-12 h-12 text-green-700"/>,
            title: "Kølervæske Skift",
            interval: "Hver 2-4 år",
            description: "Kølervæske holder motoren ved optimal temperatur og beskytter mod frost og korrosion. Gammel kølervæske mister sine beskyttende egenskaber og kan føre til overophedning.",
            includes: [
                "Udskiftning af kølervæske",
                "Trykprøvning af kølesystem",
                "Inspektion af slanger og klemmer",
            ],
            color: "green"
        },
        {
            icon: <Calendar className="w-12 h-12 text-green-700"/>,
            title: "Periodisk Service",
            interval: "Hvert år eller 25.000 km",
            description: "Regelmæssig service efter producentens anbefalinger sikrer, at din bil kører optimalt og bevarer sin værdi. Vi følger fabrikantens forskrifter",
            includes: [
                "Olie- og filterskift",
                "Kontrol af alle væsker",
                "Bremseinspektion",
                "Dæk og hjulopphæng",
                "Kontrol af lys og lygter",
                "Computerdiagnostik",
            ],
            color: "green"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 text-shadow-md">
            {/* Hero Section */}
            <div className="flex justify-center items-center flex-col pt-25">
                <div className="text-primary font-bold text-2xl md:text-3xl my-5">Service & Vedligeholdelse</div>
                <p className="text-xl text-black max-w-3xl mx-5">
                    Hold din bil i topform med professionel service. Vi tilbyder alle former for vedligeholdelse til
                    Mercedes og andre bilmærker.
                </p>
            </div>

            {/* Services Grid */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-1 gap-8">
                    {services.map((service, index) => (
                        <div key={index}
                             className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="p-8">
                                <div className="flex items-start gap-6">
                                    <div className="flex flex-col">
                                        <div className="hidden md:flex">
                                            <div
                                                className={`flex justify-center items-center bg-${service.color}-50 px-5 py-2 my-5 mr-5 rounded-full flex-shrink-0`}>
                                                {service.icon}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-3">
                                                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                                                    <span
                                                        className={`px-4 py-2 bg-green-700 text-white rounded-full text-sm font-semibold flex items-center gap-2`}>
                                                    <Clock className="w-4 h-4"/>
                                                        {service.interval}
                                                 </span>
                                                </div>

                                                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex md:hidden">
                                            <div className="flex-1">
                                                <div className="flex flex-row">
                                                    <div
                                                        className={`flex justify-center items-center bg-${service.color}-50 px-3 py-3 my-1 mr-5 rounded-full flex-shrink-0`}>
                                                        {service.icon}
                                                    </div>
                                                    <div>
                                                    <h2 className="text-3xl font-bold text-gray-900 ml-1">{service.title}</h2>
                                                    <span
                                                        className={`px-3 py-2 mt-2 bg-${service.color}-700 text-white rounded-full text-[0.7rem] font-semibold flex items-center gap-2`}>
                                                    <Clock className="w-3 h-3"/>
                                                        {service.interval}
                                                 </span>
                                                    </div>
                                                </div>

                                                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className={`bg-${service.color}-50 rounded-lg p-6`}>
                                            <h3 className="font-semibold text-lg mb-4 text-gray-900 flex items-center gap-2">
                                                <Shield className={`w-5 h-5 text-${service.color}-700`}/>
                                                Hvad er inkluderet:
                                            </h3>
                                            <ul className="space-y-3">
                                                {service.includes.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <CheckCircle
                                                            className={`w-5 h-5 text-${service.color}-700 flex-shrink-0 mt-0.5`}/>
                                                        <span className="text-gray-700">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Why Service Section */}
                <div className="mt-16 bg-primary rounded-xl shadow-xl p-8 text-white">
                    <h2 className="text-3xl font-bold mb-6 text-center">Hvorfor er Service Vigtigt?</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                            <div className="flex flex-row">
                            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                                <Shield className="w-6 h-6"/>
                            </div>
                            <div className="font-semibold text-xl ml-3 mt-3">Sikkerhed</div>
                            </div>
                            <p className="text-blue-100">
                                Regelmæssig service identificerer potentielle problemer før de bliver farlige og sikrer
                                at alle sikkerhedssystemer fungerer optimalt.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                            <div className="flex flex-row">
                            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                                <Droplets className="w-6 h-6"/>
                            </div>
                            <div className="font-semibold text-xl ml-3 mt-3">Økonomi</div>
                            </div>
                            <p className="text-blue-100">
                                Forebyggende vedligeholdelse er langt billigere end akutte reparationer. En serviceret
                                bil bruger også mindre brændstof og holder længere.
                            </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                            <div className="flex flex-row">
                            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                                <Calendar className="w-6 h-6"/>
                            </div>
                            <h3 className="font-semibold text-xl ml-3 mt-3">Værdi</h3>
                            </div>
                            <p className="text-blue-100">
                                En bil med dokumenteret servicehistorik har en betydeligt højere gensalgsværdi og er
                                nemmere at sælge når tiden kommer.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Service Intervals */}
                <div className="mt-16 bg-white rounded-xl shadow-lg p-1 pt-4 md:pt-8 md:p-8">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Service Intervaller</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                            <tr className="border-b-2 border-gray-200">
                                <th className="text-left py-4 px-4 font-semibold text-gray-900">Service Type</th>
                                <th className="text-left py-4 px-4 font-semibold text-gray-900">Interval</th>
                                <th className="text-left py-4 px-4 font-semibold text-gray-900">Vigtighed</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 text-black">
                            <tr className="hover:bg-gray-50">
                                <td className="py-4 px-4">Motorolie & Filter</td>
                                <td className="py-4 px-4">Hvert år / 25.000 km</td>
                                <td className="py-4 px-4">
                                    <span
                                        className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">Kritisk</span>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="py-4 px-4">Luftfilter</td>
                                <td className="py-4 px-4">Hver 60.000 km</td>
                                <td className="py-4 px-4">
                                    <span
                                        className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">Vigtig</span>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="py-4 px-4">Brændstoffilter</td>
                                <td className="py-4 px-4">Hver 60.000 km</td>
                                <td className="py-4 px-4">
                                    <span
                                        className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">Vigtig</span>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="py-4 px-4">Tændrør</td>
                                <td className="py-4 px-4">Hver 60.000 km</td>
                                <td className="py-4 px-4">
                                    <span
                                        className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">Vigtig</span>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="py-4 px-4">Bremsevæske</td>
                                <td className="py-4 px-4">Hver 2 år</td>
                                <td className="py-4 px-4">
                                    <span
                                        className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">Kritisk</span>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="py-4 px-4">Kølervæske</td>
                                <td className="py-4 px-4">Hver 2-4 år</td>
                                <td className="py-4 px-4">
                                    <span
                                        className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">Høj</span>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="py-4 px-4">Gearkasseolie</td>
                                <td className="py-4 px-4">Hver 120.000 km</td>
                                <td className="py-4 px-4">
                                    <span
                                        className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">Vigtig</span>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="py-4 px-4">Kæde / Tandrem</td>
                                <td className="py-4 px-4">Hver 200.000 km</td>
                                <td className="py-4 px-4">
                                    <span
                                        className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">Kritisk</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mx-3 mb-3">
                        <div className="flex gap-3">
                            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5"/>
                            <div>
                                <p className="font-semibold text-gray-900 mb-1">Bemærk:</p>
                                <p className="text-gray-700 text-sm">
                                    Serviceintervaller kan variere afhængigt af bilmodel, årgang og køremønster.
                                    Mercedes modeller har ofte specifikke krav. Kontakt os for en skræddersyet
                                    serviceplan til din bil.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 bg-primary rounded-xl shadow-xl p-5 text-center text-white">
                    <h2 className="text-4xl font-bold mb-4">Klar til Service?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Book dit næste service i dag og få professionel pleje af din bil
                    </p>
                    <div className="flex justify-center items-center gap-x-3">
                        <IconButton className="bg-white text-primary" text='Bestil tid' iconName='phonePrimary'
                                    href="tel:30237077"/>
                        <IconButton className="bg-white text-primary" text='Send e-mail' iconName='mailPrimary'
                                    href="mailto:kontakt@jmv-autoteknik.dk"/>
                    </div>
                </div>
            </div>
        </div>
    );
}