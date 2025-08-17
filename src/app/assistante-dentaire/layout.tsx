import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feel pour Assistantes Dentaires | Plateforme de Gestion et Missions',
  description: 'Transformez votre carrière d\'assistante dentaire avec Feel. Trouvez des missions, gérez votre planning, optimisez vos revenus. Plateforme intuitive et sécurisée.',
  keywords: [
    'assistante dentaire',
    'missions dentaires',
    'planning assistante',
    'gestion cabinet dentaire',
    'emploi assistante dentaire',
    'missions SOS dentaire',
    'portfolio professionnel',
    'paiements garantis',
    'réseau assistantes',
    'Feel',
    'plateforme dentaire',
    'carrière assistante'
  ],
  openGraph: {
    title: 'Feel pour Assistantes Dentaires | Plateforme de Gestion et Missions',
    description: 'Transformez votre carrière d\'assistante dentaire avec Feel. Trouvez des missions, gérez votre planning, optimisez vos revenus.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://feel.com/assistante-dentaire',
    siteName: 'Feel',
    images: [
      {
        url: '/logos/Logo FEEL .png',
        width: 1200,
        height: 630,
        alt: 'Feel pour Assistantes Dentaires'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feel pour Assistantes Dentaires | Plateforme de Gestion et Missions',
    description: 'Transformez votre carrière d\'assistante dentaire avec Feel. Trouvez des missions, gérez votre planning, optimisez vos revenus.',
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
    canonical: 'https://feel.com/assistante-dentaire'
  },
  other: {
    'geo.region': 'FR',
    'geo.placename': 'France',
    'geo.position': '48.8566;2.3522',
    'ICBM': '48.8566, 2.3522'
  }
};

export default function AssistanteDentaireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 