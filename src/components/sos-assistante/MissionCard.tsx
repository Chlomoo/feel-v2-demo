'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Clock, MapPin, Users, Star, AlertTriangle, 
  CheckCircle, Eye, Edit3, Trash2, Heart
} from 'lucide-react';
import { SOSMission } from '@/lib/sos-assistante/types';

interface MissionCardProps {
  mission: SOSMission;
  onView?: (mission: SOSMission) => void;
  onEdit?: (mission: SOSMission) => void;
  onDelete?: (mission: SOSMission) => void;
  showActions?: boolean;
  compact?: boolean;
}

export default function MissionCard({ 
  mission, 
  onView, 
  onEdit, 
  onDelete, 
  showActions = true,
  compact = false 
}: MissionCardProps) {
  
  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'normal': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'searching': return 'bg-blue-100 text-blue-800';
      case 'applications': return 'bg-yellow-100 text-yellow-800';
      case 'selected': return 'bg-green-100 text-green-800';
      case 'contracted': return 'bg-purple-100 text-purple-800';
      case 'active': return 'bg-indigo-100 text-indigo-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'searching': return 'En recherche';
      case 'applications': return 'Candidatures reçues';
      case 'selected': return 'Sélection effectuée';
      case 'contracted': return 'Contrat signé';
      case 'active': return 'En cours';
      case 'completed': return 'Terminée';
      case 'cancelled': return 'Annulée';
      default: return 'Inconnu';
    }
  };

  const getUrgencyIcon = (urgency: string) => {
    switch (urgency) {
      case 'critical': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'high': return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      case 'normal': return <CheckCircle className="h-4 w-4 text-green-500" />;
      default: return <AlertTriangle className="h-4 w-4 text-gray-500" />;
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const formatTime = (startTime: string, endTime: string) => {
    return `${startTime} - ${endTime}`;
  };

  if (compact) {
    return (
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-medium text-gray-900 truncate">{mission.title}</h3>
                <Badge className={getUrgencyColor(mission.urgencyLevel)}>
                  {getUrgencyIcon(mission.urgencyLevel)}
                  <span className="ml-1">
                    {mission.urgencyLevel === 'critical' ? 'Critique' : 
                     mission.urgencyLevel === 'high' ? 'Haute' : 'Normale'}
                  </span>
                </Badge>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{formatDate(mission.missionDate)}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span className="truncate">{mission.location.address}</span>
                </span>
                <span className="font-semibold text-gray-900">
                  {mission.hourlyRate}€/h
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2 ml-4">
              <Badge className={getStatusColor(mission.status)}>
                {getStatusText(mission.status)}
              </Badge>
              {showActions && onView && (
                <Button variant="outline" size="sm" onClick={() => onView(mission)}>
                  <Eye className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="flex items-center space-x-2 mb-2">
              <Heart className="h-5 w-5 text-red-500" />
              <span>{mission.title}</span>
            </CardTitle>
            <CardDescription className="line-clamp-2">
              {mission.description}
            </CardDescription>
          </div>
          <div className="flex flex-col space-y-2 ml-4">
            <Badge className={getUrgencyColor(mission.urgencyLevel)}>
              {getUrgencyIcon(mission.urgencyLevel)}
              <span className="ml-1">
                {mission.urgencyLevel === 'critical' ? 'Critique' : 
                 mission.urgencyLevel === 'high' ? 'Haute' : 'Normale'}
              </span>
            </Badge>
            <Badge className={getStatusColor(mission.status)}>
              {getStatusText(mission.status)}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {/* Informations principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>{formatDate(mission.missionDate)}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>{formatTime(mission.startTime, mission.endTime)}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4" />
                <span className="truncate">{mission.location.address}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Users className="h-4 w-4" />
                <span>{mission.applicationsCount || 0} candidatures</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Star className="h-4 w-4" />
                <span>{mission.durationHours}h de mission</span>
              </div>
              <div className="text-lg font-semibold text-gray-900">
                {mission.hourlyRate}€/h
              </div>
            </div>
          </div>

          {/* Compétences requises */}
          {mission.requiredSkills.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Compétences requises :</h4>
              <div className="flex flex-wrap gap-1">
                {mission.requiredSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          {showActions && (
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                {onView && (
                  <Button variant="outline" size="sm" onClick={() => onView(mission)}>
                    <Eye className="h-4 w-4 mr-1" />
                    Voir détails
                  </Button>
                )}
                {onEdit && (
                  <Button variant="outline" size="sm" onClick={() => onEdit(mission)}>
                    <Edit3 className="h-4 w-4 mr-1" />
                    Modifier
                  </Button>
                )}
              </div>
              
              {onDelete && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => onDelete(mission)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Supprimer
                </Button>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
