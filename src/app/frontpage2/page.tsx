import Image from 'next/image'
import Link from "next/link";

export default function Hero() {
    return (
        //#ea9401
        <div className="relative w-full h-[250px] md:h-[450px] shadow-lg bg-[#f7a901] overflow-x-hidden">
            <div className="flex justify-center items-center h-full">
                <div className="relative flex items-center justify-center bg-gradient-to-b from-[#0f0f10] via-[#141416] to-[#050505] h-full flex-1 p-8 z-30 -mr-16 -ml-[100vw] pl-[100vw]" //#ea7401
                     style={{animation: 'slideInLeft 1s ease-out',
                         clipPath: 'polygon(100% 0%, 94% 50%, 100% 100%, 0 100%, 0% 50%, 0 0)',
                        }}
                     //clipPath: 'polygon(100% 0%, 95% 50%, 90% 100%, 0 100%, 0% 50%, 0 0)',}}
                >
                    <div className="flex flex-col items-center gap-y-3 relative z-10 opacity-0"
                         style={{animation: 'fadeIn 0.5s ease-out 1s forwards'}}>
                        <h1 className="text-center text-2xl md:text-4xl">Dit Mercedes Værksted</h1>
                        <div className="flex items-center gap-x-3">
                            <Link
                                href="tel:+4530237077"
                                className="bg-white text-black inline-flex items-center px-3 py-1.5 rounded-3xl cursor-pointer active:shadow-none shadow-lg shadow-white/10 font-semibold"
                            >
                                Ring
                                <Image
                                    src={`/icons/phonePrimary.svg`}
                                    alt={`phone icon`}
                                    width={20}
                                    height={20}
                                    className="justify-center ml-1"
                                />
                            </Link>
                            <Link
                                href="mailto:kontakt@jmv-autoteknik.dk"
                                className="bg-white text-black inline-flex items-center px-3 py-1.5 rounded-3xl cursor-pointer active:shadow-none shadow-lg shadow-white/10 font-semibold"
                            >
                                Mail
                                <Image
                                    src={`/icons/mailPrimary.svg`}
                                    alt={`mail icon`}
                                    width={20}
                                    height={20}
                                    className="justify-center ml-1"
                                />
                            </Link>
                        </div>
                        <p className="mx-2.5 text-center">Vi bruger originale Mercedes reservedele</p>
                    </div>
                </div>
                <div className="h-full pt-4 pl-14 md:pl-0 md:pt-10 size-1/2 flex justify-center bottom-0 relative" style={{animation: 'slideInRight 1s ease-out'}}>
                    <Image
                        src="/jacob-no-background.webp"
                        alt="mercedes"
                        width="180"
                        height="410"
                        className="drop-shadow-2xl z-30 w-auto"
                    />
                </div>
            </div>
        </div>
    )
}