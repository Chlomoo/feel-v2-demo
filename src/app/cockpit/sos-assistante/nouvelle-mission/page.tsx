'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  ArrowLeft, Plus, MapPin, Calendar, Clock, Users, 
  AlertTriangle, CheckCircle, Star, Heart, X
} from 'lucide-react';
import Link from 'next/link';

export default function NouvelleMission() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    urgency: 'high',
    date: '',
    startTime: '',
    endTime: '',
    duration: 8,
    hourlyRate: 45,
    skills: [] as string[],
    location: {
      address: '15 rue République, 75011 Paris',
      radius: 25
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const availableSkills = [
    'Implantologie', 'Chirurgie Orale', 'Parodontologie', 'Endodontie',
    'Prothèse', 'Orthodontie', 'Pédodontie', 'Radiologie', 'Anesthésie',
    'Urgences', 'Stérilisation', 'Gestion des stocks'
  ];

  const urgencyOptions = [
    { value: 'critical', label: 'Critique', description: 'Même jour', color: 'text-red-600' },
    { value: 'high', label: 'Haute', description: 'Moins de 24h', color: 'text-orange-600' },
    { value: 'normal', label: 'Normale', description: 'Moins de 48h', color: 'text-green-600' }
  ];

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation de l'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Redirection vers le dashboard
    window.location.href = '/cockpit/sos-assistante';
  };

  const getUrgencyIcon = (urgency: string) => {
    switch (urgency) {
      case 'critical': return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'high': return <AlertTriangle className="h-5 w-5 text-orange-500" />;
      case 'normal': return <CheckCircle className="h-5 w-5 text-green-500" />;
      default: return <AlertTriangle className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <Link href="/cockpit/sos-assistante">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Retour
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Nouvelle Mission SOS</h1>
                <p className="text-sm text-gray-500">Publiez une mission urgente et trouvez l'assistante parfaite</p>
              </div>
            </div>
            <Badge variant="destructive" className="flex items-center space-x-1">
              <Heart className="h-3 w-3" />
              <span>Priorité Haute</span>
            </Badge>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Informations de base */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Plus className="h-5 w-5 text-red-500" />
                <span>Informations de la Mission</span>
              </CardTitle>
              <CardDescription>
                Renseignez les détails de votre mission urgente
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="title">Titre de la mission *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Ex: Remplacement urgent assistante"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="urgency">Niveau d'urgence *</Label>
                  <select
                    id="urgency"
                    value={formData.urgency}
                    onChange={(e) => setFormData(prev => ({ ...prev, urgency: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  >
                    {urgencyOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label} - {option.description}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="description">Description détaillée *</Label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Décrivez les tâches spécifiques, les compétences requises, les particularités du poste..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 h-24"
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Planning et durée */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-blue-500" />
                <span>Planning et Durée</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="date">Date de la mission *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="startTime">Heure de début *</Label>
                  <Input
                    id="startTime"
                    type="time"
                    value={formData.startTime}
                    onChange={(e) => setFormData(prev => ({ ...prev, startTime: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="endTime">Heure de fin *</Label>
                  <Input
                    id="endTime"
                    type="time"
                    value={formData.endTime}
                    onChange={(e) => setFormData(prev => ({ ...prev, endTime: e.target.value }))}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="duration">Durée (heures)</Label>
                  <select
                    id="duration"
                    value={formData.duration}
                    onChange={(e) => setFormData(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value={2}>2 heures</option>
                    <option value={4}>4 heures</option>
                    <option value={8}>8 heures (journée complète)</option>
                    <option value={12}>12 heures</option>
                    <option value={24}>24 heures</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="hourlyRate">Taux horaire (€) *</Label>
                  <Input
                    id="hourlyRate"
                    type="number"
                    value={formData.hourlyRate}
                    onChange={(e) => setFormData(prev => ({ ...prev, hourlyRate: parseInt(e.target.value) }))}
                    min="20"
                    max="100"
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Compétences requises */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-green-500" />
                <span>Compétences Requises</span>
              </CardTitle>
              <CardDescription>
                Sélectionnez les compétences nécessaires pour cette mission
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {availableSkills.map(skill => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => handleSkillToggle(skill)}
                    className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                      formData.skills.includes(skill)
                        ? 'bg-red-100 border-red-300 text-red-800'
                        : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
              {formData.skills.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-2">Compétences sélectionnées :</p>
                  <div className="flex flex-wrap gap-2">
                    {formData.skills.map(skill => (
                      <Badge key={skill} variant="secondary" className="flex items-center space-x-1">
                        <span>{skill}</span>
                        <button
                          type="button"
                          onClick={() => handleSkillToggle(skill)}
                          className="ml-1 hover:text-red-600"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Localisation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-purple-500" />
                <span>Localisation</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="address">Adresse du cabinet *</Label>
                <Input
                  id="address"
                  value={formData.location.address}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    location: { ...prev.location, address: e.target.value }
                  }))}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="radius">Rayon de recherche (km)</Label>
                <select
                  id="radius"
                  value={formData.location.radius}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    location: { ...prev.location, radius: parseInt(e.target.value) }
                  }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value={10}>10 km</option>
                  <option value={25}>25 km</option>
                  <option value={50}>50 km</option>
                  <option value={70}>70 km</option>
                </select>
              </div>

              <Button
                type="button"
                variant="outline"
                onClick={() => setShowMap(!showMap)}
                className="w-full"
              >
                <MapPin className="h-4 w-4 mr-2" />
                {showMap ? 'Masquer la carte' : 'Afficher sur la carte'}
              </Button>

              {showMap && (
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Carte interactive (intégration Mapbox à venir)</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Résumé et publication */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Résumé de la Mission</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Informations générales</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p><strong>Titre :</strong> {formData.title || 'Non renseigné'}</p>
                      <p><strong>Urgence :</strong> {urgencyOptions.find(o => o.value === formData.urgency)?.label}</p>
                      <p><strong>Date :</strong> {formData.date || 'Non renseignée'}</p>
                      <p><strong>Durée :</strong> {formData.duration} heures</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Détails techniques</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p><strong>Taux horaire :</strong> {formData.hourlyRate}€/h</p>
                      <p><strong>Localisation :</strong> {formData.location.address}</p>
                      <p><strong>Rayon :</strong> {formData.location.radius} km</p>
                      <p><strong>Compétences :</strong> {formData.skills.length} sélectionnées</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                <Link href="/cockpit/sos-assistante">
                  <Button variant="outline">
                    Annuler
                  </Button>
                </Link>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="h-4 w-4 mr-2 animate-spin" />
                      Publication en cours...
                    </>
                  ) : (
                    <>
                      <Heart className="h-4 w-4 mr-2" />
                      Publier la mission
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
}
