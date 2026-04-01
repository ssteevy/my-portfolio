<template>
    <section class="text-white mt-18" id="skills">
        <div class="absolute right-0 top-[110rem] h-full w-full justify-end z-0">
            <span class="flex opacity-20">
                <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
                <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
            </span>
        </div>
        <div class="relative flex flex-col md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-10">
            <div class="mb-8 w-full"> 
                <h2 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500 text-left md:text-center">
                    {{ t.skills.title }}
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">{{ t.skills.skills }}</span>
                </h2>
                <div class="mt-8" v-for="skill in Skills" :key="skill.id">
                    <div class="flex items-end justify-between" data-aos="fade-right">
                        <h4 class="font-semibold uppercase text-white">
                            {{ skill.name }}
                        </h4>
                    </div>
                    <div class="mt-2 h-2 w-full bg-[#131d30] rounded-full overflow-hidden">
                        <div class="h-2 rounded-full bg-gradient-to-r from-primary to-pink-500 transition-all duration-1000 ease-out" 
                             :style="`width: ${skill.level}`"></div>
                    </div>
                </div>
            </div>

            <div data-aos="flip-left" class="w-full">
                <h2 class="text-3xl font-bold text-white text-left md:text-center md:mt-0 mt-8">
                    {{ t.skills.title }}
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">{{ t.skills.experience }}</span>
                </h2>
                <div class="space-y-8 py-8" data-aos="fade-left">
                    <div v-for="element in Experiences" :key="element.id"
                        class="transform transition-all duration-300 hover:scale-105">
                        <div class="flex items-center rounded-xl p-4 bg-[#111a3e] shadow-lg border border-[#1f1641]
                                   hover:shadow-2xl hover:shadow-primary/30 hover:border-primary/50 cursor-pointer transition-all duration-300">
                            <div class="w-1/6 md:w-1/4 flex-shrink-0">
                                <img src="https://img.icons8.com/ios-filled/100/ffffff/briefcase.png" 
                                     alt="icone de travail" 
                                     class="w-10 h-10 md:w-16 md:h-16 transform transition-transform duration-300 hover:scale-110">
                            </div>
                            <div class="w-5/6 pl-4">
                                <h3
                                    class="text-xl md:text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
                                    {{ element.role }}</h3>
                                <p class="text-white text-sm md:text-base">{{ element.company }}</p>
                                <p class="text-gray-400 text-xs md:text-sm">{{ element.year }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const { t } = useLanguage();

const commonLevel = '80%'; 
const Skills = ref([
    { id: 1, name: 'Php, Laravel', level: commonLevel },
    { id: 2, name: 'JavaScript', level: commonLevel },
    { id: 3, name: 'Python', level: commonLevel },
    { id: 4, name: 'Mysql, MongoDB, Firebase', level: commonLevel },
    { id: 5, name: 'Vue.js', level: commonLevel },
    { id: 6, name: 'HTML, CSS, Tailwind CSS, Bootstrap', level: commonLevel },
    { id: 7, name: 'NestJs, Flask', level: commonLevel },
    { id: 8, name: 'NextJs, ReactJs', level: commonLevel },
    { id: 9, name: 'React native, Flutter', level: commonLevel },
]);

const Experiences = computed(() => [
    {
        id: 1,
        role: t.value.skills.experiences.dev,
        company: t.value.skills.experiences.beg,
        year: '2026',
    },
    {
        id: 2,
        role: t.value.skills.experiences.dev,
        company: t.value.skills.experiences.epitech,
        year: '2025',
    },
    {
        id: 3,
        role: t.value.skills.experiences.operator,
        company: t.value.skills.experiences.company,
        year: '2016 - 2018',
    },
    {
        id: 4,
        role: t.value.skills.experiences.assistant,
        company: t.value.skills.experiences.company,
        year: '2018 - 2019',
    },
    {
        id: 5,
        role: t.value.skills.experiences.technician,
        company: t.value.skills.experiences.company,
        year: '2020 - 2025',
    },
]);
</script>