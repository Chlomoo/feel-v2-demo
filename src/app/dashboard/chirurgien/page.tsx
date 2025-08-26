"use client";

import { useState } from "react";
import { 
  User, 
  Heart, 
  Calculator, 
  Package, 
  FileText, 
  Newspaper, 
  Bell, 
  TrendingUp, 
  Users, 
  FolderOpen,
  ExternalLink,
  CheckCircle,
  Clock,
  AlertCircle,
  MapPin,
  Calendar,
  Star,
  Euro
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

interface Organism {
  name: string;
  acronym: string;
  description: string;
  icon: string;
  color: string;
  status: 'connected' | 'pending' | 'error';
  nextDeadline?: string;
  info?: string;
}

export default function ChirurgienDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'profile'>('overview');

  const modules: Module[] = [
    {
      id: 'profile',
      title: 'Profil Praticien',
      description: 'Carte d\'identité professionnelle',
      icon: <User className="h-6 w-6" />,
      color: 'from-blue-500 to-blue-600',
      notifications: 2,
      link: '/dashboard/chirurgien/profile'
    },
    {
      id: 'sos',
      title: 'SOS Assistante',
      description: 'Missions urgentes et matching',
      icon: <Heart className="h-6 w-6" />,
      color: 'from-red-500 to-red-600',
      notifications: 1,
      link: '/dashboard/chirurgien/sos'
    },
    {
      id: 'comptabilite',
      title: 'Comptabilité',
      description: 'Gestion financière automatisée',
      icon: <Calculator className="h-6 w-6" />,
      color: 'from-green-500 to-green-600',
      notifications: 5,
      link: '/dashboard/chirurgien/comptabilite'
    },
    {
      id: 'stock',
      title: 'Gestion Stock',
      description: 'Stock prédictif et commandes',
      icon: <Package className="h-6 w-6" />,
      color: 'from-orange-500 to-orange-600',
      notifications: 3,
      link: '/dashboard/chirurgien/stock'
    },
    {
      id: 'contrats',
      title: 'Contrats',
      description: 'Templates et signatures électroniques',
      icon: <FileText className="h-6 w-6" />,
      color: 'from-purple-500 to-purple-600',
      notifications: 0,
      link: '/dashboard/chirurgien/contrats'
    },
    {
      id: 'news',
      title: 'News & Formations',
      description: 'Veille professionnelle et DPC',
      icon: <Newspaper className="h-6 w-6" />,
      notifications: 8,
      color: 'from-indigo-500 to-indigo-600',
      link: '/dashboard/chirurgien/news'
    }
  ];

  const organisms: Organism[] = [
    {
      name: 'Ordre National',
      acronym: 'ONCD',
      description: 'Formation obligatoire et déontologie',
      icon: '🦷',
      color: 'bg-blue-500',
      status: 'connected',
      nextDeadline: '15/12/2024',
      info: 'Formation DPC validée'
    },
    {
      name: 'URSSAF',
      acronym: 'URSSAF',
      description: 'Déclarations sociales mensuelles',
      icon: '📊',
      color: 'bg-green-500',
      status: 'connected',
      nextDeadline: '05/01/2025',
      info: 'Déclaration novembre OK'
    },
    {
      name: 'CARCDSF',
      acronym: 'CARCDSF',
      description: 'Points retraite et prévoyance',
      icon: '🏦',
      color: 'bg-purple-500',
      status: 'pending',
      nextDeadline: '20/12/2024',
      info: 'Simulation pension en cours'
    },
    {
      name: 'Impôts',
      acronym: 'DGFiP',
      description: 'Déclaration 2035 et CFE',
      icon: '💰',
      color: 'bg-yellow-500',
      status: 'error',
      nextDeadline: '31/01/2025',
      info: 'Connexion à vérifier'
    },
    {
      name: 'Amélie Pro',
      acronym: 'Amélie',
      description: 'Télétransmission et tiers payant',
      icon: '🏥',
      color: 'bg-red-500',
      status: 'connected',
      nextDeadline: '01/01/2025',
      info: 'Télétransmission active'
    }
  ];

  const kpis = [
    { label: 'CA Mensuel', value: '€12,450', icon: <Euro className="h-5 w-5" />, color: 'text-green-600' },
    { label: 'Équipe Présente', value: '3/3', icon: <Users className="h-5 w-5" />, color: 'text-blue-600' },
    { label: 'Documents Feel', value: '47', icon: <FolderOpen className="h-5 w-5" />, color: 'text-purple-600' },
    { label: 'Alertes', value: '3', icon: <Bell className="h-5 w-5" />, color: 'text-red-600' }
  ];

  const recentActivities = [
    { action: 'Facture Feel validée', time: 'Il y a 2h', type: 'success' },
    { action: 'Commande stock confirmée', time: 'Il y a 4h', type: 'info' },
    { action: 'Formation DPC à planifier', time: 'Il y a 1j', type: 'warning' },
    { action: 'Nouvelle candidature SOS', time: 'Il y a 1j', type: 'info' }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'error':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mr-3">
                <User className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Dr. Martin Dubois</h1>
                <p className="text-sm text-gray-500">Chirurgien-Dentiste • Centre Dentaire République</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell className="h-5 w-5" />
              </button>
              <Link href="/auth/login" className="text-sm text-gray-600 hover:text-gray-800">
                Déconnexion
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Vue d'ensemble
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'profile'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Profil Praticien
            </button>
          </nav>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' ? (
          /* Vue d'ensemble */
          <div className="space-y-8">
            {/* KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kpis.map((kpi, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{kpi.label}</p>
                      <p className={`text-2xl font-bold ${kpi.color}`}>{kpi.value}</p>
                    </div>
                    <div className={`p-3 rounded-full ${kpi.color.replace('text-', 'bg-')} bg-opacity-10`}>
                      {kpi.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Modules Grid */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Mes Modules Feel</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.map((module) => (
                  <Link key={module.id} href={module.link}>
                    <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow cursor-pointer">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${module.color} rounded-lg flex items-center justify-center`}>
                          {module.icon}
                        </div>
                        {module.notifications > 0 && (
                          <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                            {module.notifications > 99 ? "99+" : module.notifications}
                          </div>
                        )}
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{module.title}</h3>
                      <p className="text-sm text-gray-600">{module.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Actions rapides et Activités récentes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Actions rapides */}
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions Rapides</h3>
                <div className="space-y-3">
                  <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                    🚨 Mission Urgente
                  </button>
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                    🔗 Connexion Organismes
                  </button>
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                    📁 Upload Document
                  </button>
                </div>
              </div>

              {/* Activités récentes */}
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Activités Récentes</h3>
                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between py-2">
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          activity.type === 'success' ? 'bg-green-500' :
                          activity.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                        }`} />
                        <span className="text-sm text-gray-700">{activity.action}</span>
                      </div>
                      <span className="text-xs text-gray-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Profil Praticien */
          <div className="space-y-8">
            {/* Carte d'identité professionnelle */}
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mr-6">
                    <User className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Dr. Martin Dubois</h2>
                    <p className="text-lg text-gray-600">Chirurgien-Dentiste</p>
                    <p className="text-gray-500">Centre Dentaire République, Paris 11e</p>
                    <div className="flex items-center mt-2">
                      <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-500">75011 Paris, France</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Actif
                  </div>
                </div>
              </div>

              {/* Informations professionnelles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Identifiants Professionnels</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">RPPS :</span>
                      <span className="font-mono text-sm">12345678901</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Adeli :</span>
                      <span className="font-mono text-sm">750112345</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">SIRET :</span>
                      <span className="font-mono text-sm">12345678901234</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">N° Ordre :</span>
                      <span className="font-mono text-sm">750112345</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Spécialités</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      <span>Implantologie</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      <span>Chirurgie orale</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-2" />
                      <span>Prothèse fixe</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline carrière */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">Timeline Carrière</h3>
                <div className="space-y-4">
                  {[
                    { year: '2023', event: 'Certification All-on-4', type: 'success' },
                    { year: '2018', event: 'Association au Centre Dentaire République', type: 'info' },
                    { year: '2015', event: 'Formation ITI Implantologie', type: 'info' },
                    { year: '2011', event: 'Installation cabinet libéral', type: 'info' },
                    { year: '2010', event: 'Diplôme Chirurgien-Dentiste', type: 'info' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-4 ${
                        item.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                      }`} />
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900">{item.year}</span>
                        <span className="text-gray-600 ml-3">{item.event}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connexions organismes officiels */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Connexions Organismes Officiels</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {organisms.map((organism, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{organism.icon}</span>
                          <div>
                            <h4 className="font-medium text-gray-900">{organism.name}</h4>
                            <p className="text-sm text-gray-500">{organism.acronym}</p>
                          </div>
                        </div>
                        {getStatusIcon(organism.status)}
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{organism.description}</p>
                      <div className="space-y-2">
                        {organism.nextDeadline && (
                          <div className="flex items-center text-xs text-gray-500">
                            <Calendar className="h-3 w-3 mr-1" />
                            Prochaine échéance : {organism.nextDeadline}
                          </div>
                        )}
                        {organism.info && (
                          <div className="text-xs text-gray-600">{organism.info}</div>
                        )}
                      </div>
                      <button className="w-full mt-3 bg-blue-50 hover:bg-blue-100 text-blue-700 py-2 px-3 rounded text-sm font-medium transition-colors flex items-center justify-center">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Accéder
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
} 