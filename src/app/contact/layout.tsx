import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Feel - Prenez Rendez-vous | Chirurgiens-Dentistes',
  description: 'Contactez Feel pour une démonstration personnalisée de notre solution de gestion de cabinet dentaire. Équipe d\'experts dentaires à votre écoute.',
  keywords: [
    'contact Feel',
    'démonstration Feel',
    'rendez-vous Feel',
    'support Feel dentiste',
    'équipe Feel',
    'Feel contact',
    'cabinet dentaire Feel'
  ],
  openGraph: {
    title: 'Contact Feel - Prenez Rendez-vous',
    description: 'Contactez notre équipe d\'experts dentaires pour une démonstration personnalisée de Feel',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://feel.com/contact',
    siteName: 'Feel'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 