import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navigation/navBar";
import { Footer } from "./navigation/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "JMV Autoteknik – Speciale i Mercedes & autoværksted i Silkeborg",
    description:
        "JMV Autoteknik er et professionelt autoværksted i Silkeborg med speciale i Mercedes-Benz. Her serviceres og repareres alle bilmærker med fokus på kvalitet, ærlighed og høj faglighed.",
    openGraph: {
        title: "JMV Autoteknik – Autoværksted i Silkeborg",
        description:
            "Mercedes specialist i Silkeborg. JMV Autoteknik servicerer og reparerer alle bilmærker med høj kvalitet.",
        locale: "da_DK",
        type: "website",
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  );
}
