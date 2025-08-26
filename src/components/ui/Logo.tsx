import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  clickable?: boolean;
  className?: string;
}

export default function Logo({ size = 'md', clickable = true, className = "" }: LogoProps) {
  const sizeMap = {
    sm: { width: 32, height: 32 },
    md: { width: 40, height: 40 },
    lg: { width: 48, height: 48 },
    xl: { width: 64, height: 64 }
  };

  const { width, height } = sizeMap[size];

  const logoElement = (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logos/Logo FEEL .png"
        alt="Feel - Plateforme professionnelle dentaire"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </div>
  );

  if (clickable) {
    return (
      <Link href="/" className="hover:opacity-80 transition-opacity">
        {logoElement}
      </Link>
    );
  }

  return logoElement;
} 