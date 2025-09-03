'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Mail, Lock, Eye, EyeOff, User, Users, Shield } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Comptes de démonstration Feel
const demoAccounts = {
  'martin.dubois@feel-demo.fr': { 
    password: 'demo2025', 
    profile: 'dentist',
    redirect: '/cockpit/dentist',
    data: {
      name: 'Dr. Martin Dubois',
      cabinet: 'Centre Dentaire République',
      location: 'Paris 11e',
      specialties: ['Implantologie', 'Chirurgie orale'],
      rpps: '10003123456',
      adeli: '750012345'
    }
  },
  'marie.lefebvre@feel-demo.fr': { 
    password: 'demo2025', 
    profile: 'assistant',
    redirect: '/cockpit/assistant',
    data: {
      name: 'Marie Lefebvre',
      experience: '5 ans',
      specialties: ['Chirurgie', 'Implantologie'],
      rating: 4.8,
      location: 'Paris 10e'
    }
  },
  'sophie.chen@feel-demo.fr': { 
    password: 'demo2025', 
    profile: 'director',
    redirect: '/cockpit/director',
    data: {
      name: 'Sophie Chen',
      group: 'Groupe Dental Excellence',
      sites: ['Paris Centre', 'Boulogne', 'Vincennes', 'Créteil', 'Neuilly'],
      practitioners: 12,
      assistants: 18
    }
  }
};

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      // Vérification des comptes de démonstration
      if (demoAccounts[email as keyof typeof demoAccounts]) {
        const account = demoAccounts[email as keyof typeof demoAccounts];
        if (account.password === password) {
          // Redirection vers le cockpit approprié
          window.location.href = account.redirect;
          return;
        }
      }
      
      // Comportement normal pour les vrais comptes utilisateurs
      console.log('Sign In:', { email, password });
      setError('Identifiants incorrects ou compte non reconnu');
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

  const handleDemoAccount = (email: string) => {
    setEmail(email);
    setPassword('demo2025');
    setSelectedDemo(email);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col">
      {/* Header */}
      <header className="bg-[#F5F1E8] shadow-sm border-b border-gray-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 hover:text-green-600 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-gray-600">Retour à l&apos;accueil</span>
            </Link>
          </div>
        </div>
        
        {/* Logo Feel en haut à droite */}
        <div className="absolute top-4 right-4">
          <Image
            src="/logos/Logo FEEL .png"
            alt="Feel Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
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

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                {isLoading ? 'Connexion...' : 'Se connecter'}
              </button>
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
              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={isLoading}
                className="w-full border border-gray-300 bg-white text-gray-900 py-3 px-4 rounded-lg font-medium transition-colors hover:bg-gray-50 hover:border-gray-400 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 flex items-center justify-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>{isLoading ? 'Connexion...' : 'Continuer avec Google'}</span>
              </button>

              <button
                type="button"
                onClick={handleAppleSignIn}
                disabled={isLoading}
                className="w-full border border-gray-300 bg-white text-gray-900 py-3 px-4 rounded-lg font-medium transition-colors hover:bg-gray-50 hover:border-gray-400 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 flex items-center justify-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>{isLoading ? 'Connexion...' : 'Continuer avec Apple'}</span>
              </button>
            </div>

            {/* Comptes de démonstration */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                🎯 Comptes de Démonstration Feel
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => handleDemoAccount('martin.dubois@feel-demo.fr')}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                    selectedDemo === 'martin.dubois@feel-demo.fr'
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 bg-white hover:border-green-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">Dr. Martin Dubois</div>
                      <div className="text-sm text-gray-600">Chirurgien-Dentiste</div>
                      <div className="text-xs text-gray-500">Centre République, Paris 11e</div>
                    </div>
                    <div className="text-xs text-green-600 font-mono">
                      martin.dubois@feel-demo.fr
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleDemoAccount('marie.lefebvre@feel-demo.fr')}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                    selectedDemo === 'marie.lefebvre@feel-demo.fr'
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 bg-white hover:border-purple-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">Marie Lefebvre</div>
                      <div className="text-sm text-gray-600">Assistante Dentaire</div>
                      <div className="text-xs text-gray-500">5 ans expérience, Paris 10e</div>
                    </div>
                    <div className="text-xs text-purple-600 font-mono">
                      marie.lefebvre@feel-demo.fr
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleDemoAccount('sophie.chen@feel-demo.fr')}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                    selectedDemo === 'sophie.chen@feel-demo.fr'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">Sophie Chen</div>
                      <div className="text-sm text-gray-600">Directrice de Structure</div>
                      <div className="text-xs text-gray-500">5 sites, 30 professionnels</div>
                    </div>
                    <div className="text-xs text-blue-600 font-mono">
                      sophie.chen@feel-demo.fr
                    </div>
                  </div>
                </button>
              </div>

              <div className="mt-4 text-center">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-blue-700 text-xs">
                    💡 <strong>Comment tester :</strong> Cliquez sur un compte de démonstration pour remplir automatiquement le formulaire, puis cliquez sur "Se connecter"
                  </p>
                </div>
              </div>
            </div>

            {/* Lien vers l'inscription */}
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Pas encore de compte ?{' '}
                <Link href="/auth/signup" className="text-green-600 hover:text-green-700 hover:underline font-medium">
                  S&apos;inscrire
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 