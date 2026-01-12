// components/OrganizationSchema.tsx
export function OrganizationSchema() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'AutomotiveBusiness',
        name: 'JMV Autoteknik',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Industrivej 1',
            addressLocality: 'Silkeborg',
            postalCode: '8600',
            addressCountry: 'DK'
        },
        telephone: '+4530237077',
        email: 'kontakt@jmv-autoteknik.dk',
        url: 'https://jmv-autoteknik.dk',
        openingHours: ['Mo-Fr 08:00-16:00'],
        image: 'https://jmv-autoteknik.dk/favicon/web-app-manifest-512x512.png',
        areaServed: {
            '@type': 'City',
            name: 'Silkeborg'
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}