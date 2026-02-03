<template>
    <section class="text-white mt-18" id="about">
        <div class="absolute z-0 top-[93rem] inset-x-0 h-64 flex items-start">
            <div class="h-24 w-64 bg-gradient-to-br from-primary via-secondary blur-2xl to-[#570cac] opacity-20"></div>
        </div>
        <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 z-10">
            <div data-aos="flip-right">
                <h2
                    class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500 underline text-left mb-8">
                    {{ t.about.title }}</h2>
                <div class="space-y-8 py-8">
                    <div v-for="element in education" :key="element.id"
                        class="flex items-center md:w-[80%] w-full rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]
                               transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 hover:border-primary/50 cursor-pointer">
                        <div class="w-1/4 p-4 flex justify-center">
                            <img src="https://img.icons8.com/ios-glyphs/60/ffffff/graduation-cap--v1.png"
                                :alt="`Icône de diplôme pour ${element.school}`"
                                class="transform transition-transform duration-300 hover:scale-110">
                        </div>
                        <div class="w-3/4 pl-4 pr-4 py-4">
                            <h3
                                class="text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500 lg:text-xl">
                                {{ element.school }}
                            </h3>
                            <p class="text-white mt-1">{{ element.program }}</p>
                            <p class="text-gray-400 text-sm mt-1">{{ element.year }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full" data-aos="flip-right">
                <h2
                    class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500 md:text-center text-left mt-4">
                    {{ t.about.moreInfo }}
                </h2>
                <p class="text-base lg:text-lg mt-4 py-8">
                    {{ t.about.description }}
                </p>
                <div class="grid grid-cols-2 gap-4 max-w-lg pt-8">
                    <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3
                               transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 hover:border-primary/50 cursor-pointer">
                        <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">+6</h3>
                        <p class="text-sm sm:text-base text-gray-300">{{ t.about.projects }}</p>
                    </div>
                    <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3
                               transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 hover:border-primary/50 cursor-pointer">
                        <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">+9</h3>
                        <p class="text-sm sm:text-base text-gray-300">{{ t.about.experience }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const { t } = useLanguage();

const education = computed(() => [
    {
        id: 1,
        school: t.value.about.epitech,
        program: t.value.about.epitechProgram,
        year: '2025',
    },
    {
        id: 2,
        school: t.value.about.cfph,
        program: t.value.about.cfphProgram,
        year: '2014-2016',
    },
]);
</script>