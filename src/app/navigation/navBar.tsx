"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
import { IconButton } from "../buttons/iconButton";

export default function Navbar() {
    const [menuActive, setMenuActive] = useState(false);

    const handleMenuClick = () => {
        setMenuActive((prev) => !prev);
    };

    return (
        <div className="fixed bg-white top-0 left-0 w-full z-50 flex items-center justify-between px-2 md:px-4 py-1.5 border-b shadow-md">
            <div className="flex items-center bg-[#264230] rounded-4xl px-1 py-1 shadow-xl">
                <Link href="/" className="flex items-center justify-center bg-white w-14 h-14 rounded-full shadow-md">
                    <h1 className="text-black">?</h1>
                </Link>
            </div>
            <div className="hidden md:flex items-center space-x-6">
                <IconButton text='Bestil tid' iconName='phone' href="tel:88888888" />
                <Link href="#priser" className="text-[#264230] hover:text-gray-900">
                    Service
                </Link>
                <Link href="#holdtræning" className="text-[#264230] hover:text-gray-900">
                    Reperation
                </Link>
                <Link href="#tilskud" className="text-[#264230] hover:text-gray-900">
                    Kontakt
                </Link>
                <Link href="#om" className="text-[#264230] hover:text-gray-900">
                    Om værkstedet
                </Link>
            </div>
            <div className="md:hidden">
                <div className="mr-16">
                    <IconButton text="Book tid" iconName='phone' href="tel:88888888" />
                </div>
                <div
                    id="buttonMenu"
                    className={`btn ${menuActive ? "active" : "not-active"}`}
                    onClick={handleMenuClick}
                >
                    <span className="buttonSpan"></span><span className="buttonSpan"></span><span className="buttonSpan"></span>
                </div>
                <div className={`navigation absolute inset-0 h-screen text-2xl text-white top-full px-8 py-10 left-0 w-full bg-[#264230] shadow-md transition-all duration-250 ${menuActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-25 pointer-events-none"}`}>
                    <Link href="#priser" className="block py-2 hover:text-gray-900" onClick={handleMenuClick}>Service</Link>
                    <Link href="#holdtræning" className="block py-2 hover:text-gray-900" onClick={handleMenuClick}>Reperation</Link>
                    <Link href="#tilskud" className="block py-2 hover:text-gray-900" onClick={handleMenuClick}>Kontakt</Link>
                    <Link href="#om" className="block py-2 hover:text-gray-900" onClick={handleMenuClick}>Om værkstedet</Link>
                </div>
            </div>
        </div>
    );
}
