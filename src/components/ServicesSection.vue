<template>
    <section class="text-white mt-20" id="services">
        <div class="px-4 xl:pl-16">
            <h2 class="text-3xl underline font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500 mb-2">{{ t.services.title }}</h2>
        </div>
        <div class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
            <div v-for="service in services" :key="service.id" data-aos="fade-up"
                class="px-8 py-12 rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] group cursor-pointer
                       transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 hover:border-primary/50">
                <div class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28 transform transition-transform duration-300 group-hover:scale-110">
                    <img :src="service.icon" :alt="`Icône ${service.name}`">
                </div>
                <div class="text-center">
                    <h3 class="pt-8 text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500 lg:text-xl">
                        {{ service.name }}
                    </h3>
                    <p class="text-gray-300 pt-4 text-sm group-hover:text-white md:text-base transition-colors duration-300">
                        {{ service.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const { t } = useLanguage();

const services = computed(() => [
    {
        id: 1,
        icon: 'https://img.icons8.com/ios-filled/100/ffffff/google-code.png',
        name: t.value.services.webDev,
        description: t.value.services.webDevDesc,
    },
    {
        id: 2,
        icon: 'https://img.icons8.com/ios-filled/100/ffffff/developer-mode.png',
        name: t.value.services.mobileDev,
        description: t.value.services.mobileDevDesc,
    },
    {
        id: 3,
        icon: 'https://img.icons8.com/ios-filled/100/ffffff/network-cable.png',
        name: t.value.services.networkAdmin,
        description: t.value.services.networkAdminDesc,
    },
]);
</script>