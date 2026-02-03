<template>
    <footer class="mt-20 z-10 border-t border-[#33353F] text-white bg-[#0a0e1a]">
        <div class="container mx-auto p-8 md:p-12">
            <!-- Section principale du footer -->
            <div class="flex flex-col md:flex-row justify-between items-center gap-6">
                <!-- Logo et nom -->
                <div class="text-center md:text-left">
                    <div class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500 text-2xl md:text-3xl font-bold mb-2">
                        {{ t.footer.name }}
                    </div>
                    <p class="text-gray-400 text-sm">{{ t.footer.title }}</p>
                </div>

                <!-- Liens sociaux -->
                <div class="flex gap-4 items-center">
                    <a href="https://www.linkedin.com/in/steve-duvers-071062378/" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="transform transition-all duration-300 hover:scale-110 hover:opacity-80"
                       aria-label="LinkedIn">
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" class="w-8 h-8">
                    </a>
                    <a href="mailto:steve.duvers@epitech.eu" 
                       class="transform transition-all duration-300 hover:scale-110 hover:opacity-80"
                       aria-label="Email">
                        <img src="https://img.icons8.com/metro/50/ffffff/new-post.png" alt="Email" class="w-8 h-8">
                    </a>
                    <a href="https://wa.me/22901577571" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="transform transition-all duration-300 hover:scale-110 hover:opacity-80"
                       aria-label="WhatsApp">
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png" alt="WhatsApp" class="w-8 h-8">
                    </a>
                </div>
            </div>

            <!-- Copyright -->
            <div class="mt-8 pt-6 border-t border-[#33353F] text-center">
                <p class="text-slate-500 text-sm">
                    © {{ new Date().getFullYear() }} {{ t.footer.rights }}
                </p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()
</script>