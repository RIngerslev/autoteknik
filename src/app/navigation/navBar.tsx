"use client"
import Link from "next/link"
import {useState} from "react";
import {IconButton} from "../buttons/iconButton";
import Image from "next/image";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {ChevronDownIcon} from "lucide-react";

export default function Navbar() {
    const [menuActive, setMenuActive] = useState(false);
    const [mobilePricesOpen, setMobilePricesOpen] = useState(false);
    const [mobileOffersOpen, setMobileOffersOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuActive((prev) => !prev);
    };

    const closeMenu = () => setMenuActive(false);

    const links = [
        { href: '/prisliste/eftermontering', label: 'Eftermontering' },
        { href: '/prisliste/diagnose', label: 'Diagnose / Reperation' },
    ]

    const tilbudsLinks = [
        { href: '/reparation/belysning', label: 'Ambient Belysning' },
        { href: '/reparation/carplay', label: 'Apple Carplay / Android Auto' },
        { href: '/reparation/aircondition', label: 'Aircondition Service' },
        { href: '/reparation/elektronisk-fejlfinding', label: 'Elektronisk Fejlfinding' },
        { href: '/reparation/hjulskift', label: 'Hjulskift' },
        { href: '/reparation/service', label: 'Regelmæssig Service' },
    ]

    return (
        <div className="fixed bg-primary top-0 left-0 w-full z-50 flex items-center justify-between px-2 md:px-4 py-1.5 shadow-md">
                <Link href="/" className="flex justify-center items-center w-35 h-15 ml-2">
                    <Image src="JMV-logo-optimized.svg" alt="Logo" width={400} height={400} fetchPriority="high"/>
                </Link>
            <div className="hidden md:flex items-center space-x-6">
                <IconButton className="bg-white text-primary" text='Bestil tid' iconName='phonePrimary' href="tel:30237077" />
                <Link href="/service" className="text-white hover:text-gray-300">
                    Service
                </Link>
                <Menu>
                    {({ open }) => (
                        <div className="relative">
                            <MenuButton 
                                className="inline-flex items-center gap-1 rounded-lg px-1 py-2 text-white hover:bg-primary/80 transition-colors data-open:bg-primary/80 focus:outline-none"
                            >
                                Prisliste 
                                <ChevronDownIcon className={`size-4 transition-transform ${open ? 'rotate-180' : ''}`} />
                            </MenuButton>
                            <MenuItems
                                anchor="bottom end"
                                modal={false}
                                className="mt-1 w-52 rounded-lg border border-primary/20 bg-white shadow-xl p-1 text-sm text-gray-900 [--anchor-gap:0.25rem] z-60"
                            >
                                {links.map((link) => (
                                    <MenuItem key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="block px-4 py-2.5 rounded-md transition-colors text-gray-900 data-focus:bg-primary data-focus:text-white"
                                        >
                                            {link.label}
                                        </Link>
                                    </MenuItem>
                                ))}
                            </MenuItems>
                        </div>
                    )}
                </Menu>
                <Menu>
                    {({ open }) => (
                        <div className="relative">
                            <MenuButton 
                                className="inline-flex items-center gap-1 rounded-lg px-1 py-2 text-white hover:bg-primary/80 transition-colors data-open:bg-primary/80 focus:outline-none"
                            >
                                Vi tilbyder 
                                <ChevronDownIcon className={`size-4 transition-transform ${open ? 'rotate-180' : ''}`} />
                            </MenuButton>
                            <MenuItems
                                anchor="bottom end"
                                modal={false}
                                className="mt-1 w-56 rounded-lg border border-primary/20 bg-white shadow-xl p-1 text-sm text-gray-900 [--anchor-gap:0.25rem] z-60"
                            >
                                {tilbudsLinks.map((link) => (
                                    <MenuItem key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="block px-4 py-2.5 rounded-md transition-colors text-gray-900 data-focus:bg-primary data-focus:text-white"
                                        >
                                            {link.label}
                                        </Link>
                                    </MenuItem>
                                ))}
                            </MenuItems>
                        </div>
                    )}
                </Menu>
                <Link href="/kontakt" className="text-white hover:text-gray-300">
                    Kontakt
                </Link>
                <Link href="/om" className="text-white hover:text-gray-300">
                    Om værkstedet
                </Link>
            </div>
            <div className="md:hidden">
                <div className="mr-16">
                    <IconButton className="bg-white text-primary" text="Book tid" iconName='phonePrimary' href="tel:+4530237077" />
                </div>
                <button
                    type="button"
                    id="buttonMenu"
                    className={`btn ${menuActive ? "active" : "not-active"}`}
                    onClick={handleMenuClick}
                    aria-label="Toggle navigation menu"
                >
                    <span className="buttonSpan"></span><span className="buttonSpan"></span><span className="buttonSpan"></span>
                </button>
                <div className={`navigation absolute inset-0 h-screen text-2xl text-white top-full px-8 py-10 left-0 w-full bg-primary shadow-md transition-all duration-250 ${menuActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-25 pointer-events-none"}`}>
                    <Link href="/service" className="block py-2 hover:text-gray-900" onClick={closeMenu}>Service</Link>
                    <div>
                        <button
                            type="button"
                            className="flex w-full items-center justify-between py-2 text-left hover:text-gray-900"
                            aria-expanded={mobileOffersOpen}
                            aria-controls="mobile-offers-menu"
                            onClick={() => setMobileOffersOpen((open) => !open)}
                        >
                            Vi tilbyder
                            <ChevronDownIcon className={`size-5 transition-transform ${mobileOffersOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {mobileOffersOpen && (
                            <div id="mobile-offers-menu" className="pl-4 text-xl">
                                {tilbudsLinks.map((link) => (
                                    <Link key={link.href} href={link.href} className="block py-2 hover:text-gray-900" onClick={closeMenu}>
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <div>
                        <button
                            type="button"
                            className="flex w-full items-center justify-between py-2 text-left hover:text-gray-900"
                            aria-expanded={mobilePricesOpen}
                            aria-controls="mobile-prices-menu"
                            onClick={() => setMobilePricesOpen((open) => !open)}
                        >
                            Prisliste
                            <ChevronDownIcon className={`size-5 transition-transform ${mobilePricesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {mobilePricesOpen && (
                            <div id="mobile-prices-menu" className="pl-4 text-xl">
                                {links.map((link) => (
                                    <Link key={link.href} href={link.href} className="block py-2 hover:text-gray-900" onClick={closeMenu}>
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <Link href="/kontakt" className="block py-2 hover:text-gray-900" onClick={closeMenu}>Kontakt</Link>
                    <Link href="/om" className="block py-2 hover:text-gray-900" onClick={closeMenu}>Om værkstedet</Link>
                </div>
            </div>
        </div>
    );
}
