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
  AlertTriangle, ExternalLink, Download, Upload, Edit3,
  X, Save, Camera, Trash2, ChevronDown, Loader2,
  GraduationCap, BookOpen, Briefcase, AlertCircle
} from 'lucide-react';

export default function DentistCockpit() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // États pour l'édition du profil
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // États pour les informations du praticien
  const [practitionerInfo, setPractitionerInfo] = useState({
    rpps: '10003123456',
    adeli: '750012345',
    siret: '12345678901234',
    address: '15 rue République, 75011 Paris',
    phone: '01 23 45 67 89',
    email: 'martin.dubois@feel-demo.fr'
  });
  
  // États pour les spécialités
  const [specialties, setSpecialties] = useState(['Implantologie', 'Chirurgie Orale', 'Parodontologie']);
  const [showSpecialtySelector, setShowSpecialtySelector] = useState(false);
  
  // États pour les modals des organismes
  const [showOrganismeModal, setShowOrganismeModal] = useState(false);
  const [selectedOrganisme, setSelectedOrganisme] = useState<any>(null);
  
  // Types pour la timeline carrière
  type TimelineEventType = 'diplome' | 'certification' | 'installation' | 'partenariat' | 'formation' | 'poste' | 'autre';
  
  interface TimelineEvent {
    id: string;
    date: Date;
    type: TimelineEventType;
    title: string;
    location?: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  // États pour la timeline carrière interactive
  const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>([
    {
      id: '1',
      date: new Date('2025-01-01'),
      type: 'poste',
      title: 'Responsable Formation',
      location: 'Centre République',
      description: 'Poste actuel - Formation équipe implantologie',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '2',
      date: new Date('2023-06-01'),
      type: 'certification',
      title: 'Certification All-on-4',
      location: 'Institut Malo',
      description: 'Formation avancée implantologie',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '3',
      date: new Date('2018-09-01'),
      type: 'partenariat',
      title: 'Association Dr. Roussel',
      location: 'Paris 11e',
      description: 'Partage de cabinet - 50/50 parts',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '4',
      date: new Date('2015-03-01'),
      type: 'formation',
      title: 'Formation ITI Implantologie',
      location: 'Suisse',
      description: 'Spécialisation implants',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '5',
      date: new Date('2011-01-01'),
      type: 'installation',
      title: 'Installation Paris 11e',
      location: 'Centre République',
      description: 'Ouverture cabinet',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '6',
      date: new Date('2010-07-01'),
      type: 'diplome',
      title: 'Diplôme Chirurgien-Dentiste',
      location: 'Université Lyon 1',
      description: 'Mention Très Bien',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  
  const [showTimelineModal, setShowTimelineModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState<TimelineEvent | null>(null);
  const [editingEventId, setEditingEventId] = useState<string | null>(null);
  const [newEvent, setNewEvent] = useState<Partial<TimelineEvent>>({
    date: new Date(),
    type: 'formation',
    title: '',
    location: '',
    description: ''
  });
  
  // Liste des spécialités disponibles
  const availableSpecialties = [
    'Chirurgie orale', 'Implantologie', 'Parodontologie', 'Orthodontie', 
    'Endodontie', 'Prothèses dentaires', 'Dentisterie esthétique', 
    'Pédodontie', 'Gérondontologie', 'Pathologie et médecine bucco-dentaire',
    'Radiologie dentaire', 'Anesthésiologie dentaire'
  ];

  // URLs des organismes officiels
  const organismeUrls = {
    oncd: 'https://www.ordre-chirurgiens-dentistes.fr',
    urssaf: 'https://www.urssaf.fr/portail/home/espaces-dedies/independants.html',
    carcdsf: 'https://www.carcdsf.fr',
    dgfip: 'https://www.impots.gouv.fr/portail/professionnel',
    amelie: 'https://www.amelie.fr/professionnel-sante'
  };

  // Fonctions utilitaires
  const validateRPPS = (rpps: string) => /^\d{11}$/.test(rpps);
  const validateAdeli = (adeli: string) => /^\d{9}$/.test(adeli);
  const validateSIRET = (siret: string) => /^\d{14}$/.test(siret);
  const validatePhone = (phone: string) => /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(phone);
  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validation du fichier
      if (file.size > 2 * 1024 * 1024) {
        alert('Le fichier doit faire moins de 2MB');
        return;
      }
      if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
        alert('Format accepté : JPG, PNG, WebP');
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePhoto(e.target?.result as string);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFieldEdit = (field: string, value: string) => {
    setPractitionerInfo(prev => ({ ...prev, [field]: value }));
    setEditingField(null);
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  const handleSpecialtyAdd = (specialty: string) => {
    if (!specialties.includes(specialty) && specialties.length < 5) {
      setSpecialties(prev => [...prev, specialty]);
      setShowSpecialtySelector(false);
    }
  };

  const handleSpecialtyRemove = (specialty: string) => {
    setSpecialties(prev => prev.filter(s => s !== specialty));
  };

  // Fonctions pour la timeline carrière interactive
  const getEventIcon = (type: TimelineEventType) => {
    switch (type) {
      case 'diplome': return GraduationCap;
      case 'certification': return Star;
      case 'installation': return MapPin;
      case 'partenariat': return Users;
      case 'formation': return BookOpen;
      case 'poste': return Briefcase;
      default: return Award;
    }
  };

  const getEventTypeLabel = (type: TimelineEventType) => {
    switch (type) {
      case 'diplome': return 'Diplôme';
      case 'certification': return 'Certification';
      case 'installation': return 'Installation';
      case 'partenariat': return 'Partenariat';
      case 'formation': return 'Formation';
      case 'poste': return 'Poste';
      default: return 'Autre';
    }
  };

  const getEventTypeColor = (type: TimelineEventType) => {
    switch (type) {
      case 'diplome': return 'bg-gray-500 border-gray-500';
      case 'certification': return 'bg-blue-500 border-blue-500';
      case 'installation': return 'bg-orange-500 border-orange-500';
      case 'partenariat': return 'bg-purple-500 border-purple-500';
      case 'formation': return 'bg-yellow-500 border-yellow-500';
      case 'poste': return 'bg-green-500 border-green-500';
      default: return 'bg-gray-500 border-gray-500';
    }
  };

  const sortTimelineEvents = (events: TimelineEvent[]) => {
    return [...events].sort((a, b) => b.date.getTime() - a.date.getTime());
  };

  const handleAddEvent = () => {
    setNewEvent({
      date: new Date(),
      type: 'formation',
      title: '',
      location: '',
      description: ''
    });
    setEditingEvent(null);
    setShowTimelineModal(true);
  };

  const handleEditEvent = (event: TimelineEvent) => {
    setEditingEvent(event);
    setNewEvent({
      date: event.date,
      type: event.type,
      title: event.title,
      location: event.location || '',
      description: event.description || ''
    });
    setShowTimelineModal(true);
  };

  const handleSaveEvent = () => {
    if (!newEvent.title || newEvent.title.length < 3) {
      alert('Le titre doit contenir au moins 3 caractères');
      return;
    }

    if (!newEvent.date) {
      alert('La date est obligatoire');
      return;
    }

    const now = new Date();
    
    if (editingEvent) {
      // Modification d'un événement existant
      setTimelineEvents(prev => {
        const updated = prev.map(event => 
          event.id === editingEvent.id 
            ? {
                ...event,
                date: newEvent.date!,
                type: newEvent.type!,
                title: newEvent.title!,
                location: newEvent.location,
                description: newEvent.description,
                updatedAt: now
              }
            : event
        );
        return sortTimelineEvents(updated);
      });
    } else {
      // Ajout d'un nouvel événement
      const newTimelineEvent: TimelineEvent = {
        id: Date.now().toString(),
        date: newEvent.date!,
        type: newEvent.type!,
        title: newEvent.title!,
        location: newEvent.location,
        description: newEvent.description,
        createdAt: now,
        updatedAt: now
      };
      
      setTimelineEvents(prev => sortTimelineEvents([...prev, newTimelineEvent]));
    }

    setShowTimelineModal(false);
    setEditingEvent(null);
    setNewEvent({
      date: new Date(),
      type: 'formation',
      title: '',
      location: '',
      description: ''
    });
  };

  const handleDeleteEvent = (eventId: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet événement ?')) {
      setTimelineEvents(prev => prev.filter(event => event.id !== eventId));
    }
  };

  const handleCancelEdit = () => {
    setShowTimelineModal(false);
    setEditingEvent(null);
    setNewEvent({
      date: new Date(),
      type: 'formation',
      title: '',
      location: '',
      description: ''
    });
  };

  // Fonctions de gestion des organismes
  const handleOrganismeClick = (connection: any) => {
    // Normaliser le nom en supprimant les accents et espaces
    const organismeKey = connection.name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Supprimer les accents
      .replace(/\s+/g, ''); // Supprimer les espaces
    
    if (connection.status === 'connected') {
      // Redirection directe vers le site officiel
      const url = organismeUrls[organismeKey as keyof typeof organismeUrls];
      if (url) {
        window.open(url, '_blank');
      }
    } else {
      // Ouvrir modal pour les organismes en attente ou en erreur
      setSelectedOrganisme(connection);
      setShowOrganismeModal(true);
    }
  };

  const handleReconnect = (organisme: any) => {
    // Simulation de reconnexion
    console.log(`Reconnexion à ${organisme.name}...`);
    setShowOrganismeModal(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleAccessWebsite = (organisme: any) => {
    // Normaliser le nom en supprimant les accents et espaces
    const organismeKey = organisme.name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Supprimer les accents
      .replace(/\s+/g, ''); // Supprimer les espaces
    
    const url = organismeUrls[organismeKey as keyof typeof organismeUrls];
    if (url) {
      window.open(url, '_blank');
    }
    setShowOrganismeModal(false);
  };

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
                <div 
                  className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-200 transition-colors relative group"
                  onClick={() => setShowPhotoModal(true)}
                >
                  {profilePhoto ? (
                    <Image
                      src={profilePhoto}
                      alt="Photo de profil"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <User className="h-6 w-6 text-green-600" />
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-full transition-all duration-200 flex items-center justify-center">
                    <Camera className="h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
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
                    <div 
                      className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center cursor-pointer hover:bg-green-200 transition-colors relative group"
                      onClick={() => setShowPhotoModal(true)}
                    >
                      {profilePhoto ? (
                        <Image
                          src={profilePhoto}
                          alt="Photo de profil"
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                      ) : (
                        <User className="h-5 w-5 text-green-600" />
                      )}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-lg transition-all duration-200 flex items-center justify-center">
                        <Camera className="h-3 w-3 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
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
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200 group">
                  <div className="flex items-start space-x-6">
                    {/* Photo Professionnelle */}
                    <div 
                      className="w-24 h-24 bg-white rounded-full border-4 border-green-200 flex items-center justify-center shadow-lg cursor-pointer hover:border-green-300 transition-colors relative group"
                      onClick={() => setShowPhotoModal(true)}
                    >
                      {profilePhoto ? (
                        <Image
                          src={profilePhoto}
                          alt="Photo de profil"
                          width={96}
                          height={96}
                          className="w-24 h-24 rounded-full object-cover"
                        />
                      ) : (
                        <User className="h-12 w-12 text-green-600" />
                      )}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-full transition-all duration-200 flex items-center justify-center">
                        <Camera className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
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
                            {editingField === 'rpps' ? (
                              <div className="flex items-center space-x-2">
                                <input
                                  type="text"
                                  value={practitionerInfo.rpps}
                                  onChange={(e) => setPractitionerInfo(prev => ({ ...prev, rpps: e.target.value }))}
                                  className="text-sm font-mono text-gray-900 border border-gray-300 rounded px-2 py-1 w-32"
                                  maxLength={11}
                                />
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    if (validateRPPS(practitionerInfo.rpps)) {
                                      handleFieldEdit('rpps', practitionerInfo.rpps);
                                    } else {
                                      alert('RPPS doit contenir exactement 11 chiffres');
                                    }
                                  }}
                                  className="h-6 px-2"
                                >
                                  <Save className="h-3 w-3" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    setEditingField(null);
                                    setPractitionerInfo(prev => ({ ...prev, rpps: '10003123456' }));
                                  }}
                                  className="h-6 px-2"
                                >
                                  <X className="h-3 w-3" />
                                </Button>
                              </div>
                            ) : (
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-mono text-gray-900">{practitionerInfo.rpps}</span>
                                <button
                                  onClick={() => setEditingField('rpps')}
                                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <Edit3 className="h-3 w-3 text-gray-400 hover:text-green-600" />
                                </button>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <Shield className="h-4 w-4 text-green-600" />
                            <span className="text-sm font-medium text-gray-700">Adeli:</span>
                            {editingField === 'adeli' ? (
                              <div className="flex items-center space-x-2">
                                <input
                                  type="text"
                                  value={practitionerInfo.adeli}
                                  onChange={(e) => setPractitionerInfo(prev => ({ ...prev, adeli: e.target.value }))}
                                  className="text-sm font-mono text-gray-900 border border-gray-300 rounded px-2 py-1 w-28"
                                  maxLength={9}
                                />
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    if (validateAdeli(practitionerInfo.adeli)) {
                                      handleFieldEdit('adeli', practitionerInfo.adeli);
                                    } else {
                                      alert('Adeli doit contenir exactement 9 chiffres');
                                    }
                                  }}
                                  className="h-6 px-2"
                                >
                                  <Save className="h-3 w-3" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    setEditingField(null);
                                    setPractitionerInfo(prev => ({ ...prev, adeli: '750012345' }));
                                  }}
                                  className="h-6 px-2"
                                >
                                  <X className="h-3 w-3" />
                                </Button>
                              </div>
                            ) : (
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-mono text-gray-900">{practitionerInfo.adeli}</span>
                                <button
                                  onClick={() => setEditingField('adeli')}
                                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <Edit3 className="h-3 w-3 text-gray-400 hover:text-green-600" />
                                </button>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <FileText className="h-4 w-4 text-green-600" />
                            <span className="text-sm font-medium text-gray-700">SIRET:</span>
                            {editingField === 'siret' ? (
                              <div className="flex items-center space-x-2">
                                <input
                                  type="text"
                                  value={practitionerInfo.siret}
                                  onChange={(e) => setPractitionerInfo(prev => ({ ...prev, siret: e.target.value }))}
                                  className="text-sm font-mono text-gray-900 border border-gray-300 rounded px-2 py-1 w-36"
                                  maxLength={14}
                                />
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    if (validateSIRET(practitionerInfo.siret)) {
                                      handleFieldEdit('siret', practitionerInfo.siret);
                                    } else {
                                      alert('SIRET doit contenir exactement 14 chiffres');
                                    }
                                  }}
                                  className="h-6 px-2"
                                >
                                  <Save className="h-3 w-3" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    setEditingField(null);
                                    setPractitionerInfo(prev => ({ ...prev, siret: '12345678901234' }));
                                  }}
                                  className="h-6 px-2"
                                >
                                  <X className="h-3 w-3" />
                                </Button>
                              </div>
                            ) : (
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-mono text-gray-900">{practitionerInfo.siret}</span>
                                <button
                                  onClick={() => setEditingField('siret')}
                                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <Edit3 className="h-3 w-3 text-gray-400 hover:text-green-600" />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-green-600" />
                            {editingField === 'address' ? (
                              <div className="flex items-center space-x-2">
                                <input
                                  type="text"
                                  value={practitionerInfo.address}
                                  onChange={(e) => setPractitionerInfo(prev => ({ ...prev, address: e.target.value }))}
                                  className="text-sm text-gray-700 border border-gray-300 rounded px-2 py-1 w-48"
                                />
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleFieldEdit('address', practitionerInfo.address)}
                                  className="h-6 px-2"
                                >
                                  <Save className="h-3 w-3" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    setEditingField(null);
                                    setPractitionerInfo(prev => ({ ...prev, address: '15 rue République, 75011 Paris' }));
                                  }}
                                  className="h-6 px-2"
                                >
                                  <X className="h-3 w-3" />
                                </Button>
                              </div>
                            ) : (
                              <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-700">{practitionerInfo.address}</span>
                                <button
                                  onClick={() => setEditingField('address')}
                                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <Edit3 className="h-3 w-3 text-gray-400 hover:text-green-600" />
                                </button>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-green-600" />
                            {editingField === 'phone' ? (
                              <div className="flex items-center space-x-2">
                                <input
                                  type="text"
                                  value={practitionerInfo.phone}
                                  onChange={(e) => setPractitionerInfo(prev => ({ ...prev, phone: e.target.value }))}
                                  className="text-sm text-gray-700 border border-gray-300 rounded px-2 py-1 w-32"
                                />
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    if (validatePhone(practitionerInfo.phone)) {
                                      handleFieldEdit('phone', practitionerInfo.phone);
                                    } else {
                                      alert('Format de téléphone invalide');
                                    }
                                  }}
                                  className="h-6 px-2"
                                >
                                  <Save className="h-3 w-3" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    setEditingField(null);
                                    setPractitionerInfo(prev => ({ ...prev, phone: '01 23 45 67 89' }));
                                  }}
                                  className="h-6 px-2"
                                >
                                  <X className="h-3 w-3" />
                                </Button>
                              </div>
                            ) : (
                              <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-700">{practitionerInfo.phone}</span>
                                <button
                                  onClick={() => setEditingField('phone')}
                                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <Edit3 className="h-3 w-3 text-gray-400 hover:text-green-600" />
                                </button>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-green-600" />
                            {editingField === 'email' ? (
                              <div className="flex items-center space-x-2">
                                <input
                                  type="email"
                                  value={practitionerInfo.email}
                                  onChange={(e) => setPractitionerInfo(prev => ({ ...prev, email: e.target.value }))}
                                  className="text-sm text-gray-700 border border-gray-300 rounded px-2 py-1 w-48"
                                />
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    if (validateEmail(practitionerInfo.email)) {
                                      handleFieldEdit('email', practitionerInfo.email);
                                    } else {
                                      alert('Format d\'email invalide');
                                    }
                                  }}
                                  className="h-6 px-2"
                                >
                                  <Save className="h-3 w-3" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    setEditingField(null);
                                    setPractitionerInfo(prev => ({ ...prev, email: 'martin.dubois@feel-demo.fr' }));
                                  }}
                                  className="h-6 px-2"
                                >
                                  <X className="h-3 w-3" />
                                </Button>
                              </div>
                            ) : (
                              <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-700">{practitionerInfo.email}</span>
                                <button
                                  onClick={() => setEditingField('email')}
                                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <Edit3 className="h-3 w-3 text-gray-400 hover:text-green-600" />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Spécialités */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium text-gray-700">Spécialités Dentaires</h4>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setShowSpecialtySelector(!showSpecialtySelector)}
                            disabled={specialties.length >= 5}
                            className="h-6 px-2 text-xs"
                          >
                            <Plus className="h-3 w-3 mr-1" />
                            Ajouter
                          </Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {specialties.map((specialty, index) => (
                            <Badge 
                              key={index}
                              variant="outline" 
                              className="text-green-600 border-green-200 hover:bg-green-50 cursor-pointer group relative"
                            >
                              {specialty}
                              <button
                                onClick={() => handleSpecialtyRemove(specialty)}
                                className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <X className="h-3 w-3 text-red-500 hover:text-red-700" />
                              </button>
                            </Badge>
                          ))}
                        </div>
                        
                        {/* Sélecteur de spécialités */}
                        {showSpecialtySelector && (
                          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                            <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto">
                              {availableSpecialties
                                .filter(s => !specialties.includes(s))
                                .map((specialty) => (
                                  <button
                                    key={specialty}
                                    onClick={() => handleSpecialtyAdd(specialty)}
                                    className="text-left text-xs p-2 hover:bg-green-100 rounded transition-colors"
                                  >
                                    {specialty}
                                  </button>
                                ))}
                            </div>
                            <div className="mt-2 pt-2 border-t border-gray-200">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => setShowSpecialtySelector(false)}
                                className="h-6 px-2 text-xs"
                              >
                                Fermer
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Carrière Interactive */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900 flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-green-600" />
                      Timeline Carrière Interactive
                    </h4>
                    <Button 
                      onClick={handleAddEvent}
                      size="sm" 
                      variant="outline"
                      className="flex items-center space-x-2 hover:bg-green-50 hover:border-green-300"
                    >
                      <Plus className="h-4 w-4" />
                      <span>Ajouter un événement</span>
                    </Button>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-green-200"></div>
                    <div className="space-y-6">
                      {sortTimelineEvents(timelineEvents).map((event, index) => {
                        const EventIcon = getEventIcon(event.type);
                        const isCurrent = index === 0 && event.date.getFullYear() >= new Date().getFullYear();
                        
                        return (
                          <div 
                            key={event.id} 
                            className="relative flex items-start space-x-4 group hover:bg-gray-50 p-3 rounded-lg transition-colors cursor-pointer"
                            onDoubleClick={() => handleEditEvent(event)}
                          >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${getEventTypeColor(event.type)} ${
                              isCurrent ? 'ring-2 ring-green-300 ring-opacity-50' : ''
                            }`}>
                              <EventIcon className="h-4 w-4 text-white" />
                            </div>
                            
                            <div className="flex-1 pb-6">
                              <div className="flex items-center justify-between mb-1">
                                <div className="flex items-center space-x-2">
                                  <span className="text-lg font-bold text-gray-900">
                                    {event.date.getFullYear()}
                                  </span>
                                  <Badge variant={
                                    isCurrent ? 'default' :
                                    event.type === 'certification' ? 'secondary' : 'outline'
                                  } className="text-xs">
                                    {isCurrent ? 'Actuel' : getEventTypeLabel(event.type)}
                                  </Badge>
                                </div>
                                
                                {/* Boutons d'action au hover */}
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1">
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleEditEvent(event);
                                    }}
                                    className="h-6 w-6 p-0 hover:bg-blue-100"
                                  >
                                    <Edit3 className="h-3 w-3 text-blue-600" />
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleDeleteEvent(event.id);
                                    }}
                                    className="h-6 w-6 p-0 hover:bg-red-100"
                                  >
                                    <Trash2 className="h-3 w-3 text-red-600" />
                                  </Button>
                                </div>
                              </div>
                              
                              <h5 className="font-semibold text-gray-800 mb-1">{event.title}</h5>
                              {event.location && (
                                <p className="text-sm text-gray-500 mb-1 flex items-center">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  {event.location}
                                </p>
                              )}
                              {event.description && (
                                <p className="text-sm text-gray-600">{event.description}</p>
                              )}
                            </div>
                          </div>
                        );
                      })}
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
                      <div 
                        key={index} 
                        onClick={() => handleOrganismeClick(connection)}
                        className={`p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer group relative ${
                          connection.status === 'connected' ? 
                            'border-green-200 bg-green-50 hover:border-green-300 hover:shadow-lg hover:bg-green-100' :
                          connection.status === 'pending' ? 
                            'border-yellow-200 bg-yellow-50 hover:border-yellow-300 hover:shadow-lg hover:bg-yellow-100 animate-pulse' :
                            'border-red-200 bg-red-50 hover:border-red-300 hover:shadow-lg hover:bg-red-100'
                        }`}
                      >
                        {/* Icône de lien externe au hover */}
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <ExternalLink className="h-4 w-4 text-gray-400" />
                        </div>
                        
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
                            <span className="text-xs text-gray-400 group-hover:text-gray-600 transition-colors">
                              {connection.status === 'connected' ? 'Cliquer pour accéder' :
                               connection.status === 'pending' ? 'Cliquer pour plus d\'infos' : 'Cliquer pour résoudre'}
                            </span>
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

      {/* Modal Upload Photo */}
      {showPhotoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Changer la photo de profil</h3>
              <button
                onClick={() => setShowPhotoModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              {/* Prévisualisation */}
              <div className="flex justify-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center border-4 border-gray-200">
                  {profilePhoto ? (
                    <Image
                      src={profilePhoto}
                      alt="Prévisualisation"
                      width={96}
                      height={96}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  ) : (
                    <User className="h-12 w-12 text-gray-400" />
                  )}
                </div>
              </div>
              
              {/* Upload */}
              <div className="text-center">
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={handlePhotoUpload}
                  className="hidden"
                  id="photo-upload"
                />
                <label
                  htmlFor="photo-upload"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
                >
                  <Camera className="h-4 w-4 mr-2" />
                  Choisir une photo
                </label>
                <p className="text-xs text-gray-500 mt-2">
                  Formats acceptés : JPG, PNG, WebP (max 2MB)
                </p>
              </div>
              
              {/* Boutons */}
              <div className="flex space-x-3 pt-4">
                <Button
                  variant="outline"
                  onClick={() => setShowPhotoModal(false)}
                  className="flex-1"
                >
                  Annuler
                </Button>
                <Button
                  onClick={() => setShowPhotoModal(false)}
                  className="flex-1"
                  disabled={!profilePhoto}
                >
                  Valider
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast de succès */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 flex items-center space-x-2">
          <CheckCircle className="h-4 w-4" />
          <span>Modification sauvegardée !</span>
        </div>
      )}

      {/* Spinner de sauvegarde */}
      {isSaving && (
        <div className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 flex items-center space-x-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Sauvegarde...</span>
        </div>
      )}

      {/* Modal Timeline Event */}
      {showTimelineModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                {editingEvent ? 'Modifier l\'événement' : 'Ajouter un événement'}
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCancelEdit}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={newEvent.date ? newEvent.date.toISOString().split('T')[0] : ''}
                  onChange={(e) => setNewEvent(prev => ({ ...prev, date: new Date(e.target.value) }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Type d'événement */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type d'événement <span className="text-red-500">*</span>
                </label>
                <select
                  value={newEvent.type || 'formation'}
                  onChange={(e) => setNewEvent(prev => ({ ...prev, type: e.target.value as TimelineEventType }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="diplome">🎓 Diplôme/Formation</option>
                  <option value="certification">⭐ Certification</option>
                  <option value="installation">📍 Installation/Ouverture</option>
                  <option value="partenariat">👥 Partenariat/Association</option>
                  <option value="formation">📚 Formation continue</option>
                  <option value="poste">💼 Poste/Emploi</option>
                  <option value="autre">🔖 Autre</option>
                </select>
              </div>

              {/* Titre */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom/Titre <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={newEvent.title || ''}
                  onChange={(e) => setNewEvent(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Ex: Formation ITI Implantologie"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Lieu */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lieu/Institution
                </label>
                <input
                  type="text"
                  value={newEvent.location || ''}
                  onChange={(e) => setNewEvent(prev => ({ ...prev, location: e.target.value }))}
                  placeholder="Ex: Institut Malo, Université Lyon 1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={newEvent.description || ''}
                  onChange={(e) => setNewEvent(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Détails supplémentaires (optionnel)"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 mt-6 pt-4 border-t border-gray-200">
              <Button
                variant="outline"
                onClick={handleCancelEdit}
              >
                Annuler
              </Button>
              <Button
                onClick={handleSaveEvent}
                className="bg-green-600 hover:bg-green-700"
              >
                {editingEvent ? 'Sauvegarder' : 'Ajouter'}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Organisme */}
      {showOrganismeModal && selectedOrganisme && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {selectedOrganisme.status === 'pending' ? 'Connexion en cours' : 'Problème de connexion'}
              </h3>
              <button
                onClick={() => setShowOrganismeModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              {/* Icône et nom de l'organisme */}
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${selectedOrganisme.bgColor}`}>
                  <selectedOrganisme.icon className={`h-6 w-6 ${selectedOrganisme.color}`} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{selectedOrganisme.name}</h4>
                  <p className="text-sm text-gray-600">{selectedOrganisme.fullName}</p>
                </div>
              </div>
              
              {/* Message selon le statut */}
              {selectedOrganisme.status === 'pending' ? (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    Votre demande de connexion est en cours de traitement. Vous recevrez une notification dès l'activation.
                  </p>
                </div>
              ) : (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm text-red-800">
                    Identifiants expirés. Reconnexion nécessaire pour accéder aux services.
                  </p>
                </div>
              )}
              
              {/* Boutons d'action */}
              <div className="flex space-x-3 pt-4">
                {selectedOrganisme.status === 'pending' ? (
                  <>
                    <Button
                      variant="outline"
                      onClick={() => handleReconnect(selectedOrganisme)}
                      className="flex-1"
                    >
                      Relancer la connexion
                    </Button>
                    <Button
                      onClick={() => handleAccessWebsite(selectedOrganisme)}
                      className="flex-1"
                    >
                      Accéder au site
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={() => handleReconnect(selectedOrganisme)}
                      className="flex-1"
                    >
                      Reconnecter maintenant
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleAccessWebsite(selectedOrganisme)}
                      className="flex-1"
                    >
                      Site DGFiP
                    </Button>
                  </>
                )}
              </div>
              
              {/* Lien d'aide pour DGFiP */}
              {selectedOrganisme.status === 'error' && (
                <div className="text-center pt-2">
                  <a 
                    href="https://www.impots.gouv.fr/portail/contact" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Besoin d'assistance ?
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 