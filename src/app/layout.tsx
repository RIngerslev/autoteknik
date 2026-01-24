import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navigation/navBar";
import { Footer } from "./navigation/footer";
import { OrganizationSchema } from "../components/OrganizationSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "JMV Autoteknik | Dit ekspert værksted i Silkeborg - Industrivej 1",
    description:
        "Professionelt autoværksted i Silkeborg med speciale i Mercedes. Ring på 30237077. Her foretages service og reparationer af alle bilmærker.",
    openGraph: {
        title: "JMV Autoteknik – Autoværksted i Silkeborg",
        description:
            "Mercedes specialist i Silkeborg. JMV Autoteknik servicerer og reparerer alle bilmærker med høj kvalitet.",
        locale: "da_DK",
        type: "website",
        images: [
            {
                // use the actual OG image that exists in public/
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'JMV Autoteknik',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'JMV Autoteknik',
        description: 'Mercedes specialist i Silkeborg.',
        images: ['/og-image.png'],
    },
    icons: {
        icon: [
            // point to existing favicon files under public/favicon/
            { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
            { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
        ],
        apple: [
            { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
    },
    appleWebApp: {
        title: 'JMV',
    },
    manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Navbar />
      <OrganizationSchema />
        {children}
      <Footer />
      </body>
    </html>
  );
}
