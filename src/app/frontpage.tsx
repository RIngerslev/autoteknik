import Image from 'next/image'
import { IconButton } from './buttons/iconButton'
import { OpenMapsText } from './openMaps'

export function Frontpage() {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className="relative w-full h-[250px] md:h-[450px] shadow-lg">
        <Image
          src="/mercedes-benz.jpg"
          alt="Fysioterapi Logo"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <div className="flex flex-col items-center gap-y-2">
            <div className="text-white text-3xl text-center md:text-5xl font-bold drop-shadow-lg mb-2">
              JACOB AUTOTEKNIK
            </div>
            <div className="flex items-center gap-x-3">
              <IconButton text='Bestil tid' iconName='phone' href="tel:88888888" />
              <IconButton text='Send e-mail' iconName='mail' href="mailto:jacobingerslev@hotmail.com" />
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-5xl'>
        <div className="text-black grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className='mr-2 text-xl'>
            <h1 className='text-center font-bold mt-4'>Mercedes og AMG specialist</h1>
            <h2 className='mt-4'>
              <span className='font-bold'>Her er der mange års erfaring med optimering og reperationer</span>{' '}
              Jacobs biler, her mødes kvalitet og konkurrencedygtige priser. Få mere for pengene.
            </h2>
          </div>
          <div className='bg-[#264230] mx-2 px-5 py-4 mb-10 flex flex-col text-white rounded-2xl shadow-2xl'>
            <h1 className='font-bold text-center'>Faste priser</h1>
            <ul className='flex flex-col mt-4 gap-y-1'>
              <li className="flex justify-between items-center">
                <p>Timepris</p>
                <p>750 kr. inkl. moms</p>
              </li>
              <li className="flex justify-between items-center">
                <p>Stor gennemgang</p>
                <p>550 kr. inkl. moms</p>
              </li>
              <li className="flex justify-between items-center">
                <p>Diagnose via tester</p>
                <p>750 kr. inkl. moms</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex gap-x-5 justify-center mb-15'>
          <div className='h-60 w-50 bg-[#264230] rounded-xl shadow-2xl'>
            <Image
              src="/car.jpg"
              alt="Fysioterapi Logo"
              width={400}
              height={230}
              className="object-cover rounded-t-2xl shadow-2xl"
            />
            <div className='text-center text-white p-4'>
              <h2 className='text-center text-sm font-bold'>Service A/B</h2>
              <p>Service laves på alle mercedes biler</p>
            </div>
          </div>
          <div className='h-60 w-50 bg-[#264230] rounded-xl shadow-2xl'>
            <Image
              src="/car.jpg"
              alt="Fysioterapi Logo"
              width={400}
              height={230}
              className="object-cover rounded-t-2xl shadow-2xl"
            />
            <div className='text-center text-white p-4'>
              <h2 className='text-center text-sm font-bold'>Service A/B</h2>
              <p>Service laves på alle mercedes biler</p>
            </div>
          </div>
          <div className='h-60 w-50 bg-[#264230] rounded-xl shadow-2xl'>
            <Image
              src="/car.jpg"
              alt="Fysioterapi Logo"
              width={400}
              height={230}
              className="object-cover rounded-t-2xl shadow-2xl"
            />
            <div className='text-center text-white p-4'>
              <h2 className='text-center text-sm font-bold'>Service A/B</h2>
              <p>Service laves på alle mercedes biler</p>
            </div>
          </div>
          <div className='h-60 w-50 bg-[#264230] rounded-xl shadow-2xl'>
            <Image
              src="/car.jpg"
              alt="Fysioterapi Logo"
              width={400}
              height={230}
              className="object-cover rounded-t-2xl shadow-2xl"
            />
            <div className='text-center text-white p-4'>
              <h2 className='text-center text-sm font-bold'>Service A/B</h2>
              <p>Service laves på alle mercedes biler</p>
            </div>
          </div>
        </div>
        <div className="text-black grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
          <div className='bg-[#264230] px-3 py-3 mb-10 flex flex-col text-white rounded-2xl shadow-2xl'>
            <h1 className='font-bold'>Få gennemgået din bil</h1>
            <h2>Undgå kostbare reparationer med en grundig gennemgang. Som Mercedes-specialist bliver fejlene fundet tidligt og holder din bil kørende optimalt.</h2>
            <h2 className="mt-5 mb-1 font-bold">Hvad får du:</h2>
            <ul>
              <li>✔ Professionel testkørsel</li>
              <li>✔ Komplet gennemgang på lift</li>
              <li>✔ Undervogns- og motorrumstjek</li>
              <li>✔ Væske- og elsystemkontrol</li>
            </ul>
            <h2 className='mt-5 font-bold'>Pris: 750 kr. inkl. moms</h2>
          </div>
          <div className='text-black text-center mb-10 font-bold'>
            <h1 className='my-2'>Specialist i Mercedes</h1>
            <div className='flex mt-8 mx-4'>
              <div className='bg-gray-600 p-2 rounded-l-full shadow-lg'>
                <Image
                  src="/Mercedes-Logo.svg"
                  alt="Beskrivelse"
                  width={130}
                  height={70}
                  className="mx-auto bg-white p-1 rounded-full"
                />
              </div>
              <Image
                src="/trustpilot.png"
                alt="Beskrivelse"
                width={322}
                height={70}
                className="mx-auto bg-gray-100 border-5 pr-6 rounded-r-full border-gray-600"
              />
            </div>
            <div className='mt-6'>
              <OpenMapsText />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}