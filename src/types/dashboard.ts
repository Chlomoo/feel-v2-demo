export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  notifications: number;
  link: string;
  urgent?: boolean;
}

export interface KPI {
  label: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down';
  icon: React.ReactNode;
  color: string;
}

export interface Organism {
  name: string;
  acronym: string;
  description: string;
  icon: string;
  color: string;
  status: 'connected' | 'pending' | 'error';
  nextDeadline?: string;
  info?: string;
}

export interface Mission {
  id: string;
  title: string;
  location: string;
  distance: string;
  duration: string;
  rate: string;
  urgency: boolean;
  speciality: string;
  rating: number;
  posted: string;
}

export interface Site {
  name: string;
  location: string;
  praticiens: number;
  assistantes: number;
  performance: number;
  caMensuel: string;
  status: 'excellent' | 'bon' | 'moyen' | 'faible';
}

export interface Alert {
  type: 'critical' | 'warning' | 'info';
  message: string;
  site: string;
  time: string;
}

export interface Profile {
  id: string;
  name: string;
  role: string;
  description: string;
  icon: string;
  color: string;
  notifications: number;
} 