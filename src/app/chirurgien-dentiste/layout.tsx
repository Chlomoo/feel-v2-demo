import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feel - Solution Digitale Chirurgiens-Dentistes | Gestion Cabinet',
  description: 'Simplifiez la gestion de votre cabinet dentaire : RH, comptabilité, stock, contrats. Solution 100% dédiée aux chirurgiens-dentistes avec IA et automatisation.',
  keywords: [
    'gestion cabinet dentaire',
    'logiciel dentiste',
    'RH dentaire',
    'comptabilité cabinet dentaire',
    'gestion stock dentaire',
    'contrats digitaux dentiste',
    'assistante dentaire',
    'automatisation cabinet dentaire',
    'Feel dentiste',
    'plateforme gestion dentaire'
  ],
  openGraph: {
    title: 'Feel - Le Copilote Digital des Chirurgiens-Dentistes',
    description: 'Une seule plateforme pour toute votre équipe, ZÉRO perte de temps. Automatisez RH, comptabilité, stock et contrats.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://feel.com/chirurgien-dentiste',
    siteName: 'Feel',
    images: [
      {
        url: '/logos/Logo FEEL .png',
        width: 1200,
        height: 630,
        alt: 'Feel - Solution Digitale pour Chirurgiens-Dentistes'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feel - Le Copilote Digital des Chirurgiens-Dentistes',
    description: 'Automatisez la gestion de votre cabinet dentaire avec Feel',
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
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://feel.com/chirurgien-dentiste'
  }
};

export default function ChirurgienDentisteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="canonical" href="https://feel.com/chirurgien-dentiste" />
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="France" />
        <meta name="geo.position" content="48.8566;2.3522" />
        <meta name="ICBM" content="48.8566, 2.3522" />
        <meta name="DC.title" content="Feel - Solution Digitale Chirurgiens-Dentistes" />
        <meta name="DC.description" content="Simplifiez la gestion de votre cabinet dentaire avec Feel" />
        <meta name="DC.subject" content="Gestion Cabinet Dentaire" />
        <meta name="DC.creator" content="Feel" />
        <meta name="DC.publisher" content="Feel" />
        <meta name="DC.coverage" content="France" />
        <meta name="DC.language" content="fr" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
} 