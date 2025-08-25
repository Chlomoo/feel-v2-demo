'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  BarChart3, 
  Building2, 
  Users, 
  DollarSign, 
  Shield, 
  TrendingUp,
  Target,
  Zap,
  BarChart,
  Lightbulb,
  Rocket,
  CheckCircle,
  Clock,
  Globe,
  Lock,
  Smartphone,
  Headphones,
  Database,
  Cpu,
  PieChart,
  FileText,
  Calendar,
  Star,
  Package,
  User,
  Mail
} from 'lucide-react';

export default function StructureDentairePage() {
  // Données des défis du pilotage multi-sites
  const defisMultiSites = [
    {
      title: 'Vision Parcellaire de la Performance',
      problem: 'Données éparpillées, systèmes non communicants',
      impact: 'Décisions basées sur reportings incomplets',
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: 'Coordination Inter-Sites Complexe',
      problem: 'Répartition équipes, optimisation ressources',
      impact: 'Pas de visibilité pour optimisation rapide',
      icon: <Building2 className="w-8 h-8" />
    },
    {
      title: 'Gestion d\'Équipes Dispersées',
      problem: 'Plannings variables, suivi compétences complexe',
      impact: 'Management administratif vs stratégique',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Optimisation Financière Limitée',
      problem: 'Pas de vision consolidée, sites en silo',
      impact: 'Perte économies d\'échelle et standardisation',
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      title: 'Conformité et Risques Multipliés',
      problem: 'Multiplier sites = multiplier risques non-conformité',
      impact: 'Gestion chronophage et stress réglementaire',
      icon: <Shield className="w-8 h-8" />
    }
  ];

  // Données des modules Feel pour directeurs
  const modulesDirecteur = [
    {
      title: 'Dashboard Consolidé Temps Réel',
      description: 'Visualisation performance tous sites depuis cockpit unique',
      features: [
        'KPIs financiers, indicateurs RH, alertes opérationnelles',
        'Chiffre d\'affaires par site, productivité par praticien',
        'Vision 360° activité temps réel'
      ],
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: 'Optimisation Ressources Inter-Sites',
      description: 'Module SOS Assistante = gestion équipes volantes',
      features: [
        'Redistribution instantanée assistantes entre sites',
        'Optimisation plannings globaux + pool ressources mutualisées',
        'Contrainte multi-sites → avantage concurrentiel'
      ],
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Gestion RH Centralisée et Digitalisée',
      description: 'Centralisation contrats, formations, évaluations, documents RH',
      features: [
        'Suivi automatique échéances + alertes formations obligatoires',
        'Gestion droits et permissions par site',
        'Administration RH simplifiée + conformité sécurisée'
      ],
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Comptabilité Consolidée Multi-Entités',
      description: 'Gestion native multi-sites',
      features: [
        'Consolidation automatique données financières',
        'Reporting par entité ou global + optimisation fiscale',
        'Synchronisation bancaire tous comptes + génération déclarations'
      ],
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      title: 'Gestion de Stock Mutualisée',
      description: 'Centralisation gestion stock tous sites',
      features: [
        'Commandes groupées + meilleurs tarifs négociés',
        'Transferts inter-sites automatisés',
        'Visibilité globale immobilisations'
      ],
      icon: <Package className="w-8 h-8" />
    },
    {
      title: 'Supervision Globale des Praticiens',
      description: 'Suivi performance tous praticiens interface unique',
      features: [
        'Gestion profils, supervision agendas, analyse comparative',
        'Support montée en compétences',
        'Vision managériale moderne'
      ],
      icon: <User className="w-8 h-8" />
    },
    {
      title: 'Veille Stratégique Sectorielle',
      description: 'Veille personnalisée dirigeants structures dentaires',
      features: [
        'Évolutions réglementaires multi-sites',
        'Innovations technologiques, best practices management',
        'Opportunités marché secteur'
      ],
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  // Données des transformations
  const transformations = [
    {
      title: 'Vision Unifiée et Décision Éclairée',
      description: 'Vision complète temps réel + décisions data-driven',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: 'Réactivité Opérationnelle Maximale',
      description: 'Ajustement temps réel allocation ressources',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Reporting Automatisé et Analytics Avancées',
      description: 'KPIs sectoriels + analyses comparatives',
      icon: <BarChart className="w-6 h-6" />
    },
    {
      title: 'Optimisation Continue des Performances',
      description: 'IA propose optimisations personnalisées',
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: 'Scalabilité Sans Limite',
      description: 'Adaptation instantanée nouveaux sites/acquisitions',
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  // Données des arguments différenciants
  const argumentsFeel = [
    {
      title: 'Expertise Sectorielle Dentaire',
      description: 'Plateforme spécifique structures dentaires françaises, contraintes réglementaires',
      icon: <Star className="w-6 h-6" />
    },
    {
      title: 'Architecture Multi-Sites Native',
      description: 'Conçu pour complexité multi-sites : consolidation, permissions, reporting',
      icon: <Building2 className="w-6 h-6" />
    },
    {
      title: 'Sécurité et Conformité Entreprise',
      description: 'Protection bancaire, RGPD renforcé, audit trail, gestion droits',
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: 'Interface Directeur Dédiée',
      description: 'Dashboard exécutif, alertes configurables, supervision mobile',
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: 'Support Dédié Structures',
      description: 'Équipe comprend enjeux management structures dentaires',
      icon: <Headphones className="w-6 h-6" />
    },
    {
      title: 'Évolution Collaborative',
      description: 'Communauté directeurs, roadmap adaptée secteur',
      icon: <Users className="w-6 h-6" />
    }
  ];

  // Données des solutions par taille
  const solutionsParTaille = [
    {
      taille: 'Structures 2-5 Sites',
      description: 'Configuration simplifiée + supervision centralisée',
      features: ['Dashboard consolidé', 'Gestion RH centralisée', 'Reporting multi-sites']
    },
    {
      taille: 'Groupes 6-15 Sites',
      description: 'Plateforme complète + analytics avancées',
      features: ['Tous modules + BI avancée', 'Optimisation ressources', 'Veille stratégique']
    },
    {
      taille: 'Organisations +15 Sites',
      description: 'Déploiement entreprise + support prioritaire',
      features: ['Déploiement sur-mesure', 'Support dédié', 'API personnalisées']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Header avec navigation retour */}
      <header className="bg-[#F5F1E8] shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Retour à l&apos;accueil</span>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Image
                src="/logos/Logo FEEL .png"
                alt="Feel Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Section Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Feel - Le Copilote Digital des{' '}
            <span className="text-blue-200">Directeurs de Structure Dentaire</span>
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
            Une plateforme unifiée pour piloter efficacement vos sites dentaires
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/contact'}
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
            >
              Audit Gratuit de Votre Structure
            </button>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Démonstration Dirigeant
            </button>
          </div>
        </div>
      </section>

      {/* Section 1 - Les Défis du Pilotage Multi-Sites */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Les Défis du{' '}
              <span className="text-blue-600">Pilotage Multi-Sites</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Piloter plusieurs sites dentaires présente des défis uniques que Feel transforme en avantages concurrentiels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {defisMultiSites.map((defi, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="text-blue-600 mb-4">{defi.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{defi.title}</h3>
                <div className="space-y-2">
                  <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-400">
                    <p className="text-sm text-red-700 font-medium">Problème :</p>
                    <p className="text-sm text-red-600">{defi.problem}</p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-400">
                    <p className="text-sm text-orange-700 font-medium">Impact :</p>
                    <p className="text-sm text-orange-600">{defi.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 - Feel : Votre Cockpit de Pilotage Unifié */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Feel : Votre{' '}
              <span className="text-blue-600">Cockpit de Pilotage Unifié</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              7 modules spécialement conçus pour transformer votre pilotage multi-sites
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {modulesDirecteur.map((module, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="text-blue-600 mb-4">{module.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{module.title}</h3>
                <p className="text-gray-600 mb-6 text-lg">{module.description}</p>
                <ul className="space-y-3">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Transformez Votre Pilotage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Transformez Votre{' '}
              <span className="text-blue-600">Pilotage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les transformations concrètes que Feel apporte à votre structure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformations.map((transformation, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="text-blue-200 mb-4 flex justify-center">{transformation.icon}</div>
                <h3 className="text-xl font-bold mb-4">{transformation.title}</h3>
                <p className="text-blue-100">{transformation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Pourquoi Choisir Feel pour Votre Structure ? */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir Feel pour{' '}
              <span className="text-blue-600">Votre Structure ?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des arguments différenciants qui font de Feel la solution de référence pour les directeurs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {argumentsFeel.map((argument, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="text-blue-600 mb-4">{argument.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{argument.title}</h3>
                <p className="text-gray-600">{argument.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - Architecture Technique Entreprise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Architecture Technique{' '}
              <span className="text-blue-600">Entreprise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une plateforme robuste et évolutive pour répondre aux besoins des structures dentaires
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Cpu className="w-6 h-6 text-blue-600 mr-3" />
                  Plateforme Modulaire et Évolutive
                </h3>
                <p className="text-gray-700">Activation progressive des modules selon vos priorités et votre maturité digitale</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Database className="w-6 h-6 text-blue-600 mr-3" />
                  Intégrations Entreprise
                </h3>
                <p className="text-gray-700">API ouvertes et connexion avec vos systèmes existants pour une intégration transparente</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <PieChart className="w-6 h-6 text-blue-600 mr-3" />
                  Analytics et Business Intelligence
                </h3>
                <p className="text-gray-700">Entrepôt de données, tableaux de bord configurables et exports automatisés</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 text-blue-600 mr-3" />
                  Déploiement Standardisé
                </h3>
                <p className="text-gray-700">Méthodologie éprouvée, formation des équipes et accompagnement au changement</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-blue-600 mr-3" />
                  Sécurité et Conformité
                </h3>
                <p className="text-gray-700">Protection des données, conformité RGPD et audit trail complet pour la traçabilité</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Globe className="w-6 h-6 text-blue-600 mr-3" />
                  Disponibilité et Performance
                </h3>
                <p className="text-gray-700">Infrastructure cloud haute disponibilité avec SLA 99.9% et support 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Call to Action Directeurs */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            Notre Accompagnement{' '}
            <span className="text-blue-200">Structure Dentaire</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Audit Organisationnel Gratuit</h3>
              <p className="text-gray-700">Analyse de votre structure et identification des leviers d'optimisation</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Démonstration Multi-Sites</h3>
              <p className="text-gray-700">Simulation avec vos vraies données pour une expérience réaliste</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Business Case Personnalisé</h3>
              <p className="text-gray-700">ROI projeté pour votre configuration spécifique et votre structure</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Plan de Déploiement Sur-Mesure</h3>
              <p className="text-gray-700">Roadmap d'implémentation et plan de formation de vos équipes</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Commencez Votre Transformation</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/contact'}
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
              >
                Audit Gratuit de Votre Structure
              </button>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Démonstration Dirigeant
              </button>
            </div>
            <p className="text-blue-200 text-lg">
              Analysons vos enjeux actuels • Feel en 45 minutes simulation structure
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/logos/Logo FEEL .png"
                alt="Feel Logo"
                width={120}
                height={40}
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-400">
                Le copilote digital des professionnels dentaires
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Direction</h3>
              <p className="text-gray-400 mb-2">Équipe dédiée structures dentaires</p>
              <p className="text-gray-400">contact@feel.com</p>
              <p className="text-gray-400">+33 1 XX XX XX XX</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Liens Utiles</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Accueil</Link></li>
                <li><Link href="/chirurgien-dentiste" className="text-gray-400 hover:text-white transition-colors">Chirurgien-Dentiste</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Feel. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Styles CSS pour animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in { 
          animation: fadeInUp 0.8s ease-out forwards; 
        }
        
        .animate-slide-up { 
          animation: fadeInUp 0.8s ease-out 0.2s forwards; 
          opacity: 0; 
        }
        
        .animate-slide-up-delay-1 { 
          animation: fadeInUp 0.8s ease-out 0.4s forwards; 
          opacity: 0; 
        }
        
        .animate-slide-up-delay-2 { 
          animation: fadeInUp 0.8s ease-out 0.6s forwards; 
          opacity: 0; 
        }
      `}</style>
    </div>
  );
} 