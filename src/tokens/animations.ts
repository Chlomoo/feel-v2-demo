// Feel Design System - Tokens Animations 2025
// Micro-animations subtiles et professionnelles

export const FEEL_ANIMATIONS = {
  // Transitions de base
  transitions: {
    fast: '150ms ease-out',
    medium: '200ms ease-out',
    slow: '300ms ease-out',
    bounce: '200ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  
  // Animations de boutons
  button: {
    // Hover subtil (corporate/médical)
    hover: {
      transform: 'scale(1.02)',
      transition: 'all 150ms ease-out',
      shadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
    
    // Active (pression)
    active: {
      transform: 'scale(0.98)',
      transition: 'all 100ms ease-in',
    },
    
    // Loading
    loading: {
      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
    
    // Focus (accessibilité)
    focus: {
      ring: '0 0 0 3px rgba(127, 176, 105, 0.3)', // Vert Feel
      transition: 'all 150ms ease-out',
    },
  },
  
  // Animations spécifiques par variant
  variants: {
    success: {
      checkmark: 'animate-bounce-once',
      duration: '500ms',
    },
    
    warning: {
      pulse: 'animate-pulse-subtle',
      duration: '2000ms',
    },
    
    danger: {
      shake: 'animate-shake',
      duration: '600ms',
    },
    
    accent: {
      gradient: 'animate-gradient-shift',
      duration: '3000ms',
    },
  },
  
  // Keyframes personnalisés
  keyframes: {
    'bounce-once': {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-4px)' },
    },
    
    'pulse-subtle': {
      '0%, 100%': { opacity: '1' },
      '50%': { opacity: '0.8' },
    },
    
    'shake': {
      '0%, 100%': { transform: 'translateX(0)' },
      '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
      '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
    },
    
    'gradient-shift': {
      '0%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
      '100%': { backgroundPosition: '0% 50%' },
    },
    
    'ripple': {
      '0%': { 
        transform: 'scale(0)',
        opacity: '1',
      },
      '100%': { 
        transform: 'scale(4)',
        opacity: '0',
      },
    },
  },
} as const;

// Classes Tailwind pour animations
export const FEEL_ANIMATION_CLASSES = {
  // États de base
  hover: 'transform scale-[1.02] transition-all duration-150 ease-out hover:shadow-lg',
  active: 'transform scale-[0.98] transition-all duration-100 ease-in',
  focus: 'focus-visible:ring-2 focus-visible:ring-feel-primary/30 focus-visible:ring-offset-2',
  disabled: 'opacity-60 cursor-not-allowed pointer-events-none',
  
  // Loading
  loading: 'animate-pulse opacity-80',
  
  // Variants spécifiques
  success: 'animate-bounce-once',
  warning: 'animate-pulse-subtle',
  danger: 'animate-shake',
  accent: 'animate-gradient-shift',
  
  // Ripple effect
  ripple: 'relative overflow-hidden after:absolute after:inset-0 after:animate-ripple',
} as const;

// Types pour TypeScript strict
export type FeelAnimationVariant = keyof typeof FEEL_ANIMATIONS.variants;
export type FeelTransitionSpeed = keyof typeof FEEL_ANIMATIONS.transitions; 