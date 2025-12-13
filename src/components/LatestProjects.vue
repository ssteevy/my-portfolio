<template>
    <section class="text-white mt-20">
        <div class="px-4 xl:pl-16">
            <div class="mb-4 md:flex md:justify-between xl:pl-16">
                <h2 class="text-3xl font-bold text-white">Mes Projets Récents</h2>
                <div class="flex space-x-4 mb-4 mt-5 md:mt-0"> <button class="hover:text-primary capitalize"
                        v-for="category in ['all', 'web development', 'mobile app']" :key="category"
                        @click="selectedCategory = category"> {{ category }} </button> </div>
            </div>
            <ul class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
                data-aos="fade-right">
                <li v-for="project in filteredProjects" :key="project.id">
                    <div class="rounded-lg overflow-hidden bg-gray-900"> <!-- Image -->
                        <div class="h-40 md:h-48 relative group"
                            :style="{ backgroundImage: `url(${ project.image })`, backgroundSize: 'cover', backgroundPosition: 'center' }">
                        </div> <!-- Description -->
                        <div class="p-4 bg-gray-800">
                            <h3
                                class="text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                                {{ project.title }}</h3>
                            <p class="text-sm text-gray-300 line-clamp-3">{{ project.description }}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>
<script setup>
import { ref, computed } from 'vue';
import Rotten from '../assets/rottenmovie.png';
const projects = ref([
    {
        id: 1,
        category: 'web development',
        image: Rotten,
        title: 'Rotten Movie',
        description: 'C\'est une plateforme qui offre une expérience complète pour les cinéphiles. Les utilisateurs peuvent créer un compte, explorer une liste de films, enregistrer leurs favoris et partager leurs opinions en commentant les films.', technologies: ['Nextjs', 'MongoDB', 'TMDB API'],
        technologies: ['Nextjs', 'MongoDB', 'TMDB API'],
    },
    {
        id: 2,
        category: 'web development',
        image: '/src/assets/yowl.png',
        title: 'Yowl',
        description: 'Cette plateforme offre un espace d\'échange où les utilisateurs peuvent partager des liens provenant de diverses plateformes et engager des discussions enrichissantes avec la communauté autour de chaque contenu partagé.',
        technologies: ['Laravel', 'Vuejs', 'Mysql'],
    },
    {
        id: 3,
        category: 'web development',
        image: '/src/assets/showtime.png',
        title: 'ShowTime',
        description: 'Cette plateforme permet aux utilisateurs de voir des publications de concerts, s\'enregistrer et se connecter, afin de faire une reservation pour les concerts à venir.',
        technologies: ['Nestjs', 'Hbs', 'MongoDB'],
    },
    {
        id: 4,
        category: 'web development',
        image: '/src/assets/freeads.png',
        title: 'FreeAds',
        description: 'Cette plateforme e-commerce, les utilisateurs peuvent placer des commandes et recevoir des notifications.',
        technologies: ['Laravel', 'Vuejs', 'Mysql'],
    },
    {
        id: 5,
        category: 'mobile app',
        image: '/src/assets/mobilreact.jpeg',
        title: 'Epicture',
        description: 'c\'est une application conçu avec l\'api de trello, elle permet de gérer des tâches et des projets de manière collaborative.',
        technologies: ['React Native', 'Trello API'],
    },
    {
        id: 6,
        category: 'mobile app',
        image: '/src/assets/shopverse.jpeg',
        title: 'ShopVerse',
        description: 'c\'est une application e-commerce mobile, permet aux vendeurs de créer des boutiques et gérer leurs produits. les clients peuvent également parcourir les produits et effectuer des achats.',
        technologies: ['Flutter', 'Firebase'],
    },
]);

const selectedCategory = ref('all');

const filteredProjects = computed(() => {
    if (selectedCategory.value === 'all') {
        return projects.value;
    }
    return projects.value.filter(p => p.category.toLowerCase() === selectedCategory.value.toLowerCase());
});
</script>
