# 🚀 INSTRUCTIONS DE DÉPLOIEMENT NETLIFY

## 📋 **ÉTAPES POUR DÉPLOYER SUR NETLIFY**

### **1. Aller sur Netlify**
- Ouvrir [netlify.com](https://netlify.com)
- Cliquer sur "Sign up" ou "Log in"

### **2. Connecter GitHub**
- Choisir "Sign up with GitHub"
- Autoriser Netlify à accéder à vos repos

### **3. Importer le Projet**
- Cliquer sur "New site from Git"
- Sélectionner "GitHub"
- Choisir le repository : `Chlomoo/feel-v2-demo`

### **4. Configuration du Build**
- **Build command :** `npm run build`
- **Publish directory :** `.next`
- **Base directory :** (laisser vide)

### **5. Variables d'Environnement**
- Cliquer sur "Advanced build settings"
- Ajouter si nécessaire :
  - `NODE_VERSION` = `18`

### **6. Déployer**
- Cliquer sur "Deploy site"
- Attendre la fin du build (2-3 minutes)

### **7. URL de Production**
- Netlify génère une URL : `https://random-name.netlify.app`
- Vous pouvez la personnaliser dans "Site settings" > "Domain management"

## 🎯 **AVANTAGES NETLIFY**
- ✅ **Gratuit** pour les projets personnels
- ✅ **Déploiement automatique** à chaque push GitHub
- ✅ **HTTPS automatique**
- ✅ **CDN global** pour de meilleures performances
- ✅ **Prévisualisation** des pull requests

## 🔧 **EN CAS DE PROBLÈME**
- Vérifier que le build local fonctionne : `npm run build`
- Consulter les logs de build dans Netlify
- Vérifier la version Node.js (18+ recommandé)

---
**Votre site sera accessible en ligne et vous pourrez le partager avec votre client !** 🎉 