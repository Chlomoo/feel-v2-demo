import { 
  User, 
  Heart, 
  Calculator, 
  Package, 
  FileText, 
  Newspaper, 
  Building2, 
  Users, 
  TrendingUp, 
  BarChart3,
  Stethoscope,
  UserCheck,
  Bell,
  MapPin,
  Calendar,
  Star,
  Euro,
  Clock,
  AlertTriangle,
  CheckCircle,
  Search,
  Filter,
  ExternalLink,
  ArrowUp,
  ArrowDown,
  Target,
  Activity,
  ChevronRight,
  Home,
  Lock,
  Shield
} from "lucide-react";

interface IconMapperProps {
  name: string;
  size?: number;
  className?: string;
}

export default function IconMapper({ name, size = 24, className = "" }: IconMapperProps) {
  const iconMap: Record<string, React.ReactNode> = {
    'user': <User size={size} className={className} />,
    'heart': <Heart size={size} className={className} />,
    'calculator': <Calculator size={size} className={className} />,
    'package': <Package size={size} className={className} />,
    'file-text': <FileText size={size} className={className} />,
    'newspaper': <Newspaper size={size} className={className} />,
    'building2': <Building2 size={size} className={className} />,
    'users': <Users size={size} className={className} />,
    'trending-up': <TrendingUp size={size} className={className} />,
    'bar-chart3': <BarChart3 size={size} className={className} />,
    'stethoscope': <Stethoscope size={size} className={className} />,
    'user-check': <UserCheck size={size} className={className} />,
    'bell': <Bell size={size} className={className} />,
    'map-pin': <MapPin size={size} className={className} />,
    'calendar': <Calendar size={size} className={className} />,
    'star': <Star size={size} className={className} />,
    'euro': <Euro size={size} className={className} />,
    'clock': <Clock size={size} className={className} />,
    'alert-triangle': <AlertTriangle size={size} className={className} />,
    'check-circle': <CheckCircle size={size} className={className} />,
    'search': <Search size={size} className={className} />,
    'filter': <Filter size={size} className={className} />,
    'external-link': <ExternalLink size={size} className={className} />,
    'arrow-up': <ArrowUp size={size} className={className} />,
    'arrow-down': <ArrowDown size={size} className={className} />,
    'target': <Target size={size} className={className} />,
    'activity': <Activity size={size} className={className} />,
    'chevron-right': <ChevronRight size={size} className={className} />,
    'home': <Home size={size} className={className} />,
    'lock': <Lock size={size} className={className} />,
    'shield': <Shield size={size} className={className} />
  };

  return iconMap[name] || <User size={size} className={className} />;
} 