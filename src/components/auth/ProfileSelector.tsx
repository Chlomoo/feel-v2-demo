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
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600',
    borderColor: 'border-green-500',
    hoverColor: 'hover:bg-green-50 hover:border-green-600',
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
    title: 'Structure Dentaire',
    description: 'Gérez plusieurs sites et équipes',
    icon: Shield,
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
    hoverColor: 'hover:bg-blue-50 hover:border-blue-600',
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
    color: 'bg-purple-50 border-purple-200',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
    hoverColor: 'hover:bg-purple-50 hover:border-purple-600',
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
                ${profile.color} ${isSelected ? `ring-2 ${profile.borderColor} shadow-lg` : ''}
                hover:scale-[1.02] h-full flex flex-col border-2 ${profile.borderColor}
                ${profile.hoverColor}
              `}
              onClick={() => onSelect(profile.id)}
            >
              <CardHeader className="text-center pb-6 flex-shrink-0">
                <div className={`
                  w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6
                  ${isSelected ? 'bg-white shadow-md' : 'bg-white'}
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
                  
                  {/* Badge de difficulté supprimé */}
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
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-xl p-8 mt-12 shadow-sm">
        <div className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <h3 className="font-semibold text-green-800 mb-3 text-lg">
              Vérification professionnelle
            </h3>
            <p className="text-base text-green-700 leading-relaxed">
              Tous les profils nécessitent une vérification de votre identité professionnelle. 
              Cette vérification est obligatoire pour garantir la sécurité et la conformité de la plateforme Feel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}; 