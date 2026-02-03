# 🚀 Guide de démarrage rapide - Système Bilingue

## Tester le système de traduction

### 1. Lancer l'application

```bash
npm run dev
```

### 2. Tester le changement de langue

1. Ouvrez le portfolio dans votre navigateur
2. Cherchez le bouton avec l'icône globe 🌐 dans le menu de navigation
3. Cliquez dessus pour passer du français à l'anglais (ou vice-versa)
4. **Tout le contenu change instantanément** !

### 3. Vérifier la persistance

1. Changez la langue en anglais
2. Rafraîchissez la page (F5)
3. La page reste en anglais ✅
4. La préférence est sauvegardée dans le localStorage

### 4. Sections traduites à vérifier

| Section | Français | Anglais |
|---------|----------|---------|
| **Navigation** | Services, À Propos de moi, Compétences... | Services, About Me, Skills... |
| **Hero** | "Bonjour 👋! Je suis" | "Hello 👋! I am" |
| **Services** | Développement Web, Mobile, Réseau | Web Development, Mobile, Network |
| **About** | Mes parcours éducatifs | My Educational Background |
| **Skills** | Mes Compétences, Mes Expériences | My Skills, My Experiences |
| **Projects** | Tous, Développement Web, Application Mobile | All, Web Development, Mobile App |
| **Contact** | Parlons-nous, Envoyer | Let's Talk, Send |
| **Footer** | Tous droits réservés | All rights reserved |

### 5. Test du formulaire de contact

**En français :**
- Label : "Votre email", "Sujet", "Message"
- Placeholder : "votre.email@gmail.com"
- Bouton : "Envoyer"
- Message succès : "✓ Message envoyé avec succès ! Je vous répondrai bientôt."

**En anglais :**
- Label : "Your email", "Subject", "Message"
- Placeholder : "your.email@gmail.com"
- Bouton : "Send"
- Message succès : "✓ Message sent successfully! I will reply to you soon."

### 6. Test mobile

1. Ouvrez l'outil de développement (F12)
2. Activez le mode responsive
3. Ouvrez le menu burger
4. Le bouton de langue est bien présent
5. Changez la langue
6. Le menu se ferme automatiquement ✅

### 7. Vérification dans le navigateur

**Console du navigateur :**
```javascript
// Vérifier la langue actuelle
localStorage.getItem('language')
// Résultat : "fr" ou "en"

// Vérifier l'attribut lang du HTML
document.documentElement.lang
// Résultat : "fr" ou "en"
```

## ✅ Checklist de validation

- [ ] Le bouton de langue est visible dans la navigation
- [ ] Cliquer sur le bouton change toute l'interface
- [ ] La langue est sauvegardée après rafraîchissement
- [ ] Tous les textes sont traduits (aucun mélange FR/EN)
- [ ] Le formulaire de contact fonctionne dans les 2 langues
- [ ] Les placeholders changent de langue
- [ ] Les messages d'erreur/succès sont traduits
- [ ] Le footer affiche l'année courante
- [ ] Les filtres de projets fonctionnent dans les 2 langues
- [ ] Le menu mobile se ferme après changement de langue

## 🐛 En cas de problème

### La langue ne change pas
1. Vérifiez la console pour les erreurs
2. Assurez-vous que le composable est bien importé
3. Vérifiez que `t.value` est utilisé dans les computed properties

### Les traductions ne s'affichent pas
1. Vérifiez que `{{ t.section.key }}` est bien utilisé dans le template
2. Vérifiez l'orthographe des clés dans `useLanguage.js`
3. Consultez la console pour les erreurs

### Le localStorage ne fonctionne pas
1. Vérifiez que le navigateur autorise le localStorage
2. Effacez le cache et réessayez
3. Utilisez le mode navigation privée pour tester

## 📝 Notes importantes

- **Langue par défaut** : Français (fr)
- **Langues supportées** : Français (fr), Anglais (en)
- **Stockage** : localStorage ('language')
- **Fichier de traduction** : `/src/composables/useLanguage.js`

## 🎯 Prochaines étapes

Pour ajouter une nouvelle langue (ex: Espagnol) :

1. Ouvrez `/src/composables/useLanguage.js`
2. Ajoutez une clé `es` dans l'objet `translations`
3. Copiez la structure de `fr` ou `en`
4. Traduisez tous les textes
5. Ajoutez l'option dans le bouton de langue

```javascript
const languages = ['fr', 'en', 'es'];
```

---

**Bon test ! 🚀**
