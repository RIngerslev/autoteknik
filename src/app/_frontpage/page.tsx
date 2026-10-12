import Image from 'next/image'
import {IconButton} from '../buttons/iconButton'
import {OpenMapsText} from '../openMaps'
import ImageSlider from "@/app/swiper";

export default function Frontpage() {

    return (
        <div className='w-full flex flex-col items-center justify-center bg-gray-50 text-shadow-md mb-5'>
            <div className="relative w-full h-[250px] md:h-[450px] shadow-lg">
                <Image
                    src="/mercedes-benz.webp"
                    alt="mercedes"
                    fill
                    sizes="(max-width: 768px) 100vw, 100vw"
                    className="object-cover scale-x-[-1]"
                    fetchPriority="high"
                    loading="eager"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                    <div className="flex flex-col items-center gap-y-2">
                        <Image src="JMV-logo-optimized.svg" alt="Logo" width={400} height={400} fetchPriority="high"
                               className="mb-4 size-1/2 md:size-1/4"/>
                        <div className="flex items-center gap-x-3">
                            <IconButton className="bg-primary text-white" text='Bestil tid' iconName='phone'
                                        href="tel:+4530237077"/>
                            <IconButton className="bg-primary text-white" text='Send e-mail' iconName='mail'
                                        href="mailto:kontakt@jmv-autoteknik.dk"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-5xl'>
                <div className="text-black grid grid-cols-1 md:grid-cols-2 gap-6 md:my-8">
                    <div className='mx-3 md:mr-2 text-xl'>
                        <h2 className='text-center text-2xl font-bold mt-4'>Mercedes specialist i Silkeborg</h2>
                        <p className='mt-4 text-lg'>
                            Ekspert i Midtjylland med mange års erfaring i avanceret fejlsøgning og reparationer. Fra
                            vores værksted i Jylland tilbyder vores mekaniker professionel service, høj kvalitet og
                            stærk teknisk ekspertise til jyske priser.
                        </p>
                    </div>
                    <div
                        className='bg-primary mx-2 px-5 py-4 mb-10 flex flex-col text-white rounded-2xl shadow-2xl text-lg'>
                        <h2 className='font-bold text-center text-2xl'>Faste priser</h2>
                        <ul className='flex flex-col mt-4 gap-y-1'>
                            <li className="flex justify-between items-center">
                                <p>Timepris</p>
                                <p>650 kr. inkl. moms</p>
                            </li>
                            <li className="flex justify-between items-center">
                                <p>Stor gennemgang</p>
                                <p>650 kr. inkl. moms</p>
                            </li>
                            <li className="flex justify-between items-center">
                                <p>Diagnose via tester</p>
                                <p>495 kr. inkl. moms</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-[100vw] mx-auto md:w-full mb-15">
                    <ImageSlider/>
                </div>
                <div className="text-black grid grid-cols-1 md:grid-cols-2 gap-6 my-4 mx-2">
                    <div className='bg-primary px-5 py-4 mb-10 flex flex-col text-white rounded-2xl shadow-2xl'>
                        <h2 className='font-bold'>Få gennemgået din bil</h2>
                        <div className="flex gap-y-1 flex-wrap">
                            <h2>Undgå kostbare reparationer med en grundig gennemgang.</h2>
                            <h2>Som Mercedes-ekspert bliver fejlene fundet tidligt og holder din bil kørende
                                optimalt.</h2>
                        </div>
                        <h2 className="mt-5 mb-1 font-bold">Hvad får du:</h2>
                        <ul className="text-white">
                            <li>✔ Professionel testkørsel</li>
                            <li>✔ Komplet gennemgang på lift</li>
                            <li>✔ Undervogns- og motorrumstjek</li>
                            <li>✔ Væske- og elsystemkontrol</li>
                        </ul>
                        <h2 className='mt-5 font-bold'>Pris: 650 kr. inkl. moms</h2>
                    </div>
                    <div>
                        <Image
                            src="/jacob-no-background.webp"
                            alt="Ejer af værkstedet står med arme over kors"
                            width={160}
                            height={200}
                            className="mx-auto p-1 rounded-xl"
                        />
                    </div>
                    <div className='mx-3 md:mr-2 px-4 text-xl'>
                        <h2 className='text-center font-bold mt-4'>Mercedes- og personbil-mekaniker i Silkeborg</h2>
                        <p className='mt-4'>
                            Erfaren Mercedes mekaniker specialiseret i avanceret fejlsøgning, motor- og
                            gearkasse-reparationer samt serviceeftersyn. Vi tilbyder reparationer og vedligeholdelse
                            for personbiler.
                        </p>

                        <h2 className='text-center font-bold mt-6'>Fornuftige priser, hurtig service og god
                            kvalitet</h2>
                        <p className='mt-4'>
                            JMV Autoteknik leverer gennemsigtige priser, god værkstedsservice og kort ventetid.
                            Ideelt for bilejere i Silkeborg der søger en mekaniker, der har solid erfaring med
                            reparationer og service til Mercedes samt andre biler.
                        </p>
                    </div>
                    <div className='text-primary text-center my-auto font-bold'>
                        <h2 className='my-2 text-black'>Speciale i Mercedes</h2>
                        <h2 className='my-4 text-black'>Medlem af:</h2>
                        <a
                            href="https://www.dbr-silkeborg.dk/jmv-autoteknik/g/0d1fa946-12e9-4a73-8c3e-1cac97b06b51"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Se JMV Autoteknik hos Dansk Bilbrancheråd"
                        >
                            <Image
                                src="/DBR-RBG.svg"
                                alt="Dansk Bilbrancheråd"
                                width={709}
                                height={191}
                                className="mx-auto w-[300px] h-auto"
                            />
                        </a>
                        <div className='flex mt-4 mx-4'>
                        </div>
                        <div className='mt-6 text-black'>
                            <OpenMapsText/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}