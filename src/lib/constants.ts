// Configuration Feel
export const FEEL_CONFIG = {
  APP_NAME: "Feel",
  APP_DESCRIPTION: "Plateforme professionnelle pour l'écosystème dentaire français",
  VERSION: "2.0.0",
  
  // URLs
  BASE_URL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  LOGIN_URL: "/auth/login",
  SIGNUP_URL: "/auth/signup",
  
  // Routes des cockpits
  COCKPIT_ROUTES: {
    DENTIST: "/cockpit/dentist",
    ASSISTANT: "/cockpit/assistant",
    DIRECTOR: "/cockpit/director"
  },
  
  // Comptes de démonstration
  DEMO_ACCOUNTS: {
    DENTIST: {
      email: "martin.dubois@feel-demo.fr",
      password: "demo2025",
      name: "Dr. Martin Dubois",
      role: "Chirurgien-Dentiste"
    },
    ASSISTANT: {
      email: "marie.lefebvre@feel-demo.fr",
      password: "demo2025",
      name: "Marie Lefebvre",
      role: "Assistante Dentaire"
    },
    DIRECTOR: {
      email: "sophie.chen@feel-demo.fr",
      password: "demo2025",
      name: "Sophie Chen",
      role: "Directrice de Structure"
    }
  },

  // Personas pour la landing page
  PERSONAS: [
    {
      id: 'praticien',
      titre: 'Chirurgien-Dentiste',
      description: 'Optimisez votre pratique avec des outils intelligents'
    },
    {
      id: 'assistante',
      titre: 'Assistante Dentaire',
      description: 'Simplifiez votre quotidien avec des solutions digitales'
    },
    {
      id: 'directeur',
      titre: 'Directeur de Structure',
      description: 'Supervisez vos équipes avec des tableaux de bord avancés'
    }
  ],

  // Modules pour la landing page
  MODULES: [
    {
      id: 'profil',
      titre: 'Profil Praticien',
      description: 'Carte d\'identité professionnelle digitale complète',
      icone: 'User'
    },
    {
      id: 'sos',
      titre: 'SOS Assistante',
      description: 'Matching intelligent pour missions urgentes',
      icone: 'Heart'
    },
    {
      id: 'comptabilite',
      titre: 'Smart Comptabilité',
      description: 'Gestion financière automatisée et connectée',
      icone: 'Calculator'
    },
    {
      id: 'stock',
      titre: 'Gestion Stock',
      description: 'Stock prédictif avec commandes automatiques',
      icone: 'Package'
    },
    {
      id: 'contrats',
      titre: 'Contrats Numériques',
      description: 'Templates légaux et signatures électroniques',
      icone: 'FileText'
    },
    {
      id: 'news',
      titre: 'News & Formations',
      description: 'Veille professionnelle et formations DPC',
      icone: 'Newspaper'
    }
  ],
  
  // Couleurs Feel
  COLORS: {
    PRIMARY: "#3B82F6", // blue-500
    SECONDARY: "#10B981", // green-500
    ACCENT: "#F59E0B", // amber-500
    SUCCESS: "#10B981", // green-500
    WARNING: "#F59E0B", // amber-500
    ERROR: "#EF4444", // red-500
    INFO: "#3B82F6", // blue-500
  },
  
  // Tailles d'écran
  BREAKPOINTS: {
    MOBILE: 640,
    TABLET: 768,
    DESKTOP: 1024,
    LARGE: 1280
  }
};

// Messages d'erreur
export const ERROR_MESSAGES = {
  INVALID_CREDENTIALS: "Email ou mot de passe incorrect",
  NETWORK_ERROR: "Erreur de connexion. Veuillez réessayer.",
  VALIDATION_ERROR: "Veuillez vérifier les informations saisies.",
  UNAUTHORIZED: "Accès non autorisé. Veuillez vous connecter."
};

// Messages de succès
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: "Connexion réussie",
  LOGOUT_SUCCESS: "Déconnexion réussie",
  SAVE_SUCCESS: "Sauvegarde réussie",
  UPDATE_SUCCESS: "Mise à jour réussie"
};

// Labels et textes
export const LABELS = {
  COMMON: {
    LOADING: "Chargement...",
    SAVE: "Sauvegarder",
    CANCEL: "Annuler",
    DELETE: "Supprimer",
    EDIT: "Modifier",
    VIEW: "Voir",
    BACK: "Retour",
    NEXT: "Suivant",
    SUBMIT: "Valider"
  },
  AUTH: {
    EMAIL: "Email professionnel",
    PASSWORD: "Mot de passe",
    LOGIN: "Se connecter",
    LOGOUT: "Se déconnecter",
    FORGOT_PASSWORD: "Mot de passe oublié ?",
    REMEMBER_ME: "Se souvenir de moi"
  },
  NAVIGATION: {
    HOME: "Accueil",
    DASHBOARD: "Dashboard",
    PROFILE: "Profil",
    SETTINGS: "Paramètres",
    HELP: "Aide"
  }
}; 