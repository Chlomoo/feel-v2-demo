"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, Lock, Shield, Building2, Stethoscope, UserCheck } from "lucide-react";
import Link from "next/link";

interface Profile {
  id: string;
  name: string;
  role: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  notifications: number;
}

export default function LoginPage() {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const router = useRouter();

  const profiles: Profile[] = [
    {
      id: "chirurgien",
      name: "Dr. Martin Dubois",
      role: "Chirurgien-Dentiste",
      description: "Cabinet Centre Dentaire République, Paris 11e",
      icon: <Stethoscope className="h-8 w-8" />,
      color: "from-blue-500 to-blue-600",
      notifications: 19
    },
    {
      id: "assistante",
      name: "Marie Lefebvre",
      role: "Assistante Dentaire",
      description: "5 ans d'expérience, spécialisée chirurgie et implantologie",
      icon: <UserCheck className="h-8 w-8" />,
      color: "from-green-500 to-green-600",
      notifications: 6
    },
    {
      id: "directeur",
      name: "Sophie Chen",
      role: "Directrice de Structure",
      description: "Groupe de 5 sites en Île-de-France, 30 professionnels",
      icon: <Building2 className="h-8 w-8" />,
      color: "from-purple-500 to-purple-600",
      notifications: 17
    }
  ];

  const handleProfileSelect = (profileId: string) => {
    setSelectedProfile(profileId);
  };

  const handleLogin = () => {
    if (selectedProfile) {
      router.push(`/dashboard/${selectedProfile}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mr-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Feel
            </h1>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Connexion Professionnelle
          </h2>
          <p className="text-gray-600">
            Sélectionnez votre profil pour accéder à votre cockpit personnalisé
          </p>
        </div>

        {/* Profils de démonstration */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              onClick={() => handleProfileSelect(profile.id)}
              className={`relative cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                selectedProfile === profile.id
                  ? "ring-4 ring-blue-300 shadow-2xl"
                  : "hover:shadow-xl"
              }`}
            >
              <div className={`bg-gradient-to-br ${profile.color} p-6 rounded-2xl text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    {profile.icon}
                  </div>
                  {profile.notifications > 0 && (
                    <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {profile.notifications > 99 ? "99+" : profile.notifications}
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{profile.name}</h3>
                <p className="text-sm opacity-90 mb-1">{profile.role}</p>
                <p className="text-xs opacity-75">{profile.description}</p>
                
                {selectedProfile === profile.id && (
                  <div className="mt-4 flex items-center text-sm">
                    <User className="h-4 w-4 mr-2" />
                    Profil sélectionné
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bouton de connexion */}
        <div className="text-center">
          <button
            onClick={handleLogin}
            disabled={!selectedProfile}
            className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
              selectedProfile
                ? "bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {selectedProfile ? (
              <div className="flex items-center justify-center">
                <Lock className="h-5 w-5 mr-2" />
                Accéder au Cockpit
              </div>
            ) : (
              "Sélectionnez un profil"
            )}
          </button>
        </div>

        {/* Informations de démonstration */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">
              🎯 Démonstration Feel
            </h3>
            <p className="text-blue-700 text-sm leading-relaxed">
              Cette interface vous permet de tester les 3 cockpits professionnels Feel. 
              Chaque profil accède à un dashboard adapté à ses besoins avec des données 
              de démonstration réalistes. Sélectionnez un profil pour commencer.
            </p>
          </div>
        </div>

        {/* Lien vers l'inscription */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
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
