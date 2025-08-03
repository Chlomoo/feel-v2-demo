// Feel Design System - Utilitaires Animations 2025
// Micro-animations subtiles et professionnelles

import { FEEL_ANIMATIONS } from '@/tokens/animations';

// Hook pour animations de boutons
export function useButtonAnimation() {
  const createRippleEffect = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.3)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 600ms linear';
    ripple.style.pointerEvents = 'none';
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      button.removeChild(ripple);
    }, 600);
  };
  
  return { createRippleEffect };
}

// Classes d'animation par état
export const BUTTON_ANIMATION_CLASSES = {
  // États de base
  default: 'transition-all duration-150 ease-out',
  hover: 'transform scale-[1.02] hover:shadow-lg',
  active: 'transform scale-[0.98]',
  focus: 'focus-visible:ring-2 focus-visible:ring-feel-primary/30 focus-visible:ring-offset-2',
  disabled: 'opacity-60 cursor-not-allowed pointer-events-none',
  
  // Loading
  loading: 'animate-pulse opacity-80',
  
  // Variants spécifiques
  success: 'animate-bounce-once',
  warning: 'animate-pulse-subtle',
  danger: 'animate-shake',
  accent: 'animate-gradient-shift',
  
  // Ripple
  ripple: 'relative overflow-hidden',
} as const;

// Animations par variant
export const VARIANT_ANIMATIONS = {
  primary: {
    hover: 'hover:bg-feel-primary-600 hover:shadow-lg',
    active: 'active:bg-feel-primary-700 active:shadow-md',
    focus: 'focus-visible:ring-feel-primary/30',
  },
  
  secondary: {
    hover: 'hover:bg-gray-50 hover:border-gray-300',
    active: 'active:bg-gray-100',
    focus: 'focus-visible:ring-gray-300/30',
  },
  
  success: {
    hover: 'hover:bg-feel-success-600 hover:shadow-lg',
    active: 'active:bg-feel-success-700',
    focus: 'focus-visible:ring-feel-success/30',
    animation: 'animate-bounce-once',
  },
  
  warning: {
    hover: 'hover:bg-feel-warning-600 hover:shadow-lg',
    active: 'active:bg-feel-warning-700',
    focus: 'focus-visible:ring-feel-warning/30',
    animation: 'animate-pulse-subtle',
  },
  
  danger: {
    hover: 'hover:bg-feel-danger-600 hover:shadow-lg',
    active: 'active:bg-feel-danger-700',
    focus: 'focus-visible:ring-feel-danger/30',
    animation: 'animate-shake',
  },
  
  accent: {
    hover: 'hover:bg-feel-accent-600 hover:shadow-lg',
    active: 'active:bg-feel-accent-700',
    focus: 'focus-visible:ring-feel-accent/30',
    animation: 'animate-gradient-shift',
  },
  
  ghost: {
    hover: 'hover:bg-gray-100 hover:text-gray-900',
    active: 'active:bg-gray-200',
    focus: 'focus-visible:ring-gray-300/30',
  },
} as const;

// Gestionnaire d'animations
export class ButtonAnimationManager {
  private static instance: ButtonAnimationManager;
  
  static getInstance(): ButtonAnimationManager {
    if (!ButtonAnimationManager.instance) {
      ButtonAnimationManager.instance = new ButtonAnimationManager();
    }
    return ButtonAnimationManager.instance;
  }
  
  // Animation de succès avec checkmark
  animateSuccess(button: HTMLButtonElement, callback?: () => void) {
    const originalText = button.textContent;
    const originalHTML = button.innerHTML;
    
    // Animation de transition
    button.style.transition = 'all 300ms ease-out';
    button.style.transform = 'scale(1.05)';
    button.style.backgroundColor = '#22c55e';
    
    setTimeout(() => {
      button.innerHTML = `
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        Succès
      `;
      
      setTimeout(() => {
        button.style.transform = 'scale(1)';
        
        setTimeout(() => {
          button.innerHTML = originalHTML;
          button.style.backgroundColor = '';
          button.style.transition = '';
          
          if (callback) callback();
        }, 500);
      }, 200);
    }, 100);
  }
  
  // Animation d'erreur avec shake
  animateError(button: HTMLButtonElement, callback?: () => void) {
    const originalText = button.textContent;
    
    button.style.transition = 'all 100ms ease-in-out';
    button.style.transform = 'translateX(-2px)';
    button.style.backgroundColor = '#ef4444';
    
    setTimeout(() => {
      button.style.transform = 'translateX(2px)';
      
      setTimeout(() => {
        button.style.transform = 'translateX(-2px)';
        
        setTimeout(() => {
          button.style.transform = 'translateX(2px)';
          
          setTimeout(() => {
            button.style.transform = 'translateX(0)';
            button.style.backgroundColor = '';
            button.style.transition = '';
            
            if (callback) callback();
          }, 100);
        }, 100);
      }, 100);
    }, 100);
  }
  
  // Animation de loading
  animateLoading(button: HTMLButtonElement, text: string = 'Chargement...') {
    const originalHTML = button.innerHTML;
    
    button.innerHTML = `
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      ${text}
    `;
    
    button.disabled = true;
    button.style.opacity = '0.8';
    
    return {
      stop: () => {
        button.innerHTML = originalHTML;
        button.disabled = false;
        button.style.opacity = '';
      }
    };
  }
}

// Types pour TypeScript strict
export type ButtonAnimationVariant = keyof typeof VARIANT_ANIMATIONS;
export type AnimationState = keyof typeof BUTTON_ANIMATION_CLASSES; 