// Types utilisateurs Feel
export interface User {
  id: string;
  email: string;
  nom: string;
  prenom: string;
  role: 'praticien' | 'assistante' | 'directeur';
  profil: UserProfile;
}

export interface UserProfile {
  id: string;
  userId: string;
  avatar?: string;
  telephone?: string;
  specialites?: string[];
  cabinet?: Cabinet;
  experience?: number;
  certifications?: string[];
}

export interface Cabinet {
  id: string;
  nom: string;
  adresse: string;
  siret: string;
  praticiens: User[];
  directeur: User;
}

export interface Mission {
  id: string;
  titre: string;
  description: string;
  cabinet: Cabinet;
  praticien: User;
  dateDebut: Date;
  dateFin: Date;
  tarif: number;
  statut: 'ouverte' | 'assignee' | 'terminee';
}

export interface Module {
  id: string;
  nom: string;
  description: string;
  icone: string;
  actif: boolean;
  roleAccess: string[];
}
