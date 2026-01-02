import Image from 'next/image'
import {IconButton} from './buttons/iconButton'
import {OpenMapsText} from './openMaps'
import ImageSlider from "@/app/swiper";

export function Frontpage() {

    return (
        <div className='w-full flex flex-col items-center justify-center bg-gray-50 text-shadow-md'>
            <div className="relative w-full h-[250px] md:h-[450px] shadow-lg">
                <Image
                    src="/mercedes-benz.jpg"
                    alt="mercedes"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                    <div className="flex flex-col items-center gap-y-2">
                        <Image src="JMV-logo-optimized.svg" alt="Logo" width={400} height={400} className="mb-4 size-1/2 md:size-1/4"/>
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
                <div className="text-black grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className='mx-3 md:mr-2 text-xl'>
                        <h1 className='text-center font-bold mt-4'>Mercedes & AMG specialist</h1>
                        <h2 className='mt-4'>
                            Her er der mange års erfaring med fejlsøgning og reperationer. JMV Autoteknik her mødes
                            kvalitet og konkurrencedygtige priser.
                        </h2>
                    </div>
                    <div className='bg-primary mx-2 px-5 py-4 mb-10 flex flex-col text-white rounded-2xl shadow-2xl'>
                        <h1 className='font-bold text-center'>Faste priser</h1>
                        <ul className='flex flex-col mt-4 gap-y-1'>
                            <li className="flex justify-between items-center">
                                <p>Timepris</p>
                                <p>750 kr. inkl. moms</p>
                            </li>
                            <li className="flex justify-between items-center">
                                <p>Stor gennemgang</p>
                                <p>750 kr. inkl. moms</p>
                            </li>
                            <li className="flex justify-between items-center">
                                <p>Diagnose via tester</p>
                                <p>550 kr. inkl. moms</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-[100vw] mx-auto md:w-full mb-15">
                    <ImageSlider/>
                </div>
                <div className="text-black grid grid-cols-1 md:grid-cols-2 gap-6 my-4 mx-2">
                    <div className='bg-primary px-3 py-3 mb-10 flex flex-col text-white rounded-2xl shadow-2xl'>
                        <h1 className='font-bold'>Få gennemgået din bil</h1>
                        <h2>Undgå kostbare reparationer med en grundig gennemgang. Som Mercedes-specialist bliver
                            fejlene fundet tidligt og holder din bil kørende optimalt.</h2>
                        <h2 className="mt-5 mb-1 font-bold">Hvad får du:</h2>
                        <ul className="text-white">
                            <li>✔ Professionel testkørsel</li>
                            <li>✔ Komplet gennemgang på lift</li>
                            <li>✔ Undervogns- og motorrumstjek</li>
                            <li>✔ Væske- og elsystemkontrol</li>
                        </ul>
                        <h2 className='mt-5 font-bold'>Pris: 750 kr. inkl. moms</h2>
                    </div>
                    <div className='text-primary text-center mb-10 font-bold'>
                        <h1 className='my-2'>Speciale i Mercedes</h1>
                        <div className='flex mt-8 mx-4'>
                            <div className='bg-primary p-2 rounded-l-full shadow-lg'>
                                <Image
                                    src="/Mercedes-Logo.svg"
                                    alt="Beskrivelse"
                                    width={130}
                                    height={70}
                                    className="mx-auto bg-white p-1 rounded-full"
                                />
                            </div>
                            <div className="mx-auto bg-gray-100 border-5 pr-6 rounded-r-full border-primary">
                                <div className="text-3xl md:text-4xl text-start ml-4 my-2 font-extrabold">
                                    KVALITET
                                    & ORDENLIGHED
                                </div>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <OpenMapsText/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}