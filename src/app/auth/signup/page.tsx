'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Lock, AlertTriangle, CheckCircle, Shield, User, Users } from 'lucide-react';
import { FeelButton } from '@/components/Button';
import { ProfileSelector } from '@/components/auth/ProfileSelector';
import { Profession } from '@/types/auth';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const router = useRouter();
  const [selectedProfession, setSelectedProfession] = useState<Profession | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleProfessionSelect = (profession: Profession) => {
    setSelectedProfession(profession);
    setError(null);
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // TODO: Implémenter l'authentification Google
      console.log('Google Sign In clicked');
    } catch (err) {
      setError('Erreur lors de la connexion avec Google');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAppleSignIn = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // TODO: Implémenter l'authentification Apple
      console.log('Apple Sign In clicked');
    } catch (err) {
      setError('Erreur lors de la connexion avec Apple');
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
            <Link href="/" className="flex items-center space-x-3 hover:text-green-600 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-gray-600">Retour à l'accueil</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Contenu principal - Full Screen Layout */}
      <main className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-[2fr_1fr] min-h-[600px]">
              {/* Colonne gauche - Sélection profil inscription (70%) */}
              <div className="p-8 lg:p-12 overflow-y-auto">
                <div className="mb-8 text-center">
                  <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-4">
                    Inscription Feel
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Créez votre espace professionnel Feel
                  </p>
                </div>

                {/* Sélecteur de profil */}
                <div className="mb-8">
                  <ProfileSelector
                    onSelect={handleProfessionSelect}
                    selectedProfession={selectedProfession}
                  />
                </div>

                {/* Section OAuth */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">
                        Créez votre compte avec
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <FeelButton
                        variant="secondary"
                        size="lg"
                        className="w-full min-h-[48px]"
                        onClick={handleGoogleSignIn}
                        loading={isLoading}
                        icon={Mail}
                      >
                        S'inscrire avec Google
                      </FeelButton>

                      <FeelButton
                        variant="secondary"
                        size="lg"
                        className="w-full min-h-[48px]"
                        onClick={handleAppleSignIn}
                        loading={isLoading}
                        icon={Mail}
                      >
                        S'inscrire avec Apple
                      </FeelButton>
                    </div>

                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-red-700 text-sm">{error}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Colonne droite - Sécurité Feel (30%) */}
              <div className="bg-gradient-to-br from-green-50 via-blue-50 to-green-100 p-8 lg:p-12 border-l-2 border-green-200">
                <div className="text-center">
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

                {/* Étapes de sécurité */}
                <div className="mt-12 space-y-8">
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
                        Chiffrement des données
                      </h3>
                      <p className="text-sm text-blue-700 leading-relaxed">
                        Protection de vos informations avec un chiffrement de niveau bancaire
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-800 mb-2 text-base">
                        Conformité HDS
                      </h3>
                      <p className="text-sm text-green-700 leading-relaxed">
                        Hébergement certifié pour les données de santé
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-12 pt-6 border-t border-green-200">
                  <p className="text-xs text-green-600 text-center leading-relaxed">
                    En vous inscrivant, vous acceptez nos{' '}
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
      </main>

      {/* Lien vers la connexion */}
      <div className="text-center mt-8">
        <p className="text-gray-600 text-lg">
          Déjà un compte ?{' '}
          <Link href="/auth/signin" className="text-green-600 hover:text-green-700 hover:underline font-medium">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
} 