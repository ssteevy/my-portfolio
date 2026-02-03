# Portfolio - Steve Duvers

Portfolio professionnel de Steve Duvers, Développeur Full Stack et Technicien Réseaux Informatiques.

## 🚀 Technologies utilisées

- **Vue 3** - Framework JavaScript progressif
- **Vite** - Outil de build ultra-rapide
- **Tailwind CSS** - Framework CSS utility-first
- **AOS** - Animate On Scroll Library
- **Formspree** - Gestion des formulaires de contact
- **EmailJS** - Service d'envoi d'emails

## ✨ Fonctionnalités

- ✅ Design responsive et moderne
- ✅ **Système bilingue (Français/Anglais)** avec changement instantané
- ✅ Animations fluides et interactives
- ✅ Section de services
- ✅ Présentation des compétences avec barres de progression
- ✅ Portfolio de projets avec filtres
- ✅ Formulaire de contact fonctionnel
- ✅ Bouton de retour en haut
- ✅ Navigation mobile optimisée
- ✅ Optimisé pour le SEO
- ✅ Thème sombre professionnel
- ✅ Sauvegarde de la préférence de langue

## 📦 Installation

```bash
# Cloner le repository
git clone [votre-repo-url]

# Naviguer dans le dossier
cd my-portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## 🛠️ Scripts disponibles

```bash
# Développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

## 📂 Structure du projet

```
my-portfolio/
├── public/
│   └── resume.pdf          # CV téléchargeable
├── src/
│   ├── assets/            # Images et ressources
│   ├── components/        # Composants Vue
│   │   ├── NavBar.vue
│   │   ├── HeroSection.vue
│   │   ├── ServicesSection.vue
│   │   ├── AboutSection.vue
│   │   ├── ExperienceAndSkills.vue
│   │   ├── LatestProjects.vue
│   │   ├── ContactSection.vue
│   │   ├── Footer.vue
│   │   └── BackToTop.vue
│   ├── composables/       # Composables Vue
│   │   └── useLanguage.js # Système de traduction
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
├── README.md
└── TRANSLATION.md         # Documentation du système de traduction
```

## 🎨 Personnalisation

### Couleurs du thème

Pour personnaliser les couleurs du thème, modifiez le fichier `tailwind.config.js` :

```javascript
theme: {
  extend: {
    colors: {
      primary: '#7c3aed',  // Violet
      secondary: '#ec4899', // Rose
    }
  }
}
```

### Langues

Le portfolio supporte le français et l'anglais. Pour ajouter une nouvelle langue ou modifier les traductions :

1. Ouvrez `src/composables/useLanguage.js`
2. Ajoutez vos traductions dans l'objet `translations`
3. Consultez [TRANSLATION.md](TRANSLATION.md) pour plus de détails

## 📧 Configuration du formulaire de contact

Le formulaire utilise Formspree. Pour configurer votre propre endpoint :

1. Créez un compte sur [Formspree](https://formspree.io/)
2. Créez un nouveau formulaire
3. Remplacez l'endpoint dans `ContactSection.vue`

## 🌐 Déploiement

Le projet peut être déployé sur :
- Vercel
- Netlify
- GitHub Pages
- Tout service supportant les applications Vue.js

```bash
# Build pour la production
npm run build

# Le dossier dist/ contient les fichiers à déployer
```

## 👨‍💻 Auteur

**Steve Duvers**
- Email: steve.duvers@epitech.eu
- LinkedIn: [Steve Duvers](https://www.linkedin.com/in/steve-duvers-071062378/)
- WhatsApp: +229 01 57 75 71 39

## 📄 Licence

© 2026 Steve Duvers. Tous droits réservés.
