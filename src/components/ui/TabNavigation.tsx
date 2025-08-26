interface Tab {
  id: string;
  label: string;
  href?: string;
}

interface TabNavigationProps<T extends string> {
  tabs: Tab[];
  activeTab: T;
  onTabChange: (tabId: T) => void;
  className?: string;
}

export default function TabNavigation<T extends string>({ 
  tabs, 
  activeTab, 
  onTabChange, 
  className = "" 
}: TabNavigationProps<T>) {
  return (
    <div className={`bg-white border-b ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id as T)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
} 