import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface DashboardBreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function DashboardBreadcrumb({ items, className = "" }: DashboardBreadcrumbProps) {
  return (
    <nav className={`flex items-center space-x-2 text-sm text-gray-500 mb-6 ${className}`}>
      <Link href="/" className="flex items-center hover:text-gray-700 transition-colors">
        <Home className="h-4 w-4 mr-1" />
        Accueil
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
          {item.href ? (
            <Link 
              href={item.href} 
              className="hover:text-gray-700 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
} 