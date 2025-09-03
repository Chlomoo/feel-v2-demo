'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, Heart, Calculator, Package, FileText, Newspaper, 
  Bell, TrendingUp, Calendar, Clock, Star, CheckCircle,
  ArrowRight, Plus, Settings, Search, Filter, AlertTriangle,
  User, MapPin, Phone, Mail, Clock as ClockIcon, LogOut,
  Zap, Target, Award, Shield, ExternalLink
} from 'lucide-react';

export default function AssistantCockpit() {
  const [activeTab, setActiveTab] = useState('missions');

  const personalStats = [
    { title: 'Missions du mois', value: '12', change: '+2', icon: Calendar, color: 'text-blue-600' },
    { title: 'Revenus mensuels', value: '€2,800', change: '+15%', icon: TrendingUp, color: 'text-green-600' },
    { title: 'Rating professionnel', value: '4.8/5', change: '+0.1', icon: Star, color: 'text-yellow-600' },
    { title: 'Heures travaillées', value: '6.5h', change: '+0.5h', icon: Clock, color: 'text-purple-600' }
  ];

  const urgentMissions = [
    {
      id: 1,
      title: 'URGENT - Dr. Dubois',
      location: 'Centre République, Paris 11e',
      distance: '2km',
      time: 'Aujourd\'hui 14h-18h',
      urgency: 'critical',
      type: 'implant',
      compensation: '€120/h',
      total: '€480',
      match: '95%',
      transport: 'Metro direct'
    },
    {
      id: 2,
      title: 'Dr. Martin - Cabinet Voltaire',
      location: 'Paris 10e',
      distance: '5km',
      time: 'Demain 9h-17h',
      urgency: 'high',
      type: 'généraliste',
      compensation: '€85/h',
      total: '€680',
      match: '78%',
      transport: 'Metro + 5min marche'
    },
    {
      id: 3,
      title: 'Dr. Roussel - Récurrent',
      location: 'Boulogne',
      distance: '8km',
      time: 'Mar-Jeu 9h-17h',
      urgency: 'medium',
      type: 'orthodontie',
      compensation: '€95/h',
      total: '€1,520/sem',
      match: '82%',
      transport: 'RER + bus'
    }
  ];

  const plannedMissions = [
    {
      id: 4,
      title: 'Gestion stock - Dr. Lefevre',
      location: 'Centre République, Paris 11e',
      date: 'Demain',
      time: '10:00 - 16:00',
      type: 'gestion',
      compensation: '€85'
    },
    {
      id: 5,
      title: 'Formation équipe - Dr. Moreau',
      location: 'Cabinet Nation, Paris 12e',
      date: 'Vendredi',
      time: '14:00 - 18:00',
      type: 'formation',
      compensation: '€95'
    }
  ];

  const recurrentMissions = [
    {
      id: 6,
      title: 'Accueil hebdomadaire - Dr. Dubois',
      location: 'Centre République, Paris 11e',
      frequency: 'Tous les lundis',
      time: '09:00 - 17:00',
      type: 'accueil',
      compensation: '€85'
    }
  ];

  const modules = [
    {
      id: 'profil',
      title: 'Profil Assistant',
      description: 'Espace personnel et compétences',
      icon: User,
      notifications: 1,
      status: 'active'
    },
    {
      id: 'sos',
      title: 'SOS Missions',
      description: 'Missions urgentes et remplacements',
      icon: Heart,
      notifications: 3,
      status: 'urgent'
    },
    {
      id: 'stock',
      title: 'Stock iPad',
      description: 'Gestion mobile des stocks',
      icon: Package,
      notifications: 2,
      status: 'warning'
    },
    {
      id: 'contrats',
      title: 'Contrats Missions',
      description: 'Gestion des contrats temporaires',
      icon: FileText,
      notifications: 0,
      status: 'active'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Mobile-First Feel */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Logo Feel compact */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/logos/Logo FEEL .png"
                  alt="Feel Logo"
                  width={80}
                  height={30}
                  className="h-6 w-auto mr-3"
                />
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-gray-900">Marie Lefebvre</h1>
                  <p className="text-sm text-gray-600">Assistante Dentaire • 5 ans expérience</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="p-2">
                <Bell className="h-4 w-4" />
                <Badge variant="destructive" className="ml-1 text-xs">3</Badge>
              </Button>
              <Button variant="outline" size="sm" className="p-2">
                <Settings className="h-4 w-4" />
              </Button>
              <Link href="/auth/signin">
                <Button variant="outline" size="sm" className="p-2">
                  <LogOut className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Statistiques Personnelles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {personalStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-md transition-all duration-300">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className={`inline-flex p-2 rounded-full bg-gray-100 ${stat.color} mb-2`}>
                    <stat.icon className="h-4 w-4" />
                  </div>
                  <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-600">{stat.title}</p>
                  <Badge variant={stat.change.startsWith('+') ? 'default' : 'secondary'} className="text-xs mt-1">
                    {stat.change}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation des Tabs */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-6">
          {[
            { id: 'missions', label: 'Missions', icon: Calendar },
            { id: 'modules', label: 'Modules', icon: Package },
            { id: 'profile', label: 'Profil', icon: User }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-white text-purple-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Contenu des Tabs */}
        {activeTab === 'missions' && (
          <div className="space-y-6">
            {/* Missions Urgentes */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">🚨 Missions Urgentes</h2>
                <Badge variant="destructive">3 nouvelles</Badge>
              </div>
              <div className="space-y-4">
                {urgentMissions.map((mission) => (
                  <Card key={mission.id} className={`border-l-4 hover:shadow-lg transition-all duration-300 cursor-pointer ${
                    mission.urgency === 'critical' ? 'border-red-500 bg-red-50' :
                    mission.urgency === 'high' ? 'border-orange-500 bg-orange-50' :
                    'border-yellow-500 bg-yellow-50'
                  }`}>
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        {/* Header avec titre et match */}
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-semibold text-gray-900">{mission.title}</h3>
                              <Badge variant={
                                mission.urgency === 'critical' ? 'destructive' :
                                mission.urgency === 'high' ? 'default' : 'secondary'
                              } className="text-xs">
                                {mission.urgency === 'critical' ? '🚨 URGENT' :
                                 mission.urgency === 'high' ? '⚡ HAUTE' : '📅 MOYENNE'}
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <MapPin className="h-4 w-4" />
                              <span>{mission.location}</span>
                              <span className="text-gray-400">•</span>
                              <span>{mission.distance}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center space-x-1 mb-1">
                              <Target className="h-4 w-4 text-green-600" />
                              <span className="text-sm font-bold text-green-600">{mission.match}</span>
                            </div>
                            <p className="text-xs text-gray-500">Match</p>
                          </div>
                        </div>

                        {/* Détails mission */}
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <ClockIcon className="h-4 w-4 text-gray-500" />
                              <span className="text-gray-700">{mission.time}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Zap className="h-4 w-4 text-gray-500" />
                              <span className="text-gray-700">{mission.transport}</span>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline" className="text-xs">
                                {mission.type === 'implant' ? 'Implantologie' :
                                 mission.type === 'généraliste' ? 'Généraliste' : 'Orthodontie'}
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-medium text-green-600">{mission.compensation}</span>
                              <span className="text-xs text-gray-500">({mission.total})</span>
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center space-x-2 pt-2 border-t border-gray-200">
                          <Button variant="default" size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Candidater
                          </Button>
                          <Button variant="outline" size="sm">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Missions Planifiées */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">📅 Missions Planifiées</h2>
                <Badge variant="secondary">2 missions</Badge>
              </div>
              <div className="space-y-3">
                {plannedMissions.map((mission) => (
                  <Card key={mission.id} className="border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-gray-900">{mission.title}</h3>
                            <Badge variant="outline">{mission.date}</Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{mission.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <ClockIcon className="h-4 w-4" />
                              <span>{mission.time}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs">
                              {mission.type === 'gestion' ? 'Gestion' :
                               mission.type === 'formation' ? 'Formation' : 'Accueil'}
                            </Badge>
                            <span className="text-sm font-medium text-green-600">{mission.compensation}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="ml-4">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Missions Récurrentes */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">🔄 Missions Récurrentes</h2>
                <Badge variant="outline">1 mission</Badge>
              </div>
              <div className="space-y-3">
                {recurrentMissions.map((mission) => (
                  <Card key={mission.id} className="border-l-4 border-green-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-gray-900">{mission.title}</h3>
                            <Badge variant="outline" className="text-green-600 border-green-200">
                              Récurrent
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{mission.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <ClockIcon className="h-4 w-4" />
                              <span>{mission.time}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs">
                              {mission.frequency}
                            </Badge>
                            <span className="text-sm font-medium text-green-600">{mission.compensation}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="ml-4">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'modules' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {modules.map((module) => (
              <Card key={module.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        module.status === 'urgent' ? 'bg-red-100' :
                        module.status === 'warning' ? 'bg-yellow-100' : 'bg-green-100'
                      }`}>
                        <module.icon className={`h-5 w-5 ${
                          module.status === 'urgent' ? 'text-red-600' :
                          module.status === 'warning' ? 'text-yellow-600' : 'text-green-600'
                        }`} />
                      </div>
                      <div>
                        <CardTitle className="text-base">{module.title}</CardTitle>
                        <CardDescription className="text-sm">{module.description}</CardDescription>
                      </div>
                    </div>
                    {module.notifications > 0 && (
                      <Badge variant="destructive" className="text-xs">
                        {module.notifications}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="outline" size="sm" className="w-full">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Accéder
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Profil Personnel</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Informations</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Nom:</span>
                        <span className="font-medium">Marie Lefebvre</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Expérience:</span>
                        <span className="font-medium">5 ans</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Spécialités:</span>
                        <span className="font-medium">Accueil, Gestion</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Contact</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <span>06 12 34 56 78</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-500" />
                        <span>marie.lefebvre@feel-demo.fr</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span>Paris 10e</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Actions Rapides Mobile */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Zap className="h-5 w-5 mr-2 text-purple-600" />
                Actions Rapides Mobile
              </CardTitle>
              <CardDescription>Accès direct aux fonctionnalités essentielles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button variant="outline" className="h-16 flex-col space-y-2 hover:bg-red-50 hover:border-red-200 transition-all">
                  <Heart className="h-5 w-5 text-red-600" />
                  <span className="text-xs font-medium">SOS Missions</span>
                  <span className="text-xs text-gray-500">Urgentes</span>
                </Button>
                <Button variant="outline" className="h-16 flex-col space-y-2 hover:bg-blue-50 hover:border-blue-200 transition-all">
                  <Package className="h-5 w-5 text-blue-600" />
                  <span className="text-xs font-medium">Stock iPad</span>
                  <span className="text-xs text-gray-500">Scan & Gestion</span>
                </Button>
                <Button variant="outline" className="h-16 flex-col space-y-2 hover:bg-green-50 hover:border-green-200 transition-all">
                  <FileText className="h-5 w-5 text-green-600" />
                  <span className="text-xs font-medium">Contrats</span>
                  <span className="text-xs text-gray-500">Signatures</span>
                </Button>
                <Button variant="outline" className="h-16 flex-col space-y-2 hover:bg-purple-50 hover:border-purple-200 transition-all">
                  <User className="h-5 w-5 text-purple-600" />
                  <span className="text-xs font-medium">Profil</span>
                  <span className="text-xs text-gray-500">Portfolio</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 