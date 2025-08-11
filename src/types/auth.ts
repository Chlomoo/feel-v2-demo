// Feel Authentication - Types TypeScript 2025
// Types pour le système d'authentification Feel

export type Profession = 'PRATICIEN' | 'DIRECTEUR' | 'ASSISTANTE';

export type ProfileStatus = 'PENDING' | 'VERIFIED' | 'REJECTED' | 'SUSPENDED';

export type VerificationStatus = 'PENDING' | 'IN_PROGRESS' | 'VERIFIED' | 'REJECTED' | 'NEEDS_MANUAL_REVIEW';

export type VerificationStep = 
  | 'PROFILE_SELECTION'
  | 'PERSONAL_INFO'
  | 'PROFESSIONAL_INFO'
  | 'DOCUMENT_UPLOAD'
  | 'BIOMETRIC_VERIFICATION'
  | 'MANUAL_REVIEW'
  | 'COMPLETED';

export type DocumentType = 
  | 'IDENTITY_CARD'
  | 'PASSPORT'
  | 'DRIVERS_LICENSE'
  | 'DIPLOMA'
  | 'KBIS'
  | 'CERTIFICATION'
  | 'REFERENCE_LETTER'
  | 'OTHER';

export type NotificationType = 
  | 'VERIFICATION_STATUS'
  | 'DOCUMENT_APPROVED'
  | 'DOCUMENT_REJECTED'
  | 'PROFILE_VERIFIED'
  | 'PROFILE_REJECTED'
  | 'SYSTEM_ALERT';

// Profil utilisateur Feel
export interface FeelProfile {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  phone?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  country: string;
  profession: Profession;
  status: ProfileStatus;
  twoFactorEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Profil Praticien
export interface PraticienProfile {
  id: string;
  profileId: string;
  rppsNumber?: string;
  rppsVerified: boolean;
  orderNumber?: string;
  orderVerified: boolean;
  diploma?: string;
  diplomaVerified: boolean;
  specialties: string[];
  cabinetName?: string;
  cabinetAddress?: string;
  cabinetPhone?: string;
  verifiedAt?: Date;
  verifiedBy?: string;
}

// Profil Directeur
export interface DirecteurProfile {
  id: string;
  profileId: string;
  companyName?: string;
  siretNumber?: string;
  siretVerified: boolean;
  sirenNumber?: string;
  kbisDocument?: string;
  kbisVerified: boolean;
  isResponsible: boolean;
  responsibleDocument?: string;
  verifiedAt?: Date;
  verifiedBy?: string;
}

// Profil Assistante
export interface AssistanteProfile {
  id: string;
  profileId: string;
  certification?: string;
  certificationVerified: boolean;
  arsRegion?: string;
  arsVerified: boolean;
  trainingCenter?: string;
  trainingDate?: Date;
  verifiedAt?: Date;
  verifiedBy?: string;
}

// Référence pour assistante
export interface Reference {
  id: string;
  assistanteId: string;
  praticienName: string;
  praticienPhone?: string;
  praticienEmail?: string;
  praticienAddress?: string;
  rppsNumber?: string;
  verified: boolean;
  verifiedAt?: Date;
  createdAt: Date;
}

// Site géré par un directeur
export interface Site {
  id: string;
  directeurId: string;
  name: string;
  address: string;
  phone?: string;
  email?: string;
  siretNumber?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Vérification professionnelle
export interface Verification {
  id: string;
  userId: string;
  status: VerificationStatus;
  step: VerificationStep;
  idDocument?: string;
  selfie?: string;
  biometricVerified: boolean;
  rppsChecked: boolean;
  rppsResult?: any;
  inseeChecked: boolean;
  inseeResult?: any;
  arsChecked: boolean;
  arsResult?: any;
  manualVerified: boolean;
  verifiedBy?: string;
  verifiedAt?: Date;
  rejectionReason?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Document uploadé
export interface Document {
  id: string;
  userId: string;
  type: DocumentType;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  url: string;
  ocrProcessed: boolean;
  ocrData?: any;
  verified: boolean;
  verifiedBy?: string;
  verifiedAt?: Date;
  rejectionReason?: string;
  createdAt: Date;
}

// Notification
export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
}

// Admin
export interface Admin {
  id: string;
  email: string;
  name: string;
  role: 'VALIDATOR' | 'MANAGER' | 'SUPER_ADMIN';
  canVerifyPraticiens: boolean;
  canVerifyDirecteurs: boolean;
  canVerifyAssistantes: boolean;
  canManageUsers: boolean;
  canManageAdmins: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Formulaires d'inscription
export interface SignUpFormData {
  // Étape 1: Sélection profil
  profession: Profession;
  
  // Étape 2: Informations personnelles
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  
  // Étape 3: Informations professionnelles (selon profil)
  praticien?: {
    rppsNumber?: string;
    orderNumber?: string;
    specialties: string[];
    cabinetName?: string;
    cabinetAddress?: string;
    cabinetPhone?: string;
  };
  
  directeur?: {
    companyName?: string;
    siretNumber?: string;
    isResponsible: boolean;
  };
  
  assistante?: {
    certification?: string;
    arsRegion?: string;
    trainingCenter?: string;
    trainingDate?: string;
  };
  
  // Étape 4: Documents
  documents: {
    identityCard?: File;
    diploma?: File;
    kbis?: File;
    certification?: File;
    selfie?: File;
  };
  
  // Étape 5: Consentements
  consentements: {
    rgpd: boolean;
    terms: boolean;
    marketing?: boolean;
  };
}

// Validation des formulaires
export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

// API Responses
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface VerificationAPIResponse {
  success: boolean;
  verified: boolean;
  data?: any;
  error?: string;
}

// OAuth Providers
export type OAuthProvider = 'google' | 'apple';

export interface OAuthConfig {
  provider: OAuthProvider;
  clientId: string;
  clientSecret: string;
  enabled: boolean;
}

// Sécurité
export interface SecurityConfig {
  twoFactorEnabled: boolean;
  sessionTimeout: number; // en minutes
  maxLoginAttempts: number;
  lockoutDuration: number; // en minutes
}

// Configuration Feel
export interface FeelAuthConfig {
  oauth: {
    google: OAuthConfig;
    apple: OAuthConfig;
  };
  security: SecurityConfig;
  verification: {
    autoVerify: boolean;
    manualReviewRequired: boolean;
    documentRetentionDays: number;
  };
} 