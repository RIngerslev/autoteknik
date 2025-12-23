import React from 'react';
import { Wrench, Cpu, Settings, CheckCircle } from 'lucide-react';
import {IconButton} from "@/app/buttons/iconButton";

export default function ReparationerPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="flex justify-center items-center my-10">
                    <div className="text-primary font-bold text-2xl md:text-3xl md:my-5">Professionelle Bilreparationer</div>
                </div>
                {/* Elektronisk Fejlfinding */}
                <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
                    <div className="flex items-center mb-6">
                        <Cpu className="w-12 h-12 text-primary mr-4" />
                        <h2 className="text-3xl font-bold text-gray-900">Elektronisk Fejlfinding</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Moderne biler, særligt Mercedes-Benz, er udstyret med avancerede computersystemer der styrer alt fra motor og gearkasse til sikkerhedssystemer og komfortfunktioner. Når en fejl opstår, viser det sig ofte kun som en advarsellampe på instrumentbrættet.
                            </p>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Med professionel diagnostisk udstyr kan vi læse fejlkoder direkte fra bilens computer og identificere problemets præcise årsag. Dette sparer tid og penge, da vi undgår unødvendig udskiftning af dele.
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
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Hjulskift */}
                <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
                    <div className="flex items-center mb-6">
                        <Settings className="w-12 h-12 text-primary mr-4" />
                        <h2 className="text-3xl font-bold text-gray-900">Professionelt Hjulskift</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
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
                                    <span className="text-gray-700">Beskyttelse mod rust og korrosion</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Sæsonhjulskift er ikke kun et lovkrav, men også afgørende for din sikkerhed og bilens ydeevne. Vinterdæk i sommervarme slides hurtigere, mens sommerdæk på is og sne reducerer vejgrebet markant.
                            </p>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Ved professionelt hjulskift kontrollerer vi også hjullejer, bremser og undervogn for slitage og skader. Særligt på Mercedes-Benz er korrekt momentspænding kritisk for at undgå skader på fælge og bolte.
                            </p>
                            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
                                <p className="text-sm text-gray-700">
                                    <strong>Vigtigt:</strong> Moderne biler med dæktrykssensorer (TPMS) kræver særlig håndtering ved hjulskift for at undgå fejlmeddelelser.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service */}
                <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
                    <div className="flex items-center mb-6">
                        <Wrench className="w-12 h-12 text-primary mr-4" />
                        <h2 className="text-3xl font-bold text-gray-900">Regelmæssig Service</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Regelmæssig service er den bedste investering i din bils levetid. Mercedes-Benz og andre premium biler er konstrueret til at holde i mange år, men kun hvis de vedligeholdes korrekt efter producentens anbefalinger.
                            </p>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Ved et serviceeftersyn udskifter vi motorolie og filtre, kontrollerer væsker, bremser, dæk, lys og alle sikkerhedskritiske komponenter. Dette forebygger nedbrud og sikrer optimal brændstofeffektivitet.
                            </p>

                            <div className="bg-gray-50 p-4 rounded-lg mt-6">
                                <h4 className="font-semibold mb-3 text-gray-900">Typisk service inkluderer:</h4>
                                <ul className="space-y-2 text-sm text-gray-700">
                                    <li>• Olie- og filterskift</li>
                                    <li>• Kontrol af kølevæske og bremsevæske</li>
                                    <li>• Inspektion af bremser og dæk</li>
                                    <li>• Test af lys og elektronik</li>
                                    <li>• Luftfilterskift</li>
                                    <li>• Computerdiagnostik</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-green-50 p-6 rounded-lg">
                            <h3 className="font-semibold text-lg mb-4 text-gray-900">Fordele ved regelmæssig service</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">Forlænger bilens levetid betydeligt</span>
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

                            <div className="mt-6 pt-6 border-t border-green-200">
                                <p className="text-sm text-gray-700 italic">
                                    Mercedes-Benz anbefaler service hvert år eller hver 15.000-20.000 km, afhængigt af model og køremønster.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-primary text-white rounded-lg shadow-xl p-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Book Dit Næste Service</h2>
                    <p className="text-xl mb-6 text-blue-100">
                        Kontakt os i dag for professionel rådgivning og en uforpligtende pris
                    </p>
                    <div className="flex justify-center items-center gap-x-3">
                        <IconButton className="bg-white text-primary" text='Bestil tid' iconName='phonePrimary' href="tel:30237077"/>
                        <IconButton className="bg-white text-primary" text='Send e-mail' iconName='mailPrimary' href="mailto:jacobingerslev@hotmail.com"/>
                    </div>
                </section>
            </div>
        </div>
    );
}