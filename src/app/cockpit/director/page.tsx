'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield, Users, Calculator, Package, FileText, Newspaper, 
  Bell, TrendingUp, Calendar, Clock, Star, CheckCircle,
  ArrowRight, Plus, Settings, Search, Filter, AlertTriangle,
  Building2, MapPin, Phone, Mail, BarChart3, Target,
  DollarSign, UserCheck, PackageCheck, FileCheck, LogOut,
  Activity, TrendingDown, TrendingUp as TrendingUpIcon, Eye
} from 'lucide-react';

export default function DirectorCockpit() {
  const [activeTab, setActiveTab] = useState('overview');

  const globalKpis = [
    { title: 'CA Feel mensuel', value: '€180K', change: '+8%', icon: DollarSign, color: 'text-green-600' },
    { title: 'Praticiens Feel', value: '12/12', change: '100%', icon: Users, color: 'text-blue-600' },
    { title: 'Assistantes Feel', value: '18/20', change: '90%', icon: UserCheck, color: 'text-purple-600' },
    { title: 'Performance Feel', value: '92%', change: '+3%', icon: Target, color: 'text-yellow-600' }
  ];

  const sites = [
    {
      id: 'paris-centre',
      name: 'Paris Centre',
      location: 'Paris 1er',
      status: 'active',
      practitioners: 3,
      assistants: 4,
      revenue: '€65K',
      performance: 95,
      alerts: 0,
      trend: 'up'
    },
    {
      id: 'boulogne',
      name: 'Boulogne',
      location: 'Boulogne-Billancourt',
      status: 'warning',
      practitioners: 2,
      assistants: 3,
      revenue: '€32K',
      performance: 88,
      alerts: 2,
      trend: 'down'
    },
    {
      id: 'vincennes',
      name: 'Vincennes',
      location: 'Vincennes',
      status: 'active',
      practitioners: 2,
      assistants: 3,
      revenue: '€38K',
      performance: 92,
      alerts: 1,
      trend: 'up'
    },
    {
      id: 'creteil',
      name: 'Créteil',
      location: 'Créteil',
      status: 'active',
      practitioners: 2,
      assistants: 2,
      revenue: '€28K',
      performance: 91,
      alerts: 0,
      trend: 'stable'
    },
    {
      id: 'neuilly',
      name: 'Neuilly',
      location: 'Neuilly-sur-Seine',
      status: 'warning',
      practitioners: 1,
      assistants: 2,
      revenue: '€17K',
      performance: 87,
      alerts: 1,
      trend: 'down'
    }
  ];

  const modules = [
    {
      id: 'multi-sites',
      title: 'Cockpit Multi-Sites',
      description: 'Supervision globale de tous les sites',
      icon: Building2,
      notifications: 5,
      status: 'active',
      priority: 'high'
    },
    {
      id: 'equipe',
      title: 'Gestion Équipe',
      description: 'RH, planning et performance',
      icon: Users,
      notifications: 2,
      status: 'active',
      priority: 'high'
    },
    {
      id: 'finance',
      title: 'Finance Consolidée',
      description: 'Comptabilité multi-sites et reporting',
      icon: Calculator,
      notifications: 1,
      status: 'active',
      priority: 'medium'
    },
    {
      id: 'achats',
      title: 'Achats Groupés',
      description: 'Centralisation et négociation',
      icon: Package,
      notifications: 3,
      status: 'warning',
      priority: 'medium'
    },
    {
      id: 'contrats-groupe',
      title: 'Contrats Groupe',
      description: 'Gestion des contrats multi-sites',
      icon: FileText,
      notifications: 0,
      status: 'active',
      priority: 'low'
    },
    {
      id: 'analytics',
      title: 'Analytics & Reporting',
      description: 'Tableaux de bord et analyses',
      icon: BarChart3,
      notifications: 4,
      status: 'active',
      priority: 'medium'
    }
  ];

  const crossSiteAlerts = [
    {
      id: 1,
      type: 'stock',
      message: 'Stock amalgame faible sur 3 sites',
      sites: ['Centre République', 'Cabinet Nation', 'Clinique Saint-Michel'],
      priority: 'high',
      time: 'Il y a 2h'
    },
    {
      id: 2,
      type: 'personnel',
      message: '2 assistantes en congé simultanément',
      sites: ['Centre République', 'Cabinet Montparnasse'],
      priority: 'medium',
      time: 'Il y a 4h'
    },
    {
      id: 3,
      type: 'maintenance',
      message: 'Maintenance préventive programmée',
      sites: ['Tous les sites'],
      priority: 'low',
      time: 'Il y a 1j'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      action: 'Nouveau contrat signé',
      site: 'Centre République',
      user: 'Dr. Martin',
      time: 'Il y a 1h',
      type: 'contract'
    },
    {
      id: 2,
      action: 'Commande stock validée',
      site: 'Tous les sites',
      user: 'Sophie Chen',
      time: 'Il y a 3h',
      type: 'stock'
    },
    {
      id: 3,
      action: 'Nouvelle assistante recrutée',
      site: 'Cabinet Nation',
      user: 'Marie Lefebvre',
      time: 'Il y a 1j',
      type: 'hr'
    },
    {
      id: 4,
      action: 'Rapport mensuel généré',
      site: 'Tous les sites',
      user: 'Système',
      time: 'Il y a 2j',
      type: 'report'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Direction Feel */}
      <header className="bg-[#F5F1E8] shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Logo Smile by Feel */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/logos/Logo Smile By Feel .png"
                  alt="Smile by Feel Logo"
                  width={140}
                  height={45}
                  className="h-9 w-auto mr-4"
                />
              </Link>
              <div className="h-8 w-px bg-gray-300" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Sophie Chen</h1>
                  <p className="text-gray-600">Directrice Groupe Dental Excellence • 5 sites • 30 professionnels</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Paramètres
              </Button>
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                <Badge variant="destructive" className="ml-1">5</Badge>
              </Button>
              <Link href="/auth/signin">
                <Button variant="outline" size="sm">
                  <LogOut className="h-4 w-4 mr-2" />
                  Déconnexion
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPIs Globaux */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {globalKpis.map((kpi, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{kpi.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-100 ${kpi.color}`}>
                    <kpi.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="mt-2">
                  <Badge variant={kpi.change.startsWith('+') ? 'default' : 'secondary'}>
                    {kpi.change}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation des Tabs */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-6">
          {[
            { id: 'overview', label: 'Vue d\'ensemble', icon: BarChart3 },
            { id: 'sites', label: 'Sites', icon: Building2 },
            { id: 'modules', label: 'Modules', icon: Package },
            { id: 'alerts', label: 'Alertes', icon: AlertTriangle }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Contenu des Tabs */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Performance par Site */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Performance par Site</CardTitle>
                  <CardDescription>Vue d'ensemble de tous les sites</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sites.map((site) => (
                      <div key={site.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-4">
                            <div className={`w-3 h-3 rounded-full ${
                              site.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'
                            }`} />
                            <div>
                              <h4 className="font-semibold text-gray-900">{site.name}</h4>
                              <p className="text-sm text-gray-600">{site.location}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {site.trend === 'up' && <TrendingUpIcon className="h-4 w-4 text-green-600" />}
                            {site.trend === 'down' && <TrendingDown className="h-4 w-4 text-red-600" />}
                            {site.trend === 'stable' && <Activity className="h-4 w-4 text-gray-600" />}
                            {site.alerts > 0 && (
                              <Badge variant="destructive" className="text-xs">
                                {site.alerts}
                              </Badge>
                            )}
                          </div>
                        </div>
                        
                        {/* Barre de performance */}
                        <div className="mb-3">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-gray-600">Performance Feel</span>
                            <span className="font-medium text-gray-900">{site.performance}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                site.performance >= 95 ? 'bg-green-500' :
                                site.performance >= 90 ? 'bg-blue-500' :
                                site.performance >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${site.performance}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div className="text-center">
                            <p className="font-medium text-gray-900">{site.practitioners}</p>
                            <p className="text-gray-600">Praticiens</p>
                          </div>
                          <div className="text-center">
                            <p className="font-medium text-gray-900">{site.assistants}</p>
                            <p className="text-gray-600">Assistantes</p>
                          </div>
                          <div className="text-center">
                            <p className="font-medium text-green-600">{site.revenue}</p>
                            <p className="text-gray-600">CA mensuel</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Activités Récentes */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Activités Récentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          activity.type === 'contract' ? 'bg-blue-500' :
                          activity.type === 'stock' ? 'bg-green-500' :
                          activity.type === 'hr' ? 'bg-purple-500' : 'bg-gray-500'
                        }`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                          <p className="text-xs text-gray-600">{activity.site} • {activity.user}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'sites' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sites.map((site) => (
              <Card key={site.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        site.status === 'active' ? 'bg-green-100' : 'bg-yellow-100'
                      }`}>
                        <Building2 className={`h-5 w-5 ${
                          site.status === 'active' ? 'text-green-600' : 'text-yellow-600'
                        }`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{site.name}</CardTitle>
                        <CardDescription>{site.location}</CardDescription>
                      </div>
                    </div>
                    <Badge variant={site.status === 'active' ? 'default' : 'secondary'}>
                      {site.status === 'active' ? 'Actif' : 'Attention'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{site.practitioners}</p>
                      <p className="text-xs text-gray-600">Praticiens</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-green-600">{site.revenue}</p>
                      <p className="text-xs text-gray-600">CA</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-center space-x-1">
                        <span className="text-lg font-bold text-gray-900">{site.performance}%</span>
                        <Target className="h-4 w-4 text-blue-500" />
                      </div>
                      <p className="text-xs text-gray-600">Performance</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      Détails
                    </Button>
                    {site.alerts > 0 && (
                      <Badge variant="destructive" className="text-xs">
                        {site.alerts} alerte{site.alerts > 1 ? 's' : ''}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'modules' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div className="flex items-center justify-end">
                    <Button variant="ghost" size="sm">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === 'alerts' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">🚨 Alertes Multi-Sites</CardTitle>
                <CardDescription>Problèmes nécessitant une attention immédiate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {crossSiteAlerts.map((alert) => (
                    <div key={alert.id} className={`p-4 rounded-lg border-l-4 ${
                      alert.priority === 'high' ? 'border-red-500 bg-red-50' :
                      alert.priority === 'medium' ? 'border-yellow-500 bg-yellow-50' :
                      'border-blue-500 bg-blue-50'
                    }`}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold text-gray-900">{alert.message}</h4>
                            <Badge variant={
                              alert.priority === 'high' ? 'destructive' :
                              alert.priority === 'medium' ? 'default' : 'secondary'
                            }>
                              {alert.priority === 'high' ? 'Haute' :
                               alert.priority === 'medium' ? 'Moyenne' : 'Basse'}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <MapPin className="h-4 w-4" />
                            <span>{alert.sites.join(', ')}</span>
                          </div>
                          <p className="text-xs text-gray-500">{alert.time}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Actions Rapides Direction */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Shield className="h-5 w-5 mr-2 text-blue-600" />
                Actions Rapides Direction
              </CardTitle>
              <CardDescription>Gestion stratégique multi-sites</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button variant="outline" className="h-20 flex-col space-y-2 hover:bg-blue-50 hover:border-blue-200 transition-all">
                  <Building2 className="h-6 w-6 text-blue-600" />
                  <span className="text-sm font-medium">Cockpit Multi-Sites</span>
                  <span className="text-xs text-gray-500">Supervision</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col space-y-2 hover:bg-green-50 hover:border-green-200 transition-all">
                  <Users className="h-6 w-6 text-green-600" />
                  <span className="text-sm font-medium">Gestion Équipe</span>
                  <span className="text-xs text-gray-500">RH & Planning</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col space-y-2 hover:bg-purple-50 hover:border-purple-200 transition-all">
                  <BarChart3 className="h-6 w-6 text-purple-600" />
                  <span className="text-sm font-medium">Analytics</span>
                  <span className="text-xs text-gray-500">Business Intelligence</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col space-y-2 hover:bg-orange-50 hover:border-orange-200 transition-all">
                  <Package className="h-6 w-6 text-orange-600" />
                  <span className="text-sm font-medium">Achats Groupés</span>
                  <span className="text-xs text-gray-500">Optimisation</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 