<template>
    <section class="text-white mt-18" id="about">
        <div class="absolute z-0 top-[93rem] inset-x-0 h-64 flex items-start">
            <div class="h-24 w-64 bg-gradient-to-br from-primary via-secondary blur-2xl to-[#570cac] opacity-20"></div>
        </div>
        <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-1">
            <div data-aos="flip-right">
                <h2 class="text-3xl font-bold text-white underline text-left mb-8">Mon parcours Educatifs</h2>
                <div class="space-y-8 py-8">
                    <div v-for="element in education" :key="element.id"
                        class="flex items-center md:w-[80%] w-full rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]">
                        <div class="w-1/4">
                            <img src="https://img.icons8.com/ios-glyphs/60/ffffff/graduation-cap--v1.png" alt="graduation-cap--v1">
                        </div>
                        <div class="w-3/4 pl-4">
                            <h3 class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl">
                                {{ element.school }}
                            </h3>
                            <p class="text-white">{{ element.program }}</p>
                            <p class="text-white">{{ element.year }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full" data-aos="flip-right">
                <h2 class="text-3xl font-bold text-white md:text-center text-left mb-4">Plus
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">d'infos</span>
                </h2>
                <p class="text-base lg:text-lg mt-8 py-8">
                    Ma passion pour la technologie et le développement web m'a conduit à 
                    poursuivre des études en tant que Développeur Full Stack à la Coding Academy EPITECH,
                    où j'acquiers des compétences avancées en programmation, conception de sites web et 
                    developpement mobile. Parallèlement, j'ai obtenu un diplôme de Technicien de Réseaux 
                    Informatiques au Centre de Formation Professionnelle d'Haïti (CFPH), renforçant ainsi 
                    ma compréhension des infrastructures réseau et de la gestion des systèmes informatiques. 
                    Mon parcours éducatif diversifié me permet d'aborder les défis technologiques avec une 
                    perspective globale et une expertise technique solide.
                </p>
                <div class="grid grid-cols-3 gap-4 max-w-lg pt-8">
                    <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3">
                        <h3 class="text-white font-bold text-xl sm:text-2xl lg-text-3xl">+10</h3>
                        <p class="text-sm sm:text-base text-gray-300">Projets</p>
                    </div>
                    <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3">
                        <h3 class="text-white font-bold text-xl sm:text-2xl lg-text-3xl">+9</h3>
                        <p class="text-sm sm:text-base text-gray-300">Années d'expériences</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
const education = ref([
    {
        id: 1,
        school: 'Coding Academy EPITECH',
        program: 'Developper Full Stack',
        year: '2025',
    },
    {
        id: 2,
        school: 'Centre de Formation Professionnelle d\'Haïti (CFPH)',
        program: 'Technicien de Réseaux Informatiques',
        year: '2014-2016',
    },
])
</script>