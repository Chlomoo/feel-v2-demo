'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Phone, Mail, MapPin, Calendar, Clock, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    cabinet: '',
    specialite: '',
    message: '',
    rendezVous: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData);
    alert('Merci pour votre message ! Nous vous recontacterons dans les plus brefs délais.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/chirurgien-dentiste" className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Retour à la page dentiste</span>
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
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Contactez Feel
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Prêt à transformer votre pratique ? Notre équipe d&apos;experts dentaires est là pour vous accompagner.
          </p>
        </div>
      </section>

      {/* Section Contact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Parlons de Votre Cabinet
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Téléphone</h3>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                    <p className="text-sm text-gray-500">Lun-Ven 9h-18h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">contact@feel.com</p>
                    <p className="text-sm text-gray-500">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Adresse</h3>
                    <p className="text-gray-600">123 Avenue des Dentistes<br />75001 Paris, France</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-green-50 rounded-xl">
                <h3 className="text-lg font-semibold text-green-800 mb-4">Pourquoi nous contacter ?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-green-700">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    Démonstration personnalisée de Feel
                  </li>
                  <li className="flex items-center text-green-700">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    Accompagnement sur mesure pour votre cabinet
                  </li>
                  <li className="flex items-center text-green-700">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    Questions techniques et support
                  </li>
                  <li className="flex items-center text-green-700">
                    <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                    Tarification et offres spéciales
                  </li>
                </ul>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Prenez Rendez-vous
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      required
                      value={formData.prenom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      required
                      value={formData.nom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cabinet" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom du Cabinet
                    </label>
                    <input
                      type="text"
                      id="cabinet"
                      name="cabinet"
                      value={formData.cabinet}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Cabinet du Dr. Martin"
                    />
                  </div>
                  <div>
                    <label htmlFor="specialite" className="block text-sm font-medium text-gray-700 mb-2">
                      Spécialité
                    </label>
                    <select
                      id="specialite"
                      name="specialite"
                      value={formData.specialite}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Sélectionnez une spécialité</option>
                      <option value="generaliste">Chirurgien-dentiste généraliste</option>
                      <option value="implantologie">Implantologie</option>
                      <option value="orthodontie">Orthodontie</option>
                      <option value="chirurgie">Chirurgie orale</option>
                      <option value="pedodontie">Pédodontie</option>
                      <option value="parodontologie">Parodontologie</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="Décrivez vos besoins, questions ou demandes..."
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rendezVous"
                    name="rendezVous"
                    checked={formData.rendezVous}
                    onChange={handleChange}
                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <label htmlFor="rendezVous" className="ml-2 text-sm text-gray-700">
                    Je souhaite un rendez-vous de démonstration
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Envoyer le Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Prêt à Commencer ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Rejoignez les centaines de chirurgiens-dentistes qui ont déjà transformé leur pratique avec Feel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/signup"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
            >
              🚀 Commencer Gratuitement
            </Link>
            <Link
              href="/chirurgien-dentiste"
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 hover:text-white transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
            >
              📖 En Savoir Plus
            </Link>
          </div>
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
              <Link href="/chirurgien-dentiste" className="block text-gray-400 hover:text-white mb-2">
                Chirurgien-Dentiste
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Feel. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 