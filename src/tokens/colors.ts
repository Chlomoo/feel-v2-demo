// Feel Design System - Tokens Couleurs 2025
// Basé sur la palette existante Feel + nouveaux variants

export const FEEL_COLORS = {
  // Couleurs principales Feel (existantes)
  primary: {
    50: '#f0f9f4',
    100: '#dcf2e3',
    200: '#bbe5ca',
    300: '#8dd1a6',
    400: '#5bb57c',
    500: '#7FB069', // Vert Feel principal
    600: '#4a7c59',
    700: '#16A34A', // Vert hover
    800: '#33543e',
    900: '#2c4535',
  },
  
  // Couleurs secondaires
  secondary: {
    50: '#f6f7f9',
    100: '#eceef2',
    200: '#d5dae2',
    300: '#b1bcc9',
    400: '#8797ab',
    500: '#677991',
    600: '#526177',
    700: '#434f61',
    800: '#3a4252',
    900: '#2C3E50', // Gris foncé Feel
  },
  
  // Nouveaux variants
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e', // Vert success
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b', // Orange warning
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  
  danger: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444', // Rouge danger
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
  
  accent: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#d946ef', // Violet accent
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
  },
  
  // Couleurs neutres
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  
  // Couleurs de fond
  background: {
    primary: '#F5F1E8', // Fond beige Feel
    secondary: '#FFFFFF',
    tertiary: '#F8F9FA',
  }
} as const;

// Types pour TypeScript strict
export type FeelColorVariant = keyof typeof FEEL_COLORS;
export type FeelColorShade = keyof typeof FEEL_COLORS.primary; 