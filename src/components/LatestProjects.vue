<template>
    <section class="text-white mt-20" id="projects">
        <div class="px-4 xl:pl-16">
            <div class="mb-4 md:flex md:justify-between xl:pl-16">
                <h2 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">My recent projects</h2>
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
import Yowl from '../assets/yowl.png';
import ShowTime from '../assets/showtime.png';
import FreeAds from '../assets/freeads.png';
import Mobile from '../assets/Mobile.jpeg';
import ShopVerse from '../assets/Shopverse.jpeg';
const projects = ref([
    {
        id: 1,
        category: 'web development',
        image: Rotten,
        title: 'Rotten Movie',
        description: 'It\'s a platform that offers a complete experience for film enthusiasts. Users can create an account, explore a list of films, save their favorites, and share their opinions by commenting on the movies.', technologies: ['Nextjs', 'MongoDB', 'TMDB API'],
        technologies: ['Nextjs', 'MongoDB', 'TMDB API'],
    },
    {
        id: 2,
        category: 'web development',
        image: Yowl,
        title: 'Yowl',
        description: 'This platform offers a space for exchange where users can share links from various platforms and engage in enriching discussions with the community around each piece of shared content.',
        technologies: ['Laravel', 'Vuejs', 'Mysql'],
    },
    {
        id: 3,
        category: 'web development',
        image: ShowTime,
        title: 'ShowTime',
        description: 'This platform allows users to view concert listings, register and log in, in order to make a reservation for upcoming concerts.',
        technologies: ['Nestjs', 'Hbs', 'MongoDB'],
    },
    {
        id: 4,
        category: 'web development',
        image: FreeAds,
        title: 'FreeAds',
        description: 'On this e-commerce platform, users can place orders and receive notifications.',
        technologies: ['Laravel', 'Vuejs', 'Mysql'],
    },
    {
        id: 5,
        category: 'mobile app',
        image: Mobile,
        title: 'Epicture',
        description: 'It is an application designed with the Trello API, it allows you to manage tasks and projects collaboratively.',
        technologies: ['React Native', 'Trello API'],
    },
    {
        id: 6,
        category: 'mobile app',
        image: ShopVerse,
        title: 'ShopVerse',
        description: 'It\'s a mobile e-commerce application that allows sellers to create stores and manage their products. Customers can also browse products and make purchases.',
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
