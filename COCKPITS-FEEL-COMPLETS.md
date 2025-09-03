# 🚀 Cockpits Feel Complets - Guide d'Utilisation

## 📋 Vue d'ensemble

La plateforme Feel propose **3 cockpits personnalisés** pour chaque profil professionnel, accessibles via une authentification centralisée avec des comptes de démonstration.

## 🔐 Authentification

### Accès aux Cockpits
1. **Depuis la landing page** : Cliquez sur "Se connecter"
2. **URL directe** : `/auth/signin`

### Comptes de Démonstration
- **Chirurgien-Dentiste** : `martin.dubois@feel-demo.fr` / `demo2025`
- **Assistante Dentaire** : `marie.lefebvre@feel-demo.fr` / `demo2025`
- **Directeur de Structure** : `sophie.chen@feel-demo.fr` / `demo2025`

### Comment Tester
1. Cliquez sur un compte de démonstration pour remplir automatiquement le formulaire
2. Cliquez sur "Se connecter"
3. Redirection automatique vers le cockpit correspondant

## 🦷 Cockpit Chirurgien-Dentiste (`/cockpit/dentist`)

### Interface
- **Header** : Profil Dr. Martin Dubois avec notifications et paramètres
- **Navigation** : Vue d'ensemble, Profil, Modules
- **KPIs** : Patients du jour, RDV restants, Satisfaction, Performance

### Modules Principaux
1. **Profil Praticien** (Prioritaire)
   - Carte d'identité professionnelle
   - Timeline des activités
   - 5 connexions SSO avec statuts visuels
   - 2 notifications importantes

2. **SOS Assistante**
   - Matching intelligent pour missions urgentes
   - Géolocalisation et proximité
   - Notifications en temps réel

3. **Smart Comptabilité**
   - Gestion financière automatisée
   - Connexions bancaires sécurisées
   - Reporting automatisé

4. **Gestion Stock**
   - Stock prédictif
   - Commandes automatiques
   - Alertes de pénurie

5. **Contrats Numériques**
   - Templates légaux
   - Signatures électroniques
   - Suivi des validations

6. **News & Formations**
   - Veille professionnelle
   - Formations DPC
   - Certifications

### Actions Rapides
- Nouveau patient
- Nouveau RDV
- Commande stock
- Nouveau contrat

## 👩‍⚕️ Cockpit Assistante Dentaire (`/cockpit/assistant`)

### Interface Mobile-First
- **Header compact** : Profil Marie Lefebvre avec notifications
- **Navigation** : Missions, Modules, Profil
- **Statistiques** : Missions du jour, Missions urgentes, Satisfaction, Heures travaillées

### Gestion des Missions
1. **Missions Urgentes** (🚨)
   - Remplacements critiques
   - Assistance chirurgie
   - Accueil patients
   - Niveaux de priorité (Critique, Haute, Moyenne)

2. **Missions Planifiées** (📅)
   - Gestion stock
   - Formation équipe
   - Dates et horaires précis

3. **Missions Récurrentes** (🔄)
   - Accueil hebdomadaire
   - Horaires fixes
   - Compensation garantie

### Modules Essentiels
1. **Profil Assistant**
   - Espace personnel
   - Compétences et expérience
   - Portfolio mobile

2. **SOS Missions**
   - Missions urgentes
   - Remplacements
   - Candidatures

3. **Stock iPad**
   - Gestion mobile des stocks
   - Scan codes-barres
   - Alertes de péremption

4. **Contrats Missions**
   - Gestion des contrats temporaires
   - Signatures et paiements
   - Suivi des missions

### Actions Rapides
- Nouvelle mission
- Rechercher
- Planning
- Contrats

## 🏢 Cockpit Directeur de Structure (`/cockpit/director`)

### Interface Direction
- **Header** : Profil Sophie Chen avec supervision multi-sites
- **Navigation** : Vue d'ensemble, Sites, Modules, Alertes
- **KPIs globaux** : CA, Patients traités, Satisfaction, Taux de remplissage

### Supervision Multi-Sites
1. **Centre République** (Paris 11e)
   - 45 patients, €12,450 CA, 4.8/5 satisfaction
   - 2 alertes actives

2. **Cabinet Nation** (Paris 12e)
   - 38 patients, €10,200 CA, 4.6/5 satisfaction
   - 1 alerte

3. **Clinique Saint-Michel** (Paris 5e)
   - 32 patients, €8,900 CA, 4.3/5 satisfaction
   - 3 alertes (attention requise)

4. **Cabinet Montparnasse** (Paris 14e)
   - 41 patients, €13,730 CA, 4.9/5 satisfaction
   - Aucune alerte

### Modules de Gestion
1. **Cockpit Multi-Sites**
   - Supervision globale
   - Performance par site
   - Alertes consolidées

2. **Gestion Équipe**
   - RH centralisé
   - Planning global
   - Performance

3. **Finance Consolidée**
   - Comptabilité multi-sites
   - Reporting consolidé
   - Budgets

4. **Achats Groupés**
   - Centralisation
   - Négociation
   - Transferts inter-sites

5. **Contrats Groupe**
   - Administration contractuelle
   - Conformité
   - Renouvellements

6. **Analytics & Reporting**
   - Business Intelligence
   - Prédictions IA
   - Tableaux de bord

### Alertes Cross-Sites
- **Stock** : Amalgame faible sur 3 sites
- **Personnel** : 2 assistantes en congé simultanément
- **Maintenance** : Programmation préventive

### Activités Récentes
- Nouveaux contrats signés
- Commandes stock validées
- Recrutements
- Rapports générés

### Actions Rapides
- Nouveau site
- Recruter
- Rapport
- Achats

## 🎯 Fonctionnalités Communes

### Design Feel
- **Logo Feel** présent sur tous les cockpits
- **Palette de couleurs** cohérente (vert Feel, bleu, violet, orange)
- **Typographie** Geist pour une lisibilité optimale
- **Responsive design** adapté à tous les écrans

### Micro-interactions
- **Hover effects** sur les cartes et boutons
- **Transitions** fluides entre les états
- **Loading states** pour les actions
- **Feedback visuel** pour les interactions

### Navigation Intuitive
- **Breadcrumbs** pour l'orientation
- **Tabs** organisés par fonctionnalité
- **Actions rapides** accessibles depuis tous les cockpits
- **Recherche globale** (en développement)

## 🔧 Configuration Technique

### Routes Actives
- `/` - Landing page
- `/auth/signin` - Page de connexion
- `/cockpit/dentist` - Cockpit chirurgien-dentiste
- `/cockpit/assistant` - Cockpit assistante dentaire
- `/cockpit/director` - Cockpit directeur de structure

### Composants Utilisés
- **Shadcn/ui** : Cards, Buttons, Badges, Forms
- **Lucide React** : Icônes cohérentes
- **TailwindCSS** : Styling responsive
- **Next.js 14+** : App Router et optimisations

### Données de Démonstration
- **Profils réalistes** avec données cohérentes
- **Scénarios cross-modules** pour tester les interconnexions
- **Fournisseurs dentaires** réels
- **Métriques** basées sur des cas d'usage réels

## 🚀 Prochaines Étapes

### Phase 2 : Modules Métier
- Développement des 16 modules détaillés
- Interconnexions intelligentes
- Données en temps réel

### Phase 3 : Fonctionnalités Avancées
- Notifications push
- API REST
- Intégrations tierces
- Mobile app

### Phase 4 : Production
- Base de données PostgreSQL
- Authentification sécurisée
- Monitoring et analytics
- Déploiement cloud

## 📞 Support et Contact

Pour toute question sur l'utilisation des cockpits :
- **Email** : contact@feel.fr
- **Téléphone** : 01 23 45 67 89
- **Documentation** : En cours de développement

---

*Feel - Le copilote digital des professionnels dentaires* 🦷✨ 