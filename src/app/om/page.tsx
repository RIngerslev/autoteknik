"use client";
import React from 'react';
import {Car, Clock, MapPin, Users, Wrench} from 'lucide-react';
import {OpenMapsText} from "@/app/openMaps";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50 text-shadow-md">
            {/* Hero Section */}
            <div className="text-primary py-10 pt-30">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="text-2xl md:text-3xl font-bold">Om JMV Autoteknik</div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 pb-8">
                {/* Main Content Grid */}
                <div className="gap-12 mb-16">
                    {/* About Text */}
                    <div>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Hos JVM Autoteknik er vi specialister i professionel bilreparation og service. Med mange års erfaring og avanceret diagnostisk udstyr tilbyder vi service af højeste kvalitet til Mercedes-Benz og alle andre bilmærker.
                            </p>
                            <p>
                                Vi tror på ærlig rådgivning og transparent kommunikation. Når du kommer til os, får du en grundig gennemgang af din bils tilstand og en klar forklaring på, hvad der skal gøres. Ingen overraskelser, kun professionel håndværk.
                            </p>
                            <p>
                                Vores værksted er udstyret med moderne diagnoseværktøj og vi følger altid producentens anbefalinger. Vi bruger originale eller kvalitetsgodkendte dele for at sikre optimal ydeevne og lang levetid.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="grid md:grid-cols-2 gap-4 mt-8">
                            <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow">
                                <Car className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Alle Bilmærker</h3>
                                    <p className="text-sm text-gray-600">Specialister i Mercedes-Benz</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow">
                                <Wrench className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Moderne Udstyr</h3>
                                    <p className="text-sm text-gray-600">Avanceret diagnostik</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow">
                                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Bred Erfaring</h3>
                                    <p className="text-sm text-gray-600">Certificered mekaniker</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow">
                                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
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
                            <MapPin className="w-6 h-6 text-primary" />
                            Find værkstedet her
                        </h2>
                    </div>
                    <div className="relative w-full h-96 lg:h-[500px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2230.4!2d9.6!3d56.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTbCsDA2JzAwLjAiTiA5wrAzNicwMC4wIkU!5e0!3m2!1sda!2sdk!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="JVM Autoteknik Location"
                        />
                    </div>
                    <div className="p-4 bg-gray-50 text-black text-center">
                        <OpenMapsText />
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="mt-16 bg-primary rounded-xl shadow-xl p-12 text-white">
                    <h2 className="text-3xl font-bold mb-8 text-center">Hvorfor Vælge Os?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Wrench className="w-8 h-8" />
                            </div>
                            <h3 className="font-semibold text-xl mb-2">Kvalitet</h3>
                            <p className="text-blue-100">
                                Vi står 100% bag vores arbejde og bruger kun kvalitetsdele
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="font-semibold text-xl mb-2">Erfaring</h3>
                            <p className="text-blue-100">
                                Mange års erfaring med alle bilmærker, især Mercedes-Benz
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-8 h-8" />
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
    );
}