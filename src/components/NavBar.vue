<template>
    <header class="flex justify-between items-center p-6 bg-opacity-50 relative z-20">
        <!-- Mobile Toggle button -->
        <div class="md:hidden z-30">
            <button type="button" 
            class="flex h-10 w-10 flex-col items-center justify-center gap-1.5 focus:outline-none transition-transform duration-300 hover:scale-110"
            @click="isMenuOpen = !isMenuOpen"
            aria-label="Menu de navigation">
                <span
                    :class="['block h-0.5 w-6 bg-white transition-all duration-300', isMenuOpen ? 'translate-y-2 rotate-45' : '']">
                </span>
                <span
                    :class="['block h-0.5 w-6 bg-white transition-all duration-300', isMenuOpen ? 'opacity-0' : 'opacity-100']">
                </span>
                <span
                    :class="['block h-0.5 w-6 bg-white transition-all duration-300', isMenuOpen ? '-translate-y-2 -rotate-45' : '']">
                </span>
            </button>
        </div>

        <!-- Mobile Language Switcher (outside menu) -->
        <div class="md:hidden z-30">
            <button
                type="button"
                @click="toggleLanguage"
                class="flex items-center gap-2 text-white transition hover:text-primary ease-linear text-base font-medium px-3 py-2 rounded-lg border border-primary/30 hover:border-primary hover:bg-primary/10"
                :aria-label="currentLanguage === 'fr' ? 'Switch to English' : 'Passer en Français'">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 12H22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="uppercase">{{ currentLanguage === 'fr' ? 'EN' : 'FR' }}</span>
            </button>
        </div>

    <!-- NavBar Link -->
    <nav
    :class="['fixed inset-0 z-20 flex flex-col items-center justify-start pt-28 bg-[#111827] md:relative md:bg-transparent md:flex md:justify-between md:flex-row md:pt-0 transition-all duration-300', isMenuOpen ? 'opacity-100 visible':'opacity-0 invisible md:opacity-100 md:visible']">
            <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-5 md:space-y-0">
                <li v-for="item in Menu" :key="item.name" class="transform transition-all duration-300 hover:scale-110">
                    <a :href="item.href"
                        class="block text-white transition hover:text-primary ease-linear text-2xl md:text-lg font-medium"
                        @click="scrollToSection(item.href)">
                        {{ item.name }}
                    </a>
                </li>

                <!-- Language Switcher -->
                <li class="hidden md:block transform transition-all duration-300 hover:scale-110">
                    <button 
                        @click="toggleLanguage"
                        class="flex items-center gap-2 text-white transition hover:text-primary ease-linear text-2xl md:text-lg font-medium px-3 py-2 rounded-lg border border-primary/30 hover:border-primary hover:bg-primary/10"
                        :aria-label="currentLanguage === 'fr' ? 'Switch to English' : 'Passer en Français'">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 12H22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span class="uppercase">{{ currentLanguage === 'fr' ? 'EN' : 'FR' }}</span>
                    </button>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script setup>
import { ref, computed } from 'vue';
import { useLanguage } from '@/composables/useLanguage';

const { currentLanguage, setLanguage, t } = useLanguage();

const Menu = computed(() => [
    { name: t.value.nav.services, href: '#services' },
    { name: t.value.nav.about, href: '#about' },
    { name: t.value.nav.skills, href: '#skills' },
    { name: t.value.nav.projects, href: '#projects' },
    { name: t.value.nav.contact, href: '#contact' },
]);

const isMenuOpen = ref(false);

const scrollToSection = (href) => {
    isMenuOpen.value = false;
    const section = document.querySelector(href);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

const toggleLanguage = () => {
    const newLang = currentLanguage.value === 'fr' ? 'en' : 'fr';
    setLanguage(newLang);
    isMenuOpen.value = false;
}
</script>