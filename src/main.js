import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Initialiser la langue du document
const savedLanguage = localStorage.getItem('language') || 'fr';
document.documentElement.lang = savedLanguage;

createApp(App).mount('#app')
