import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, Heart, Clock, MapPin, Users, Star, 
  AlertTriangle, CheckCircle, MessageCircle, FileText,
  Download, Edit3, Trash2, Phone, Mail, Calendar
} from 'lucide-react';
import Link from 'next/link';
import MissionCard from '@/components/sos-assistante/MissionCard';
import CandidateCard from '@/components/sos-assistante/CandidateCard';
import { SOSMission, DentalAssistant, MissionApplication } from '@/lib/sos-assistante/types';

// Fonction requise pour l'export statique
export async function generateStaticParams() {
  // Générer des paramètres statiques pour quelques missions de démonstration
  return [
    { id: 'mission-1' },
    { id: 'mission-2' },
    { id: 'mission-3' }
  ];
}

interface MissionDetailsProps {
  params: {
    id: string;
  };
}

export default function MissionDetails({ params }: MissionDetailsProps) {
  const missionId = params.id;

  // Mock data pour la démonstration
  const mockMission: SOSMission = {
    id: missionId,
    practitionerId: 'practitioner-1',
    practiceId: 'practice-1',
    title: 'Remplacement urgent assistante',
    description: 'Remplacement urgent d\'assistante dentaire pour le Dr. Martin Dubois. Mission de 8 heures avec prise en charge de patients en implantologie et chirurgie orale. Expérience requise en stérilisation et gestion des stocks.',
    urgencyLevel: 'critical',
    requiredSkills: ['Implantologie', 'Chirurgie Orale', 'Stérilisation', 'Gestion des stocks'],
    hourlyRate: 45,
    missionDate: new Date('2024-01-15'),
    startTime: '08:00',
    endTime: '16:00',
    durationHours: 8,
    location: {
      address: '15 rue République, 75011 Paris',
      coordinates: [48.8566, 2.3522],
      radius: 25
    },
    status: 'applications',
    createdAt: new Date('2024-01-14T10:00:00'),
    updatedAt: new Date('2024-01-14T10:00:00'),
    applicationsCount: 3
  };

  // Vérifier si la mission existe
  if (!['mission-1', 'mission-2', 'mission-3'].includes(missionId)) {
    notFound();
  }

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'normal': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'searching': return 'bg-blue-100 text-blue-800';
      case 'applications': return 'bg-yellow-100 text-yellow-800';
      case 'selected': return 'bg-green-100 text-green-800';
      case 'contracted': return 'bg-purple-100 text-purple-800';
      case 'active': return 'bg-indigo-100 text-indigo-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'searching': return 'En recherche';
      case 'applications': return 'Candidatures reçues';
      case 'selected': return 'Sélection effectuée';
      case 'contracted': return 'Contrat signé';
      case 'active': return 'En cours';
      case 'completed': return 'Terminée';
      case 'cancelled': return 'Annulée';
      default: return 'Inconnu';
    }
  };

  // Données statiques pour la démonstration
  const mission = mockMission;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <Link href="/cockpit/sos-assistante">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Retour
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">{mission.title}</h1>
                <p className="text-sm text-gray-500">Détails de la mission</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className={getUrgencyColor(mission.urgencyLevel)}>
                <AlertTriangle className="h-3 w-3 mr-1" />
                {mission.urgencyLevel === 'critical' ? 'Critique' : 
                 mission.urgencyLevel === 'high' ? 'Haute' : 'Normale'}
              </Badge>
              <Badge className={getStatusColor(mission.status)}>
                {getStatusText(mission.status)}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Vue d\'ensemble', icon: Heart },
              { id: 'candidates', label: 'Candidatures', icon: Users, count: 3 },
              { id: 'chat', label: 'Messages', icon: MessageCircle },
              { id: 'contract', label: 'Contrat', icon: FileText }
            ].map(tab => (
              <div
                key={tab.id}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  tab.id === 'overview'
                    ? 'border-red-500 text-red-600'
                    : 'border-transparent text-gray-500'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <Badge variant="secondary" className="ml-1">
                    {tab.count}
                  </Badge>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Carte de la mission */}
          <MissionCard 
            mission={mission} 
            showActions={false}
          />

          {/* Informations détaillées */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  <span>Planning</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>Date : {new Intl.DateTimeFormat('fr-FR', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  }).format(mission.missionDate)}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>Heures : {mission.startTime} - {mission.endTime}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>Durée : {mission.durationHours} heures</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-green-500" />
                  <span>Localisation</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{mission.location.address}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>Rayon de recherche : {mission.location.radius} km</span>
                </div>
                <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Carte interactive (intégration Mapbox à venir)</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Section candidatures */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                Candidatures reçues (3)
              </h2>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  Exporter
                </Button>
                <Button variant="outline" size="sm">
                  <Edit3 className="h-4 w-4 mr-1" />
                  Filtrer
                </Button>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="text-center text-gray-500">
                  <Users className="h-12 w-12 mx-auto mb-4" />
                  <p>Interface de gestion des candidatures en cours de développement</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
