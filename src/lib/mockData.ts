import { Module, Organism, Mission, Site, Alert, Profile } from "@/types/dashboard";

// Profils de démonstration
export const demoProfiles: Profile[] = [
  {
    id: "chirurgien",
    name: "Dr. Martin Dubois",
    role: "Chirurgien-Dentiste",
    description: "Cabinet Centre Dentaire République, Paris 11e",
    icon: "stethoscope",
    color: "from-blue-500 to-blue-600",
    notifications: 19
  },
  {
    id: "assistante",
    name: "Marie Lefebvre",
    role: "Assistante Dentaire",
    description: "5 ans d'expérience, spécialisée chirurgie et implantologie",
    icon: "user-check",
    color: "from-green-500 to-green-600",
    notifications: 6
  },
  {
    id: "directeur",
    name: "Sophie Chen",
    role: "Directrice de Structure",
    description: "Groupe de 5 sites en Île-de-France, 30 professionnels",
    icon: "building2",
    color: "from-purple-500 to-purple-600",
    notifications: 17
  }
];

// Modules Chirurgien-Dentiste
export const chirurgienModules: Module[] = [
  {
    id: 'profile',
    title: 'Profil Praticien',
    description: 'Carte d\'identité professionnelle',
    icon: "user",
    color: 'from-blue-500 to-blue-600',
    notifications: 2,
    link: '/dashboard/chirurgien/profile'
  },
  {
    id: 'sos',
    title: 'SOS Assistante',
    description: 'Missions urgentes et matching',
    icon: "heart",
    color: 'from-red-500 to-red-600',
    notifications: 1,
    link: '/dashboard/chirurgien/sos',
    urgent: true
  },
  {
    id: 'comptabilite',
    title: 'Comptabilité',
    description: 'Gestion financière automatisée',
    icon: "calculator",
    color: 'from-green-500 to-green-600',
    notifications: 5,
    link: '/dashboard/chirurgien/comptabilite'
  },
  {
    id: 'stock',
    title: 'Gestion Stock',
    description: 'Stock prédictif et commandes',
    icon: "package",
    color: 'from-orange-500 to-orange-600',
    notifications: 3,
    link: '/dashboard/chirurgien/stock'
  },
  {
    id: 'contrats',
    title: 'Contrats',
    description: 'Templates et signatures électroniques',
    icon: "file-text",
    color: 'from-purple-500 to-purple-600',
    notifications: 0,
    link: '/dashboard/chirurgien/contrats'
  },
  {
    id: 'news',
    title: 'News & Formations',
    description: 'Veille professionnelle et DPC',
    icon: "newspaper",
    notifications: 8,
    color: 'from-indigo-500 to-indigo-600',
    link: '/dashboard/chirurgien/news'
  }
];

// Modules Assistante
export const assistanteModules: Module[] = [
  {
    id: 'profile',
    title: 'Profil Assistant',
    description: 'Espace personnel et portfolio',
    icon: "user",
    color: 'from-green-500 to-green-600',
    notifications: 0,
    link: '/dashboard/assistante/profile'
  },
  {
    id: 'sos',
    title: 'SOS Missions',
    description: 'Recherche et candidature',
    icon: "heart",
    color: 'from-red-500 to-red-600',
    notifications: 3,
    link: '/dashboard/assistante/sos',
    urgent: true
  },
  {
    id: 'stock',
    title: 'Stock iPad',
    description: 'Interface tactile et scan',
    icon: "package",
    color: 'from-orange-500 to-orange-600',
    notifications: 1,
    link: '/dashboard/assistante/stock'
  },
  {
    id: 'contrats',
    title: 'Contrats Missions',
    description: 'Suivi et signatures',
    icon: "file-text",
    color: 'from-purple-500 to-purple-600',
    notifications: 2,
    link: '/dashboard/assistante/contrats'
  }
];

// Modules Directeur
export const directeurModules: Module[] = [
  {
    id: 'multisites',
    title: 'Cockpit Multi-Sites',
    description: 'Vision consolidée et analytics',
    icon: "building2",
    color: 'from-blue-500 to-blue-600',
    notifications: 4,
    link: '/dashboard/directeur/multisites'
  },
  {
    id: 'equipe',
    title: 'Gestion Équipe',
    description: 'Management RH centralisé',
    icon: "users",
    color: 'from-green-500 to-green-600',
    notifications: 2,
    link: '/dashboard/directeur/equipe'
  },
  {
    id: 'finance',
    title: 'Finance Consolidée',
    description: 'Comptabilité multi-entités',
    icon: "trending-up",
    color: 'from-purple-500 to-purple-600',
    notifications: 7,
    link: '/dashboard/directeur/finance'
  },
  {
    id: 'achats',
    title: 'Achats Groupés',
    description: 'Optimisation stock centralisé',
    icon: "package",
    color: 'from-orange-500 to-orange-600',
    notifications: 1,
    link: '/dashboard/directeur/achats'
  },
  {
    id: 'contrats',
    title: 'Contrats Groupe',
    description: 'Administration contractuelle',
    icon: "file-text",
    color: 'from-indigo-500 to-indigo-600',
    notifications: 3,
    link: '/dashboard/directeur/contrats'
  },
  {
    id: 'analytics',
    title: 'Analytics & Reporting',
    description: 'Business Intelligence IA',
    icon: "bar-chart3",
    notifications: 0,
    color: 'from-red-500 to-red-600',
    link: '/dashboard/directeur/analytics'
  }
];

// Organismes officiels
export const organisms: Organism[] = [
  {
    name: 'Ordre National',
    acronym: 'ONCD',
    description: 'Formation obligatoire et déontologie',
    icon: '🦷',
    color: 'bg-blue-500',
    status: 'connected',
    nextDeadline: '15/12/2024',
    info: 'Formation DPC validée'
  },
  {
    name: 'URSSAF',
    acronym: 'URSSAF',
    description: 'Déclarations sociales mensuelles',
    icon: '📊',
    color: 'bg-green-500',
    status: 'connected',
    nextDeadline: '05/01/2025',
    info: 'Déclaration novembre OK'
  },
  {
    name: 'CARCDSF',
    acronym: 'CARCDSF',
    description: 'Points retraite et prévoyance',
    icon: '🏦',
    color: 'bg-purple-500',
    status: 'pending',
    nextDeadline: '20/12/2024',
    info: 'Simulation pension en cours'
  },
  {
    name: 'Impôts',
    acronym: 'DGFiP',
    description: 'Déclaration 2035 et CFE',
    icon: '💰',
    color: 'bg-yellow-500',
    status: 'error',
    nextDeadline: '31/01/2025',
    info: 'Connexion à vérifier'
  },
  {
    name: 'Amélie Pro',
    acronym: 'Amélie',
    description: 'Télétransmission et tiers payant',
    icon: '🏥',
    color: 'bg-red-500',
    status: 'connected',
    nextDeadline: '01/01/2025',
    info: 'Télétransmission active'
  }
];

// Missions disponibles
export const missions: Mission[] = [
  {
    id: '1',
    title: 'Assistante Chirurgie Implant',
    location: 'Centre Dentaire République, Paris 11e',
    distance: '2.3 km',
    duration: '2 jours',
    rate: '€180/jour',
    urgency: true,
    speciality: 'Implantologie',
    rating: 4.8,
    posted: 'Il y a 2h'
  },
  {
    id: '2',
    title: 'Assistante Prothèse Fixe',
    location: 'Cabinet Dr. Martin, Paris 8e',
    distance: '4.1 km',
    duration: '1 semaine',
    rate: '€160/jour',
    urgency: false,
    speciality: 'Prothèse',
    rating: 4.6,
    posted: 'Il y a 4h'
  },
  {
    id: '3',
    title: 'Assistante Urgences',
    location: 'Clinique Dentaire Nord, Paris 18e',
    distance: '3.7 km',
    duration: '3 jours',
    rate: '€200/jour',
    urgency: true,
    speciality: 'Urgences',
    rating: 4.9,
    posted: 'Il y a 6h'
  }
];

// Sites du groupe
export const sites: Site[] = [
  {
    name: 'Centre République',
    location: 'Paris 11e',
    praticiens: 3,
    assistantes: 4,
    performance: 95,
    caMensuel: '€45,000',
    status: 'excellent'
  },
  {
    name: 'Cabinet Nation',
    location: 'Paris 12e',
    praticiens: 2,
    assistantes: 3,
    performance: 88,
    caMensuel: '€32,000',
    status: 'bon'
  },
  {
    name: 'Clinique Nord',
    location: 'Paris 18e',
    praticiens: 4,
    assistantes: 5,
    performance: 92,
    caMensuel: '€58,000',
    status: 'excellent'
  },
  {
    name: 'Centre Ouest',
    location: 'Paris 16e',
    praticiens: 2,
    assistantes: 2,
    performance: 78,
    caMensuel: '€28,000',
    status: 'moyen'
  },
  {
    name: 'Cabinet Sud',
    location: 'Paris 14e',
    praticiens: 1,
    assistantes: 2,
    performance: 85,
    caMensuel: '€22,000',
    status: 'bon'
  }
];

// Alertes critiques
export const alerts: Alert[] = [
  { 
    type: 'critical', 
    message: 'Formation DPC en retard - Centre Ouest', 
    site: 'Centre Ouest',
    time: 'Il y a 2h' 
  },
  { 
    type: 'warning', 
    message: 'Stock faible - Cabinet Nation', 
    site: 'Cabinet Nation',
    time: 'Il y a 4h' 
  },
  { 
    type: 'info', 
    message: 'Nouveau praticien à intégrer', 
    site: 'Centre République',
    time: 'Il y a 6h' 
  }
]; 