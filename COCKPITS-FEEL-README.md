# 🚀 Cockpits Feel - Documentation Complète

## 📋 Vue d'ensemble

Les **Cockpits Feel** sont 3 interfaces professionnelles spécialisées pour les professionnels dentaires français, offrant un hub central adapté à chaque type d'utilisateur avec navigation vers des modules spécialisés.

## 🎯 Objectifs

- **Interface unifiée** : Un seul point d'entrée pour tous les modules Feel
- **Adaptation au profil** : Interface personnalisée selon le type d'utilisateur
- **Navigation intuitive** : Accès rapide aux fonctionnalités essentielles
- **Notifications intelligentes** : Système de bulles numériques non-intrusif
- **Design professionnel** : Interface enterprise digne d'une plateforme professionnelle

## 👥 Profils Utilisateurs

### 🦷 Chirurgien-Dentiste
**Interface** : Desktop-optimized avec multiples informations visibles simultanément
**Focus** : Gestion de cabinet, profil professionnel, connexions organismes
**Modules** : 6 modules spécialisés avec Profil Praticien prioritaire

### 👩‍⚕️ Assistante Dentaire
**Interface** : Mobile-first avec interface tactile optimisée
**Focus** : Missions disponibles, géolocalisation, coordination avec praticiens
**Modules** : 4 modules essentiels adaptés au travail mobile

### 🏢 Directeur de Structure
**Interface** : Large screen optimized avec tableaux de bord complexes
**Focus** : Vision consolidée multi-sites, analytics, gestion d'équipe
**Modules** : 6 modules direction orientés supervision et management

## 🔐 Authentification

### Page de Connexion
- **URL** : `/auth/login`
- **Fonctionnalité** : Sélection de profil de démonstration
- **Profils disponibles** :
  - Dr. Martin Dubois (Chirurgien-Dentiste)
  - Marie Lefebvre (Assistante Dentaire)
  - Sophie Chen (Directrice de Structure)

### Redirection Automatique
Chaque profil est automatiquement redirigé vers son cockpit approprié :
- `/dashboard/chirurgien` pour les chirurgiens-dentistes
- `/dashboard/assistante` pour les assistantes
- `/dashboard/directeur` pour les directeurs

## 🏠 Cockpit Chirurgien-Dentiste

### Vue d'ensemble
**URL** : `/dashboard/chirurgien`

#### KPIs Principaux
- **CA Mensuel** : Chiffre d'affaires calculé via Feel
- **Équipe Présente** : Statut des membres de l'équipe
- **Documents Feel** : Nombre de documents stockés
- **Alertes** : Notifications importantes

#### Modules (6)
1. **Profil Praticien** ⭐ (Prioritaire)
2. **SOS Assistante** 🚨
3. **Comptabilité** 💰
4. **Gestion Stock** 📦
5. **Contrats** 📄
6. **News & Formations** 📰

#### Actions Rapides
- Mission urgente
- Connexion organismes
- Upload document

#### Activités Récentes
Feed des dernières actions importantes et échéances administratives

### Profil Praticien
**URL** : `/dashboard/chirurgien/profile`

#### Carte d'Identité Professionnelle
- **Informations personnelles** : Photo, nom, cabinet, adresse
- **Identifiants officiels** : RPPS, Adeli, SIRET, numéro Ordre
- **Spécialités** : Implantologie, Chirurgie orale, Prothèse fixe
- **Timeline carrière** : Parcours depuis le diplôme

#### Connexions Organismes Officiels (5)
1. **ONCD** 🦷 - Formation et déontologie
2. **URSSAF** 📊 - Déclarations sociales
3. **CARCDSF** 🏦 - Retraite et prévoyance
4. **DGFiP** 💰 - Impôts et CFE
5. **Amélie Pro** 🏥 - Télétransmission

#### Statuts de Connexion
- 🟢 **Connecté** : Accès actif
- 🟡 **En attente** : Connexion en cours
- 🔴 **Erreur** : Problème de connexion

## 📱 Cockpit Assistante Dentaire

### Interface Mobile-First
**URL** : `/dashboard/assistante`

#### Statistiques Personnelles
- Missions du mois
- Revenus mensuels
- Rating professionnel
- Disponibilité

#### Missions Disponibles
- **Géolocalisation** : Distance et localisation
- **Filtres** : Urgentes, spécialité, durée
- **Candidature rapide** : Bouton direct
- **Informations détaillées** : Taux, évaluation, description

#### Modules (4)
1. **Profil Assistant** 👤
2. **SOS Missions** 🚨
3. **Stock iPad** 📱
4. **Contrats Missions** 📄

#### Communication
- **Messages praticiens** : Notifications et confirmations
- **Planning semaine** : Missions confirmées et disponibilités

## 🏢 Cockpit Directeur de Structure

### Vision Consolidée
**URL** : `/dashboard/directeur`

#### Métriques Globales
- **CA Mensuel Feel** : Chiffre d'affaires consolidé
- **Praticiens Feel** : Nombre d'utilisateurs actifs
- **Assistantes Feel** : Effectif total
- **Performance Globale** : Score d'adoption des modules

#### Performance par Site
Tableau détaillé avec :
- Nom et localisation
- Effectif (praticiens + assistantes)
- Barre de progression performance
- CA mensuel par site
- Statut (excellent/bon/moyen/faible)

#### Modules Direction (6)
1. **Cockpit Multi-Sites** 🏢
2. **Gestion Équipe** 👥
3. **Finance Consolidée** 💰
4. **Achats Groupés** 📦
5. **Contrats Groupe** 📄
6. **Analytics & Reporting** 📊

#### Alertes et Actions
- **Alertes critiques** : Problèmes cross-sites
- **Actions stratégiques** : Décisions en attente
- **Métriques rapides** : KPIs d'adoption et satisfaction

## 🔔 Système de Notifications

### Règles de Notification
- **Bulle rouge** avec nombre blanc
- **Pas de bulle** quand tout est à jour
- **Maximum 99+** pour les nombres élevés
- **Animation pulse** pour les notifications urgentes
- **Position top-right** de chaque carte module

### Types de Notifications
- **Documents expirés** : Profil Praticien
- **Échéances fiscales** : Comptabilité
- **Ruptures stock** : Gestion Stock
- **Signatures en attente** : Contrats
- **Nouvelles candidatures** : SOS
- **Formations recommandées** : News

## 🎨 Design System

### Palette Feel
- **Bleu principal** : Navigation et titres
- **Vert** : Indicateurs positifs et réussites
- **Rouge** : Notifications et alertes
- **Gradients** : Éléments visuels attractifs

### Composants Réutilisables
- `NotificationBadge` : Bulles de notification
- `ModuleCard` : Cartes de modules
- `Breadcrumb` : Navigation hiérarchique
- `IconMapper` : Mapping des icônes

### Responsive Design
- **Mobile** : Assistante optimisée tactile
- **Tablet** : Adaptation flexible
- **Desktop** : Chirurgien et Directeur optimisés
- **Large Screen** : Directeur avec tableaux complexes

## 🔧 Architecture Technique

### Structure des Fichiers
```
src/
├── app/
│   ├── auth/
│   │   └── login/page.tsx          # Page de connexion
│   └── dashboard/
│       ├── chirurgien/page.tsx     # Cockpit chirurgien
│       ├── assistante/page.tsx     # Cockpit assistante
│       └── directeur/page.tsx      # Cockpit directeur
├── components/ui/
│   ├── NotificationBadge.tsx       # Bulles de notification
│   ├── ModuleCard.tsx              # Cartes de modules
│   ├── Breadcrumb.tsx              # Navigation breadcrumb
│   └── IconMapper.tsx              # Mapping des icônes
├── types/
│   └── dashboard.ts                # Types TypeScript
└── lib/
    └── mockData.ts                 # Données de démonstration
```

### Technologies Utilisées
- **Framework** : Next.js 15 avec App Router
- **Styling** : TailwindCSS
- **Icônes** : Lucide React
- **State Management** : React Hooks (useState)
- **Navigation** : Next.js Link et useRouter
- **Types** : TypeScript strict

### Données Mock
- **Profils réalistes** : Données professionnelles crédibles
- **Métriques cohérentes** : Chiffres interconnectés
- **Notifications dynamiques** : Bulles avec nombres réalistes
- **Organismes officiels** : Connexions SSO simulées

## 🚀 Déploiement

### Prérequis
- Node.js 18+
- npm ou yarn
- Next.js 15

### Installation
```bash
npm install
npm run dev
```

### Build Production
```bash
npm run build
npm start
```

### Variables d'Environnement
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 📱 Utilisation

### Test des Cockpits
1. **Accéder** à `/auth/login`
2. **Sélectionner** un profil de démonstration
3. **Explorer** le cockpit correspondant
4. **Naviguer** entre les modules (liens préparés)
5. **Tester** les interactions et notifications

### Navigation
- **Breadcrumb** : Retour facile à l'accueil
- **Modules** : Accès direct aux fonctionnalités
- **Notifications** : Bulles numériques cliquables
- **Actions rapides** : Boutons d'accès immédiat

## 🔮 Évolutions Futures

### Modules à Développer
- **Profil Praticien** : Carte d'identité complète
- **SOS Assistante** : Système de matching
- **Comptabilité** : Gestion financière
- **Stock** : Gestion prédictive
- **Contrats** : Signatures électroniques
- **News** : Veille professionnelle

### Fonctionnalités Avancées
- **Authentification réelle** : OAuth, SSO
- **Base de données** : Prisma, PostgreSQL
- **API REST** : Endpoints pour modules
- **Notifications temps réel** : WebSockets
- **Analytics avancés** : Métriques détaillées
- **Mobile App** : React Native

## 📞 Support

### Documentation
- **README principal** : Vue d'ensemble du projet
- **Types TypeScript** : Interfaces et types
- **Composants UI** : Réutilisabilité et maintenance

### Développement
- **Code modulaire** : Composants réutilisables
- **Types stricts** : TypeScript pour la robustesse
- **Design system** : Cohérence visuelle
- **Responsive** : Adaptation multi-écrans

---

**Feel** - Plateforme professionnelle pour l'écosystème dentaire français 🦷✨ 