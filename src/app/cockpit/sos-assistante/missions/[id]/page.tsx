'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
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

export default function MissionDetails() {
  const params = useParams();
  const missionId = params.id as string;
  
  const [mission, setMission] = useState<SOSMission | null>(null);
  const [applications, setApplications] = useState<MissionApplication[]>([]);
  const [selectedAssistant, setSelectedAssistant] = useState<DentalAssistant | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'candidates' | 'chat' | 'contract'>('overview');
  const [isLoading, setIsLoading] = useState(true);

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

  const mockApplications: MissionApplication[] = [
    {
      id: 'app-1',
      missionId: missionId,
      assistantId: 'assistant-1',
      proposedRate: 42,
      message: 'Bonjour, je suis disponible pour cette mission. J\'ai 5 ans d\'expérience en implantologie et chirurgie orale.',
      matchingScore: 0.95,
      status: 'pending',
      appliedAt: new Date('2024-01-14T10:30:00'),
      assistant: {
        id: 'assistant-1',
        userId: 'user-1',
        firstName: 'Sophie',
        lastName: 'Martin',
        email: 'sophie.martin@email.com',
        phone: '06 12 34 56 78',
        skills: ['Implantologie', 'Chirurgie Orale', 'Stérilisation', 'Gestion des stocks', 'Parodontologie'],
        experienceLevel: 'senior',
        hourlyRateMin: 35,
        hourlyRateMax: 50,
        location: {
          address: '12 rue de la Paix, 75011 Paris',
          coordinates: [48.8566, 2.3522]
        },
        availability: {},
        rating: 4.8,
        missionsCompleted: 45,
        verified: true,
        verifiedAt: new Date('2023-06-01'),
        photoUrl: '/logos/Logo Smile By Feel .png',
        bio: 'Assistante dentaire expérimentée spécialisée en implantologie et chirurgie orale.',
        certifications: ['HACCP', 'Stérilisation', 'Implantologie'],
        languages: ['Français', 'Anglais'],
        isOnline: true,
        lastActiveAt: new Date('2024-01-14T11:00:00')
      }
    },
    {
      id: 'app-2',
      missionId: missionId,
      assistantId: 'assistant-2',
      proposedRate: 48,
      message: 'Je suis très intéressée par cette mission. J\'ai une excellente expérience en implantologie.',
      matchingScore: 0.87,
      status: 'pending',
      appliedAt: new Date('2024-01-14T11:15:00'),
      assistant: {
        id: 'assistant-2',
        userId: 'user-2',
        firstName: 'Marie',
        lastName: 'Dubois',
        email: 'marie.dubois@email.com',
        phone: '06 23 45 67 89',
        skills: ['Implantologie', 'Prothèse', 'Endodontie', 'Stérilisation'],
        experienceLevel: 'expert',
        hourlyRateMin: 40,
        hourlyRateMax: 60,
        location: {
          address: '8 avenue des Champs, 75011 Paris',
          coordinates: [48.8566, 2.3522]
        },
        availability: {},
        rating: 4.9,
        missionsCompleted: 78,
        verified: true,
        verifiedAt: new Date('2023-03-15'),
        photoUrl: '/logos/Logo Smile By Feel .png',
        bio: 'Assistante dentaire expert avec plus de 10 ans d\'expérience.',
        certifications: ['HACCP', 'Stérilisation', 'Implantologie', 'Prothèse'],
        languages: ['Français', 'Anglais', 'Espagnol'],
        isOnline: true,
        lastActiveAt: new Date('2024-01-14T11:30:00')
      }
    }
  ];

  useEffect(() => {
    // Simulation du chargement des données
    const loadMissionData = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMission(mockMission);
      setApplications(mockApplications);
      setIsLoading(false);
    };

    loadMissionData();
  }, [missionId]);

  const handleSelectAssistant = (assistant: DentalAssistant) => {
    setSelectedAssistant(assistant);
    setActiveTab('contract');
  };

  const handleContactAssistant = (assistant: DentalAssistant) => {
    // Ouvrir le chat avec l'assistante
    setActiveTab('chat');
  };

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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement de la mission...</p>
        </div>
      </div>
    );
  }

  if (!mission) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-xl font-semibold text-gray-900 mb-2">Mission non trouvée</h1>
          <p className="text-gray-600 mb-4">Cette mission n'existe pas ou a été supprimée.</p>
          <Link href="/cockpit/sos-assistante">
            <Button>Retour au dashboard</Button>
          </Link>
        </div>
      </div>
    );
  }

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
              { id: 'candidates', label: 'Candidatures', icon: Users, count: applications.length },
              { id: 'chat', label: 'Messages', icon: MessageCircle },
              { id: 'contract', label: 'Contrat', icon: FileText }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-red-500 text-red-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <Badge variant="secondary" className="ml-1">
                    {tab.count}
                  </Badge>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
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
          </div>
        )}

        {activeTab === 'candidates' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                Candidatures reçues ({applications.length})
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

            <div className="space-y-4">
              {applications.map((application) => (
                <CandidateCard
                  key={application.id}
                  candidate={application.assistant!}
                  mission={mission}
                  matchingScore={application.matchingScore}
                  onContact={handleContactAssistant}
                  onSelect={handleSelectAssistant}
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'chat' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Messages</h2>
            <Card>
              <CardContent className="p-6">
                <div className="text-center text-gray-500">
                  <MessageCircle className="h-12 w-12 mx-auto mb-4" />
                  <p>Interface de chat en cours de développement</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'contract' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Contrat</h2>
            <Card>
              <CardContent className="p-6">
                <div className="text-center text-gray-500">
                  <FileText className="h-12 w-12 mx-auto mb-4" />
                  <p>Interface de contrat en cours de développement</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
