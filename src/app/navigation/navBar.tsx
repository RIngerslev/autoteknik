"use client"
import Link from "next/link"
import {useState} from "react";
import {IconButton} from "../buttons/iconButton";

export default function Navbar() {
    const [menuActive, setMenuActive] = useState(false);

    const handleMenuClick = () => {
        setMenuActive((prev) => !prev);
    };

    return (
        <div className="fixed bg-primary top-0 left-0 w-full z-50 flex items-center justify-between px-2 md:px-4 py-1.5 shadow-md shadow-white/10">
                <Link href="/" className="flex w-14 h-15">
                    <div className="flex items-center justify-center ml-1">
                    <div className="text-white text-[1.35rem] md:text-3xl font-bold">JMV</div>
                    <div className="text-white text-[1.35rem] md:text-3xl">Autoteknik</div>
                    </div>
                </Link>
            <div className="hidden md:flex items-center space-x-6">
                <IconButton className="bg-white text-primary" text='Bestil tid' iconName='phonePrimary' href="tel:30237077" />
                <Link href="/service" className="text-white hover:text-gray-900">
                    Service
                </Link>
                <Link href="/reparation" className="text-white hover:text-gray-900">
                    Reparation
                </Link>
                <Link href="/kontakt" className="text-white hover:text-gray-900">
                    Kontakt
                </Link>
                <Link href="/om" className="text-white hover:text-gray-900">
                    Om værkstedet
                </Link>
            </div>
            <div className="md:hidden">
                <div className="mr-16">
                    <IconButton className="bg-white text-primary" text="Book tid" iconName='phonePrimary' href="tel:30237077" />
                </div>
                <button
                    type="button"
                    id="buttonMenu"
                    className={`btn ${menuActive ? "active" : "not-active"}`}
                    onClick={handleMenuClick}
                >
                    <span className="buttonSpan"></span><span className="buttonSpan"></span><span className="buttonSpan"></span>
                </button>
                <div className={`navigation absolute inset-0 h-screen text-2xl text-white top-full px-8 py-10 left-0 w-full bg-primary shadow-md transition-all duration-250 ${menuActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-25 pointer-events-none"}`}>
                    <Link href="/service" className="block py-2 hover:text-gray-900" onClick={handleMenuClick}>Service</Link>
                    <Link href="/reparation" className="block py-2 hover:text-gray-900" onClick={handleMenuClick}>Reparation</Link>
                    <Link href="/kontakt" className="block py-2 hover:text-gray-900" onClick={handleMenuClick}>Kontakt</Link>
                    <Link href="/om" className="block py-2 hover:text-gray-900" onClick={handleMenuClick}>Om værkstedet</Link>
                </div>
            </div>
        </div>
    );
}
