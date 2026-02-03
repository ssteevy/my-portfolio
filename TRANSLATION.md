# Système de traduction bilingue (Français/Anglais)

## 📋 Vue d'ensemble

Le portfolio est maintenant disponible en **français** et en **anglais**. La langue peut être changée à tout moment via le bouton de changement de langue dans la barre de navigation.

## 🌐 Fonctionnalités

- ✅ **Changement de langue dynamique** - Toute l'interface change instantanément
- ✅ **Persistance** - La langue choisie est sauvegardée dans le localStorage
- ✅ **Traduction complète** - Tous les textes du portfolio sont traduits
- ✅ **Bouton intuitif** - Icône globe avec indication FR/EN
- ✅ **Accessibilité** - Attribut `lang` du document HTML mis à jour

## 🔧 Architecture technique

### 1. Composable `useLanguage.js`

Le fichier `/src/composables/useLanguage.js` contient :

- **currentLanguage** : Langue active (sauvegardée dans localStorage)
- **translations** : Objet contenant toutes les traductions (fr/en)
- **setLanguage()** : Fonction pour changer la langue
- **t** : Computed property pour accéder aux traductions

```javascript
import { useLanguage } from '@/composables/useLanguage';

const { currentLanguage, setLanguage, t } = useLanguage();

// Utilisation dans le template
{{ t.hero.greeting }}
{{ t.services.title }}
```

### 2. Structure des traductions

Les traductions sont organisées par section :

```javascript
{
  fr: {
    nav: { ... },
    hero: { ... },
    services: { ... },
    about: { ... },
    skills: { ... },
    projects: { ... },
    contact: { ... },
    footer: { ... }
  },
  en: { ... }
}
```

### 3. Composants traduits

Tous les composants suivants utilisent maintenant le système de traduction :

- ✅ **NavBar.vue** - Menu de navigation + bouton de langue
- ✅ **HeroSection.vue** - Section d'accueil
- ✅ **ServicesSection.vue** - Services
- ✅ **AboutSection.vue** - À propos
- ✅ **ExperienceAndSkills.vue** - Compétences et expériences
- ✅ **LatestProjects.vue** - Projets récents
- ✅ **ContactSection.vue** - Formulaire de contact
- ✅ **Footer.vue** - Pied de page

## 📝 Comment ajouter une nouvelle traduction

### 1. Ajouter la traduction dans `useLanguage.js`

```javascript
const translations = {
  fr: {
    // ... autres traductions
    newSection: {
      title: 'Mon nouveau titre',
      description: 'Ma nouvelle description'
    }
  },
  en: {
    // ... autres traductions
    newSection: {
      title: 'My new title',
      description: 'My new description'
    }
  }
}
```

### 2. Utiliser dans votre composant

```vue
<script setup>
import { useLanguage } from '@/composables/useLanguage';

const { t } = useLanguage();
</script>

<template>
  <div>
    <h2>{{ t.newSection.title }}</h2>
    <p>{{ t.newSection.description }}</p>
  </div>
</template>
```

## 🎨 Le bouton de changement de langue

Le bouton dans la NavBar :
- Affiche une icône globe 🌐
- Montre "EN" quand en français (pour passer en anglais)
- Montre "FR" quand en anglais (pour passer en français)
- Style cohérent avec le design du portfolio
- Effets hover professionnels

```vue
<button 
  @click="toggleLanguage"
  class="flex items-center gap-2 ...">
  <svg>...</svg>
  <span>{{ currentLanguage === 'fr' ? 'EN' : 'FR' }}</span>
</button>
```

## 💾 Persistance de la langue

La langue choisie est automatiquement sauvegardée dans le `localStorage` :

```javascript
const setLanguage = (lang) => {
  currentLanguage.value = lang;
  localStorage.setItem('language', lang);
  document.documentElement.lang = lang;
};
```

Au chargement de la page, la dernière langue utilisée est récupérée :

```javascript
const currentLanguage = ref(localStorage.getItem('language') || 'fr');
```

## 🌍 Sections traduites

### Navigation
- Services
- À Propos de moi / About Me
- Compétences / Skills
- Projets / Projects
- Contact

### Hero Section
- Message de bienvenue
- Titre professionnel
- Description complète
- Bouton "Télécharger mon CV" / "Download my CV"

### Services
- Développement Web / Web Development
- Développement Mobile / Mobile Development
- Administration Réseau / Network Administration

### About
- Parcours éducatifs / Educational Background
- Descriptions des formations
- Statistiques (Projets, Années d'expérience)

### Skills & Experience
- Titres de sections
- Rôles professionnels
- Entreprises

### Projects
- Titre "Mes projets récents" / "My Recent Projects"
- Filtres : Tous/All, Développement Web/Web Development, Application Mobile/Mobile App
- Descriptions complètes de tous les projets

### Contact
- Titre et description
- Labels du formulaire
- Placeholders
- Messages de succès/erreur
- Labels des coordonnées

### Footer
- Nom et titre
- Copyright

## 🚀 Utilisation

Pour l'utilisateur final :
1. Cliquer sur le bouton avec l'icône globe dans le menu de navigation
2. Le contenu change instantanément dans la langue choisie
3. La préférence est sauvegardée pour les prochaines visites

## 🔄 Changement de langue programmatique

Si vous avez besoin de changer la langue par code :

```javascript
import { useLanguage } from '@/composables/useLanguage';

const { setLanguage } = useLanguage();

// Passer en anglais
setLanguage('en');

// Passer en français
setLanguage('fr');
```

## 📱 Responsive

Le bouton de changement de langue est entièrement responsive :
- Visible sur mobile et desktop
- S'intègre dans le menu burger sur mobile
- Animations fluides sur tous les appareils

---

**Note** : Toutes les traductions ont été soigneusement rédigées pour être naturelles et professionnelles dans les deux langues.
