"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, Lock, Mail, Eye, EyeOff, AlertCircle } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { FEEL_CONFIG, ERROR_MESSAGES, LABELS } from "@/lib/constants";

interface UserProfile {
  email: string;
  password: string;
  type: 'dentist' | 'assistant' | 'director';
  name: string;
  role: string;
  description: string;
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const demoAccounts: UserProfile[] = [
    {
      email: FEEL_CONFIG.DEMO_ACCOUNTS.DENTIST.email,
      password: FEEL_CONFIG.DEMO_ACCOUNTS.DENTIST.password,
      type: "dentist",
      name: FEEL_CONFIG.DEMO_ACCOUNTS.DENTIST.name,
      role: FEEL_CONFIG.DEMO_ACCOUNTS.DENTIST.role,
      description: "Cabinet Centre Dentaire République, Paris 11e"
    },
    {
      email: FEEL_CONFIG.DEMO_ACCOUNTS.ASSISTANT.email,
      password: FEEL_CONFIG.DEMO_ACCOUNTS.ASSISTANT.password,
      type: "assistant",
      name: FEEL_CONFIG.DEMO_ACCOUNTS.ASSISTANT.name,
      role: FEEL_CONFIG.DEMO_ACCOUNTS.ASSISTANT.role,
      description: "5 ans d'expérience, spécialisée chirurgie et implantologie"
    },
    {
      email: FEEL_CONFIG.DEMO_ACCOUNTS.DIRECTOR.email,
      password: FEEL_CONFIG.DEMO_ACCOUNTS.DIRECTOR.password,
      type: "director",
      name: FEEL_CONFIG.DEMO_ACCOUNTS.DIRECTOR.name,
      role: FEEL_CONFIG.DEMO_ACCOUNTS.DIRECTOR.role,
      description: "Groupe de 5 sites en Île-de-France, 30 professionnels"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simuler un délai d'authentification
    await new Promise(resolve => setTimeout(resolve, 800));

    const user = demoAccounts.find(account => 
      account.email === email && account.password === password
    );

    if (user) {
      // Redirection vers le cockpit approprié
      switch (user.type) {
        case 'dentist':
          router.push('/dashboard/chirurgien');
          break;
        case 'assistant':
          router.push('/dashboard/assistante');
          break;
        case 'director':
          router.push('/dashboard/directeur');
          break;
      }
    } else {
      setError(ERROR_MESSAGES.INVALID_CREDENTIALS);
    }

    setIsLoading(false);
  };

  const handleDemoAccount = (demoAccount: UserProfile) => {
    setEmail(demoAccount.email);
    setPassword(demoAccount.password);
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header avec Logo Feel */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <Logo size="xl" />
          </div>
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Connexion Professionnelle
          </h1>
          <p className="text-gray-600">
            Accédez à votre cockpit Feel personnalisé
          </p>
        </div>

        {/* Formulaire de connexion */}
        <div className="bg-white rounded-xl p-6 shadow-lg border">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {LABELS.AUTH.EMAIL}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="votre.email@cabinet.fr"
                  required
                />
              </div>
            </div>

            {/* Mot de passe */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                {LABELS.AUTH.PASSWORD}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Message d'erreur */}
            {error && (
              <div className="flex items-center p-3 bg-red-50 border border-red-200 rounded-lg">
                <AlertCircle className="h-4 w-4 text-red-500 mr-2" />
                <span className="text-sm text-red-700">{error}</span>
              </div>
            )}

            {/* Bouton de connexion */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Connexion en cours...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <User className="h-4 w-4 mr-2" />
                  {LABELS.AUTH.LOGIN}
                </div>
              )}
            </button>
          </form>
        </div>

        {/* Comptes de démonstration */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            🎯 Comptes de Démonstration
          </h3>
          <div className="space-y-3">
            {demoAccounts.map((account, index) => (
              <button
                key={index}
                onClick={() => handleDemoAccount(account)}
                className="w-full p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 text-left"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">{account.name}</div>
                    <div className="text-sm text-gray-600">{account.role}</div>
                    <div className="text-xs text-gray-500">{account.description}</div>
                  </div>
                  <div className="text-xs text-blue-600 font-mono">
                    {account.email}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Informations de démonstration */}
        <div className="mt-8 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-blue-800 mb-2">
              💡 Comment tester les cockpits
            </h3>
            <p className="text-blue-700 text-xs leading-relaxed">
              Cliquez sur un compte de démonstration pour remplir automatiquement le formulaire, 
              puis cliquez sur "Se connecter" pour accéder au cockpit correspondant.
            </p>
          </div>
        </div>

        {/* Lien vers l'inscription */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            Nouveau sur Feel ?{" "}
            <Link href="/auth/signup" className="text-blue-600 hover:text-blue-700 hover:underline font-medium">
              Créer un compte
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
