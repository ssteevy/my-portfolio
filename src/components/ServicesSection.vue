<template>
    <section class="text-white mt-20" id="services">
        <div class="px-4 xl:pl-16">
            <h2 class="text-3xl underline font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500 mb-2">Services</h2>
        </div>
        <div class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
            <div v-for="service in services" :key="service.id" data-aos="fade-up"
                class="px-8 py-12 rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]">
                <div class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                    <img :src="service.icon" :alt="`Icône ${service.name}`">
                </div>
                <div class="text-center">
                    <h3 class="pt-8 text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary lg:text-xl">
                        {{ service.name }}
                    </h3>
                    <p class="text-gray-300 pt-4 text-sm group-hover:text-white md:text-base">
                        {{ service.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
const services = ref([
    {
        id: 1,
        icon: 'https://img.icons8.com/ios-filled/100/ffffff/google-code.png',
        name: 'Web developpement',
        description: 'Creation of modern and responsive websites tailored to your needs!',
    },
    {
        id: 2,
        icon: 'https://img.icons8.com/ios-filled/100/ffffff/developer-mode.png',
        name: 'Mobile developpement',
        description: 'Design of intuitive and attractive mobile applications.',
    },
    {
        id: 3,
        icon: 'https://img.icons8.com/ios-filled/100/ffffff/network-cable.png',
        name: 'Network services',
        description: 'Installation and maintenance of high-performance cable networks.',
    },
]);
</script>