import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feel - Solution Directeurs Structure Dentaire | Pilotage Multi-Sites',
  description: 'Pilotez efficacement vos structures dentaires multi-sites avec Feel. Dashboard consolidé, optimisation ressources, gestion RH centralisée. Cockpit de pilotage unifié pour directeurs.',
  keywords: [
    'directeur structure dentaire',
    'pilotage multi-sites',
    'gestion cabinet dentaire',
    'dashboard consolidé',
    'optimisation ressources dentaires',
    'gestion RH centralisée',
    'comptabilité multi-entités',
    'stock mutualisé',
    'supervision praticiens',
    'veille stratégique dentaire',
    'Feel',
    'plateforme dentaire',
    'management dentaire'
  ],
  openGraph: {
    title: 'Feel - Solution Directeurs Structure Dentaire | Pilotage Multi-Sites',
    description: 'Pilotez efficacement vos structures dentaires multi-sites avec Feel. Dashboard consolidé, optimisation ressources, gestion RH centralisée.',
    url: 'https://feel.com/structure-dentaire',
    siteName: 'Feel',
    images: [
      {
        url: '/logos/Logo FEEL .png',
        width: 1200,
        height: 630,
        alt: 'Feel - Solution Directeurs Structure Dentaire'
      }
    ],
    locale: 'fr_FR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feel - Solution Directeurs Structure Dentaire | Pilotage Multi-Sites',
    description: 'Pilotez efficacement vos structures dentaires multi-sites avec Feel. Dashboard consolidé, optimisation ressources, gestion RH centralisée.',
    images: ['/logos/Logo FEEL .png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: 'https://feel.com/structure-dentaire'
  }
};

export default function StructureDentaireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="canonical" href="https://feel.com/structure-dentaire" />
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="France" />
        <meta name="geo.position" content="48.8566;2.3522" />
        <meta name="ICBM" content="48.8566, 2.3522" />
        <meta name="DC.title" content="Feel - Solution Directeurs Structure Dentaire" />
        <meta name="DC.description" content="Pilotez efficacement vos structures dentaires multi-sites avec Feel" />
        <meta name="DC.subject" content="Directeurs Structure Dentaire, Pilotage Multi-Sites, Gestion Cabinet" />
        <meta name="DC.creator" content="Feel" />
        <meta name="DC.publisher" content="Feel" />
        <meta name="DC.coverage" content="France" />
        <meta name="DC.language" content="fr" />
      </head>
      <body>{children}</body>
    </html>
  );
} 