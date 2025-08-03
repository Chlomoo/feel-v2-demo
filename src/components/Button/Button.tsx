// Feel Design System - Composant Button 2025
// Composant principal avec tous les variants et animations

'use client';

import React, { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { 
  FeelButtonProps, 
  FeelButtonVariant, 
  FeelButtonSize, 
  FeelButtonState 
} from './Button.types';
import { FEEL_COLORS } from '@/tokens/colors';
import { FEEL_ANIMATION_CLASSES } from '@/tokens/animations';
import { generateAriaLabel, FOCUS_MANAGEMENT } from '@/utils/accessibility';
import { useButtonAnimation, ButtonAnimationManager } from '@/utils/animations';

// Configuration des variants avec couleurs Feel
const buttonVariants = cva(
  // Classes de base
  [
    'inline-flex items-center justify-center gap-2',
    'whitespace-nowrap rounded-md font-medium',
    'transition-all duration-150 ease-out',
    'disabled:pointer-events-none disabled:opacity-60',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'min-h-[44px] min-w-[44px]', // WCAG touch target
    '[&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4',
    'shrink-0 [&_svg]:shrink-0',
  ].join(' '),
  {
    variants: {
      variant: {
        // Primary - CTA principal (vert Feel)
        primary: [
          'bg-feel-primary-500 text-white shadow-sm',
          'hover:bg-feel-primary-600 hover:shadow-md',
          'active:bg-feel-primary-700 active:shadow-sm',
          'focus-visible:ring-feel-primary/30',
          'disabled:bg-feel-primary-300 disabled:text-feel-primary-100',
        ].join(' '),
        
        // Secondary - Actions secondaires (outline)
        secondary: [
          'border border-gray-300 bg-white text-gray-900 shadow-sm',
          'hover:bg-gray-50 hover:border-gray-400',
          'active:bg-gray-100',
          'focus-visible:ring-gray-300/30',
          'disabled:bg-gray-50 disabled:text-gray-400 disabled:border-gray-200',
        ].join(' '),
        
        // Success - Validations
        success: [
          'bg-feel-success-500 text-white shadow-sm',
          'hover:bg-feel-success-600 hover:shadow-md',
          'active:bg-feel-success-700 active:shadow-sm',
          'focus-visible:ring-feel-success/30',
          'disabled:bg-feel-success-300 disabled:text-feel-success-100',
        ].join(' '),
        
        // Warning - Alertes
        warning: [
          'bg-feel-warning-500 text-white shadow-sm',
          'hover:bg-feel-warning-600 hover:shadow-md',
          'active:bg-feel-warning-700 active:shadow-sm',
          'focus-visible:ring-feel-warning/30',
          'disabled:bg-feel-warning-300 disabled:text-feel-warning-100',
        ].join(' '),
        
        // Danger - Suppressions
        danger: [
          'bg-feel-danger-500 text-white shadow-sm',
          'hover:bg-feel-danger-600 hover:shadow-md',
          'active:bg-feel-danger-700 active:shadow-sm',
          'focus-visible:ring-feel-danger/30',
          'disabled:bg-feel-danger-300 disabled:text-feel-danger-100',
        ].join(' '),
        
        // Accent - Features premium
        accent: [
          'bg-gradient-to-r from-feel-accent-500 to-feel-accent-600 text-white shadow-sm',
          'hover:from-feel-accent-600 hover:to-feel-accent-700 hover:shadow-md',
          'active:from-feel-accent-700 active:to-feel-accent-800 active:shadow-sm',
          'focus-visible:ring-feel-accent/30',
          'disabled:from-feel-accent-300 disabled:to-feel-accent-400 disabled:text-feel-accent-100',
        ].join(' '),
        
        // Ghost - Actions tertiaires
        ghost: [
          'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
          'active:bg-gray-200',
          'focus-visible:ring-gray-300/30',
          'disabled:text-gray-400 disabled:hover:bg-transparent',
        ].join(' '),
      },
      
      size: {
        sm: 'h-8 px-3 py-1.5 text-sm gap-1.5',
        md: 'h-10 px-4 py-2 text-sm gap-2',
        lg: 'h-12 px-6 py-3 text-base gap-2.5',
        xl: 'h-14 px-8 py-4 text-lg gap-3',
      },
      
      state: {
        default: '',
        loading: 'animate-pulse opacity-80 cursor-wait',
        success: 'animate-bounce-once',
        error: 'animate-shake',
        disabled: 'opacity-60 cursor-not-allowed pointer-events-none',
      },
    },
    
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      state: 'default',
    },
  }
);

// Composant Button Feel
export const FeelButton = forwardRef<HTMLButtonElement, FeelButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      state = 'default',
      children,
      icon: Icon,
      iconPosition = 'left',
      loading = false,
      disabled = false,
      withRipple = true,
      withAnimation = true,
      ariaLabel,
      ariaDescribedBy,
      onSuccess,
      onError,
      onLoadingStart,
      onLoadingEnd,
      className,
      style,
      onClick,
      ...props
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const { createRippleEffect } = useButtonAnimation();
    const animationManager = ButtonAnimationManager.getInstance();
    
    // Expose les méthodes via ref
    useImperativeHandle(ref, () => buttonRef.current || document.createElement('button'));
    
    // Gestion des états
    const currentState: FeelButtonState = loading 
      ? 'loading' 
      : disabled 
        ? 'disabled' 
        : state;
    
    // Gestion des événements
    const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || loading) return;
      
      // Effet ripple
      if (withRipple) {
        createRippleEffect(event);
      }
      
      // Animation de succès/erreur
      if (withAnimation && buttonRef.current) {
        if (onSuccess) {
          animationManager.animateSuccess(buttonRef.current, onSuccess);
          return;
        }
        if (onError) {
          animationManager.animateError(buttonRef.current, onError);
          return;
        }
      }
      
      // Callback original
      if (onClick) {
        onClick(event);
      }
    }, [disabled, loading, withRipple, withAnimation, onSuccess, onError, onClick, createRippleEffect]);
    
    // Gestion du loading
    const handleLoading = useCallback(() => {
      if (loading && buttonRef.current) {
        onLoadingStart?.();
        const stopLoading = animationManager.animateLoading(buttonRef.current, 'Chargement...');
        
        // Exposer la méthode stop pour les tests
        (buttonRef.current as any).stopLoading = stopLoading.stop;
        
        return stopLoading;
      }
    }, [loading, onLoadingStart]);
    
    // Génération de l'aria-label
    const ariaLabelText = ariaLabel || generateAriaLabel(
      typeof children === 'string' ? children : '',
      variant,
      loading,
      disabled
    );
    
    // Rendu de l'icon
    const renderIcon = () => {
      if (!Icon) return null;
      
      const iconElement = <Icon className="shrink-0" />;
      
      return iconPosition === 'right' ? (
        <span className="order-last">{iconElement}</span>
      ) : (
        iconElement
      );
    };
    
    // Rendu du contenu
    const renderContent = () => {
      if (loading) {
        return (
          <>
            <svg 
              className="animate-spin -ml-1 mr-2 h-4 w-4" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Chargement...
          </>
        );
      }
      
      return (
        <>
          {iconPosition === 'left' && renderIcon()}
          {children}
          {iconPosition === 'right' && renderIcon()}
        </>
      );
    };
    
    // Classes conditionnelles
    const buttonClasses = cn(
      buttonVariants({ variant, size, state: currentState }),
      withAnimation && FEEL_ANIMATION_CLASSES.hover,
      withRipple && FEEL_ANIMATION_CLASSES.ripple,
      className
    );
    
    return (
      <button
        ref={buttonRef}
        className={buttonClasses}
        style={style}
        disabled={disabled || loading}
        aria-label={ariaLabelText}
        aria-describedby={ariaDescribedBy}
        aria-busy={loading}
        onClick={handleClick}
        data-variant={variant}
        data-size={size}
        data-state={currentState}
        data-testid="feel-button"
        {...props}
      >
        {renderContent()}
      </button>
    );
  }
);

// Affichage du nom du composant dans les dev tools
FeelButton.displayName = 'FeelButton';

// Export des types
export type { FeelButtonProps, FeelButtonVariant, FeelButtonSize, FeelButtonState };
export { buttonVariants }; 