# 🚀 Déploiement Netlify - Guide Complet

## 📋 Prérequis
- Compte Netlify (gratuit sur [netlify.com](https://netlify.com))
- Votre projet GitHub connecté

## 🔧 Étapes de déploiement

### 1. Connexion à Netlify
1. Allez sur [netlify.com](https://netlify.com)
2. Cliquez sur "Sign up" ou connectez-vous
3. Choisissez "Sign up with GitHub"

### 2. Import du projet
1. Cliquez sur "New site from Git"
2. Sélectionnez "GitHub"
3. Choisissez votre repository : `Chlomoo/feel-v2-demo`
4. Sélectionnez la branche `main`

### 3. Configuration du build
- **Build command** : `npm run build`
- **Publish directory** : `out`
- **Node version** : `18` (automatique)

### 4. Variables d'environnement (optionnel)
Si vous avez des variables d'environnement, ajoutez-les dans :
- Site settings > Environment variables

### 5. Déploiement
1. Cliquez sur "Deploy site"
2. Attendez 2-3 minutes
3. Votre site sera accessible via l'URL Netlify

## 🌐 URLs de votre site
Une fois déployé, vous aurez :
- **URL Netlify** : `https://votre-site.netlify.app`
- **URL personnalisée** : Configurable dans les paramètres

## 📱 Partage avec votre client
Envoyez simplement l'URL Netlify à votre client. Le site sera :
- ✅ Accessible partout dans le monde
- ✅ Optimisé pour mobile
- ✅ Rapide et sécurisé
- ✅ Toujours à jour avec GitHub

## 🔄 Mise à jour automatique
Chaque fois que vous poussez sur GitHub, Netlify redéploiera automatiquement !

## 🆘 Support
- Documentation Netlify : [docs.netlify.com](https://docs.netlify.com)
- Support : [netlify.com/support](https://netlify.com/support) 