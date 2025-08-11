// Feel Authentication - Page Connexion 2025
// Page de connexion principale avec sélection de profil

'use client';

import React, { useState } from 'react';
import { signIn, getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ProfileSelector } from '@/components/auth/ProfileSelector';
import { FeelButton } from '@/components/Button';
import { ArrowLeft, ArrowRight, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Profession } from '@/types/auth';

export default function SignInPage() {
  const router = useRouter();
  const [selectedProfession, setSelectedProfession] = useState<Profession | undefined>();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleProfessionSelect = (profession: Profession) => {
    setSelectedProfession(profession);
    setError('');
  };

  const handleGoogleSignIn = async () => {
    if (!selectedProfession) {
      setError('Veuillez sélectionner votre profil professionnel');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const result = await signIn('google', {
        callbackUrl: `/auth/signin/${selectedProfession.toLowerCase()}`,
        redirect: false,
      });

      if (result?.error) {
        setError('Erreur lors de la connexion avec Google');
      } else if (result?.ok) {
        router.push(`/auth/signin/${selectedProfession.toLowerCase()}`);
      }
    } catch (error) {
      setError('Une erreur est survenue');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAppleSignIn = async () => {
    if (!selectedProfession) {
      setError('Veuillez sélectionner votre profil professionnel');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const result = await signIn('apple', {
        callbackUrl: `/auth/signin/${selectedProfession.toLowerCase()}`,
        redirect: false,
      });

      if (result?.error) {
        setError('Erreur lors de la connexion avec Apple');
      } else if (result?.ok) {
        router.push(`/auth/signin/${selectedProfession.toLowerCase()}`);
      }
    } catch (error) {
      setError('Une erreur est survenue');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col">
      {/* Header */}
      <header className="bg-[#F5F1E8] shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 hover:text-feel-primary-600 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-gray-600">Retour à l'accueil</span>
            </Link>
            
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

      {/* Contenu principal - Full Screen Layout */}
      <main className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-[2fr_1fr] min-h-[600px]">
              {/* Colonne gauche - Sélection profil (70%) */}
              <div className="p-8 lg:p-12 overflow-y-auto">
                <div className="mb-8 text-center">
                  <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-4">
                    Connexion Feel
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Accédez à votre espace professionnel
                  </p>
                </div>

                {/* Sélection du profil */}
                <div className="mb-8">
                  <ProfileSelector
                    onSelect={handleProfessionSelect}
                    selectedProfession={selectedProfession}
                  />
                </div>

                {/* Connexion OAuth */}
                {selectedProfession && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">
                        Connectez-vous avec votre compte
                      </h3>
                    </div>

                    <div className="space-y-4 max-w-md mx-auto">
                      <FeelButton
                        variant="secondary"
                        size="lg"
                        className="w-full min-h-[48px]"
                        onClick={handleGoogleSignIn}
                        loading={isLoading}
                        icon={Mail}
                      >
                        Continuer avec Google
                      </FeelButton>

                      <FeelButton
                        variant="secondary"
                        size="lg"
                        className="w-full min-h-[48px]"
                        onClick={handleAppleSignIn}
                        loading={isLoading}
                        icon={Mail}
                      >
                        Continuer avec Apple
                      </FeelButton>
                    </div>

                    {error && (
                      <div className="bg-feel-danger-50 border border-feel-danger-200 rounded-lg p-4 max-w-md mx-auto">
                        <p className="text-feel-danger-700 text-sm text-center">{error}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Colonne droite - Informations sécurité (30%) */}
              <div className="bg-gradient-to-br from-green-50 via-blue-50 to-green-100 p-8 lg:p-12 border-l-2 border-green-200">
                <div className="h-full flex flex-col justify-center">
                  <div className="text-center mb-12">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Lock className="h-10 w-10 text-green-600" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-green-800 mb-4">
                      Sécurité Feel
                    </h2>
                    <p className="text-green-700 text-lg font-medium">
                      Votre sécurité est notre priorité
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-green-800 mb-2 text-base">
                          Vérification professionnelle
                        </h3>
                        <p className="text-sm text-green-700 leading-relaxed">
                          Validation de votre identité professionnelle selon votre profil
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-800 mb-2 text-base">
                          Accès sécurisé
                        </h3>
                        <p className="text-sm text-blue-700 leading-relaxed">
                          Connexion OAuth sécurisée avec Google ou Apple
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-green-800 mb-2 text-base">
                          Dashboard personnalisé
                        </h3>
                        <p className="text-sm text-green-700 leading-relaxed">
                          Interface adaptée à votre profil professionnel
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-6 border-t border-green-200">
                    <p className="text-xs text-green-600 text-center leading-relaxed">
                      En vous connectant, vous acceptez nos{' '}
                      <Link href="/terms" className="text-green-700 hover:text-green-800 hover:underline font-medium">
                        conditions d'utilisation
                      </Link>{' '}
                      et notre{' '}
                      <Link href="/privacy" className="text-green-700 hover:text-green-800 hover:underline font-medium">
                        politique de confidentialité
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lien vers l'inscription */}
          <div className="text-center mt-8">
            <p className="text-gray-600 text-lg">
              Pas encore de compte ?{' '}
              <Link href="/auth/signup" className="text-green-600 hover:text-green-700 hover:underline font-medium">
                Créer un compte
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 