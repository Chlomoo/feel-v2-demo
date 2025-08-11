'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  FileText, 
  Users, 
  TrendingDown,
  CheckCircle,
  Shield,
  Zap,
  Star,
  Phone,
  Calendar,
  Heart,
  Brain,
  Package,
  FileCheck,
  User,
  TrendingUp,
  Award,
  Lock,
  Smartphone,
  Headphones,
  Rocket
} from 'lucide-react';

export default function ChirurgienDentistePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Données des défis quotidiens
  const defisQuotidiens = [
    {
      id: 'admin',
      title: 'Gestion Administrative Chronophage',
      problem: 'Paperasse accumulation, contrats, déclarations, classement',
      impact: 'Temps précieux perdu vs patients',
      icon: <FileText className="w-8 h-8" />,
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'outils',
      title: 'Outils Éparpillés et Inefficaces',
      problem: 'Logiciels multiples non communicants',
      impact: 'Données dispersées, pas de vision d\'ensemble',
      icon: <Package className="w-8 h-8" />,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'rh',
      title: 'Urgences RH Stressantes',
      problem: 'Assistante malade dernière minute',
      impact: 'Course remplacement, planning désorganisé',
      icon: <Users className="w-8 h-8" />,
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      id: 'couts',
      title: 'Inefficacités Coûteuses',
      problem: 'Erreurs gestion, ruptures stock, conformité',
      impact: 'Rentabilité cabinet impactée',
      icon: <TrendingDown className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  // Données des modules Feel
  const modulesFeel = [
    {
      id: 'sos-assistante',
      title: 'SOS Assistante - Marketplace RH Dédiée',
      description: 'Trouvez et gérez vos assistantes en temps réel',
      features: [
        'Matching géolocalisé temps réel',
        'Filtrage compétences spécialisées (implantologie, orthodontie, chirurgie)',
        'Évaluations et contrats automatiques',
        'Paiement sécurisé + notation bilatérale'
      ],
      icon: <Users className="w-8 h-8" />,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'comptabilite',
      title: 'Comptabilité Intelligente - Automatisation Complète',
      description: 'Gérez vos finances sans effort avec l\'IA',
      features: [
        'Synchronisation comptes bancaires automatique',
        'IA catégorisation transactions précise',
        'Génération auto déclarations 2035, URSSAF',
        'Cockpit visuel temps réel + export expert-comptable'
      ],
      icon: <Brain className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'stock',
      title: 'Gestion de Stock Intelligente - Fini les Ruptures',
      description: 'Optimisez votre inventaire automatiquement',
      features: [
        'Intégration catalogues fournisseurs',
        'Commandes automatisées selon seuils',
        'Traçabilité lots + alertes péremption',
        'Interface iPad assistantes + achats groupés'
      ],
      icon: <Package className="w-8 h-8" />,
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 'contrats',
      title: 'Contrats Digitaux - Sécurité Juridique Totale',
      description: 'Gérez vos contrats en toute sécurité',
      features: [
        'Bibliothèque templates juridiques validés dentaire',
        'Auto-remplissage intelligent + signature électronique',
        'Archivage sécurisé + alertes échéances automatiques'
      ],
      icon: <FileCheck className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'profil',
      title: 'Profil Praticien - Hub Professionnel',
      description: 'Centralisez votre identité professionnelle',
      features: [
        'Centralisation identité professionnelle (RPPS, diplômes)',
        'Connexion portails administratifs facilitée',
        'Réseau communauté dentaire Feel'
      ],
      icon: <User className="w-8 h-8" />,
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 'veille',
      title: 'Veille Métier Personnalisée - Restez à la Pointe',
      description: 'Suivez l\'évolution de votre profession',
      features: [
        'Veille automatisée selon profil/spécialités',
        'Actualités cliniques, réglementaires, innovations',
        'Formations continues filtrées intelligemment'
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-teal-500 to-teal-600'
    }
  ];

  // Données des gains concrets
  const gainsConcrets = [
    {
      title: 'Gain de Temps Significatif',
      description: 'Automatisation tâches répétitives',
      icon: <Clock className="w-6 h-6" />,
      value: '3h/semaine'
    },
    {
      title: 'Recherche Assistante Simplifiée',
      description: 'Matching intelligent',
      icon: <Users className="w-6 h-6" />,
      value: '2h max'
    },
    {
      title: 'Vision Unifiée Activité',
      description: 'Cockpit centralisé 360°',
      icon: <Zap className="w-6 h-6" />,
      value: '100%'
    },
    {
      title: 'Conformité Simplifiée',
      description: 'Automatisation obligations',
      icon: <Shield className="w-6 h-6" />,
      value: 'Auto'
    },
    {
      title: 'Optimisation Continue',
      description: 'IA apprentissage personnalisé',
      icon: <Brain className="w-6 h-6" />,
      value: '24/7'
    }
  ];

  // Données des arguments différenciants
  const argumentsDifferentiants = [
    {
      title: 'Créé par un Dentiste, pour les Dentistes',
      description: 'Solution native secteur dentaire, pas adaptation généraliste',
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: 'Sécurité et Confidentialité Maximales',
      description: 'RGPD, hébergement France, protection bancaire',
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: 'Écosystème Intégré Unique',
      description: 'Modules communicants vs outils éparpillés',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Multi-Plateforme et Intuitif',
      description: 'Web/mobile natif, interface optimisée par usage',
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: 'Support Expert Dédié',
      description: 'Équipe secteur dentaire, pas call center généraliste',
      icon: <Headphones className="w-6 h-6" />
    },
    {
      title: 'Innovation Continue',
      description: 'Évolution feedback communauté praticiens',
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header avec navigation retour */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors">
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
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-3xl">🦷</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
            Feel - Le{' '}
            <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
              Copilote Digital
            </span>
            {' '}des Chirurgiens-Dentistes
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up-delay-1">
            Une seule plateforme pour toute votre équipe,{' '}
            <span className="font-semibold text-green-600">ZÉRO perte de temps</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delay-2">
            <button 
              onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
            >
              🚀 Découvrir Feel
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button 
              onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 hover:text-white transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
            >
              📞 Prendre Rendez-vous
            </button>
          </div>
        </div>
      </section>

      {/* Section 1 - Les Défis de Votre Quotidien */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Les Défis de Votre{' '}
              <span className="text-green-600">Quotidien</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Identifiez-vous à ces défis qui impactent votre quotidien et votre rentabilité ?
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {defisQuotidiens.map((defi, index) => (
              <div
                key={defi.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-red-500"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${defi.color} rounded-full flex items-center justify-center mb-6`}>
                  <div className="text-white">
                    {defi.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{defi.title}</h3>
                <div className="space-y-3">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="text-red-700 font-medium">Problème : {defi.problem}</p>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="text-orange-700 font-medium">Impact : {defi.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 - Feel : Votre Solution Intégrée */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Feel : Votre{' '}
              <span className="text-green-600">Solution Intégrée</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions intelligentes qui s&apos;adaptent à vos besoins et évoluent avec vous
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modulesFeel.map((module, index) => (
              <div
                key={module.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${module.color} rounded-full flex items-center justify-center mb-6`}>
                  <div className="text-white">
                    {module.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{module.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{module.description}</p>
                <ul className="space-y-2">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Transformez Votre Quotidien */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Transformez Votre{' '}
              <span className="text-green-600">Quotidien</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des résultats mesurables qui transforment votre pratique quotidienne
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {gainsConcrets.map((gain, index) => (
              <div
                key={gain.title}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-green-600">
                    {gain.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-green-600 mb-2">{gain.value}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{gain.title}</h3>
                <p className="text-sm text-gray-600">{gain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Pourquoi Choisir Feel ? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Pourquoi{' '}
              <span className="text-green-600">Choisir Feel</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des différenciateurs clés qui font de Feel votre partenaire de confiance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {argumentsDifferentiants.map((argument, index) => (
              <div
                key={argument.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <div className="text-green-600">
                    {argument.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{argument.title}</h3>
                <p className="text-gray-600 leading-relaxed">{argument.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - Call to Action */}
      <section id="cta" className="py-20 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Prêt à{' '}
            <span className="text-green-200">Transformer</span>
            {' '}Votre Pratique ?
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto">
            Rejoignez les chirurgiens-dentistes qui ont déjà fait le choix de l&apos;efficacité avec Feel
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">Ce Que Nous Vous Proposons :</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-200 flex-shrink-0" />
                <span className="text-green-100">Présentation Personnalisée - Démo adaptée cabinet</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-200 flex-shrink-0" />
                <span className="text-green-100">Démonstration Live - Feel en action cas d&apos;usage</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-200 flex-shrink-0" />
                <span className="text-green-100">Échanges Experts - Équipe spécialisée dentaire</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-200 flex-shrink-0" />
                <span className="text-green-100">Accompagnement Dédié - Support personnalisé</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => window.location.href = '/auth/signup'}
              className="bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
            >
              🚀 Découvrir Feel
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
            >
              📞 Prendre Rendez-vous
              <Calendar className="ml-2 w-5 h-5" />
            </button>
          </div>
          
          <p className="text-green-200 text-sm mt-8">
            ⚡ Démarrage en 5 minutes • 🆓 Essai gratuit 30 jours • 🔒 Aucun engagement
          </p>
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
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">contact@feel.com</p>
              <p className="text-gray-400">+33 1 23 45 67 89</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Liens</h3>
              <Link href="/" className="block text-gray-400 hover:text-white mb-2">
                Accueil
              </Link>
              <Link href="/auth/signup" className="block text-gray-400 hover:text-white mb-2">
                Inscription
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Feel. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

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