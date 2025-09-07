'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, TrendingUp, TrendingDown, Users, Clock, 
  MapPin, Star, Heart, Calendar, Download, Filter,
  BarChart3, PieChart, Activity, Target
} from 'lucide-react';
import Link from 'next/link';
import { SOSAnalytics } from '@/lib/sos-assistante/types';

export default function AnalyticsDashboard() {
  const [analytics, setAnalytics] = useState<SOSAnalytics | null>(null);
  const [timeRange, setTimeRange] = useState('month');
  const [isLoading, setIsLoading] = useState(true);

  // Mock data pour la démonstration
  const mockAnalytics: SOSAnalytics = {
    totalMissions: 24,
    activeMissions: 2,
    completedMissions: 20,
    successRate: 83.3,
    averageTimeToFill: 12, // en minutes
    totalRevenue: 2340,
    averageHourlyRate: 45.5,
    topSkills: [
      { skill: 'Implantologie', count: 15, percentage: 62.5 },
      { skill: 'Chirurgie Orale', count: 12, percentage: 50.0 },
      { skill: 'Stérilisation', count: 10, percentage: 41.7 },
      { skill: 'Parodontologie', count: 8, percentage: 33.3 },
      { skill: 'Endodontie', count: 6, percentage: 25.0 }
    ],
    monthlyStats: [
      { month: 'Jan 2024', missions: 8, revenue: 780, successRate: 87.5 },
      { month: 'Déc 2023', missions: 6, revenue: 580, successRate: 83.3 },
      { month: 'Nov 2023', missions: 5, revenue: 480, successRate: 80.0 },
      { month: 'Oct 2023', missions: 5, revenue: 500, successRate: 80.0 }
    ],
    geographicDistribution: [
      { region: 'Paris 11e', missions: 12, assistants: 8 },
      { region: 'Paris 12e', missions: 6, assistants: 4 },
      { region: 'Paris 13e', missions: 4, assistants: 3 },
      { region: 'Paris 20e', missions: 2, assistants: 2 }
    ]
  };

  useEffect(() => {
    const loadAnalytics = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setAnalytics(mockAnalytics);
      setIsLoading(false);
    };

    loadAnalytics();
  }, [timeRange]);

  const getSuccessRateColor = (rate: number) => {
    if (rate >= 90) return 'text-green-600';
    if (rate >= 80) return 'text-yellow-600';
    if (rate >= 70) return 'text-orange-600';
    return 'text-red-600';
  };

  const getSuccessRateIcon = (rate: number) => {
    if (rate >= 80) return <TrendingUp className="h-4 w-4" />;
    return <TrendingDown className="h-4 w-4" />;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement des analytics...</p>
        </div>
      </div>
    );
  }

  if (!analytics) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <BarChart3 className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-xl font-semibold text-gray-900 mb-2">Erreur de chargement</h1>
          <p className="text-gray-600 mb-4">Impossible de charger les données d'analytics.</p>
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
                <h1 className="text-xl font-semibold text-gray-900">Analytics & Reporting</h1>
                <p className="text-sm text-gray-500">Tableaux de bord et analyses de performance</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="week">Cette semaine</option>
                <option value="month">Ce mois</option>
                <option value="quarter">Ce trimestre</option>
                <option value="year">Cette année</option>
              </select>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-1" />
                Exporter
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPIs principaux */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Missions totales</p>
                  <p className="text-2xl font-bold text-gray-900">{analytics.totalMissions}</p>
                </div>
                <Heart className="h-8 w-8 text-red-500" />
              </div>
              <div className="mt-2 flex items-center text-sm text-green-600">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>+12% vs mois dernier</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Taux de succès</p>
                  <p className={`text-2xl font-bold ${getSuccessRateColor(analytics.successRate)}`}>
                    {analytics.successRate}%
                  </p>
                </div>
                <Target className="h-8 w-8 text-green-500" />
              </div>
              <div className="mt-2 flex items-center text-sm text-green-600">
                {getSuccessRateIcon(analytics.successRate)}
                <span className="ml-1">+3.2% vs mois dernier</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Temps moyen</p>
                  <p className="text-2xl font-bold text-gray-900">{analytics.averageTimeToFill}min</p>
                </div>
                <Clock className="h-8 w-8 text-blue-500" />
              </div>
              <div className="mt-2 flex items-center text-sm text-green-600">
                <TrendingDown className="h-4 w-4 mr-1" />
                <span>-2min vs mois dernier</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Revenus totaux</p>
                  <p className="text-2xl font-bold text-gray-900">€{analytics.totalRevenue}</p>
                </div>
                <Star className="h-8 w-8 text-yellow-500" />
              </div>
              <div className="mt-2 flex items-center text-sm text-green-600">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>+18% vs mois dernier</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Graphiques et analyses */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Évolution mensuelle */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-blue-500" />
                <span>Évolution Mensuelle</span>
              </CardTitle>
              <CardDescription>
                Missions et revenus par mois
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analytics.monthlyStats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{stat.month}</p>
                      <p className="text-sm text-gray-600">{stat.missions} missions</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">€{stat.revenue}</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">Succès:</span>
                        <span className={`text-sm font-medium ${getSuccessRateColor(stat.successRate)}`}>
                          {stat.successRate}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Compétences les plus demandées */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <PieChart className="h-5 w-5 text-green-500" />
                <span>Compétences Demandées</span>
              </CardTitle>
              <CardDescription>
                Top 5 des compétences les plus recherchées
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analytics.topSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">{skill.skill}</span>
                      <span className="text-sm text-gray-600">{skill.count} missions</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-500">
                      {skill.percentage}% des missions
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Distribution géographique */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-purple-500" />
              <span>Distribution Géographique</span>
            </CardTitle>
            <CardDescription>
              Missions et assistantes par zone géographique
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {analytics.geographicDistribution.map((region, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">{region.region}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Missions:</span>
                      <span className="font-medium">{region.missions}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Assistantes:</span>
                      <span className="font-medium">{region.assistants}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Ratio: {(region.missions / region.assistants).toFixed(1)} missions/assistante
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommandations et insights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-orange-500" />
              <span>Insights & Recommandations</span>
            </CardTitle>
            <CardDescription>
              Analyses automatiques et suggestions d'amélioration
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Points forts</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-green-800">Excellent taux de succès</p>
                      <p className="text-xs text-green-600">
                        Votre taux de succès de {analytics.successRate}% dépasse la moyenne du marché (75%)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-green-800">Temps de réponse rapide</p>
                      <p className="text-xs text-green-600">
                        {analytics.averageTimeToFill} minutes en moyenne pour trouver une assistante
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Opportunités d'amélioration</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-yellow-800">Diversifier les compétences</p>
                      <p className="text-xs text-yellow-600">
                        Considérez des missions en orthodontie pour élargir votre base d'assistantes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                    <MapPin className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-blue-800">Étendre la zone de recherche</p>
                      <p className="text-xs text-blue-600">
                        Augmenter le rayon à 30km pourrait réduire le temps de recherche de 20%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
