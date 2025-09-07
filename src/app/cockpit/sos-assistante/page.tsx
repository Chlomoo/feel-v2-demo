'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Heart, Plus, Users, Clock, MapPin, Star, 
  AlertTriangle, CheckCircle, Calendar, TrendingUp,
  MessageCircle, FileText, Download, Filter, Search,
  Bell, Settings, ArrowRight, Eye, Edit3, Trash2
} from 'lucide-react';
import Link from 'next/link';

export default function SOSAssistanteDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [missions, setMissions] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [notifications, setNotifications] = useState(0);

  // Mock data pour la démonstration
  const mockMissions = [
    {
      id: '1',
      title: 'Remplacement urgent assistante',
      practice: 'Centre Dentaire République',
      date: '2024-01-15',
      time: '08:00-16:00',
      urgency: 'critical',
      status: 'searching',
      candidates: 3,
      hourlyRate: 45,
      skills: ['Implantologie', 'Chirurgie Orale']
    },
    {
      id: '2',
      title: 'Mission weekend urgente',
      practice: 'Cabinet Dr. Martin',
      date: '2024-01-16',
      time: '09:00-17:00',
      urgency: 'high',
      status: 'applications',
      candidates: 5,
      hourlyRate: 50,
      skills: ['Parodontologie', 'Endodontie']
    }
  ];

  const mockCandidates = [
    {
      id: '1',
      name: 'Sophie Martin',
      rating: 4.8,
      distance: '2.3 km',
      skills: ['Implantologie', 'Chirurgie Orale', 'Parodontologie'],
      experience: '5 ans',
      hourlyRate: 42,
      available: true,
      photo: '/logos/Logo Smile By Feel .png'
    },
    {
      id: '2',
      name: 'Marie Dubois',
      rating: 4.9,
      distance: '1.8 km',
      skills: ['Endodontie', 'Prothèse'],
      experience: '8 ans',
      hourlyRate: 48,
      available: true,
      photo: '/logos/Logo Smile By Feel .png'
    }
  ];

  useEffect(() => {
    setMissions(mockMissions);
    setCandidates(mockCandidates);
    setNotifications(3);
  }, []);

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
      case 'active': return 'bg-purple-100 text-purple-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'searching': return 'En recherche';
      case 'applications': return 'Candidatures reçues';
      case 'selected': return 'Sélection effectuée';
      case 'active': return 'En cours';
      case 'completed': return 'Terminée';
      default: return 'Inconnu';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Feel harmonisé avec logo smile */}
      <div className="bg-[#F5F1E8] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="bg-[#F5F1E8] p-2 rounded-lg">
                <img 
                  src="/logos/Logo Smile By Feel .png" 
                  alt="Smile by Feel" 
                  className="h-8 w-auto"
                />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">SOS Assistante</h1>
                <p className="text-sm text-gray-500">Matching intelligent pour missions urgentes</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="destructive" className="flex items-center space-x-1">
                <Bell className="h-3 w-3" />
                <span>Urgent</span>
                <span className="bg-white text-red-600 rounded-full px-1.5 py-0.5 text-xs font-bold">
                  {notifications}
                </span>
              </Badge>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Paramètres
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/cockpit/dentist" className="text-gray-500 hover:text-gray-700">
                Dashboard
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-900 font-medium">SOS Assistante</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Missions actives</p>
                  <p className="text-2xl font-bold text-gray-900">{missions.length}</p>
                </div>
                <Heart className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Candidats disponibles</p>
                  <p className="text-2xl font-bold text-gray-900">{candidates.length}</p>
                </div>
                <Users className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Taux de succès</p>
                  <p className="text-2xl font-bold text-gray-900">94%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Temps moyen</p>
                  <p className="text-2xl font-bold text-gray-900">12min</p>
                </div>
                <Clock className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions principales */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Nouvelle mission */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Plus className="h-5 w-5 text-red-500" />
                <span>Nouvelle Mission SOS</span>
              </CardTitle>
              <CardDescription>
                Publiez une mission urgente et trouvez l'assistante parfaite en quelques minutes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/cockpit/sos-assistante/nouvelle-mission">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Créer une mission
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Missions actives */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <span>Missions Actives</span>
                </span>
                <Badge variant="outline">{missions.length}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {missions.map((mission) => (
                  <div key={mission.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-medium text-gray-900">{mission.title}</h3>
                        <Badge className={getUrgencyColor(mission.urgency)}>
                          {mission.urgency === 'critical' ? 'Critique' : mission.urgency === 'high' ? 'Haute' : 'Normale'}
                        </Badge>
                        <Badge className={getStatusColor(mission.status)}>
                          {getStatusText(mission.status)}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{mission.practice}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{mission.date} - {mission.time}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{mission.candidates} candidats</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-semibold text-gray-900">
                        {mission.hourlyRate}€/h
                      </span>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        Voir
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Candidats et historique */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Candidats en attente */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-green-500" />
                  <span>Candidatures en Attente</span>
                </span>
                <Badge variant="outline">{candidates.length}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {candidates.map((candidate) => (
                  <div key={candidate.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <img 
                      src={candidate.photo} 
                      alt={candidate.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-medium text-gray-900">{candidate.name}</h3>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600">{candidate.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{candidate.distance}</span>
                        <span>{candidate.experience}</span>
                        <span>{candidate.hourlyRate}€/h</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {candidate.skills.slice(0, 2).map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {candidate.skills.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{candidate.skills.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Contacter
                      </Button>
                      <Button size="sm" variant="outline">
                        Sélectionner
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Historique et analytics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-purple-500" />
                <span>Tableau de Bord & Analytics</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">24</p>
                    <p className="text-sm text-blue-800">Missions ce mois</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">€2,340</p>
                    <p className="text-sm text-green-800">Économies réalisées</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Actions rapides</h4>
                  <div className="space-y-2">
                    <Link href="/cockpit/sos-assistante/historique">
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="h-4 w-4 mr-2" />
                        Voir l'historique complet
                      </Button>
                    </Link>
                    <Link href="/cockpit/sos-assistante/analytics">
                      <Button variant="outline" className="w-full justify-start">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Analytics détaillées
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Exporter les données
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
