import {Page} from "./frontpage/page";

export const metadata = {
    title: "JMV Autoteknik | Dit ekspert værksted i Silkeborg - Industrivej 1",
    description:
        "Professionelt autoværksted i Silkeborg med speciale i Mercedes-Benz. Ring på 30237077. Her foretages service og reparationer af alle bilmærker.",
    openGraph: {
        url: 'https://jmv-autoteknik.dk/',
    },
    alternates: { canonical: 'https://jmv-autoteknik.dk/' },
};

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <main className="pt-18 flex-1 w-full flex flex-col items-center">
        <Page />
      </main>
    </div>
  );
}
