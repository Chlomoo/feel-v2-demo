'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  Users, 
  Calculator, 
  Package, 
  FileText, 
  User, 
  Newspaper,
  Star,
  Clock,
  Zap,
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { FEEL_CONFIG } from '@/lib/constants';

export default function HomePage() {
  const [activePersona, setActivePersona] = useState('praticien');

  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Header - Single Line */}
      <div className="bg-[#F5F1E8] py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex-1 flex justify-center items-center">
            <div className="flex items-center space-x-3">
              <Image
                src="/logos/Logo FEEL .png"
                alt="Feel Logo"
                width={240}
                height={80}
                className="h-20 w-auto"
              />
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                Nouveau
              </Badge>
            </div>
          </div>
          <div className="flex space-x-4">
            <Link href="/auth/signin">
              <Button variant="outline" size="sm">
                Se connecter
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button variant="outline" size="sm">
                S&apos;inscrire
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Section 1: Hero Premium */}
      <section className="relative overflow-hidden bg-[#F5F1E8]">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Contenu principal (60%) */}
            <div className="lg:col-span-3 space-y-8">
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/logos/Logo Smile By Feel .png"
                  alt="Smile by Feel Logo"
                  width={240}
                  height={72}
                  className="h-16 w-auto"
                />
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Le copilote digital des{' '}
                <span className="text-green-600">professionnels dentaires</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                <strong>UNE</strong> seule plateforme pour toute l&apos;équipe, <strong>ZÉRO</strong> perte de temps
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link href="/auth/signup">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                    Essai gratuit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                  Voir la démo
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 pt-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-600">Sans engagement</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-gray-600">RGPD conforme</span>
                </div>
              </div>
            </div>
            
            {/* Image/Vidéo (40%) */}
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 shadow-2xl">
                  <div className="aspect-video bg-white rounded-xl shadow-lg flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <Heart className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">Plateforme Feel</h3>
                      <p className="text-gray-600">Expérience digitale de gestion Simplifiée</p>
                      
                      {/* Bouton "En savoir plus" */}
                      <button 
                        onClick={() => {
                          const element = document.getElementById('profils');
                          if (element) {
                            const offset = 80; // Espace pour header fixe
                            const elementPosition = element.offsetTop - offset;
                            
                            window.scrollTo({
                              top: elementPosition,
                              behavior: 'smooth'
                            });
                          }
                        }}
                        className="mt-4 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:transform hover:-translate-y-0.5 hover:shadow-md"
                      >
                        En savoir plus
                        <svg className="w-4 h-4 ml-2 inline" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Multi-Persona Targeting */}
      <section id="profils" className="py-20 bg-[#F5F1E8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              L&apos;outil sur-mesure pour chaque profil professionnel
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment Feel s&apos;adapte aux besoins spécifiques de votre équipe
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {FEEL_CONFIG.PERSONAS.map((persona) => (
              <Card 
                key={persona.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
                  persona.id === 'praticien' 
                    ? 'border-green-400 bg-green-50 hover:bg-green-100' 
                    : persona.id === 'directeur'
                    ? 'border-blue-400 bg-blue-50 hover:bg-blue-100'
                    : 'border-purple-400 bg-purple-50 hover:bg-purple-100'
                } ${
                  activePersona === persona.id 
                    ? 'ring-2 ring-green-500 shadow-lg' 
                    : 'hover:shadow-lg'
                }`}
                onClick={() => setActivePersona(persona.id)}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    persona.id === 'praticien' 
                      ? 'bg-green-100' 
                      : persona.id === 'directeur'
                      ? 'bg-blue-100'
                      : 'bg-purple-100'
                  }`}>
                    {persona.id === 'praticien' && <User className="h-8 w-8 text-green-500" />}
                    {persona.id === 'assistante' && <Users className="h-8 w-8 text-purple-500" />}
                    {persona.id === 'directeur' && <Shield className="h-8 w-8 text-blue-500" />}
                  </div>
                  <CardTitle className="text-xl">{persona.titre}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {persona.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {persona.id === 'praticien' && (
                      <>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Profil praticien et Contrats numériques</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Smart Comptabilité</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Gestion de Stock digital</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">SOS Assistante</span>
                        </li>
                      </>
                    )}
                    {persona.id === 'assistante' && (
                      <>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Espace perso et Contrats digitalisés</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">SOS Assistante (Intérim digital)</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Gestion de Stock digital</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">News dentaires</span>
                        </li>
                      </>
                    )}
                    {persona.id === 'directeur' && (
                      <>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Cockpit de supervision globale</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">RH et contrats digitalisés</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Smart Comptabilité (multi-structure)</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Gestion de stock centralisée</span>
                        </li>
                      </>
                    )}
                  </ul>
                  <div className="mt-6">
                    {persona.id === 'praticien' ? (
                      <Link href="/chirurgien-dentiste">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full"
                        >
                          En savoir plus
                        </Button>
                      </Link>
                    ) : persona.id === 'assistante' ? (
                      <Link href="/assistante-dentaire">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full"
                        >
                          En savoir plus
                        </Button>
                      </Link>
                    ) : persona.id === 'directeur' ? (
                      <Link href="/structure-dentaire">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full"
                        >
                          En savoir plus
                        </Button>
                      </Link>
                    ) : (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={() => {
                          const element = document.querySelector('.feel-pitch-container') as HTMLElement;
                          if (element) {
                            const offset = 80; // Espace pour header fixe
                            const elementPosition = element.offsetTop - offset;
                            
                            window.scrollTo({
                              top: elementPosition,
                              behavior: 'smooth'
                            });
                          }
                        }}
                      >
                        En savoir plus
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>





      {/* Section 3: Value Proposition - Before/After */}
      <section className="py-20 bg-[#F5F1E8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Avant vs Après Feel
            </h2>
            <p className="text-xl text-gray-600">
              Transformez votre gestion quotidienne
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Avant */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-800 flex items-center">
                  <Clock className="h-6 w-6 mr-2" />
                  Avant Feel
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                                     <div className="flex items-center space-x-3">
                     <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                     <span className="text-gray-700">Outils multiples, gestion complexe</span>
                   </div>
                   <div className="flex items-center space-x-3">
                     <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                     <span className="text-gray-700">RH et contrats lents</span>
                   </div>
                   <div className="flex items-center space-x-3">
                     <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                     <span className="text-gray-700">Pilotage sans données en temps réel</span>
                   </div>
                   <div className="flex items-center space-x-3">
                     <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                     <span className="text-gray-700">Communication fragmentée</span>
                   </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Après */}
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center">
                  <Zap className="h-6 w-6 mr-2" />
                  Avec Feel
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                                     <div className="flex items-center space-x-3">
                     <CheckCircle className="h-5 w-5 text-green-600" />
                     <span className="text-gray-700">Plateforme unique, tout centralisé</span>
                   </div>
                   <div className="flex items-center space-x-3">
                     <CheckCircle className="h-5 w-5 text-green-600" />
                     <span className="text-gray-700">Processus rapides et automatisés</span>
                   </div>
                   <div className="flex items-center space-x-3">
                     <CheckCircle className="h-5 w-5 text-green-600" />
                     <span className="text-gray-700">Données claires, décisions rapides</span>
                   </div>
                   <div className="flex items-center space-x-3">
                     <CheckCircle className="h-5 w-5 text-green-600" />
                     <span className="text-gray-700">Équipe synchronisée, info partagée</span>
                   </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: Modules & Features */}
      <section className="py-20 bg-[#F5F1E8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tous vos outils indispensables centralisés
            </h2>
            <p className="text-xl text-gray-600">
              Une suite complète pour gérer votre activité
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEEL_CONFIG.MODULES.map((module) => (
              <Card key={module.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    {module.icon === 'Users' && <Users className="h-6 w-6 text-green-600" />}
                    {module.icon === 'Calculator' && <Calculator className="h-6 w-6 text-green-600" />}
                    {module.icon === 'Package' && <Package className="h-6 w-6 text-green-600" />}
                    {module.icon === 'FileText' && <FileText className="h-6 w-6 text-green-600" />}
                    {module.icon === 'User' && <User className="h-6 w-6 text-green-600" />}
                    {module.icon === 'Newspaper' && <Newspaper className="h-6 w-6 text-green-600" />}
                  </div>
                  <CardTitle className="text-lg font-bold text-[#7FB069]">{module.nom}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">
                    {module.id === 'sos-assistante' && "La révolution de l'intérim dentaire"}
                    {module.id === 'comptabilite' && "L'automatisation comptable spécialisée dentaire"}
                    {module.id === 'stock' && "L'intelligence artificielle au service des achats"}
                    {module.id === 'contrats' && "La dématérialisation juridique 100% conforme"}
                    {module.id === 'profil' && "Le hub central digital du cabinet"}
                    {module.id === 'actualites' && "Échanger avec la communauté Feel et formez-vous selon vos besoins"}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Security & Compliance */}
      <section className="py-20 bg-[#F5F1E8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Sécurité et conformité
            </h2>
            <p className="text-xl text-gray-600">
              Vos données sont protégées selon les plus hauts standards
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>RGPD Conforme</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Respect total du règlement européen sur la protection des données
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle>Support 24/7</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Équipe dédiée disponible en permanence
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA Final */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Prêt à transformer votre pratique ?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Osez l&apos;innovation : essayez Feel en exclusivité
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
              Essai gratuit 14 jours
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-green-700 bg-white bg-opacity-10">
                Contacter l&apos;équipe
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-green-100">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Sans engagement</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Configuration gratuite</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5" />
              <span>Support inclus</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Footer Professional */}
      <footer className="bg-[#F5F1E8] text-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo et description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/logos/Logo Smile By Feel .png"
                  alt="Smile by Feel Logo"
                  width={200}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-700 mb-6 max-w-md">
                Le copilote digital des professionnels dentaires. Une solution complète pour optimiser votre pratique.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
            
            {/* Produit */}
            <div>
              <h3 className="font-semibold mb-4">Produit</h3>
              <ul className="space-y-2 text-gray-700">
                <li><Link href="#" className="hover:text-gray-900 transition-colors">Fonctionnalités</Link></li>
                <li><Link href="#" className="hover:text-gray-900 transition-colors">Tarifs</Link></li>
                <li><Link href="#" className="hover:text-gray-900 transition-colors">Intégrations</Link></li>
                <li><Link href="#" className="hover:text-gray-900 transition-colors">API</Link></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>01 23 45 67 89</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>contact@feel.fr</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Paris, France</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2024 Feel. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Conditions d&apos;utilisation
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
