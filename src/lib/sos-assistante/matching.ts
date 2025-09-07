// Algorithme de matching intelligent pour SOS Assistante

import { SOSMission, DentalAssistant, MissionApplication } from './types';

export interface MatchingCriteria {
  skills: number; // Poids des compétences (0-1)
  location: number; // Poids de la localisation (0-1)
  availability: number; // Poids de la disponibilité (0-1)
  rating: number; // Poids de la note (0-1)
  rate: number; // Poids du taux horaire (0-1)
  experience: number; // Poids de l'expérience (0-1)
}

export interface MatchingResult {
  assistant: DentalAssistant;
  score: number;
  breakdown: {
    skillsScore: number;
    locationScore: number;
    availabilityScore: number;
    ratingScore: number;
    rateScore: number;
    experienceScore: number;
  };
  reasons: string[];
  warnings: string[];
}

// Critères de matching par défaut
const DEFAULT_CRITERIA: MatchingCriteria = {
  skills: 0.3,
  location: 0.25,
  availability: 0.2,
  rating: 0.15,
  rate: 0.05,
  experience: 0.05
};

/**
 * Calcule la distance entre deux points géographiques (formule de Haversine)
 */
export function calculateDistance(
  lat1: number, 
  lon1: number, 
  lat2: number, 
  lon2: number
): number {
  const R = 6371; // Rayon de la Terre en km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

/**
 * Calcule le score de compatibilité des compétences
 */
function calculateSkillsScore(
  requiredSkills: string[], 
  assistantSkills: string[]
): number {
  if (requiredSkills.length === 0) return 1;
  
  const matchingSkills = requiredSkills.filter(skill => 
    assistantSkills.includes(skill)
  );
  
  return matchingSkills.length / requiredSkills.length;
}

/**
 * Calcule le score de localisation
 */
function calculateLocationScore(
  missionLocation: [number, number],
  assistantLocation: [number, number],
  maxRadius: number
): number {
  const distance = calculateDistance(
    missionLocation[0], 
    missionLocation[1],
    assistantLocation[0], 
    assistantLocation[1]
  );
  
  if (distance <= maxRadius) {
    // Score inversement proportionnel à la distance
    return Math.max(0, 1 - (distance / maxRadius) * 0.5);
  }
  
  return 0; // Hors du rayon de recherche
}

/**
 * Calcule le score de disponibilité
 */
function calculateAvailabilityScore(
  missionDate: Date,
  missionStartTime: string,
  missionEndTime: string,
  assistantAvailability: DentalAssistant['availability']
): number {
  const missionDay = missionDate.toISOString().split('T')[0];
  const dayAvailability = assistantAvailability[missionDay];
  
  if (!dayAvailability || dayAvailability.length === 0) {
    return 0; // Pas de disponibilité ce jour
  }
  
  // Vérifier si l'assistante est disponible pendant les heures de la mission
  const missionStart = new Date(`${missionDay}T${missionStartTime}`);
  const missionEnd = new Date(`${missionDay}T${missionEndTime}`);
  
  for (const slot of dayAvailability) {
    if (!slot.available) continue;
    
    const slotStart = new Date(`${missionDay}T${slot.start}`);
    const slotEnd = new Date(`${missionDay}T${slot.end}`);
    
    // Vérifier si la mission s'inscrit dans le créneau
    if (missionStart >= slotStart && missionEnd <= slotEnd) {
      return 1; // Disponibilité parfaite
    }
    
    // Vérifier si la mission chevauche partiellement
    if (missionStart < slotEnd && missionEnd > slotStart) {
      const overlapStart = new Date(Math.max(missionStart.getTime(), slotStart.getTime()));
      const overlapEnd = new Date(Math.min(missionEnd.getTime(), slotEnd.getTime()));
      const overlapDuration = overlapEnd.getTime() - overlapStart.getTime();
      const missionDuration = missionEnd.getTime() - missionStart.getTime();
      
      return overlapDuration / missionDuration; // Score proportionnel au chevauchement
    }
  }
  
  return 0; // Pas de disponibilité
}

/**
 * Calcule le score basé sur la note de l'assistante
 */
function calculateRatingScore(rating: number): number {
  // Normalise la note de 0-5 à 0-1
  return rating / 5;
}

/**
 * Calcule le score basé sur le taux horaire
 */
function calculateRateScore(
  assistantRateMin: number,
  assistantRateMax: number,
  missionRate: number
): number {
  // Si le taux de la mission est dans la fourchette de l'assistante
  if (missionRate >= assistantRateMin && missionRate <= assistantRateMax) {
    return 1;
  }
  
  // Si le taux de la mission est proche de la fourchette
  const tolerance = 0.1; // 10% de tolérance
  const minTolerance = assistantRateMin * (1 - tolerance);
  const maxTolerance = assistantRateMax * (1 + tolerance);
  
  if (missionRate >= minTolerance && missionRate <= maxTolerance) {
    return 0.8;
  }
  
  // Si le taux de la mission est trop bas ou trop haut
  if (missionRate < assistantRateMin) {
    return Math.max(0, 1 - (assistantRateMin - missionRate) / assistantRateMin);
  } else {
    return Math.max(0, 1 - (missionRate - assistantRateMax) / assistantRateMax);
  }
}

/**
 * Calcule le score basé sur l'expérience
 */
function calculateExperienceScore(experienceLevel: string): number {
  switch (experienceLevel) {
    case 'expert': return 1;
    case 'senior': return 0.8;
    case 'intermediate': return 0.6;
    case 'junior': return 0.4;
    default: return 0.2;
  }
}

/**
 * Génère les raisons du score de matching
 */
function generateMatchingReasons(
  breakdown: MatchingResult['breakdown'],
  mission: SOSMission,
  assistant: DentalAssistant
): string[] {
  const reasons: string[] = [];
  
  if (breakdown.skillsScore >= 0.8) {
    reasons.push('Compétences parfaitement adaptées');
  } else if (breakdown.skillsScore >= 0.6) {
    reasons.push('Compétences globalement compatibles');
  } else if (breakdown.skillsScore >= 0.4) {
    reasons.push('Compétences partiellement compatibles');
  } else {
    reasons.push('Compétences limitées pour cette mission');
  }
  
  if (breakdown.locationScore >= 0.8) {
    reasons.push('Très proche du cabinet');
  } else if (breakdown.locationScore >= 0.6) {
    reasons.push('À distance raisonnable');
  } else if (breakdown.locationScore >= 0.4) {
    reasons.push('Un peu éloignée mais acceptable');
  } else {
    reasons.push('Éloignée du cabinet');
  }
  
  if (breakdown.availabilityScore >= 0.8) {
    reasons.push('Parfaitement disponible');
  } else if (breakdown.availabilityScore >= 0.6) {
    reasons.push('Disponible avec quelques ajustements');
  } else if (breakdown.availabilityScore >= 0.4) {
    reasons.push('Disponibilité partielle');
  } else {
    reasons.push('Pas disponible aux heures demandées');
  }
  
  if (breakdown.ratingScore >= 0.8) {
    reasons.push('Excellente note (4+ étoiles)');
  } else if (breakdown.ratingScore >= 0.6) {
    reasons.push('Bonne note (3.5+ étoiles)');
  } else if (breakdown.ratingScore >= 0.4) {
    reasons.push('Note correcte (3+ étoiles)');
  } else {
    reasons.push('Note à améliorer');
  }
  
  return reasons;
}

/**
 * Génère les avertissements pour le matching
 */
function generateMatchingWarnings(
  breakdown: MatchingResult['breakdown'],
  mission: SOSMission,
  assistant: DentalAssistant
): string[] {
  const warnings: string[] = [];
  
  if (breakdown.skillsScore < 0.5) {
    warnings.push('Compétences insuffisantes pour cette mission');
  }
  
  if (breakdown.locationScore < 0.3) {
    warnings.push('Très éloignée du cabinet');
  }
  
  if (breakdown.availabilityScore < 0.5) {
    warnings.push('Disponibilité limitée');
  }
  
  if (breakdown.rateScore < 0.5) {
    warnings.push('Taux horaire en décalage');
  }
  
  if (assistant.missionsCompleted < 5) {
    warnings.push('Peu d\'expérience sur la plateforme');
  }
  
  if (!assistant.verified) {
    warnings.push('Profil non vérifié');
  }
  
  return warnings;
}

/**
 * Algorithme principal de matching
 */
export function findMatchingAssistants(
  mission: SOSMission,
  assistants: DentalAssistant[],
  criteria: MatchingCriteria = DEFAULT_CRITERIA
): MatchingResult[] {
  const results: MatchingResult[] = [];
  
  for (const assistant of assistants) {
    // Calculer les scores individuels
    const skillsScore = calculateSkillsScore(mission.requiredSkills, assistant.skills);
    const locationScore = calculateLocationScore(
      mission.location.coordinates,
      assistant.location.coordinates,
      mission.location.radius
    );
    const availabilityScore = calculateAvailabilityScore(
      mission.missionDate,
      mission.startTime,
      mission.endTime,
      assistant.availability
    );
    const ratingScore = calculateRatingScore(assistant.rating);
    const rateScore = calculateRateScore(
      assistant.hourlyRateMin,
      assistant.hourlyRateMax,
      mission.hourlyRate
    );
    const experienceScore = calculateExperienceScore(assistant.experienceLevel);
    
    // Calculer le score global pondéré
    const globalScore = 
      skillsScore * criteria.skills +
      locationScore * criteria.location +
      availabilityScore * criteria.availability +
      ratingScore * criteria.rating +
      rateScore * criteria.rate +
      experienceScore * criteria.experience;
    
    // Créer le résultat de matching
    const result: MatchingResult = {
      assistant,
      score: globalScore,
      breakdown: {
        skillsScore,
        locationScore,
        availabilityScore,
        ratingScore,
        rateScore,
        experienceScore
      },
      reasons: [],
      warnings: []
    };
    
    // Générer les raisons et avertissements
    result.reasons = generateMatchingReasons(result.breakdown, mission, assistant);
    result.warnings = generateMatchingWarnings(result.breakdown, mission, assistant);
    
    // Ne garder que les assistants avec un score minimum
    if (globalScore >= 0.3) {
      results.push(result);
    }
  }
  
  // Trier par score décroissant
  return results.sort((a, b) => b.score - a.score);
}

/**
 * Trouve les meilleures correspondances pour une mission
 */
export function getTopMatches(
  mission: SOSMission,
  assistants: DentalAssistant[],
  limit: number = 10,
  criteria?: MatchingCriteria
): MatchingResult[] {
  const matches = findMatchingAssistants(mission, assistants, criteria);
  return matches.slice(0, limit);
}

/**
 * Calcule le score de compatibilité entre une mission et une assistante
 */
export function calculateCompatibilityScore(
  mission: SOSMission,
  assistant: DentalAssistant,
  criteria: MatchingCriteria = DEFAULT_CRITERIA
): number {
  const matches = findMatchingAssistants(mission, [assistant], criteria);
  return matches.length > 0 ? matches[0].score : 0;
}

/**
 * Filtre les assistants selon des critères spécifiques
 */
export function filterAssistants(
  assistants: DentalAssistant[],
  filters: {
    skills?: string[];
    maxDistance?: number;
    minRating?: number;
    maxRate?: number;
    experienceLevel?: string[];
    verified?: boolean;
    online?: boolean;
  }
): DentalAssistant[] {
  return assistants.filter(assistant => {
    // Filtre par compétences
    if (filters.skills && filters.skills.length > 0) {
      const hasRequiredSkills = filters.skills.some(skill => 
        assistant.skills.includes(skill)
      );
      if (!hasRequiredSkills) return false;
    }
    
    // Filtre par note minimum
    if (filters.minRating && assistant.rating < filters.minRating) {
      return false;
    }
    
    // Filtre par taux maximum
    if (filters.maxRate && assistant.hourlyRateMin > filters.maxRate) {
      return false;
    }
    
    // Filtre par niveau d'expérience
    if (filters.experienceLevel && filters.experienceLevel.length > 0) {
      if (!filters.experienceLevel.includes(assistant.experienceLevel)) {
        return false;
      }
    }
    
    // Filtre par statut de vérification
    if (filters.verified !== undefined && assistant.verified !== filters.verified) {
      return false;
    }
    
    // Filtre par statut en ligne
    if (filters.online !== undefined && assistant.isOnline !== filters.online) {
      return false;
    }
    
    return true;
  });
}

/**
 * Recommande des missions à une assistante
 */
export function recommendMissionsForAssistant(
  assistant: DentalAssistant,
  missions: SOSMission[],
  limit: number = 10
): MatchingResult[] {
  const results: MatchingResult[] = [];
  
  for (const mission of missions) {
    if (mission.status !== 'searching' && mission.status !== 'applications') {
      continue; // Ignorer les missions non disponibles
    }
    
    const matches = findMatchingAssistants(mission, [assistant]);
    if (matches.length > 0) {
      results.push(matches[0]);
    }
  }
  
  return results.sort((a, b) => b.score - a.score).slice(0, limit);
}
