'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { FeelButton } from '@/components/Button';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      // TODO: Implémenter la connexion
      console.log('Sign In:', { email, password });
    } catch (err) {
      setError('Erreur lors de la connexion');
    } finally {
      setIsLoading(false);
    }
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

      {/* Contenu principal */}
      <main className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Titre */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-2">
                Connexion Feel
              </h1>
              <p className="text-gray-600">
                Accédez à votre espace professionnel
              </p>
            </div>

            {/* Formulaire de connexion */}
            <form onSubmit={handleSignIn} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Adresse email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Mot de passe
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Se souvenir de moi
                  </label>
                </div>
                <Link href="/auth/forgot-password" className="text-sm text-green-600 hover:text-green-700 hover:underline">
                  Mot de passe oublié ?
                </Link>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}

              <FeelButton
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                loading={isLoading}
              >
                Se connecter
              </FeelButton>
            </form>

            {/* Séparateur */}
            <div className="my-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">ou</span>
                </div>
              </div>
            </div>

            {/* Boutons OAuth */}
            <div className="space-y-4">
              <FeelButton
                variant="secondary"
                size="lg"
                className="w-full"
                onClick={handleGoogleSignIn}
                loading={isLoading}
                icon={Mail}
              >
                Continuer avec Google
              </FeelButton>

              <FeelButton
                variant="secondary"
                size="lg"
                className="w-full"
                onClick={handleAppleSignIn}
                loading={isLoading}
                icon={Mail}
              >
                Continuer avec Apple
              </FeelButton>
            </div>

            {/* Lien vers l'inscription */}
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Pas encore de compte ?{' '}
                <Link href="/auth/signup" className="text-green-600 hover:text-green-700 hover:underline font-medium">
                  S'inscrire
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 