<template>
  <div class="bg-[#111827] min-h-screen">
    <Suspense>
      <template #default>
        <div>
          <NavBar />
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <ExperienceAndSkills />
          <LatestProjects />
          <ContactSection />
          <Footer />
          <BackToTop />
        </div>
      </template>
      <template #fallback>
        <div class="flex justify-center items-center min-h-screen">
          <LoadingSpinner />
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import LoadingSpinner from './components/loadingSpinner.vue';

const NavBar = defineAsyncComponent(() => import('@/components/NavBar.vue'));
const HeroSection = defineAsyncComponent(() => import('@/components/HeroSection.vue'));
const ServicesSection = defineAsyncComponent(() => import('@/components/ServicesSection.vue'));
const AboutSection = defineAsyncComponent(() => import('@/components/AboutSection.vue'));
const ExperienceAndSkills = defineAsyncComponent(() => import('@/components/ExperienceAndSkills.vue'));
const LatestProjects = defineAsyncComponent(() => import('@/components/LatestProjects.vue'));
const ContactSection = defineAsyncComponent(() => import('@/components/ContactSection.vue'));
const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'));
const BackToTop = defineAsyncComponent(() => import('@/components/BackToTop.vue'));
//import HeroSection from '@/components/HeroSection.vue'
</script>

<style>
  * {
    scrollbar-width: thin;
    scrollbar-color: #7c3aed #111827;
  }

  /* Pour webkit browsers (Chrome, Safari, Edge) */
  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: #111827;
  }

  *::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #7c3aed, #ec4899);
    border-radius: 10px;
  }

  *::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #8b5cf6, #f472b6);
  }

  /* Smooth scroll pour toute la page */
  html {
    scroll-behavior: smooth;
  }
</style>