// Feel Design System - Utilitaires Accessibilité 2025
// Support WCAG 2.1 AA pour boutons

import { FEEL_COLORS } from '@/tokens/colors';

// Contraste minimum requis WCAG 2.1 AA
export const WCAG_CONTRAST_RATIOS = {
  AA: {
    normal: 4.5,
    large: 3.0,
  },
  AAA: {
    normal: 7.0,
    large: 4.5,
  },
} as const;

// Calcul du contraste (simplifié)
export function calculateContrastRatio(foreground: string, background: string): number {
  // Implémentation simplifiée - en production, utiliser une librairie dédiée
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const fg = hexToRgb(foreground);
  const bg = hexToRgb(background);
  
  if (!fg || !bg) return 1;
  
  const getLuminance = (r: number, g: number, b: number) => {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  const l1 = getLuminance(fg.r, fg.g, fg.b);
  const l2 = getLuminance(bg.r, bg.g, bg.b);
  
  const brightest = Math.max(l1, l2);
  const darkest = Math.min(l1, l2);
  
  return (brightest + 0.05) / (darkest + 0.05);
}

// Vérification contraste par variant
export const BUTTON_CONTRAST_CHECK = {
  primary: {
    foreground: '#FFFFFF',
    background: FEEL_COLORS.primary[500],
    ratio: calculateContrastRatio('#FFFFFF', FEEL_COLORS.primary[500]),
    passes: calculateContrastRatio('#FFFFFF', FEEL_COLORS.primary[500]) >= WCAG_CONTRAST_RATIOS.AA.normal,
  },
  secondary: {
    foreground: FEEL_COLORS.secondary[900],
    background: '#FFFFFF',
    ratio: calculateContrastRatio(FEEL_COLORS.secondary[900], '#FFFFFF'),
    passes: calculateContrastRatio(FEEL_COLORS.secondary[900], '#FFFFFF') >= WCAG_CONTRAST_RATIOS.AA.normal,
  },
  success: {
    foreground: '#FFFFFF',
    background: FEEL_COLORS.success[500],
    ratio: calculateContrastRatio('#FFFFFF', FEEL_COLORS.success[500]),
    passes: calculateContrastRatio('#FFFFFF', FEEL_COLORS.success[500]) >= WCAG_CONTRAST_RATIOS.AA.normal,
  },
  warning: {
    foreground: '#FFFFFF',
    background: FEEL_COLORS.warning[500],
    ratio: calculateContrastRatio('#FFFFFF', FEEL_COLORS.warning[500]),
    passes: calculateContrastRatio('#FFFFFF', FEEL_COLORS.warning[500]) >= WCAG_CONTRAST_RATIOS.AA.normal,
  },
  danger: {
    foreground: '#FFFFFF',
    background: FEEL_COLORS.danger[500],
    ratio: calculateContrastRatio('#FFFFFF', FEEL_COLORS.danger[500]),
    passes: calculateContrastRatio('#FFFFFF', FEEL_COLORS.danger[500]) >= WCAG_CONTRAST_RATIOS.AA.normal,
  },
  accent: {
    foreground: '#FFFFFF',
    background: FEEL_COLORS.accent[500],
    ratio: calculateContrastRatio('#FFFFFF', FEEL_COLORS.accent[500]),
    passes: calculateContrastRatio('#FFFFFF', FEEL_COLORS.accent[500]) >= WCAG_CONTRAST_RATIOS.AA.normal,
  },
} as const;

// Génération ARIA labels
export function generateAriaLabel(
  text: string,
  variant: string,
  loading?: boolean,
  disabled?: boolean
): string {
  let label = text;
  
  if (loading) {
    label = `Chargement en cours - ${text}`;
  }
  
  if (disabled) {
    label = `${text} (désactivé)`;
  }
  
  // Ajout du contexte par variant
  const variantContext = {
    primary: 'action principale',
    secondary: 'action secondaire',
    success: 'confirmation',
    warning: 'alerte',
    danger: 'action critique',
    accent: 'fonctionnalité premium',
    ghost: 'action tertiaire',
  }[variant] || '';
  
  if (variantContext) {
    label = `${label} - ${variantContext}`;
  }
  
  return label;
}

// Focus management
export const FOCUS_MANAGEMENT = {
  // Zone de clic minimum 44x44px (WCAG)
  minTouchTarget: 'min-h-[44px] min-w-[44px]',
  
  // Focus visible
  focusVisible: 'focus-visible:ring-2 focus-visible:ring-feel-primary/30 focus-visible:ring-offset-2',
  
  // Focus trap pour modales
  focusTrap: 'focus-trap',
  
  // Skip links
  skipLink: 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4',
} as const;

// Screen reader helpers
export const SCREEN_READER_HELPERS = {
  // Masquer visuellement mais garder accessible
  srOnly: 'sr-only',
  
  // Annoncer les changements d'état
  announce: (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  },
  
  // Annoncer les états de boutons
  announceButtonState: (text: string, state: 'loading' | 'success' | 'error') => {
    const messages = {
      loading: `${text} - Chargement en cours`,
      success: `${text} - Succès`,
      error: `${text} - Erreur`,
    };
    SCREEN_READER_HELPERS.announce(messages[state]);
  },
} as const;

// Types pour TypeScript strict
export type ButtonVariant = keyof typeof BUTTON_CONTRAST_CHECK;
export type FocusStrategy = keyof typeof FOCUS_MANAGEMENT; 