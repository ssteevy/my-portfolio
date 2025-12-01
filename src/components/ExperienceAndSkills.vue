<template>
    <section class="text-white mt-18" id="skills">
        <div class="absolute right-0 top-[110rem] h-full w-full justify-end">
            <span class="flex opacity-20">
                <span class="w-16 h-32 rounded-l-full flex bg-primary blur-2xl"></span>
                <span class="w-16 h-32 rounded-r-full flex bg-[#f88fc2] blur-2xl mt-14"></span>
            </span>
        </div>
        <div class="flex md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-1">
            <div class="max-w-sm mb-8">
                <h2 class="text-3xl font-bold text-white text-left">Mes
                    <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">compétences</span>
                </h2>
                <div class="mt-8" v-for="skill in Skills" :key="skill.id">
                    <div class="flex items-end justify-between" data-aos="fade-right">
                        <h4 class="font-semibold uppercase text-white">
                            {{ skill.name }}
                        </h4>
                    </div>
                    <div class="mt-2 h-1 w-full bg-[#131d30] rounded-full">
                        <div class="h-1 rounded-full bg-primary" :style="`width: ${skill.level}`"></div>
                    </div>
                </div>
            </div>
            <div data-aos="flip-letf">
                <h2 class="text-3xl font-bold text-white text-left md:text-center md:mt-0 mt-8">Mes
                    <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Expériences</span>
                </h2>
                <div class="space-y-8 py-8" data-aos="fade-left">
                    <div v-for="element in Experiences" :key="element.id">
                        <div class="flex items-center rounded-xl p-4 bg-[#111a3e] shadow-lg border border-[#1f1641]">
                            <div class="w-1/4">
                                <img src="https://img.icons8.com/ios-filled/100/ffffff/lawyer.png" alt="lawyer">
                            </div>
                            <div class="w-3/4 pl-4">
                                <h3
                                    class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                    {{ element.role }}</h3>
                                <p class="text-white">{{ element.company }}</p>
                                <p class="text-white">{{ element.year }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
const Skills = ref([
    { id: 1, name: 'Php, Laravel' },
    { id: 2, name: 'JavaScript' },
    { id: 3, name: 'Python' },
    { id: 4, name: 'Mysql, MongoDB, Firebase' },
    { id: 5, name: 'Vue.js' },
    { id: 6, name: 'HTML, CSS, Tailwind CSS, Bootstrap' },
    { id: 7, name: 'NestJs, Flask' },
    { id: 8, name: 'NextJs, ReactJs' },
    { id: 9, name: 'React native, Flutter' },
]);

const Experiences = ref([
    {
        id: 1,
        role: 'Developpeur Web et Mobile',
        company: 'Coding Academy EPITECH',
        year: '2025',
    },
    {
        id: 2,
        role: 'Operateur de saisie',
        company: 'Archives Nationales d\'Haïti',
        year: '2016 - 2018',
    },
    {
        id: 3,
        role: 'Aide technicien de maintenance',
        company: 'Archives Nationales d\'Haïti',
        year: '2018 - 2019',
    },
    {
        id: 4,
        role: 'Technicien de maintenance',
        company: 'Archives Nationales d\'Haïti',
        year: '2020 - 2025',
    },
])
</script>