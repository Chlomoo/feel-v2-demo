import { Bell } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

interface DashboardHeaderProps {
  userName: string;
  userRole: string;
  userInfo?: string;
  logoSize?: 'sm' | 'md';
  showNotifications?: boolean;
  notificationCount?: number;
}

export default function DashboardHeader({ 
  userName, 
  userRole, 
  userInfo, 
  logoSize = 'md',
  showNotifications = true,
  notificationCount = 0
}: DashboardHeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Logo size={logoSize} className="mr-3" />
            <div>
              <h1 className="text-xl font-semibold text-gray-900">{userName}</h1>
              <p className="text-sm text-gray-500">
                {userRole}
                {userInfo && ` • ${userInfo}`}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {showNotifications && (
              <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                <Bell className="h-5 w-5" />
                {notificationCount > 0 && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                )}
              </button>
            )}
            <Link 
              href="/auth/login" 
              className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              Déconnexion
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 