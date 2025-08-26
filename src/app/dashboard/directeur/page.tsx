"use client";

import { useState } from "react";
import { 
  Building2, 
  Users, 
  TrendingUp, 
  Package, 
  FileText, 
  BarChart3, 
  Bell, 
  MapPin, 
  Calendar, 
  Euro,
  CheckCircle,
  AlertTriangle,
  Clock,
  ArrowUp,
  ArrowDown,
  Target,
  Activity
} from "lucide-react";
import Link from "next/link";
import DashboardHeader from "@/components/ui/DashboardHeader";
import DashboardBreadcrumb from "@/components/ui/DashboardBreadcrumb";

interface Module {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  notifications: number;
  link: string;
}

interface Site {
  name: string;
  location: string;
  praticiens: number;
  assistantes: number;
  performance: number;
  caMensuel: string;
  status: 'excellent' | 'bon' | 'moyen' | 'faible';
}

export default function DirecteurDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const modules: Module[] = [
    {
      id: 'multisites',
      title: 'Cockpit Multi-Sites',
      description: 'Vision consolidée et analytics',
      icon: <Building2 className="h-6 w-6" />,
      color: 'from-blue-500 to-blue-600',
      notifications: 4,
      link: '/dashboard/directeur/multisites'
    },
    {
      id: 'equipe',
      title: 'Gestion Équipe',
      description: 'Management RH centralisé',
      icon: <Users className="h-6 w-6" />,
      color: 'from-green-500 to-green-600',
      notifications: 2,
      link: '/dashboard/directeur/equipe'
    },
    {
      id: 'finance',
      title: 'Finance Consolidée',
      description: 'Comptabilité multi-entités',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'from-purple-500 to-purple-600',
      notifications: 7,
      link: '/dashboard/directeur/finance'
    },
    {
      id: 'achats',
      title: 'Achats Groupés',
      description: 'Optimisation stock centralisé',
      icon: <Package className="h-6 w-6" />,
      color: 'from-orange-500 to-orange-600',
      notifications: 1,
      link: '/dashboard/directeur/achats'
    },
    {
      id: 'contrats',
      title: 'Contrats Groupe',
      description: 'Administration contractuelle',
      icon: <FileText className="h-6 w-6" />,
      color: 'from-indigo-500 to-indigo-600',
      notifications: 3,
      link: '/dashboard/directeur/contrats'
    },
    {
      id: 'analytics',
      title: 'Analytics & Reporting',
      description: 'Business Intelligence IA',
      icon: <BarChart3 className="h-6 w-6" />,
      notifications: 0,
      color: 'from-red-500 to-red-600',
      link: '/dashboard/directeur/analytics'
    }
  ];

  const sites: Site[] = [
    {
      name: 'Centre République',
      location: 'Paris 11e',
      praticiens: 3,
      assistantes: 4,
      performance: 95,
      caMensuel: '€45,000',
      status: 'excellent'
    },
    {
      name: 'Cabinet Nation',
      location: 'Paris 12e',
      praticiens: 2,
      assistantes: 3,
      performance: 88,
      caMensuel: '€32,000',
      status: 'bon'
    },
    {
      name: 'Clinique Nord',
      location: 'Paris 18e',
      praticiens: 4,
      assistantes: 5,
      performance: 92,
      caMensuel: '€58,000',
      status: 'excellent'
    },
    {
      name: 'Centre Ouest',
      location: 'Paris 16e',
      praticiens: 2,
      assistantes: 2,
      performance: 78,
      caMensuel: '€28,000',
      status: 'moyen'
    },
    {
      name: 'Cabinet Sud',
      location: 'Paris 14e',
      praticiens: 1,
      assistantes: 2,
      performance: 85,
      caMensuel: '€22,000',
      status: 'bon'
    }
  ];

  const kpis = [
    { 
      label: 'CA Mensuel Feel', 
      value: '€180,000', 
      change: '+12%', 
      trend: 'up',
      icon: <Euro className="h-5 w-5" />, 
      color: 'text-green-600' 
    },
    { 
      label: 'Praticiens Feel', 
      value: '12', 
      change: '+2', 
      trend: 'up',
      icon: <Users className="h-5 w-5" />, 
      color: 'text-blue-600' 
    },
    { 
      label: 'Assistantes Feel', 
      value: '18', 
      change: '+3', 
      trend: 'up',
      icon: <Users className="h-5 w-5" />, 
      color: 'text-purple-600' 
    },
    { 
      label: 'Performance Globale', 
      value: '92%', 
      change: '+5%', 
      trend: 'up',
      icon: <Target className="h-5 w-5" />, 
      color: 'text-green-600' 
    }
  ];

  const alerts = [
    { 
      type: 'critical', 
      message: 'Formation DPC en retard - Centre Ouest', 
      site: 'Centre Ouest',
      time: 'Il y a 2h' 
    },
    { 
      type: 'warning', 
      message: 'Stock faible - Cabinet Nation', 
      site: 'Cabinet Nation',
      time: 'Il y a 4h' 
    },
    { 
      type: 'info', 
      message: 'Nouveau praticien à intégrer', 
      site: 'Centre République',
      time: 'Il y a 6h' 
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'bg-green-100 text-green-800';
      case 'bon':
        return 'bg-blue-100 text-blue-800';
      case 'moyen':
        return 'bg-yellow-100 text-yellow-800';
      case 'faible':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'bon':
        return <CheckCircle className="h-4 w-4 text-blue-500" />;
      case 'moyen':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'faible':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <DashboardHeader
        userName="Sophie Chen"
        userRole="Directrice de Structure"
        userInfo="5 sites • 30 professionnels"
        logoSize="md"
        showNotifications={true}
        notificationCount={17}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <DashboardBreadcrumb
          items={[
            { label: "Dashboard", href: "/dashboard/directeur" },
            { label: "Vue d'ensemble" }
          ]}
        />

        {/* KPIs Principaux */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">{kpi.label}</p>
                  <p className={`text-2xl font-bold ${kpi.color}`}>{kpi.value}</p>
                </div>
                <div className={`p-3 rounded-full ${kpi.color.replace('text-', 'bg-')} bg-opacity-10`}>
                  {kpi.icon}
                </div>
              </div>
              <div className="flex items-center">
                {kpi.trend === 'up' ? (
                  <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                ) : (
                  <ArrowDown className="h-4 w-4 text-red-500 mr-1" />
                )}
                <span className={`text-sm font-medium ${
                  kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {kpi.change}
                </span>
                <span className="text-sm text-gray-500 ml-1">vs mois dernier</span>
              </div>
            </div>
          ))}
        </div>

        {/* Performance par site */}
        <div className="bg-white rounded-xl p-6 shadow-sm border mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Performance par Site</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Période :</span>
              <select 
                value={selectedPeriod} 
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-1 text-sm"
              >
                <option value="week">Semaine</option>
                <option value="month">Mois</option>
                <option value="quarter">Trimestre</option>
              </select>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Site</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Localisation</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Équipe</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Performance</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">CA Mensuel</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Statut</th>
                </tr>
              </thead>
              <tbody>
                {sites.map((site, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="font-medium text-gray-900">{site.name}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-1" />
                        {site.location}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm text-gray-600">
                        <div>{site.praticiens} praticiens</div>
                        <div>{site.assistantes} assistantes</div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                            style={{ width: `${site.performance}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{site.performance}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-medium text-gray-900">{site.caMensuel}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        {getStatusIcon(site.status)}
                        <span className={`ml-2 text-xs px-2 py-1 rounded-full ${getStatusColor(site.status)}`}>
                          {site.status}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modules et Alertes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Modules Feel */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Modules Direction</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          {/* Alertes et Actions */}
          <div className="space-y-6">
            {/* Alertes critiques */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Alertes Critiques</h3>
              <div className="space-y-3">
                {alerts.map((alert, index) => (
                  <div key={index} className={`p-3 rounded-lg border-l-4 ${
                    alert.type === 'critical' ? 'border-red-500 bg-red-50' :
                    alert.type === 'warning' ? 'border-yellow-500 bg-yellow-50' :
                    'border-blue-500 bg-blue-50'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 mb-1">{alert.message}</p>
                        <p className="text-xs text-gray-600">{alert.site}</p>
                      </div>
                      <span className="text-xs text-gray-500">{alert.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions stratégiques */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions Stratégiques</h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm font-medium text-blue-900 mb-1">Formation équipe Centre Ouest</p>
                  <p className="text-xs text-blue-700">Planifier session DPC</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm font-medium text-green-900 mb-1">Audit performance Cabinet Sud</p>
                  <p className="text-xs text-green-700">Analyser causes baisse</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <p className="text-sm font-medium text-purple-900 mb-1">Négociation achats groupés</p>
                  <p className="text-xs text-purple-700">Optimiser coûts fournisseurs</p>
                </div>
              </div>
            </div>

            {/* Métriques rapides */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Métriques Rapides</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Adoption Feel</span>
                  <span className="text-lg font-bold text-green-600">92%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Satisfaction</span>
                  <span className="text-lg font-bold text-blue-600">4.7/5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Formations DPC</span>
                  <span className="text-lg font-bold text-yellow-600">85%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Conformité RGPD</span>
                  <span className="text-lg font-bold text-green-600">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
