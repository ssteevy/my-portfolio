<template>
    <section class="text-white mt-20" id="projects">
        <div class="px-4 xl:pl-16">
            <div class="mb-4 md:flex md:justify-between xl:pl-16">
                <h2 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">{{ t.projects.title }}</h2>
                <div class="flex space-x-4 mb-4 mt-5 md:mt-0"> 
                    <button 
                        v-for="category in categories" 
                        :key="category.value"
                        @click="selectedCategory = category.value"
                        :class="[
                            'capitalize px-4 py-2 rounded-full transition-all duration-300',
                            selectedCategory === category.value 
                                ? 'bg-gradient-to-r from-primary to-pink-500 text-white shadow-lg transform scale-105' 
                                : 'text-gray-300 hover:text-primary hover:scale-105'
                        ]"> 
                        {{ category.label }} 
                    </button> 
                </div>
            </div>
            <ul class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3"
                data-aos="fade-right">
                <li v-for="project in filteredProjects" :key="project.id" 
                    class="transform transition-all duration-300 hover:scale-105">
                    <div class="rounded-lg overflow-hidden bg-gray-900 shadow-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300"> 
                        <!-- Image -->
                        <div class="h-40 md:h-48 relative group overflow-hidden"
                            :style="{ backgroundImage: `url(${ project.image })`, backgroundSize: 'cover', backgroundPosition: 'center' }">
                            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div> 
                        <!-- Description -->
                        <div class="p-4 bg-gray-800">
                            <h3
                                class="text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500 mb-2 transition-all duration-300">
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
import { useLanguage } from '@/composables/useLanguage';
import Rotten from '../assets/rottenmovie.png';
import Yowl from '../assets/yowl.png';
import ShowTime from '../assets/showtime.png';
import FreeAds from '../assets/freeads.png';
import Mobile from '../assets/Mobile.jpeg';
import ShopVerse from '../assets/Shopverse.jpeg';

const { t } = useLanguage();

const categories = computed(() => [
    { value: 'all', label: t.value.projects.all },
    { value: 'web development', label: t.value.projects.webDev },
    { value: 'mobile app', label: t.value.projects.mobileApp },
]);

const projects = computed(() => [
    {
        id: 1,
        category: 'web development',
        image: Rotten,
        title: t.value.projects.rottenMovie.title,
        description: t.value.projects.rottenMovie.description,
        technologies: ['Nextjs', 'MongoDB', 'TMDB API'],
    },
    {
        id: 2,
        category: 'web development',
        image: Yowl,
        title: t.value.projects.yowl.title,
        description: t.value.projects.yowl.description,
        technologies: ['Laravel', 'Vuejs', 'Mysql'],
    },
    {
        id: 3,
        category: 'web development',
        image: ShowTime,
        title: t.value.projects.showtime.title,
        description: t.value.projects.showtime.description,
        technologies: ['Nestjs', 'Hbs', 'MongoDB'],
    },
    {
        id: 4,
        category: 'web development',
        image: FreeAds,
        title: t.value.projects.freeads.title,
        description: t.value.projects.freeads.description,
        technologies: ['Laravel', 'Vuejs', 'Mysql'],
    },
    {
        id: 5,
        category: 'mobile app',
        image: Mobile,
        title: t.value.projects.epicture.title,
        description: t.value.projects.epicture.description,
        technologies: ['React Native', 'Trello API'],
    },
    {
        id: 6,
        category: 'mobile app',
        image: ShopVerse,
        title: t.value.projects.shopverse.title,
        description: t.value.projects.shopverse.description,
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
