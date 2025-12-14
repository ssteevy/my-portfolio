<template>
    <section class="text-white mt-18" id="about">
        <div class="absolute z-0 top-[93rem] inset-x-0 h-64 flex items-start">
            <div class="h-24 w-64 bg-gradient-to-br from-primary via-secondary blur-2xl to-[#570cac] opacity-20"></div>
        </div>
        <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-10">
            <div data-aos="flip-right">
                <h2 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500 underline text-left mb-8">My Educational Background</h2>
                <div class="space-y-8 py-8">
                    <div v-for="element in education" :key="element.id"
                        class="flex items-center md:w-[80%] w-full rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]">
                        <div class="w-1/4">
                            <img src="https://img.icons8.com/ios-glyphs/60/ffffff/graduation-cap--v1.png" :alt="`Icône de diplôme pour ${element.school}`">
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
                <h2 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary md:text-center text-left mt-4">More info
                </h2>
                <p class="text-base lg:text-lg mt-4 py-8">
                    My passion for technology and web development led me to pursue studies as a 
                    Full Stack Developer at the Coding Academy EPITECH, where I am acquiring 
                    advanced skills in programming, web design, and mobile development. At the 
                    same time, I obtained a Computer Network Technician diploma from the Centre 
                    de Formation Professionnelle d’Haïti (CFPH), strengthening my understanding 
                    of network infrastructures and IT systems management. This diverse educational 
                    background allows me to approach technological challenges with a global 
                    perspective and strong technical expertise.
                </p>
                <div class="grid grid-cols-2 gap-4 max-w-lg pt-8">
                    <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3">
                        <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">+6</h3>
                        <p class="text-sm sm:text-base text-gray-300">Projects</p>
                    </div>
                    <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3">
                        <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">+9</h3>
                        <p class="text-sm sm:text-base text-gray-300">Years of Experience</p>
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
        program: 'Full Stack Developper',
        year: '2025',
    },
    {
        id: 2,
        school: 'Centre de Formation Professionnelle d\'Haïti (CFPH)',
        program: 'Computer network technician',
        year: '2014-2016',
    },
])
</script>