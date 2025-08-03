// Feel Design System - Types Button 2025
// Types TypeScript stricts pour le composant Button

import { ReactNode, ButtonHTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';

// Variants de boutons Feel
export type FeelButtonVariant = 
  | 'primary'    // CTA principal (vert Feel)
  | 'secondary'  // Actions secondaires (outline)
  | 'success'    // Validations (vert success)
  | 'warning'    // Alertes (orange)
  | 'danger'     // Suppressions (rouge)
  | 'accent'     // Features premium (gradient)
  | 'ghost';     // Actions tertiaires (transparent)

// Tailles de boutons
export type FeelButtonSize = 
  | 'sm'        // Small (32px height)
  | 'md'        // Medium (40px height)
  | 'lg'        // Large (48px height)
  | 'xl';       // Extra Large (56px height)

// États de boutons
export type FeelButtonState = 
  | 'default'   // État normal
  | 'loading'   // Chargement
  | 'success'   // Succès
  | 'error'     // Erreur
  | 'disabled'; // Désactivé

// Props du composant Button
export interface FeelButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  // Variant et taille
  variant?: FeelButtonVariant;
  size?: FeelButtonSize;
  
  // Contenu
  children: ReactNode;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  
  // États
  state?: FeelButtonState;
  loading?: boolean;
  disabled?: boolean;
  
  // Animations
  withRipple?: boolean;
  withAnimation?: boolean;
  
  // Accessibilité
  ariaLabel?: string;
  ariaDescribedBy?: string;
  
  // Callbacks
  onSuccess?: () => void;
  onError?: () => void;
  onLoadingStart?: () => void;
  onLoadingEnd?: () => void;
  
  // Styles personnalisés
  className?: string;
  style?: React.CSSProperties;
}

// Props pour les animations
export interface ButtonAnimationProps {
  variant: FeelButtonVariant;
  state: FeelButtonState;
  withRipple: boolean;
  withAnimation: boolean;
}

// Props pour l'accessibilité
export interface ButtonAccessibilityProps {
  ariaLabel?: string;
  ariaDescribedBy?: string;
  role?: string;
  tabIndex?: number;
}

// Configuration par variant
export interface FeelButtonVariantConfig {
  colors: {
    background: string;
    text: string;
    border?: string;
    hover: {
      background: string;
      text: string;
      border?: string;
    };
    active: {
      background: string;
      text: string;
      border?: string;
    };
    focus: {
      ring: string;
    };
  };
  animations?: {
    hover?: string;
    active?: string;
    focus?: string;
    success?: string;
    error?: string;
  };
}

// Configuration par taille
export interface FeelButtonSizeConfig {
  height: string;
  padding: string;
  fontSize: string;
  borderRadius: string;
  gap: string;
}

// Types pour les utilitaires
export type ButtonContrastCheck = {
  foreground: string;
  background: string;
  ratio: number;
  passes: boolean;
};

export type ButtonAnimationClass = {
  default: string;
  hover: string;
  active: string;
  focus: string;
  disabled: string;
  loading: string;
  success?: string;
  error?: string;
};

// Types pour les tests
export interface ButtonTestProps {
  testId?: string;
  'data-testid'?: string;
  'data-variant'?: FeelButtonVariant;
  'data-size'?: FeelButtonSize;
  'data-state'?: FeelButtonState;
}

// Types pour Storybook
export interface ButtonStoryProps extends FeelButtonProps {
  storyTitle?: string;
  storyDescription?: string;
  storyCategory?: string;
}

// Types pour les événements
export interface ButtonEventHandlers {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}

// Types pour les refs
export interface ButtonRef {
  focus: () => void;
  blur: () => void;
  click: () => void;
  getBoundingClientRect: () => DOMRect;
}

// Types pour les utilitaires d'animation
export interface ButtonAnimationManager {
  animateSuccess: (button: HTMLButtonElement, callback?: () => void) => void;
  animateError: (button: HTMLButtonElement, callback?: () => void) => void;
  animateLoading: (button: HTMLButtonElement, text?: string) => {
    stop: () => void;
  };
}

// Types pour les utilitaires d'accessibilité
export interface ButtonAccessibilityManager {
  generateAriaLabel: (text: string, variant: string, loading?: boolean, disabled?: boolean) => string;
  announceButtonState: (text: string, state: 'loading' | 'success' | 'error') => void;
  checkContrast: (foreground: string, background: string) => number;
} 