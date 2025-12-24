"use client";
import { MapPin, Clock, Phone, Mail, Wrench, Users } from 'lucide-react';
import {OpenMapsText, OpenMapsTextOnly} from "@/app/openMaps";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gray-700 text-white py-10 pt-25">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-6">Kontakt JVM Autoteknik</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Dit lokale autoværksted med specialisering i Mercedes-Benz
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-16">
                {/* Main Content Grid */}
                <div className="mb-14">

                    {/* Contact Information */}
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="bg-white rounded-xl shadow-lg p-8 top-4 w-full md:w-1/2">
                            <h2 className=" flex justify-center text-2xl font-bold text-gray-900 mb-6">Åbningstider</h2>

                            {/* Opening Hours */}
                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <Clock className="w-5 h-5 text-green-600" />
                                    <h3 className="font-semibold text-lg text-gray-900">Ugedage</h3>
                                </div>
                                <div className="space-y-2 text-gray-700">
                                    <div className="flex justify-between py-2 border-b border-gray-100">
                                        <span>Mandag - Fredag</span>
                                        <span className="font-semibold">08:00 - 16:00</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-gray-100">
                                        <span>Lørdag</span>
                                        <span className="font-semibold text-red-600">Lukket</span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <span>Søndag</span>
                                        <span className="font-semibold text-red-600">Lukket</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                            {/* Contact Details */}
                            <div className="bg-white rounded-xl shadow-lg p-8 top-4 w-full md:w-1/2">
                                <h2 className="flex justify-center text-2xl font-bold text-gray-900 mb-6">Kontakt</h2>
                                <div className="space-y-4">
                                 <div className="flex items-start gap-3">
                                     <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                     <div className="flex-1 text-black">
                                         <h3 className="font-semibold text-gray-900 mb-1">Adresse</h3>
                                         <div className="hover:text-green-600">
                                             <OpenMapsTextOnly />
                                         </div>
                                     </div>
                                 </div>

                                 <div className="flex items-start gap-3">
                                     <Phone className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                     <div className="flex-1">
                                         <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                                         <a href="tel:30237077" className="text-gray-700 hover:text-green-600 transition-colors">
                                             30 23 70 77
                                         </a>
                                     </div>
                                 </div>

                                 <div className="flex items-start gap-3">
                                     <Mail className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                     <div className="flex-1">
                                         <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                         <a href="mailto:ingerslev-autoteknik@example.com" className="text-gray-700 hover:text-green-600 transition-colors break-all">
                                             ingerslev-autoteknik@example.com
                                         </a>
                                     </div>
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
                    <h2 className="text-3xl font-bold mb-8 text-center">Hvorfor Vælge JVM Autoteknik?</h2>
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