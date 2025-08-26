interface NotificationBadgeProps {
  count: number;
  urgent?: boolean;
  className?: string;
}

export default function NotificationBadge({ count, urgent = false, className = "" }: NotificationBadgeProps) {
  if (count === 0) return null;

  return (
    <div 
      className={`absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full min-w-[20px] text-center ${
        urgent ? 'animate-pulse' : ''
      } ${className}`}
    >
      {count > 99 ? "99+" : count}
    </div>
  );
} 