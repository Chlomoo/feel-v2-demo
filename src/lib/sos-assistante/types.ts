// Types pour le module SOS Assistante

export interface SOSMission {
  id: string;
  practitionerId: string;
  practiceId: string;
  title: string;
  description: string;
  urgencyLevel: 'critical' | 'high' | 'normal';
  requiredSkills: string[];
  hourlyRate: number;
  missionDate: Date;
  startTime: string;
  endTime: string;
  durationHours: number;
  location: {
    address: string;
    coordinates: [number, number];
    radius: number;
  };
  status: 'searching' | 'applications' | 'selected' | 'contracted' | 'active' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
  applicationsCount?: number;
  selectedAssistantId?: string;
  contractUrl?: string;
}

export interface DentalAssistant {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  skills: string[];
  experienceLevel: 'junior' | 'intermediate' | 'senior' | 'expert';
  hourlyRateMin: number;
  hourlyRateMax: number;
  location: {
    address: string;
    coordinates: [number, number];
  };
  availability: {
    [key: string]: { 
      start: string; 
      end: string; 
      available: boolean;
      isRecurring?: boolean;
    }[];
  };
  rating: number;
  missionsCompleted: number;
  verified: boolean;
  verifiedAt?: Date;
  photoUrl?: string;
  bio?: string;
  certifications: string[];
  languages: string[];
  isOnline: boolean;
  lastActiveAt: Date;
}

export interface MissionApplication {
  id: string;
  missionId: string;
  assistantId: string;
  proposedRate: number;
  message: string;
  matchingScore: number;
  status: 'pending' | 'accepted' | 'rejected' | 'withdrawn';
  appliedAt: Date;
  respondedAt?: Date;
  assistant?: DentalAssistant;
}

export interface MissionChat {
  id: string;
  missionId: string;
  senderId: string;
  receiverId: string;
  message: string;
  messageType: 'text' | 'file' | 'image' | 'system';
  fileUrl?: string;
  readAt?: Date;
  sentAt: Date;
  sender?: {
    id: string;
    name: string;
    type: 'practitioner' | 'assistant';
  };
}

export interface MissionContract {
  id: string;
  missionId: string;
  assistantId: string;
  contractPdfUrl: string;
  signedByPractitionerAt?: Date;
  signedByAssistantAt?: Date;
  status: 'draft' | 'pending_practitioner' | 'pending_assistant' | 'signed' | 'cancelled';
  createdAt: Date;
  expiresAt: Date;
  terms: {
    hourlyRate: number;
    duration: number;
    startDate: Date;
    endDate: Date;
    responsibilities: string[];
    cancellationPolicy: string;
  };
}

export interface SOSAnalytics {
  totalMissions: number;
  activeMissions: number;
  completedMissions: number;
  successRate: number;
  averageTimeToFill: number; // en minutes
  totalRevenue: number;
  averageHourlyRate: number;
  topSkills: Array<{
    skill: string;
    count: number;
    percentage: number;
  }>;
  monthlyStats: Array<{
    month: string;
    missions: number;
    revenue: number;
    successRate: number;
  }>;
  geographicDistribution: Array<{
    region: string;
    missions: number;
    assistants: number;
  }>;
}

export interface NotificationSettings {
  email: boolean;
  sms: boolean;
  push: boolean;
  newApplications: boolean;
  missionUpdates: boolean;
  contractSignatures: boolean;
  paymentUpdates: boolean;
}

export interface SOSFilters {
  urgency?: string[];
  status?: string[];
  skills?: string[];
  dateRange?: {
    start: Date;
    end: Date;
  };
  location?: {
    address: string;
    radius: number;
  };
  hourlyRate?: {
    min: number;
    max: number;
  };
}

export interface SOSSearchParams {
  query?: string;
  filters?: SOSFilters;
  sortBy?: 'date' | 'urgency' | 'rate' | 'distance' | 'rating';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

// Types pour les composants UI
export interface MissionCardProps {
  mission: SOSMission;
  onView?: (mission: SOSMission) => void;
  onEdit?: (mission: SOSMission) => void;
  onDelete?: (mission: SOSMission) => void;
  showActions?: boolean;
}

export interface CandidateCardProps {
  candidate: DentalAssistant;
  mission: SOSMission;
  onContact?: (candidate: DentalAssistant) => void;
  onSelect?: (candidate: DentalAssistant) => void;
  onViewProfile?: (candidate: DentalAssistant) => void;
  matchingScore?: number;
}

export interface ChatMessageProps {
  message: MissionChat;
  isOwn: boolean;
  showAvatar?: boolean;
}

export interface MapComponentProps {
  center: [number, number];
  zoom?: number;
  markers?: Array<{
    id: string;
    position: [number, number];
    title: string;
    type: 'mission' | 'assistant' | 'practice';
  }>;
  onMarkerClick?: (marker: any) => void;
  radius?: number;
}

// Types pour les formulaires
export interface MissionFormData {
  title: string;
  description: string;
  urgency: 'critical' | 'high' | 'normal';
  date: string;
  startTime: string;
  endTime: string;
  duration: number;
  hourlyRate: number;
  skills: string[];
  location: {
    address: string;
    radius: number;
  };
}

export interface AssistantProfileFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bio: string;
  skills: string[];
  experienceLevel: 'junior' | 'intermediate' | 'senior' | 'expert';
  hourlyRateMin: number;
  hourlyRateMax: number;
  location: {
    address: string;
  };
  availability: {
    [key: string]: { 
      start: string; 
      end: string; 
      available: boolean;
    }[];
  };
  certifications: string[];
  languages: string[];
}

// Types pour les API responses
export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Types pour les statistiques en temps réel
export interface RealTimeStats {
  activeMissions: number;
  availableAssistants: number;
  newApplications: number;
  completedToday: number;
  averageResponseTime: number;
}

// Types pour les notifications
export interface SOSNotification {
  id: string;
  type: 'new_application' | 'mission_update' | 'contract_signed' | 'payment_received' | 'system';
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
  actionUrl?: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
}

// Types pour les rapports
export interface MissionReport {
  id: string;
  missionId: string;
  assistantId: string;
  practitionerId: string;
  rating: number;
  feedback: string;
  completedAt: Date;
  issues: string[];
  recommendations: string[];
}

export interface FinancialReport {
  period: {
    start: Date;
    end: Date;
  };
  totalRevenue: number;
  totalCommissions: number;
  netRevenue: number;
  missionsCount: number;
  averageMissionValue: number;
  topPerformingSkills: Array<{
    skill: string;
    revenue: number;
    missions: number;
  }>;
}
