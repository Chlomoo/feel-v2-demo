'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Star, MapPin, Clock, Users, MessageCircle, 
  CheckCircle, AlertTriangle, Eye, Phone, Mail
} from 'lucide-react';
import { DentalAssistant, SOSMission } from '@/lib/sos-assistante/types';

interface CandidateCardProps {
  candidate: DentalAssistant;
  mission: SOSMission;
  onContact?: (candidate: DentalAssistant) => void;
  onSelect?: (candidate: DentalAssistant) => void;
  onViewProfile?: (candidate: DentalAssistant) => void;
  matchingScore?: number;
  compact?: boolean;
}

export default function CandidateCard({ 
  candidate, 
  mission, 
  onContact, 
  onSelect, 
  onViewProfile,
  matchingScore,
  compact = false 
}: CandidateCardProps) {
  
  const getExperienceColor = (level: string) => {
    switch (level) {
      case 'expert': return 'bg-purple-100 text-purple-800';
      case 'senior': return 'bg-blue-100 text-blue-800';
      case 'intermediate': return 'bg-green-100 text-green-800';
      case 'junior': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getExperienceText = (level: string) => {
    switch (level) {
      case 'expert': return 'Expert';
      case 'senior': return 'Senior';
      case 'intermediate': return 'Intermédiaire';
      case 'junior': return 'Junior';
      default: return 'Inconnu';
    }
  };

  const getMatchingScoreColor = (score: number) => {
    if (score >= 0.8) return 'text-green-600';
    if (score >= 0.6) return 'text-yellow-600';
    if (score >= 0.4) return 'text-orange-600';
    return 'text-red-600';
  };

  const getMatchingScoreText = (score: number) => {
    if (score >= 0.8) return 'Excellente compatibilité';
    if (score >= 0.6) return 'Bonne compatibilité';
    if (score >= 0.4) return 'Compatibilité moyenne';
    return 'Compatibilité faible';
  };

  const formatDistance = (distance: number) => {
    if (distance < 1) return `${Math.round(distance * 1000)}m`;
    return `${distance.toFixed(1)}km`;
  };

  const formatLastActive = (lastActive: Date) => {
    const now = new Date();
    const diff = now.getTime() - lastActive.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `Il y a ${days} jour${days > 1 ? 's' : ''}`;
    if (hours > 0) return `Il y a ${hours}h`;
    if (minutes > 0) return `Il y a ${minutes}min`;
    return 'En ligne maintenant';
  };

  if (compact) {
    return (
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <img 
              src={candidate.photoUrl || '/logos/Logo Smile By Feel .png'} 
              alt={candidate.firstName}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="font-medium text-gray-900 truncate">
                  {candidate.firstName} {candidate.lastName}
                </h3>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">{candidate.rating}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>{formatDistance(2.3)}</span>
                <span>{candidate.experienceLevel}</span>
                <span>{candidate.hourlyRateMin}-{candidate.hourlyRateMax}€/h</span>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              {matchingScore && (
                <Badge className={`${getMatchingScoreColor(matchingScore)} bg-transparent`}>
                  {Math.round(matchingScore * 100)}%
                </Badge>
              )}
              <div className="flex space-x-2">
                {onContact && (
                  <Button size="sm" variant="outline">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                )}
                {onSelect && (
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    Sélectionner
                  </Button>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start space-x-4">
          <img 
            src={candidate.photoUrl || '/logos/Logo Smile By Feel .png'} 
            alt={candidate.firstName}
            className="h-16 w-16 rounded-full object-cover"
          />
          <div className="flex-1">
            <CardTitle className="flex items-center space-x-2 mb-1">
              <span>{candidate.firstName} {candidate.lastName}</span>
              {candidate.verified && (
                <CheckCircle className="h-5 w-5 text-green-500" />
              )}
            </CardTitle>
            <CardDescription className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="font-medium">{candidate.rating}</span>
                <span className="text-gray-500">({candidate.missionsCompleted} missions)</span>
              </div>
              <Badge className={getExperienceColor(candidate.experienceLevel)}>
                {getExperienceText(candidate.experienceLevel)}
              </Badge>
            </CardDescription>
          </div>
          <div className="text-right">
            {matchingScore && (
              <div className="mb-2">
                <div className={`text-2xl font-bold ${getMatchingScoreColor(matchingScore)}`}>
                  {Math.round(matchingScore * 100)}%
                </div>
                <div className="text-xs text-gray-500">
                  {getMatchingScoreText(matchingScore)}
                </div>
              </div>
            )}
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <div className={`h-2 w-2 rounded-full ${candidate.isOnline ? 'bg-green-500' : 'bg-gray-400'}`} />
              <span>{formatLastActive(candidate.lastActiveAt)}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {/* Informations principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>{candidate.location.address}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>{candidate.hourlyRateMin}-{candidate.hourlyRateMax}€/h</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Users className="h-4 w-4" />
                <span>{candidate.missionsCompleted} missions terminées</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-sm text-gray-600">
                <strong>Disponibilité :</strong> {candidate.isOnline ? 'En ligne' : 'Hors ligne'}
              </div>
              <div className="text-sm text-gray-600">
                <strong>Langues :</strong> {candidate.languages.join(', ')}
              </div>
              <div className="text-sm text-gray-600">
                <strong>Certifications :</strong> {candidate.certifications.length}
              </div>
            </div>
          </div>

          {/* Compétences */}
          {candidate.skills.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Compétences :</h4>
              <div className="flex flex-wrap gap-1">
                {candidate.skills.slice(0, 6).map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
                {candidate.skills.length > 6 && (
                  <Badge variant="secondary" className="text-xs">
                    +{candidate.skills.length - 6} autres
                  </Badge>
                )}
              </div>
            </div>
          )}

          {/* Bio */}
          {candidate.bio && (
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-1">À propos :</h4>
              <p className="text-sm text-gray-600 line-clamp-2">{candidate.bio}</p>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              {onViewProfile && (
                <Button variant="outline" size="sm" onClick={() => onViewProfile(candidate)}>
                  <Eye className="h-4 w-4 mr-1" />
                  Profil
                </Button>
              )}
              {onContact && (
                <Button variant="outline" size="sm" onClick={() => onContact(candidate)}>
                  <MessageCircle className="h-4 w-4 mr-1" />
                  Contacter
                </Button>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              <Button 
                size="sm" 
                className="bg-green-600 hover:bg-green-700"
                onClick={() => onSelect?.(candidate)}
              >
                <CheckCircle className="h-4 w-4 mr-1" />
                Sélectionner
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
