// Feel Design System - Tokens Spacing 2025
// Système 8px cohérent avec design existant

export const FEEL_SPACING = {
  // Système de base 8px
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
  '4xl': '6rem',    // 96px
  
  // Spacing spécifique boutons
  button: {
    padding: {
      sm: '0.5rem 1rem',      // 8px 16px
      md: '0.75rem 1.5rem',   // 12px 24px
      lg: '1rem 2rem',         // 16px 32px
      xl: '1.25rem 2.5rem',   // 20px 40px
    },
    
    gap: {
      sm: '0.375rem',          // 6px
      md: '0.5rem',            // 8px
      lg: '0.75rem',           // 12px
      xl: '1rem',              // 16px
    },
    
    borderRadius: {
      sm: '0.375rem',          // 6px
      md: '0.5rem',            // 8px
      lg: '0.75rem',           // 12px
      xl: '1rem',              // 16px
    },
  },
  
  // Marges et padding
  layout: {
    container: {
      padding: '2rem',         // 32px
      maxWidth: '1400px',
    },
    
    section: {
      padding: {
        sm: '2rem 0',          // 32px 0
        md: '4rem 0',          // 64px 0
        lg: '6rem 0',          // 96px 0
      },
    },
    
    card: {
      padding: '1.5rem',       // 24px
      gap: '1rem',             // 16px
    },
  },
} as const;

// Classes Tailwind pour spacing
export const FEEL_SPACING_CLASSES = {
  // Padding
  'p-xs': 'p-1',
  'p-sm': 'p-2',
  'p-md': 'p-4',
  'p-lg': 'p-6',
  'p-xl': 'p-8',
  
  // Margin
  'm-xs': 'm-1',
  'm-sm': 'm-2',
  'm-md': 'm-4',
  'm-lg': 'm-6',
  'm-xl': 'm-8',
  
  // Gap
  'gap-xs': 'gap-1',
  'gap-sm': 'gap-2',
  'gap-md': 'gap-4',
  'gap-lg': 'gap-6',
  'gap-xl': 'gap-8',
  
  // Button specific
  button: {
    'p-sm': 'px-4 py-2',
    'p-md': 'px-6 py-3',
    'p-lg': 'px-8 py-4',
    'p-xl': 'px-10 py-5',
  },
} as const;

// Types pour TypeScript strict
export type FeelSpacingSize = keyof typeof FEEL_SPACING;
export type FeelButtonSize = keyof typeof FEEL_SPACING.button.padding; 