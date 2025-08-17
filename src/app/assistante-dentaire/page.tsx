'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  HeartHandshake,
  Smartphone,
  Search,
  Award,
  FileText,
  Users,
  MapPin,
  Clock,
  DollarSign,
  Shield,
  MessageCircle,
  BookOpen,
  Zap,
  CheckCircle,
  Download,
  Mail,
  Phone,
  Globe,
  TrendingUp,
  Target,
  CreditCard
} from 'lucide-react';

export default function AssistanteDentairePage() {
  // Données des défis quotidiens des assistantes
  const defisQuotidiens = [
    {
      title: 'Outils Inadaptés',
      description: 'Interfaces complexes et non intuitives',
      icon: <Smartphone className="w-8 h-8" />,
      impact: 'Perte de temps et frustration quotidienne'
    },
    {
      title: 'Recherche Missions',
      description: 'Difficulté à trouver des missions adaptées',
      icon: <Search className="w-8 h-8" />,
      impact: 'Périodes d\'inactivité fréquentes'
    },
    {
      title: 'Compétences Sous-Valorisées',
      description: 'Expertise non reconnue à sa juste valeur',
      icon: <Award className="w-8 h-8" />,
      impact: 'Rémunération en dessous du marché'
    },
    {
      title: 'Administration Complexe',
      description: 'Gestion administrative chronophage',
      icon: <FileText className="w-8 h-8" />,
      impact: 'Moins de temps pour les patients'
    },
    {
      title: 'Réseau Limité',
      description: 'Contacts professionnels restreints',
      icon: <Users className="w-8 h-8" />,
      impact: 'Opportunités manquées'
    }
  ];

  // Données des solutions Feel
  const solutionsFeel = [
    {
      title: 'Interface Mobile Intuitive',
      description: 'Application pensée pour les assistantes',
      icon: <Smartphone className="w-8 h-8" />,
      benefit: 'Navigation fluide et rapide'
    },
    {
      title: 'Marketplace SOS',
      description: 'Missions urgentes en temps réel',
      icon: <Zap className="w-8 h-8" />,
      benefit: 'Remplissage immédiat des créneaux'
    },
    {
      title: 'Portfolio Professionnel',
      description: 'Mise en valeur de vos compétences',
      icon: <Award className="w-8 h-8" />,
      benefit: 'Reconnaissance de votre expertise'
    },
    {
      title: 'Administration Simplifiée',
      description: 'Gestion automatisée des tâches',
      icon: <FileText className="w-8 h-8" />,
      benefit: 'Gain de temps significatif'
    },
    {
      title: 'Paiements Garantis',
      description: 'Sécurisation des transactions',
      icon: <CreditCard className="w-8 h-8" />,
      benefit: 'Paiement sous 48h garanti'
    },
    {
      title: 'Réseau Élargi',
      description: 'Communauté d\'assistantes Feel',
      icon: <Users className="w-8 h-8" />,
      benefit: 'Opportunités multipliées'
    }
  ];

  // Données des fonctionnalités clés
  const fonctionnalitesCles = [
    {
      title: 'Géolocalisation Intelligente',
      description: 'Trouvez des missions près de chez vous',
      icon: <MapPin className="w-8 h-8" />
    },
    {
      title: 'Suivi Performance',
      description: 'Analysez votre activité et vos gains',
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: 'Communication Intégrée',
      description: 'Échangez directement avec les cabinets',
      icon: <MessageCircle className="w-8 h-8" />
    },
    {
      title: 'Formation Continue',
      description: 'Accédez à des modules de formation',
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      title: 'Sécurité Maximale',
      description: 'Vos données sont protégées',
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: 'Matching IA',
      description: 'Algorithme intelligent pour les missions',
      icon: <Target className="w-8 h-8" />
    }
  ];

  // Données des statistiques d'impact
  const statistiquesImpact = [
    {
      value: '75%',
      label: 'Gain de Temps',
      description: 'Administration simplifiée',
      icon: <Clock className="w-8 h-8" />
    },
    {
      value: '+25%',
      label: 'Rémunération',
      description: 'Grâce à la valorisation',
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      value: '48h',
      label: 'Paiement',
      description: 'Garanti et sécurisé',
      icon: <CreditCard className="w-8 h-8" />
    },
    {
      value: '100%',
      label: 'Sécurisé',
      description: 'Protection des données',
      icon: <Shield className="w-8 h-8" />
    }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-[#F5F1E8] shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Retour à l&apos;accueil</span>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Image
                src="/logos/Logo FEEL .png"
                alt="Feel Logo"
                width={100}
                height={40}
                className="h-auto"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <HeartHandshake className="w-20 h-20 mx-auto mb-6 text-purple-200" />
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-[#0066cc]">
              Feel pour{' '}
              <span className="text-purple-200">Assistantes Dentaires</span>
            </h1>
            <p className="text-xl lg:text-2xl text-[#334155] max-w-3xl mx-auto leading-relaxed">
              Transformez votre carrière d&apos;assistante dentaire avec la première plateforme 
              qui vous met au centre de votre réussite professionnelle
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/auth/signup">
              <button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-colors shadow-lg">
                Commencer Maintenant
              </button>
            </Link>
            <button 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{backgroundColor: '#2563eb', color: 'white'}}
            >
              Voir la Démo
            </button>
          </div>
        </div>
      </section>

      {/* Section Défis Quotidiens */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Les Défis Quotidiens des{' '}
              <span className="text-purple-600">Assistantes Dentaires</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous comprenons les difficultés que vous rencontrez au quotidien. 
              Feel a été conçu pour résoudre ces problèmes spécifiquement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {defisQuotidiens.map((defi, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-purple-600 mb-4">
                  {defi.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {defi.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {defi.description}
                </p>
                <div className="bg-purple-100 text-purple-800 px-3 py-2 rounded-lg text-sm font-medium">
                  {defi.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Solutions Feel */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Les{' '}
              <span className="text-purple-600">Solutions Feel</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment Feel transforme votre expérience professionnelle 
              et vous donne les outils pour réussir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsFeel.map((solution, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-purple-600 mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {solution.description}
                </p>
                <div className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm font-medium">
                  {solution.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités Clés */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Fonctionnalités{' '}
              <span className="text-purple-600">Clés</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une suite complète d&apos;outils conçus spécifiquement pour 
              optimiser votre travail d&apos;assistante dentaire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fonctionnalitesCles.map((fonctionnalite, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-blue-600 mb-4">
                  {fonctionnalite.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {fonctionnalite.title}
                </h3>
                <p className="text-gray-600">
                  {fonctionnalite.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Statistiques d'Impact */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#0066cc]">
              L&apos;Impact{' '}
              <span className="text-purple-200">Feel</span>
            </h2>
            <p className="text-xl text-[#334155] max-w-3xl mx-auto">
              Des résultats concrets et mesurables pour transformer 
              votre carrière d&apos;assistante dentaire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistiquesImpact.map((stat, index) => (
              <div 
                key={index}
                className="text-center bg-white bg-opacity-10 p-8 rounded-2xl border border-white border-opacity-20"
              >
                <div className="text-purple-200 mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-2 text-[#00a86b]">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold mb-2 text-[#0066cc]">
                  {stat.label}
                </div>
                <div className="text-[#475569]">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Section Call-to-Action */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-[#0066cc]">
            Prêt à{' '}
            <span className="text-purple-200">Transformer</span>{' '}
            Votre Carrière ?
          </h2>
          
          <p className="text-xl text-[#334155] max-w-3xl mx-auto mb-12">
            Rejoignez notre réseau d&apos;assistantes dentaires qui ont déjà 
            transformé leur quotidien professionnel avec Feel.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link href="/auth/signup">
              <button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-colors shadow-lg flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Commencer Gratuitement
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                Nous Contacter
              </button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-xl border border-white border-opacity-20">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#0066cc]">Inscription Gratuite</h3>
              <p className="text-[#475569]">Aucun frais caché, commencez immédiatement</p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-xl border border-white border-opacity-20">
              <Clock className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#0066cc]">Mise en Place Rapide</h3>
              <p className="text-[#475569]">Profitez de Feel en moins de 5 minutes</p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-xl border border-white border-opacity-20">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#0066cc]">Support Dédié</h3>
              <p className="text-[#475569]">Une équipe à votre écoute 7j/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Image
                src="/logos/Logo FEEL .png"
                alt="Feel Logo"
                width={120}
                height={48}
                className="h-auto mb-4"
              />
              <p className="text-gray-300 max-w-md">
                Feel révolutionne la gestion des cabinets dentaires en connectant 
                les professionnels et en simplifiant leurs processus quotidiens.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link></li>
                <li><Link href="/chirurgien-dentiste" className="text-gray-300 hover:text-white transition-colors">Chirurgiens-Dentistes</Link></li>
                <li><Link href="/structure-dentaire" className="text-gray-300 hover:text-white transition-colors">Structure Dentaire</Link></li>
                <li><Link href="/assistante-dentaire" className="text-gray-300 hover:text-white transition-colors">Assistantes Dentaires</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-2" />
                  contact@feel.com
                </li>
                <li className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-2" />
                  +33 1 23 45 67 89
                </li>
                <li className="flex items-center text-gray-300">
                  <Globe className="w-4 h-4 mr-2" />
                  www.feel.com
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Feel. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 