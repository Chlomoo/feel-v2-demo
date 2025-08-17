// Constantes Feel
export const FEEL_CONFIG = {
  APP_NAME: 'Feel',
  APP_TAGLINE: 'Le copilote digital des professionnels dentaires',
  APP_PROMISE: 'UNE seule plateforme pour toute l\'équipe, ZÉRO perte de temps',
  
  ROLES: {
    PRATICIEN: 'praticien',
    ASSISTANTE: 'assistante', 
    DIRECTEUR: 'directeur'
  } as const,
  
  MODULES: [
    { id: 'profil', nom: 'PROFIL PRATICIEN & ASSISTANTE', icon: 'User' },
    { id: 'comptabilite', nom: 'COMPTABILITÉ INTELLIGENTE', icon: 'Calculator' },
    { id: 'stock', nom: 'GESTION DE STOCK PRÉDICTIVE', icon: 'Package' },
    { id: 'contrats', nom: 'CONTRATS DIGITAUX', icon: 'FileText' },
    { id: 'sos-assistante', nom: 'SOS ASSISTANTE / MARKETPLACE INTÉRIM', icon: 'Users' },
    { id: 'actualites', nom: "FLUX D'ACTUALITÉ & FORMATIONS", icon: 'Newspaper' }
  ],
  
  PERSONAS: [
    {
      id: 'praticien',
      titre: 'Chirurgien-Dentiste',
      description: 'Gérez votre cabinet avec efficacité et simplicité',
      benefits: [
        'Dashboard KPIs temps réel',
        'Connexions administratives automatiques',
        'Gestion équipe et planning',
        'Marketplace assistantes SOS'
      ]
    },
    {
      id: 'directeur',
      titre: 'Structure Dentaire', 
      description: 'Pilotez votre structure dentaire',
      benefits: [
        'Cockpit multi-sites consolidé',
        'Analytics avancées',
        'Gestion équipes centralisée',
        'Optimisation ressources'
      ]
    },
    {
      id: 'assistante', 
      titre: 'Assistante Dentaire',
      description: 'Optimisez votre quotidien professionnel',
      benefits: [
        'Missions flexibles géolocalisées',
        'Interface mobile optimisée',
        'Paiements automatiques sécurisés',
        'Portfolio professionnel'
      ]
    }
  ]
};

export const FEEL_COLORS = {
  green: '#7FB069',
  dark: '#2C3E50',
  light: '#F8F9FA',
  white: '#FFFFFF'
};
