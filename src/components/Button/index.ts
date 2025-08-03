// Feel Design System - Export Button 2025
// Export du composant Button et ses types

export { FeelButton, buttonVariants } from './Button';
export type { 
  FeelButtonProps, 
  FeelButtonVariant, 
  FeelButtonSize, 
  FeelButtonState 
} from './Button.types';

// Export des utilitaires
export { FEEL_COLORS } from '@/tokens/colors';
export { FEEL_ANIMATIONS, FEEL_ANIMATION_CLASSES } from '@/tokens/animations';
export { FEEL_SPACING, FEEL_SPACING_CLASSES } from '@/tokens/spacing';

// Export des utilitaires d'accessibilité
export { 
  generateAriaLabel, 
  FOCUS_MANAGEMENT, 
  SCREEN_READER_HELPERS,
  BUTTON_CONTRAST_CHECK 
} from '@/utils/accessibility';

// Export des utilitaires d'animations
export { 
  useButtonAnimation, 
  ButtonAnimationManager,
  BUTTON_ANIMATION_CLASSES,
  VARIANT_ANIMATIONS 
} from '@/utils/animations'; 