'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  User, Users, Calculator, Package, FileText, Newspaper, 
  Heart, Bell, TrendingUp, Calendar, Clock, Star,
  ArrowRight, Plus, Settings, Search, Filter, LogOut,
  MapPin, Phone, Mail, Award, Shield, CheckCircle,
  AlertTriangle, ExternalLink, Download, Upload
} from 'lucide-react';

export default function DentistCockpit() {
  const [activeTab, setActiveTab] = useState('overview');

  const kpis = [
    { title: 'CA mensuel Feel', value: '€28,500', change: '+12%', icon: TrendingUp, color: 'text-green-600' },
    { title: 'Équipe présente', value: '2/2', change: 'Complète', icon: Users, color: 'text-blue-600' },
    { title: 'Documents Feel', value: '42', change: '+3', icon: FileText, color: 'text-purple-600' },
    { title: 'Alertes Feel', value: '4', change: 'Importantes', icon: Bell, color: 'text-red-600' }
  ];

  const modules = [
    {
      id: 'profil',
      title: 'Profil Praticien',
      description: 'Carte d\'identité professionnelle digitale',
      icon: User,
      notifications: 2,
      status: 'active',
      priority: 'high'
    },
    {
      id: 'sos',
      title: 'SOS Assistante',
      description: 'Matching intelligent pour missions urgentes',
      icon: Heart,
      notifications: 1,
      status: 'urgent',
      priority: 'high'
    },
    {
      id: 'comptabilite',
      title: 'Smart Comptabilité',
      description: 'Gestion financière automatisée',
      icon: Calculator,
      notifications: 0,
      status: 'active',
      priority: 'medium'
    },
    {
      id: 'stock',
      title: 'Gestion Stock',
      description: 'Stock prédictif et commandes auto',
      icon: Package,
      notifications: 3,
      status: 'warning',
      priority: 'medium'
    },
    {
      id: 'contrats',
      title: 'Contrats Numériques',
      description: 'Templates et signatures électroniques',
      icon: FileText,
      notifications: 0,
      status: 'active',
      priority: 'low'
    },
    {
      id: 'news',
      title: 'News & Formations',
      description: 'Veille professionnelle et DPC',
      icon: Newspaper,
      notifications: 5,
      status: 'active',
      priority: 'low'
    }
  ];

  const ssoConnections = [
    { 
      name: 'ONCD', 
      fullName: 'Ordre National Chirurgiens-Dentistes',
      status: 'connected', 
      lastSync: '2h',
      icon: Shield,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      description: 'Formation obligatoire, déontologie'
    },
    { 
      name: 'URSSAF', 
      fullName: 'Union de Recouvrement des Cotisations',
      status: 'connected', 
      lastSync: '1h',
      icon: Calculator,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      description: 'Déclarations sociales, cotisations'
    },
    { 
      name: 'CARCDSF', 
      fullName: 'Caisse Autonome de Retraite',
      status: 'pending', 
      lastSync: 'N/A',
      icon: Award,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      description: 'Points retraite, simulations'
    },
    { 
      name: 'DGFiP', 
      fullName: 'Direction Générale des Finances Publiques',
      status: 'error', 
      lastSync: 'N/A',
      icon: FileText,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      description: 'Déclaration 2035, CFE'
    },
    { 
      name: 'Amélie Pro', 
      fullName: 'Télétransmission Sécurisée',
      status: 'connected', 
      lastSync: '24h',
      icon: Shield,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      description: 'Télétransmission, tiers payant'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Feel */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Logo Feel */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/logos/Logo FEEL .png"
                  alt="Feel Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto mr-4"
                />
              </Link>
              <div className="h-8 w-px bg-gray-300" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Dr. Martin Dubois</h1>
                  <p className="text-gray-600">Chirurgien-Dentiste • Centre République, Paris 11e</p>
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
                <Badge variant="destructive" className="ml-1">4</Badge>
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
        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi, index) => (
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

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profil Praticien - Module Principal */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <User className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Profil Praticien</CardTitle>
                      <CardDescription>Carte d'identité professionnelle digitale</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    Module Principal
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Carte d'Identité Professionnelle */}
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                  <div className="flex items-start space-x-6">
                    {/* Photo Professionnelle */}
                    <div className="w-24 h-24 bg-white rounded-full border-4 border-green-200 flex items-center justify-center shadow-lg">
                      <User className="h-12 w-12 text-green-600" />
                    </div>
                    
                    {/* Informations Officielles */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Dr. Martin Dubois</h3>
                        <p className="text-lg text-gray-600">Chirurgien-Dentiste</p>
                        <p className="text-sm text-gray-500">Centre Dentaire République • Paris 11e</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Award className="h-4 w-4 text-green-600" />
                            <span className="text-sm font-medium text-gray-700">RPPS:</span>
                            <span className="text-sm font-mono text-gray-900">10003123456</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Shield className="h-4 w-4 text-green-600" />
                            <span className="text-sm font-medium text-gray-700">Adeli:</span>
                            <span className="text-sm font-mono text-gray-900">750012345</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FileText className="h-4 w-4 text-green-600" />
                            <span className="text-sm font-medium text-gray-700">SIRET:</span>
                            <span className="text-sm font-mono text-gray-900">12345678901234</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-gray-700">15 rue République, 75011 Paris</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-gray-700">01 23 45 67 89</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-gray-700">martin.dubois@feel-demo.fr</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Spécialités */}
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-green-600 border-green-200">
                          Implantologie
                        </Badge>
                        <Badge variant="outline" className="text-green-600 border-green-200">
                          Chirurgie Orale
                        </Badge>
                        <Badge variant="outline" className="text-green-600 border-green-200">
                          Parodontologie
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Carrière Interactive */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-green-600" />
                    Timeline Carrière Interactive
                  </h4>
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-green-200"></div>
                    <div className="space-y-6">
                      {[
                        { 
                          year: '2025', 
                          title: 'Responsable Formation', 
                          description: 'Poste actuel - Formation équipe implantologie',
                          type: 'current',
                          icon: Award
                        },
                        { 
                          year: '2023', 
                          title: 'Certification All-on-4', 
                          description: 'Formation avancée implantologie - Institut Malo',
                          type: 'certification',
                          icon: Star
                        },
                        { 
                          year: '2018', 
                          title: 'Association Dr. Roussel', 
                          description: 'Partage de cabinet - 50/50 parts',
                          type: 'partnership',
                          icon: Users
                        },
                        { 
                          year: '2015', 
                          title: 'Formation ITI Implantologie', 
                          description: 'Spécialisation implants - Suisse',
                          type: 'formation',
                          icon: Award
                        },
                        { 
                          year: '2011', 
                          title: 'Installation Paris 11e', 
                          description: 'Ouverture cabinet Centre République',
                          type: 'installation',
                          icon: MapPin
                        },
                        { 
                          year: '2010', 
                          title: 'Diplôme Chirurgien-Dentiste', 
                          description: 'Université Lyon 1 - Mention Très Bien',
                          type: 'diploma',
                          icon: Award
                        }
                      ].map((item, index) => (
                        <div key={index} className="relative flex items-start space-x-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                            item.type === 'current' ? 'bg-green-500 border-green-500 text-white' :
                            item.type === 'certification' ? 'bg-blue-500 border-blue-500 text-white' :
                            item.type === 'partnership' ? 'bg-purple-500 border-purple-500 text-white' :
                            item.type === 'formation' ? 'bg-yellow-500 border-yellow-500 text-white' :
                            item.type === 'installation' ? 'bg-orange-500 border-orange-500 text-white' :
                            'bg-gray-500 border-gray-500 text-white'
                          }`}>
                            <item.icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1 pb-6">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-lg font-bold text-gray-900">{item.year}</span>
                              <Badge variant={
                                item.type === 'current' ? 'default' :
                                item.type === 'certification' ? 'secondary' : 'outline'
                              } className="text-xs">
                                {item.type === 'current' ? 'Actuel' :
                                 item.type === 'certification' ? 'Certification' :
                                 item.type === 'partnership' ? 'Partenariat' :
                                 item.type === 'formation' ? 'Formation' :
                                 item.type === 'installation' ? 'Installation' : 'Diplôme'}
                              </Badge>
                            </div>
                            <h5 className="font-semibold text-gray-800 mb-1">{item.title}</h5>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connexions Organismes SSO */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-green-600" />
                    5 Connexions Organismes Officiels
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ssoConnections.map((connection, index) => (
                      <div key={index} className={`p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md ${
                        connection.status === 'connected' ? 'border-green-200 bg-green-50' :
                        connection.status === 'pending' ? 'border-yellow-200 bg-yellow-50' :
                        'border-red-200 bg-red-50'
                      }`}>
                        <div className="flex items-start justify-between mb-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${connection.bgColor}`}>
                            <connection.icon className={`h-5 w-5 ${connection.color}`} />
                          </div>
                          <Badge variant={
                            connection.status === 'connected' ? 'default' :
                            connection.status === 'pending' ? 'secondary' : 'destructive'
                          } className="text-xs">
                            {connection.status === 'connected' ? '🟢 Connecté' :
                             connection.status === 'pending' ? '🟠 En attente' : '🔴 Erreur'}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-semibold text-gray-900 text-sm">{connection.name}</h5>
                          <p className="text-xs text-gray-600">{connection.fullName}</p>
                          <p className="text-xs text-gray-500">{connection.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">
                              {connection.status === 'connected' ? `Dernière sync: ${connection.lastSync}` :
                               connection.status === 'pending' ? 'Reconnexion requise' : 'Identifiants expirés'}
                            </span>
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                              <ExternalLink className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coffre-Fort Documents & Notifications */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Coffre-Fort Documents */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-green-600" />
                      Coffre-Fort Documents (42)
                    </h4>
                    <div className="space-y-2">
                      {[
                        { category: 'Diplômes & Certifications', count: 8, icon: Award },
                        { category: 'Assurances & RC', count: 5, icon: Shield },
                        { category: 'Contrats & Avenants', count: 12, icon: FileText },
                        { category: 'Déclarations Fiscales', count: 10, icon: Calculator },
                        { category: 'Autres Documents', count: 7, icon: Package }
                      ].map((doc, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                              <doc.icon className="h-4 w-4 text-green-600" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">{doc.category}</p>
                              <p className="text-xs text-gray-500">{doc.count} documents</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Notifications & Actions */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Bell className="h-5 w-5 mr-2 text-green-600" />
                      Notifications & Actions [2]
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-red-800">Formation DPC en retard</p>
                          <p className="text-xs text-red-600">Formation obligatoire à compléter avant le 15 mars</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <FileText className="h-5 w-5 text-yellow-600 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-yellow-800">Document expiré</p>
                          <p className="text-xs text-yellow-600">Assurance RC professionnelle à renouveler</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-blue-800">Nouveau patient inscrit</p>
                          <p className="text-xs text-blue-600">M. Dupont a complété son profil en ligne</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Modules Secondaires */}
          <div className="space-y-6">
            {modules.filter(m => m.id !== 'profil').map((module) => (
              <Card key={module.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        module.status === 'urgent' ? 'bg-red-100' :
                        module.status === 'warning' ? 'bg-yellow-100' : 'bg-green-100'
                      }`}>
                        <module.icon className={`h-4 w-4 ${
                          module.status === 'urgent' ? 'text-red-600' :
                          module.status === 'warning' ? 'text-yellow-600' : 'text-green-600'
                        }`} />
                      </div>
                      <div>
                        <CardTitle className="text-base">{module.title}</CardTitle>
                        <CardDescription className="text-xs">{module.description}</CardDescription>
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
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {module.priority === 'high' ? 'Priorité Haute' :
                       module.priority === 'medium' ? 'Priorité Moyenne' : 'Priorité Basse'}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Actions Rapides Feel */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Star className="h-5 w-5 mr-2 text-green-600" />
                Actions Rapides Feel
              </CardTitle>
              <CardDescription>Accès direct aux fonctionnalités prioritaires</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button variant="outline" className="h-20 flex-col space-y-2 hover:bg-red-50 hover:border-red-200 transition-all">
                  <Heart className="h-6 w-6 text-red-600" />
                  <span className="text-sm font-medium">Mission Urgente</span>
                  <span className="text-xs text-gray-500">SOS Assistante</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col space-y-2 hover:bg-blue-50 hover:border-blue-200 transition-all">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span className="text-sm font-medium">Connexion Organismes</span>
                  <span className="text-xs text-gray-500">SSO & Intégrations</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col space-y-2 hover:bg-green-50 hover:border-green-200 transition-all">
                  <Upload className="h-6 w-6 text-green-600" />
                  <span className="text-sm font-medium">Upload Document</span>
                  <span className="text-xs text-gray-500">Coffre-Fort</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col space-y-2 hover:bg-purple-50 hover:border-purple-200 transition-all">
                  <Calculator className="h-6 w-6 text-purple-600" />
                  <span className="text-sm font-medium">Smart Comptabilité</span>
                  <span className="text-xs text-gray-500">Gestion Financière</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 