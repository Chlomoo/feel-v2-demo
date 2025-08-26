import Link from "next/link";
import NotificationBadge from "./NotificationBadge";
import IconMapper from "./IconMapper";

interface ModuleCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  notifications: number;
  link: string;
  urgent?: boolean;
}

export default function ModuleCard({ 
  id, 
  title, 
  description, 
  icon, 
  color, 
  notifications, 
  link, 
  urgent = false 
}: ModuleCardProps) {
  return (
    <Link href={link}>
      <div className="relative bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-all duration-300 cursor-pointer group">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
            <IconMapper name={icon} size={24} className="text-white" />
          </div>
          <NotificationBadge count={notifications} urgent={urgent} />
        </div>
        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
          {description}
        </p>
      </div>
    </Link>
  );
} 