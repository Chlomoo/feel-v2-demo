// Feel Design System - Stories Button 2025
// Documentation Storybook complète pour le composant Button

import type { Meta, StoryObj } from '@storybook/react';
import { FeelButton } from './Button';
import { 
  ArrowRight, 
  CheckCircle, 
  AlertTriangle, 
  Trash2, 
  Star,
  Download,
  Upload,
  Settings
} from 'lucide-react';

// Configuration Meta
const meta: Meta<typeof FeelButton> = {
  title: 'Feel Design System/Button',
  component: FeelButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Feel Button Component

Composant de bouton moderne et accessible pour la plateforme Feel.

## Caractéristiques

- **7 variants** : primary, secondary, success, warning, danger, accent, ghost
- **4 tailles** : sm, md, lg, xl
- **5 états** : default, loading, success, error, disabled
- **Accessibilité WCAG 2.1 AA** : contraste 4.5:1, focus visible, aria-labels
- **Micro-animations** : hover, active, ripple, loading
- **Icons optionnels** : Lucide React, position gauche/droite

## Utilisation

\`\`\`tsx
import { FeelButton } from '@/components/Button';

// Bouton principal
<FeelButton variant="primary" size="lg">
  Essai gratuit
</FeelButton>

// Bouton avec icône
<FeelButton variant="secondary" icon={ArrowRight} iconPosition="right">
  Voir la démo
</FeelButton>

// Bouton en loading
<FeelButton variant="success" loading>
  Sauvegarder
</FeelButton>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'accent', 'ghost'],
      description: 'Style visuel du bouton',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Taille du bouton',
    },
    state: {
      control: 'select',
      options: ['default', 'loading', 'success', 'error', 'disabled'],
      description: 'État du bouton',
    },
    loading: {
      control: 'boolean',
      description: 'Affiche un spinner et désactive le bouton',
    },
    disabled: {
      control: 'boolean',
      description: 'Désactive le bouton',
    },
    withRipple: {
      control: 'boolean',
      description: 'Active l\'effet ripple au clic',
    },
    withAnimation: {
      control: 'boolean',
      description: 'Active les micro-animations',
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'Position de l\'icône',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story de base
export const Default: Story = {
  args: {
    children: 'Bouton Feel',
    variant: 'primary',
    size: 'md',
  },
};

// Story des variants
export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <FeelButton variant="primary">Primary</FeelButton>
      <FeelButton variant="secondary">Secondary</FeelButton>
      <FeelButton variant="success">Success</FeelButton>
      <FeelButton variant="warning">Warning</FeelButton>
      <FeelButton variant="danger">Danger</FeelButton>
      <FeelButton variant="accent">Accent</FeelButton>
      <FeelButton variant="ghost">Ghost</FeelButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tous les variants disponibles du composant Button.',
      },
    },
  },
};

// Story des tailles
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <FeelButton variant="primary" size="sm">Small</FeelButton>
      <FeelButton variant="primary" size="md">Medium</FeelButton>
      <FeelButton variant="primary" size="lg">Large</FeelButton>
      <FeelButton variant="primary" size="xl">Extra Large</FeelButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Les différentes tailles disponibles pour le bouton.',
      },
    },
  },
};

// Story avec icônes
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <FeelButton variant="primary" icon={ArrowRight} iconPosition="right">
        Commencer
      </FeelButton>
      <FeelButton variant="success" icon={CheckCircle}>
        Confirmer
      </FeelButton>
      <FeelButton variant="warning" icon={AlertTriangle}>
        Attention
      </FeelButton>
      <FeelButton variant="danger" icon={Trash2}>
        Supprimer
      </FeelButton>
      <FeelButton variant="accent" icon={Star}>
        Premium
      </FeelButton>
      <FeelButton variant="ghost" icon={Settings}>
        Paramètres
      </FeelButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Boutons avec icônes Lucide React. Les icônes peuvent être positionnées à gauche ou à droite.',
      },
    },
  },
};

// Story des états
export const States: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <FeelButton variant="primary">Default</FeelButton>
      <FeelButton variant="primary" loading>Loading</FeelButton>
      <FeelButton variant="primary" state="success">Success</FeelButton>
      <FeelButton variant="primary" state="error">Error</FeelButton>
      <FeelButton variant="primary" disabled>Disabled</FeelButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Les différents états du bouton : normal, chargement, succès, erreur, désactivé.',
      },
    },
  },
};

// Story des animations
export const Animations: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <FeelButton variant="primary" withAnimation withRipple>
        Avec animations
      </FeelButton>
      <FeelButton variant="primary" withAnimation={false} withRipple={false}>
        Sans animations
      </FeelButton>
      <FeelButton variant="success" onSuccess={() => alert('Succès !')}>
        Animation succès
      </FeelButton>
      <FeelButton variant="danger" onError={() => alert('Erreur !')}>
        Animation erreur
      </FeelButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Démonstration des micro-animations : hover, ripple, succès, erreur.',
      },
    },
  },
};

// Story d'accessibilité
export const Accessibility: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <FeelButton 
        variant="primary" 
        ariaLabel="Bouton d'action principale avec description détaillée"
        ariaDescribedBy="button-description"
      >
        Action principale
      </FeelButton>
      <div id="button-description" className="sr-only">
        Ce bouton lance l'action principale de l'application
      </div>
      
      <FeelButton 
        variant="secondary" 
        loading
        ariaLabel="Bouton en cours de chargement"
      >
        Chargement
      </FeelButton>
      
      <FeelButton 
        variant="danger" 
        disabled
        ariaLabel="Bouton de suppression désactivé"
      >
        Supprimer
      </FeelButton>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemples d\'accessibilité avec aria-labels, aria-describedby, et états appropriés.',
      },
    },
  },
};

// Story d'intégration Feel
export const FeelIntegration: Story = {
  render: () => (
    <div className="space-y-6">
      {/* Header Feel */}
      <div className="flex justify-between items-center p-4 bg-[#F5F1E8] rounded-lg">
        <h2 className="text-xl font-semibold text-gray-900">Feel Platform</h2>
        <div className="flex gap-2">
          <FeelButton variant="secondary" size="sm">
            Se connecter
          </FeelButton>
          <FeelButton variant="secondary" size="sm">
            S'inscrire
          </FeelButton>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">
          Le copilote digital des{' '}
          <span className="text-green-600">professionnels dentaires</span>
        </h1>
        <p className="text-gray-600">
          UNE seule plateforme pour toute l'équipe, ZÉRO perte de temps
        </p>
        <div className="flex justify-center gap-4">
          <FeelButton variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
            Essai gratuit
          </FeelButton>
          <FeelButton variant="secondary" size="lg">
            Voir la démo
          </FeelButton>
        </div>
      </div>
      
      {/* Actions par module */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <FeelButton variant="success" icon={CheckCircle} size="sm">
          Confirmer
        </FeelButton>
        <FeelButton variant="warning" icon={AlertTriangle} size="sm">
          Attention
        </FeelButton>
        <FeelButton variant="danger" icon={Trash2} size="sm">
          Supprimer
        </FeelButton>
        <FeelButton variant="accent" icon={Star} size="sm">
          Premium
        </FeelButton>
        <FeelButton variant="ghost" icon={Download} size="sm">
          Télécharger
        </FeelButton>
        <FeelButton variant="ghost" icon={Upload} size="sm">
          Importer
        </FeelButton>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Intégration complète dans l\'interface Feel avec tous les variants utilisés dans différents contextes.',
      },
    },
  },
};

// Story des callbacks
export const Callbacks: Story = {
  render: () => {
    const handleSuccess = () => {
      alert('Action réussie !');
    };
    
    const handleError = () => {
      alert('Une erreur est survenue !');
    };
    
    const handleLoading = () => {
      alert('Début du chargement...');
    };
    
    return (
      <div className="flex flex-wrap gap-4">
        <FeelButton 
          variant="success" 
          onSuccess={handleSuccess}
          onLoadingStart={handleLoading}
        >
          Action avec succès
        </FeelButton>
        
        <FeelButton 
          variant="danger" 
          onError={handleError}
          onLoadingStart={handleLoading}
        >
          Action avec erreur
        </FeelButton>
        
        <FeelButton 
          variant="primary" 
          loading
          onLoadingEnd={() => alert('Chargement terminé !')}
        >
          Chargement
        </FeelButton>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Exemples d\'utilisation des callbacks : onSuccess, onError, onLoadingStart, onLoadingEnd.',
      },
    },
  },
};

// Story des contrôles interactifs
export const Interactive: Story = {
  args: {
    children: 'Bouton interactif',
    variant: 'primary',
    size: 'md',
    loading: false,
    disabled: false,
    withRipple: true,
    withAnimation: true,
    icon: ArrowRight,
    iconPosition: 'right',
  },
  parameters: {
    docs: {
      description: {
        story: 'Bouton avec tous les contrôles interactifs pour tester les différentes options.',
      },
    },
  },
}; 