<template>
    <button v-if="isVisible" @click="scrollToTop" 
        class="fixed bottom-8 right-8 bg-gradient-to-r from-primary to-pink-500 text-white
        rounded-full w-14 h-14 flex items-center justify-center shadow-lg cursor-pointer 
        transition-all duration-300 hover:scale-110 hover:shadow-xl z-50"
        aria-label="Retour en haut">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';
    const isVisible = ref(false);
    const handleScroll = () => {
        isVisible.value = window.scrollY > 300;
    }
    const scrollToTop = () => {
        window.scrollTo({top:0, behavior:'smooth'})
    }
    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    })
</script>