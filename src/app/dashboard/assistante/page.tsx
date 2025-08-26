"use client";

import { useState } from "react";
import { 
  User, 
  Heart, 
  Package, 
  FileText, 
  Bell, 
  MapPin, 
  Calendar, 
  Star, 
  Euro,
  Clock,
  AlertTriangle,
  CheckCircle,
  Search,
  Filter
} from "lucide-react";
import Link from "next/link";

interface Module {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  notifications: number;
  link: string;
}

interface Mission {
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

export default function AssistanteDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterUrgent, setFilterUrgent] = useState(false);

  const modules: Module[] = [
    {
      id: 'profile',
      title: 'Profil Assistant',
      description: 'Espace personnel et portfolio',
      icon: <User className="h-5 w-5" />,
      color: 'from-green-500 to-green-600',
      notifications: 0,
      link: '/dashboard/assistante/profile'
    },
    {
      id: 'sos',
      title: 'SOS Missions',
      description: 'Recherche et candidature',
      icon: <Heart className="h-5 w-5" />,
      color: 'from-red-500 to-red-600',
      notifications: 3,
      link: '/dashboard/assistante/sos'
    },
    {
      id: 'stock',
      title: 'Stock iPad',
      description: 'Interface tactile et scan',
      icon: <Package className="h-5 w-5" />,
      color: 'from-orange-500 to-orange-600',
      notifications: 1,
      link: '/dashboard/assistante/stock'
    },
    {
      id: 'contrats',
      title: 'Contrats Missions',
      description: 'Suivi et signatures',
      icon: <FileText className="h-5 w-5" />,
      color: 'from-purple-500 to-purple-600',
      notifications: 2,
      link: '/dashboard/assistante/contrats'
    }
  ];

  const missions: Mission[] = [
    {
      id: '1',
      title: 'Assistante Chirurgie Implant',
      location: 'Centre Dentaire République, Paris 11e',
      distance: '2.3 km',
      duration: '2 jours',
      rate: '€180/jour',
      urgency: true,
      speciality: 'Implantologie',
      rating: 4.8,
      posted: 'Il y a 2h'
    },
    {
      id: '2',
      title: 'Assistante Prothèse Fixe',
      location: 'Cabinet Dr. Martin, Paris 8e',
      distance: '4.1 km',
      duration: '1 semaine',
      rate: '€160/jour',
      urgency: false,
      speciality: 'Prothèse',
      rating: 4.6,
      posted: 'Il y a 4h'
    },
    {
      id: '3',
      title: 'Assistante Urgences',
      location: 'Clinique Dentaire Nord, Paris 18e',
      distance: '3.7 km',
      duration: '3 jours',
      rate: '€200/jour',
      urgency: true,
      speciality: 'Urgences',
      rating: 4.9,
      posted: 'Il y a 6h'
    }
  ];

  const stats = [
    { label: 'Missions ce mois', value: '12', icon: <Calendar className="h-4 w-4" />, color: 'text-blue-600' },
    { label: 'Revenus mensuels', value: '€2,800', icon: <Euro className="h-4 w-4" />, color: 'text-green-600' },
    { label: 'Rating moyen', value: '4.8/5', icon: <Star className="h-4 w-4" />, color: 'text-yellow-600' },
    { label: 'Disponibilité', value: 'Libre', icon: <CheckCircle className="h-4 w-4" />, color: 'text-green-600' }
  ];

  const filteredMissions = missions.filter(mission => {
    const matchesSearch = mission.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mission.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = !filterUrgent || mission.urgency;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Mobile-First */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3">
                <User className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">Marie Lefebvre</h1>
                <p className="text-sm text-gray-500">Assistante Dentaire</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                <Bell className="h-5 w-5" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </button>
              <Link href="/auth/login" className="text-sm text-gray-600 hover:text-gray-800">
                Déconnexion
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 py-6 space-y-6">
        {/* Statistiques personnelles */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-gray-600">{stat.label}</p>
                  <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
                </div>
                <div className={`p-2 rounded-full ${stat.color.replace('text-', 'bg-')} bg-opacity-10`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recherche et filtres */}
        <div className="bg-white rounded-xl p-4 shadow-sm border">
          <div className="flex items-center space-x-3 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher une mission..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setFilterUrgent(!filterUrgent)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filterUrgent
                  ? 'bg-red-100 text-red-700 border border-red-200'
                  : 'bg-gray-100 text-gray-700 border border-gray-200'
              }`}
            >
              <AlertTriangle className="h-4 w-4 inline mr-1" />
              Urgentes
            </button>
          </div>
        </div>

        {/* Missions disponibles */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Missions Disponibles</h2>
          <div className="space-y-4">
            {filteredMissions.map((mission) => (
              <div key={mission.id} className="bg-white rounded-xl p-4 shadow-sm border hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="font-semibold text-gray-900 mr-2">{mission.title}</h3>
                      {mission.urgency && (
                        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium">
                          🚨 Urgente
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {mission.location}
                      <span className="mx-2">•</span>
                      <span>{mission.distance}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <Clock className="h-4 w-4 mr-1" />
                      {mission.duration}
                      <span className="mx-2">•</span>
                      <span className="font-medium text-green-600">{mission.rate}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{mission.speciality}</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="text-sm text-gray-600">{mission.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-500">Postée {mission.posted}</span>
                  <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                    Candidater
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modules Feel */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Mes Modules Feel</h2>
          <div className="grid grid-cols-2 gap-4">
            {modules.map((module) => (
              <Link key={module.id} href={module.link}>
                <div className="bg-white rounded-xl p-4 shadow-sm border hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${module.color} rounded-lg flex items-center justify-center`}>
                      {module.icon}
                    </div>
                    {module.notifications > 0 && (
                      <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                        {module.notifications > 99 ? "99+" : module.notifications}
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{module.title}</h3>
                  <p className="text-xs text-gray-600">{module.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Messages praticiens et planning */}
        <div className="grid grid-cols-1 gap-4">
          {/* Messages praticiens */}
          <div className="bg-white rounded-xl p-4 shadow-sm border">
            <h3 className="font-semibold text-gray-900 mb-3">Messages Praticiens</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Dr. Martin Dubois</p>
                    <p className="text-xs text-gray-600">Mission confirmée pour demain</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">Il y a 1h</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Dr. Sophie Chen</p>
                    <p className="text-xs text-gray-600">Évaluation mission terminée</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">Il y a 3h</span>
              </div>
            </div>
          </div>

          {/* Planning de la semaine */}
          <div className="bg-white rounded-xl p-4 shadow-sm border">
            <h3 className="font-semibold text-gray-900 mb-3">Planning de la Semaine</h3>
            <div className="space-y-2">
              {[
                { day: 'Lun 18', mission: 'Dr. Martin - Implantologie', status: 'confirmé' },
                { day: 'Mar 19', mission: 'Dr. Sophie - Prothèse', status: 'en attente' },
                { day: 'Mer 20', mission: 'Libre', status: 'disponible' },
                { day: 'Jeu 21', mission: 'Dr. Martin - Chirurgie', status: 'confirmé' },
                { day: 'Ven 22', mission: 'Libre', status: 'disponible' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-900 w-16">{item.day}</span>
                    <span className="text-sm text-gray-600">{item.mission}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.status === 'confirmé' ? 'bg-green-100 text-green-800' :
                    item.status === 'en attente' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
