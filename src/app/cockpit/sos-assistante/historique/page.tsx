'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  ArrowLeft, Search, Filter, Download, Calendar, 
  Clock, MapPin, Users, Star, TrendingUp, CheckCircle,
  AlertTriangle, Eye, FileText, Heart
} from 'lucide-react';
import Link from 'next/link';
import MissionCard from '@/components/sos-assistante/MissionCard';
import { SOSMission } from '@/lib/sos-assistante/types';

export default function HistoriqueMissions() {
  const [missions, setMissions] = useState<SOSMission[]>([]);
  const [filteredMissions, setFilteredMissions] = useState<SOSMission[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [urgencyFilter, setUrgencyFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Mock data pour la démonstration
  const mockMissions: SOSMission[] = [
    {
      id: '1',
      practitionerId: 'practitioner-1',
      practiceId: 'practice-1',
      title: 'Remplacement urgent assistante',
      description: 'Remplacement urgent d\'assistante dentaire pour le Dr. Martin Dubois.',
      urgencyLevel: 'critical',
      requiredSkills: ['Implantologie', 'Chirurgie Orale'],
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
      status: 'completed',
      createdAt: new Date('2024-01-14T10:00:00'),
      updatedAt: new Date('2024-01-15T16:00:00'),
      applicationsCount: 3,
      selectedAssistantId: 'assistant-1'
    },
    {
      id: '2',
      practitionerId: 'practitioner-1',
      practiceId: 'practice-1',
      title: 'Mission weekend urgente',
      description: 'Mission de weekend pour remplacement d\'assistante.',
      urgencyLevel: 'high',
      requiredSkills: ['Parodontologie', 'Endodontie'],
      hourlyRate: 50,
      missionDate: new Date('2024-01-12'),
      startTime: '09:00',
      endTime: '17:00',
      durationHours: 8,
      location: {
        address: '15 rue République, 75011 Paris',
        coordinates: [48.8566, 2.3522],
        radius: 25
      },
      status: 'completed',
      createdAt: new Date('2024-01-11T14:00:00'),
      updatedAt: new Date('2024-01-12T17:00:00'),
      applicationsCount: 5,
      selectedAssistantId: 'assistant-2'
    },
    {
      id: '3',
      practitionerId: 'practitioner-1',
      practiceId: 'practice-1',
      title: 'Remplacement court terme',
      description: 'Remplacement de 3 jours pour congé maladie.',
      urgencyLevel: 'normal',
      requiredSkills: ['Prothèse', 'Orthodontie'],
      hourlyRate: 42,
      missionDate: new Date('2024-01-08'),
      startTime: '08:30',
      endTime: '17:30',
      durationHours: 9,
      location: {
        address: '15 rue République, 75011 Paris',
        coordinates: [48.8566, 2.3522],
        radius: 25
      },
      status: 'cancelled',
      createdAt: new Date('2024-01-07T16:00:00'),
      updatedAt: new Date('2024-01-08T08:00:00'),
      applicationsCount: 2
    }
  ];

  useEffect(() => {
    const loadMissions = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMissions(mockMissions);
      setFilteredMissions(mockMissions);
      setIsLoading(false);
    };

    loadMissions();
  }, []);

  useEffect(() => {
    let filtered = missions;

    // Filtre par recherche textuelle
    if (searchQuery) {
      filtered = filtered.filter(mission =>
        mission.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mission.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mission.location.address.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filtre par statut
    if (statusFilter !== 'all') {
      filtered = filtered.filter(mission => mission.status === statusFilter);
    }

    // Filtre par urgence
    if (urgencyFilter !== 'all') {
      filtered = filtered.filter(mission => mission.urgencyLevel === urgencyFilter);
    }

    // Filtre par date
    if (dateFilter !== 'all') {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      
      filtered = filtered.filter(mission => {
        const missionDate = new Date(mission.missionDate);
        const missionDay = new Date(missionDate.getFullYear(), missionDate.getMonth(), missionDate.getDate());
        
        switch (dateFilter) {
          case 'today':
            return missionDay.getTime() === today.getTime();
          case 'week':
            const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
            return missionDay >= weekAgo;
          case 'month':
            const monthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
            return missionDay >= monthAgo;
          case 'year':
            const yearAgo = new Date(today.getTime() - 365 * 24 * 60 * 60 * 1000);
            return missionDay >= yearAgo;
          default:
            return true;
        }
      });
    }

    setFilteredMissions(filtered);
  }, [missions, searchQuery, statusFilter, urgencyFilter, dateFilter]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'active': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Terminée';
      case 'cancelled': return 'Annulée';
      case 'active': return 'En cours';
      default: return 'Inconnu';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'normal': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getUrgencyText = (urgency: string) => {
    switch (urgency) {
      case 'critical': return 'Critique';
      case 'high': return 'Haute';
      case 'normal': return 'Normale';
      default: return 'Inconnu';
    }
  };

  const calculateStats = () => {
    const total = missions.length;
    const completed = missions.filter(m => m.status === 'completed').length;
    const cancelled = missions.filter(m => m.status === 'cancelled').length;
    const successRate = total > 0 ? Math.round((completed / total) * 100) : 0;
    const totalRevenue = missions
      .filter(m => m.status === 'completed')
      .reduce((sum, m) => sum + (m.hourlyRate * m.durationHours), 0);

    return { total, completed, cancelled, successRate, totalRevenue };
  };

  const stats = calculateStats();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement de l'historique...</p>
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
                <h1 className="text-xl font-semibold text-gray-900">Historique des Missions</h1>
                <p className="text-sm text-gray-500">Toutes vos missions SOS Assistante</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-1" />
                Exporter
              </Button>
              <Button variant="outline" size="sm">
                <FileText className="h-4 w-4 mr-1" />
                Rapport
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Statistiques */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total missions</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                </div>
                <Heart className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Terminées</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.completed}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Annulées</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.cancelled}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Taux de succès</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.successRate}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Revenus totaux</p>
                  <p className="text-2xl font-bold text-gray-900">€{stats.totalRevenue}</p>
                </div>
                <Star className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filtres */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Recherche</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Rechercher une mission..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Statut</label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="all">Tous les statuts</option>
                  <option value="completed">Terminées</option>
                  <option value="cancelled">Annulées</option>
                  <option value="active">En cours</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Urgence</label>
                <select
                  value={urgencyFilter}
                  onChange={(e) => setUrgencyFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="all">Toutes les urgences</option>
                  <option value="critical">Critique</option>
                  <option value="high">Haute</option>
                  <option value="normal">Normale</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Période</label>
                <select
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="all">Toutes les périodes</option>
                  <option value="today">Aujourd'hui</option>
                  <option value="week">Cette semaine</option>
                  <option value="month">Ce mois</option>
                  <option value="year">Cette année</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Liste des missions */}
        <div className="space-y-4">
          {filteredMissions.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Aucune mission trouvée</h3>
                <p className="text-gray-500 mb-4">
                  {searchQuery || statusFilter !== 'all' || urgencyFilter !== 'all' || dateFilter !== 'all'
                    ? 'Aucune mission ne correspond à vos critères de recherche.'
                    : 'Vous n\'avez pas encore de missions dans votre historique.'
                  }
                </p>
                <Link href="/cockpit/sos-assistante/nouvelle-mission">
                  <Button className="bg-red-600 hover:bg-red-700">
                    <Heart className="h-4 w-4 mr-2" />
                    Créer une mission
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            filteredMissions.map((mission) => (
              <div key={mission.id} className="relative">
                <MissionCard 
                  mission={mission} 
                  showActions={true}
                  onView={(mission) => {
                    // Navigation vers les détails de la mission
                    window.location.href = `/cockpit/sos-assistante/missions/${mission.id}`;
                  }}
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Badge className={getStatusColor(mission.status)}>
                    {getStatusText(mission.status)}
                  </Badge>
                  <Badge className={getUrgencyColor(mission.urgencyLevel)}>
                    {getUrgencyText(mission.urgencyLevel)}
                  </Badge>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
