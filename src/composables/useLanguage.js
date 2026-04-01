import { ref, computed } from 'vue';

// Langue par défaut (récupérée du localStorage ou français)
const currentLanguage = ref(localStorage.getItem('language') || 'fr');

// Traductions
const translations = {
  fr: {
    nav: {
      services: 'Services',
      about: 'À Propos de moi',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Bonjour 👋! Je suis',
      name: 'Steve Duvers',
      title: 'Développeur Full Stack & Technicien Réseaux Informatiques',
      description: 'Je suis développeur formé à l\'Epitech Coding Academy, avec une solide formation en réseaux informatiques et une grande passion pour les technologies numériques. Motivé, curieux et orienté solution, je souhaite apporter mes compétences à une équipe innovante et contribuer à des projets à fort impact tout en continuant à évoluer dans le domaine du développement et des technologies numériques.',
      downloadCV: 'Télécharger mon CV',
    },
    services: {
      title: 'Services',
      webDev: 'Développement Web',
      webDevDesc: 'Création de sites web modernes et réactifs adaptés à vos besoins.',
      mobileDev: 'Développement Mobile',
      mobileDevDesc: 'Conception d\'applications mobiles intuitives et attrayantes.',
      networkAdmin: 'Administration Réseau',
      networkAdminDesc: 'Installation et maintenance de réseaux câblés à haut débit.',
    },
    about: {
      title: 'Mes parcours éducatifs',
      moreInfo: 'Plus d\'informations',
      description: 'Ma passion pour la technologie et le développement web m\'a conduit à poursuivre des études en tant que Développeur Full Stack à la Coding Academy EPITECH, où j\'acquiers des compétences avancées en programmation, conception web et développement mobile. Parallèlement, j\'ai obtenu un diplôme de Technicien en Réseaux Informatiques du Centre de Formation Professionnelle d\'Haïti (CFPH), renforçant ma compréhension des infrastructures réseau et de la gestion des systèmes informatiques. Ce parcours éducatif diversifié me permet d\'aborder les défis technologiques avec une perspective globale et une solide expertise technique.',
      projects: 'Projets',
      experience: 'Années d\'expérience',
      epitech: 'Coding Academy EPITECH',
      epitechProgram: 'Développeur Full Stack',
      cfph: 'Centre de Formation Professionnelle d\'Haïti (CFPH)',
      cfphProgram: 'Technicien en Réseaux Informatiques',
    },
    skills: {
      title: 'Mes',
      skills: 'Compétences',
      experience: 'Expériences',
      experiences: {
        dev: 'Développeur web et mobile',
        operator: 'Opérateur de saisie',
        assistant: 'Aide technicien de maintenance informatique',
        technician: 'Technicien de maintenance informatique',
        company: 'Archives Nationales d\'Haïti',
        epitech: 'Coding Academy EPITECH',
        internship: 'Stage de 3 mois en développement web et mobile',
        beg: 'Best Experts-group',
      }
    },
    projects: {
      title: 'Mes projets récents',
      all: 'Tous',
      webDev: 'Développement Web',
      mobileApp: 'Application Mobile',
      viewLink: 'Voir le site',
      BestMarketBenin: {
        title: 'Best Market Benin',
        description: 'C\'est une plateforme e-commerce qui aide les boutiques en ligne à gérer leurs produits, clients et fournisseurs, vérifier les informations importantes, et suivre la gestion de leur magasin depuis un seul endroit.',
      },
      BestMarketBenin: {
        title: 'Best Market Benin',
        description: 'C\’est la version mobile de la plateforme e-commerce BMB, conçue pour offrir aux boutiques une expérience rapide et intuitive depuis un smartphone. Elle permet de gérer facilement leur boutique en ligne : administrer les produits, suivre les clients et les fournisseurs, consulter les informations essentielles et piloter l’ensemble des activités du magasin depuis un seul endroit..',
      },
      rottenMovie: {
        title: 'Rotten Movie',
        description: 'C\'est une plateforme qui offre une expérience complète aux amateurs de cinéma. Les utilisateurs peuvent créer un compte, explorer une liste de films, enregistrer leurs préférés et partager leurs avis en commentant les films.',
      },
      yowl: {
        title: 'Yowl',
        description: 'Cette plateforme offre un espace d\'échange où les utilisateurs peuvent partager des liens provenant de diverses plateformes et participer à des discussions enrichissantes avec la communauté autour de chaque contenu partagé.',
      },
      showtime: {
        title: 'ShowTime',
        description: 'Cette plateforme permet aux utilisateurs de consulter les listes de concerts, de s\'inscrire et de se connecter, afin de réserver des places pour les concerts à venir.',
      },
      freeads: {
        title: 'FreeAds',
        description: 'Sur cette plateforme e-commerce, les utilisateurs peuvent passer des commandes et recevoir des notifications.',
      },
      epicture: {
        title: 'Epicture',
        description: 'C\'est une application conçue avec l\'API Trello, elle permet de gérer les tâches et les projets de manière collaborative.',
      },
    },
    contact: {
      title: 'Parlons-nous',
      description: 'Une question ? Un projet ? Discutons-en ! Je suis toujours ouvert aux nouvelles opportunités et collaborations. Que vous ayez besoin d\'un développeur pour votre équipe ou d\'un partenaire pour concrétiser votre vision, je suis là pour vous écouter.',
      email: 'Email',
      whatsapp: 'Whatsapp',
      phone: 'Téléphone',
      linkedin: 'LinkedIn',
      yourEmail: 'Votre email',
      subject: 'Sujet',
      message: 'Message',
      send: 'Envoyer',
      sending: 'Envoi en cours…',
      success: '✓ Message envoyé avec succès ! Je vous répondrai bientôt.',
      error: '✗ Erreur lors de l\'envoi. Veuillez réessayer ou me contacter directement à steve.duvers@epitech.eu',
      placeholders: {
        email: 'votre.email@gmail.com',
        subject: 'Objet du message',
        message: 'Discutons ensemble...',
      }
    },
    footer: {
      name: 'Steve Duvers',
      title: 'Développeur Full Stack & Technicien Réseaux',
      rights: 'Steve Duvers. Tous droits réservés.',
    }
  },
  en: {
    nav: {
      services: 'Services',
      about: 'About Me',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hello 👋! I am',
      name: 'Steve Duvers',
      title: 'Full Stack Developer & Network Technician',
      description: 'I am a developer trained at Epitech Coding Academy, with a solid background in computer networks and a great passion for digital technologies. Motivated, curious and solution-oriented, I want to bring my skills to an innovative team and contribute to high-impact projects while continuing to evolve in the field of development and digital technologies.',
      downloadCV: 'Download my CV',
    },
    services: {
      title: 'Services',
      webDev: 'Web Development',
      webDevDesc: 'Creating modern and responsive websites tailored to your needs.',
      mobileDev: 'Mobile Development',
      mobileDevDesc: 'Designing intuitive and attractive mobile applications.',
      networkAdmin: 'Network Administration',
      networkAdminDesc: 'Installation and maintenance of high-speed wired networks.',
    },
    about: {
      title: 'My Educational Background',
      moreInfo: 'More Information',
      description: 'My passion for technology and web development led me to pursue studies as a Full Stack Developer at the EPITECH Coding Academy, where I am acquiring advanced skills in programming, web design and mobile development. At the same time, I obtained a diploma in Computer Network Technician from the Professional Training Center of Haiti (CFPH), strengthening my understanding of network infrastructures and IT systems management. This diverse educational background allows me to approach technological challenges with a global perspective and solid technical expertise.',
      projects: 'Projects',
      experience: 'Years of experience',
      epitech: 'Coding Academy EPITECH',
      epitechProgram: 'Full Stack Developer',
      cfph: 'Centre de Formation Professionnelle d\'Haïti (CFPH)',
      cfphProgram: 'Computer Network Technician',
    },
    skills: {
      title: 'My',
      skills: 'Skills',
      experience: 'Experiences',
      experiences: {
        dev: 'Web and mobile developer',
        operator: 'Data entry operator',
        assistant: 'Assistant computer maintenance technician',
        technician: 'Computer maintenance technician',
        beg: 'Best Experts-group',
        company: 'Archives Nationales d\'Haïti',
        epitech: 'Coding Academy EPITECH',    
      }
    },
    projects: {
      title: 'My Recent Projects',
      all: 'All',
      webDev: 'Web Development',
      mobileApp: 'Mobile App',
      viewLink: 'View site',
      BestMarketBenin: {
        title: 'Best Market Benin',
        description: 'It is an e-commerce platform that helps online stores manage their products, customers, and suppliers, check important information, and monitor their store operations from a single place.',
      },
      BestMarketBenin: {
        title: 'Best Market Benin',
        description: 'It is the mobile version of the BMB e-commerce platform, designed to offer shops a fast and intuitive experience from a smartphone. It allows them to easily manage their online store: manage products, track customers and suppliers, access essential information and oversee all store activities from a single location.',
      },
      rottenMovie: {
        title: 'Rotten Movie',
        description: 'A platform that offers a complete experience for movie lovers. Users can create an account, explore a list of movies, save their favorites, and share their reviews by commenting on movies.',
      },
      yowl: {
        title: 'Yowl',
        description: 'This platform offers an exchange space where users can share links from various platforms and participate in enriching discussions with the community around each shared content.',
      },
      showtime: {
        title: 'ShowTime',
        description: 'This platform allows users to view concert listings, register and log in to book seats for upcoming concerts.',
      },
      freeads: {
        title: 'FreeAds',
        description: 'On this e-commerce platform, users can place orders and receive notifications.',
      },
      epicture: {
        title: 'Epicture',
        description: 'An application designed with the Trello API, it allows you to manage tasks and projects collaboratively.',
      },
    },
    contact: {
      title: 'Let\'s Talk',
      description: 'A question? A project? Let\'s discuss it! I am always open to new opportunities and collaborations. Whether you need a developer for your team or a partner to realize your vision, I am here to listen.',
      email: 'Email',
      whatsapp: 'Whatsapp',
      phone: 'Phone',
      linkedin: 'LinkedIn',
      yourEmail: 'Your email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send',
      sending: 'Sending…',
      success: '✓ Message sent successfully! I will reply to you soon.',
      error: '✗ Error sending. Please try again or contact me directly at steve.duvers@epitech.eu',
      placeholders: {
        email: 'your.email@gmail.com',
        subject: 'Message subject',
        message: 'Let\'s talk together...',
      }
    },
    footer: {
      name: 'Steve Duvers',
      title: 'Full Stack Developer & Network Technician',
      rights: 'Steve Duvers. All rights reserved.',
    }
  }
};

export function useLanguage() {
  const setLanguage = (lang) => {
    currentLanguage.value = lang;
    localStorage.setItem('language', lang);
    // Mettre à jour la balise html lang
    document.documentElement.lang = lang;
  };

  const t = computed(() => translations[currentLanguage.value]);

  return {
    currentLanguage,
    setLanguage,
    t,
  };
}
