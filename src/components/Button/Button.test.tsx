// Feel Design System - Tests Button 2025
// Tests unitaires complets pour le composant Button

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { FeelButton } from './Button';
import { ArrowRight, CheckCircle, AlertTriangle, Trash2 } from 'lucide-react';

// Mock des utilitaires
jest.mock('@/utils/accessibility', () => ({
  generateAriaLabel: jest.fn((text, variant, loading, disabled) => {
    let label = text;
    if (loading) label = `Chargement en cours - ${text}`;
    if (disabled) label = `${text} (désactivé)`;
    return label;
  }),
  FOCUS_MANAGEMENT: {
    minTouchTarget: 'min-h-[44px] min-w-[44px]',
    focusVisible: 'focus-visible:ring-2 focus-visible:ring-feel-primary/30 focus-visible:ring-offset-2',
  },
}));

jest.mock('@/utils/animations', () => ({
  useButtonAnimation: jest.fn(() => ({
    createRippleEffect: jest.fn(),
  })),
  ButtonAnimationManager: {
    getInstance: jest.fn(() => ({
      animateSuccess: jest.fn(),
      animateError: jest.fn(),
      animateLoading: jest.fn(() => ({ stop: jest.fn() })),
    })),
  },
}));

describe('FeelButton', () => {
  // Tests de base
  describe('Rendu de base', () => {
    it('devrait rendre un bouton avec le texte fourni', () => {
      render(<FeelButton>Essai gratuit</FeelButton>);
      expect(screen.getByRole('button', { name: 'Essai gratuit' })).toBeInTheDocument();
    });

    it('devrait avoir les attributs data corrects', () => {
      render(<FeelButton variant="primary" size="lg">Test</FeelButton>);
      const button = screen.getByRole('button');
      
      expect(button).toHaveAttribute('data-variant', 'primary');
      expect(button).toHaveAttribute('data-size', 'lg');
      expect(button).toHaveAttribute('data-state', 'default');
      expect(button).toHaveAttribute('data-testid', 'feel-button');
    });

    it('devrait être désactivé quand disabled est true', () => {
      render(<FeelButton disabled>Test</FeelButton>);
      const button = screen.getByRole('button');
      
      expect(button).toBeDisabled();
      expect(button).toHaveAttribute('data-state', 'disabled');
    });
  });

  // Tests des variants
  describe('Variants', () => {
    const variants = [
      { variant: 'primary', expectedClass: 'bg-feel-primary-500' },
      { variant: 'secondary', expectedClass: 'border-gray-300' },
      { variant: 'success', expectedClass: 'bg-feel-success-500' },
      { variant: 'warning', expectedClass: 'bg-feel-warning-500' },
      { variant: 'danger', expectedClass: 'bg-feel-danger-500' },
      { variant: 'accent', expectedClass: 'bg-gradient-to-r' },
      { variant: 'ghost', expectedClass: 'text-gray-700' },
    ];

    variants.forEach(({ variant, expectedClass }) => {
      it(`devrait appliquer les classes correctes pour le variant ${variant}`, () => {
        render(<FeelButton variant={variant as any}>Test</FeelButton>);
        const button = screen.getByRole('button');
        
        expect(button).toHaveClass(expectedClass);
        expect(button).toHaveAttribute('data-variant', variant);
      });
    });
  });

  // Tests des tailles
  describe('Tailles', () => {
    const sizes = [
      { size: 'sm', expectedHeight: 'h-8' },
      { size: 'md', expectedHeight: 'h-10' },
      { size: 'lg', expectedHeight: 'h-12' },
      { size: 'xl', expectedHeight: 'h-14' },
    ];

    sizes.forEach(({ size, expectedHeight }) => {
      it(`devrait appliquer la taille correcte pour ${size}`, () => {
        render(<FeelButton size={size as any}>Test</FeelButton>);
        const button = screen.getByRole('button');
        
        expect(button).toHaveClass(expectedHeight);
        expect(button).toHaveAttribute('data-size', size);
      });
    });
  });

  // Tests des états
  describe('États', () => {
    it('devrait afficher l\'état loading avec spinner', () => {
      render(<FeelButton loading>Test</FeelButton>);
      const button = screen.getByRole('button');
      
      expect(button).toBeDisabled();
      expect(button).toHaveAttribute('aria-busy', 'true');
      expect(button).toHaveAttribute('data-state', 'loading');
      expect(screen.getByText('Chargement...')).toBeInTheDocument();
    });

    it('devrait afficher l\'état success', () => {
      render(<FeelButton state="success">Test</FeelButton>);
      const button = screen.getByRole('button');
      
      expect(button).toHaveAttribute('data-state', 'success');
    });

    it('devrait afficher l\'état error', () => {
      render(<FeelButton state="error">Test</FeelButton>);
      const button = screen.getByRole('button');
      
      expect(button).toHaveAttribute('data-state', 'error');
    });
  });

  // Tests des icônes
  describe('Icônes', () => {
    it('devrait afficher une icône à gauche par défaut', () => {
      render(<FeelButton icon={ArrowRight}>Test</FeelButton>);
      const button = screen.getByRole('button');
      
      expect(button.querySelector('svg')).toBeInTheDocument();
      expect(button.querySelector('.order-last')).not.toBeInTheDocument();
    });

    it('devrait afficher une icône à droite quand iconPosition est right', () => {
      render(
        <FeelButton icon={ArrowRight} iconPosition="right">
          Test
        </FeelButton>
      );
      const button = screen.getByRole('button');
      
      expect(button.querySelector('svg')).toBeInTheDocument();
      expect(button.querySelector('.order-last')).toBeInTheDocument();
    });

    it('ne devrait pas afficher d\'icône si icon n\'est pas fourni', () => {
      render(<FeelButton>Test</FeelButton>);
      const button = screen.getByRole('button');
      
      expect(button.querySelector('svg')).not.toBeInTheDocument();
    });
  });

  // Tests des événements
  describe('Événements', () => {
    it('devrait appeler onClick quand cliqué', () => {
      const handleClick = jest.fn();
      render(<FeelButton onClick={handleClick}>Test</FeelButton>);
      
      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('ne devrait pas appeler onClick si désactivé', () => {
      const handleClick = jest.fn();
      render(<FeelButton disabled onClick={handleClick}>Test</FeelButton>);
      
      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('ne devrait pas appeler onClick si en loading', () => {
      const handleClick = jest.fn();
      render(<FeelButton loading onClick={handleClick}>Test</FeelButton>);
      
      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  // Tests d'accessibilité
  describe('Accessibilité', () => {
    it('devrait avoir un aria-label généré automatiquement', () => {
      render(<FeelButton>Essai gratuit</FeelButton>);
      const button = screen.getByRole('button');
      
      expect(button).toHaveAttribute('aria-label', 'Essai gratuit - action principale');
    });

    it('devrait avoir un aria-label personnalisé', () => {
      render(<FeelButton ariaLabel="Bouton personnalisé">Test</FeelButton>);
      const button = screen.getByRole('button');
      
      expect(button).toHaveAttribute('aria-label', 'Bouton personnalisé');
    });

    it('devrait avoir aria-describedby si fourni', () => {
      render(<FeelButton ariaDescribedBy="description">Test</FeelButton>);
      const button = screen.getByRole('button');
      
      expect(button).toHaveAttribute('aria-describedby', 'description');
    });

    it('devrait avoir aria-busy quand en loading', () => {
      render(<FeelButton loading>Test</FeelButton>);
      const button = screen.getByRole('button');
      
      expect(button).toHaveAttribute('aria-busy', 'true');
    });

    it('devrait avoir une zone de clic minimum de 44x44px', () => {
      render(<FeelButton>Test</FeelButton>);
      const button = screen.getByRole('button');
      
      expect(button).toHaveClass('min-h-[44px]', 'min-w-[44px]');
    });
  });

  // Tests des animations
  describe('Animations', () => {
    it('devrait avoir les classes d\'animation par défaut', () => {
      render(<FeelButton>Test</FeelButton>);
      const button = screen.getByRole('button');
      
      expect(button).toHaveClass('transition-all', 'duration-150', 'ease-out');
    });

    it('devrait avoir l\'effet ripple si withRipple est true', () => {
      render(<FeelButton withRipple>Test</FeelButton>);
      const button = screen.getByRole('button');
      
      expect(button).toHaveClass('relative', 'overflow-hidden');
    });

    it('ne devrait pas avoir l\'effet ripple si withRipple est false', () => {
      render(<FeelButton withRipple={false}>Test</FeelButton>);
      const button = screen.getByRole('button');
      
      expect(button).not.toHaveClass('relative', 'overflow-hidden');
    });
  });

  // Tests des callbacks
  describe('Callbacks', () => {
    it('devrait appeler onSuccess quand fourni', async () => {
      const onSuccess = jest.fn();
      render(<FeelButton onSuccess={onSuccess}>Test</FeelButton>);
      
      fireEvent.click(screen.getByRole('button'));
      
      await waitFor(() => {
        expect(onSuccess).toHaveBeenCalled();
      });
    });

    it('devrait appeler onError quand fourni', async () => {
      const onError = jest.fn();
      render(<FeelButton onError={onError}>Test</FeelButton>);
      
      fireEvent.click(screen.getByRole('button'));
      
      await waitFor(() => {
        expect(onError).toHaveBeenCalled();
      });
    });

    it('devrait appeler onLoadingStart quand loading devient true', () => {
      const onLoadingStart = jest.fn();
      const { rerender } = render(<FeelButton onLoadingStart={onLoadingStart}>Test</FeelButton>);
      
      rerender(<FeelButton loading onLoadingStart={onLoadingStart}>Test</FeelButton>);
      
      expect(onLoadingStart).toHaveBeenCalled();
    });
  });

  // Tests des refs
  describe('Refs', () => {
    it('devrait exposer les méthodes via ref', () => {
      const ref = React.createRef<HTMLButtonElement>();
      render(<FeelButton ref={ref}>Test</FeelButton>);
      
      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });
  });

  // Tests d'intégration
  describe('Intégration', () => {
    it('devrait fonctionner avec tous les props combinés', () => {
      render(
        <FeelButton
          variant="primary"
          size="lg"
          icon={ArrowRight}
          iconPosition="right"
          loading={false}
          disabled={false}
          withRipple={true}
          withAnimation={true}
          ariaLabel="Bouton complet"
          onClick={() => {}}
        >
          Bouton complet
        </FeelButton>
      );
      
      const button = screen.getByRole('button', { name: 'Bouton complet' });
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('data-variant', 'primary');
      expect(button).toHaveAttribute('data-size', 'lg');
      expect(button).toHaveAttribute('data-state', 'default');
    });
  });
}); 