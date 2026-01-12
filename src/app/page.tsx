import Frontpage from "@/app/frontpage/page";
import {OrganizationSchema} from "@/components/OrganizationSchema";
import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "JMV Autoteknik | Dit ekspert værksted i Silkeborg - Industrivej 1",
    description:
        "Professionelt autoværksted i Silkeborg med speciale i Mercedes. Ring på 30237077. Her foretages service og reparationer af alle bilmærker.",
    authors: [{ name: "JMV Autoteknik", url: "https://jmv-autoteknik.dk" }],
    publisher: "JMV Autoteknik",
    icons: {
        icon: "/favicon.ico",
        apple: "/favicon/apple-touch-icon.png"
    },
    openGraph: {
        title: "JMV Autoteknik — Professionelt autoværksted i Silkeborg",
        description:
            "Service, reparation og elektronisk fejlfinding af alle bilmærker. Speciale i Mercedes. Ring +45 30237077.",
        url: "https://jmv-autoteknik.dk",
        siteName: "JMV Autoteknik",
        type: "website",
        locale: "da_DK",
        images: [
            {
                url: "https://jmv-autoteknik.dk/og-images/frontpage-og.png",
                width: 1200,
                height: 630,
                alt: "JMV Autoteknik - Autoværksted i Silkeborg"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "JMV Autoteknik — Autoværksted i Silkeborg",
        description: "Service og reparation. Ring +45 30237077.",
        images: ["https://jmv-autoteknik.dk/og-images/frontpage-og.png"]
    },
    robots: {
        index: true,
        follow: true
    },
    alternates: {
        canonical: "https://jmv-autoteknik.dk"
    }
};


export default function Home() {
    return (
        <>
            <OrganizationSchema/>
            <div className="bg-white min-h-screen flex flex-col items-center">
                <main className="pt-18 flex-1 w-full flex flex-col items-center">
                    <Frontpage/>
                </main>
            </div>
        </>
    );
}
