// Feel Authentication - ProfileSelector Component 2025
// Composant de sélection des profils professionnels

'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FeelButton } from '@/components/Button';
import { User, Shield, Users, CheckCircle, AlertTriangle, Clock } from 'lucide-react';
import { Profession } from '@/types/auth';

interface ProfileSelectorProps {
  onSelect: (profession: Profession) => void;
  selectedProfession?: Profession;
  className?: string;
}

const PROFILES = [
  {
    id: 'PRATICIEN' as Profession,
    title: 'Chirurgien-Dentiste',
    description: 'Gérez votre cabinet avec efficacité et simplicité',
    icon: User,
    color: 'bg-feel-primary-50 border-feel-primary-200',
    iconColor: 'text-feel-primary-600',
    features: [
      'Profil praticien et Contrats numériques',
      'Smart Comptabilité',
      'Gestion de Stock digital',
      'SOS Assistante'
    ],
    verification: {
      required: ['RPPS', 'Diplôme', 'Ordre'],
      time: '24-48h',
      difficulty: 'Facile'
    }
  },
  {
    id: 'DIRECTEUR' as Profession,
    title: 'Directeur Structure',
    description: 'Pilotez votre structure dentaire',
    icon: Shield,
    color: 'bg-feel-secondary-50 border-feel-secondary-200',
    iconColor: 'text-feel-secondary-600',
    features: [
      'Cockpit multi-sites consolidé',
      'Analytics avancées',
      'Gestion équipes centralisée',
      'Optimisation ressources'
    ],
    verification: {
      required: ['SIRET', 'Kbis', 'Responsabilité'],
      time: '24-48h',
      difficulty: 'Moyen'
    }
  },
  {
    id: 'ASSISTANTE' as Profession,
    title: 'Assistante Dentaire',
    description: 'Optimisez votre quotidien professionnel',
    icon: Users,
    color: 'bg-feel-success-50 border-feel-success-200',
    iconColor: 'text-feel-success-600',
    features: [
      'Missions flexibles géolocalisées',
      'Interface mobile optimisée',
      'Paiements automatiques sécurisés',
      'Portfolio professionnel'
    ],
    verification: {
      required: ['Certification', 'ARS', 'Références'],
      time: '48-72h',
      difficulty: 'Stricte'
    }
  }
];

export const ProfileSelector: React.FC<ProfileSelectorProps> = ({
  onSelect,
  selectedProfession,
  className = ''
}) => {
  return (
    <div className={`w-full ${className}`}>
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          Choisissez votre profil professionnel
        </h2>
        <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Sélectionnez votre profil pour accéder aux fonctionnalités adaptées à votre pratique
        </p>
      </div>

      {/* Cards Grid - Responsive Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {PROFILES.map((profile) => {
          const Icon = profile.icon;
          const isSelected = selectedProfession === profile.id;
          
          return (
            <Card
              key={profile.id}
              className={`
                cursor-pointer transition-all duration-300 hover:shadow-lg
                ${profile.color} ${isSelected ? 'ring-2 ring-feel-primary-500 shadow-lg' : ''}
                hover:scale-[1.02] h-full flex flex-col
              `}
              onClick={() => onSelect(profile.id)}
            >
              <CardHeader className="text-center pb-6 flex-shrink-0">
                <div className={`
                  w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6
                  ${isSelected ? 'bg-feel-primary-100' : 'bg-white'}
                  transition-all duration-300
                `}>
                  <Icon className={`h-10 w-10 ${profile.iconColor}`} />
                </div>
                <CardTitle className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3">
                  {profile.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {profile.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col space-y-6 p-6">
                {/* Fonctionnalités */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 text-sm">Fonctionnalités incluses :</h4>
                  <ul className="space-y-2">
                    {profile.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-feel-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Vérification requise */}
                <div className="border-t border-gray-200 pt-4 mt-auto">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900 text-sm">Vérification :</h4>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-xs text-gray-500 font-medium">{profile.verification.time}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-3">
                    {profile.verification.required.map((req, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-600">
                        <AlertTriangle className="h-3 w-3 text-feel-warning-500 mr-2 flex-shrink-0" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-4">
                    <span className={`
                      inline-block px-3 py-1 rounded-full text-xs font-semibold
                      ${profile.verification.difficulty === 'Facile' ? 'bg-feel-success-100 text-feel-success-700' :
                        profile.verification.difficulty === 'Moyen' ? 'bg-feel-warning-100 text-feel-warning-700' :
                        'bg-feel-danger-100 text-feel-danger-700'}
                    `}>
                      {profile.verification.difficulty}
                    </span>
                  </div>
                </div>

                {/* Bouton de sélection */}
                <div className="mt-auto">
                  <FeelButton
                    variant={isSelected ? 'primary' : 'secondary'}
                    size="md"
                    className="w-full min-h-[44px]"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelect(profile.id);
                    }}
                  >
                    {isSelected ? 'Sélectionné' : 'Choisir ce profil'}
                  </FeelButton>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Informations supplémentaires */}
      <div className="bg-feel-primary-50 border border-feel-primary-200 rounded-xl p-8 mt-12">
        <div className="flex items-start space-x-4">
          <AlertTriangle className="h-6 w-6 text-feel-primary-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-feel-primary-900 mb-3 text-lg">
              Vérification professionnelle
            </h3>
            <p className="text-base text-feel-primary-700 leading-relaxed">
              Tous les profils nécessitent une vérification de votre identité professionnelle. 
              Cette vérification est obligatoire pour garantir la sécurité et la conformité de la plateforme Feel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 