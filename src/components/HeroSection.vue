<template>
    <section class="relative w-full" data-aos="zoom-in-up">
        <div class="absolute top-0 inset-x-0 h-64 flex items-start">
            <div class="h-24 w-2/3 bg-gradient-to-br from-[#570cac] blur-2xl invisible opacity-40"></div>
            <div class="h-20 w-3/5 bg-gradient-to-r from-[#670ccf] opacity-40 blur-2xl"></div>
        </div>

        <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
            <div class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w none max:w-2xl md:max-w-3xl mx-auto">

                <!-- Texte -->
                <div class="lg:py-6">
                    <div class="text-center lg:text-left">
                        <h1 class="pt-2 text-white font-bold text-2xl md:text-2xl lg:text-3xl">
                            Bonjour 👋​! Je suis 
                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">
                                Steve Duvers
                            </span>
                        </h1>
                        <p class="text-gray-300 font-semibold">
                            Développeur Full Stack & Technicien de Réseaux Informatiques
                        </p>
                    </div>

                    <p class="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl">
                        Développeur formé à la Coding Academy Epitech,
                        avec une solide base en réseaux informatiques et
                        une forte passion pour les technologies numériques.
                        Motivé, curieux et orienté solutions, je souhaite
                        mettre mes compétences au service d’une équipe
                        innovante et contribuer à des projets à fort impact
                        tout en continuant à progresser dans le domaine du
                        développement et du numérique.
                    </p>

                    <div class="items-center gap-3 pt-9 sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
                        <button class="border border-primary px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
                            <div class="hover:scale-105 transition-all ease-in-out flex justify-center items-center relative">
                                <svg class="download-icon" width="18" height="22" viewBox="0 0 18 22" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path class="download-arrow" d="M13 9L9 13M9 13L5 9M9 13V1"
                                          stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                                          stroke="#f59e0b" stroke-width="2" stroke-linecap="round" />
                                </svg>

                                <a href="/mon-cv.pdf" download="mon-cv.pdf" class="pl-2 text-primary">
                                    Télécharger mon CV
                                </a>
                            </div>
                        </button>
                    </div>
                </div>

                <!-- Image -->
                <div class="lg:h-full md:flex">
                    <div class="flex w-full h-96 min-h-[24rem] lg:w-full lg:h-full items-center relative">
                        <div class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl"></div>
                        
                        <div class="absolute h-full z-10 p-2 -translate-y-1/2 top-1/2 lg:right-3 md:right-40 sm:right-16 rounded-full shadow-lg border border-primary">
                            <img src="projects/mypic.jpeg" alt="Steve" width="500" height="auto" loading="lazy"
                            class="w-full h-full rounded-full object-cover"
                            >

                            <!-- 🔥 Chemin corrigé -->
                            <img src="/projects/mypic.jpeg"                                  alt="Steve"
                                 width="500"
                                 height="auto"
                                 loading="lazy"
                                 class="w-full h-full rounded-full object-cover" />
 (fix: add fix LatestProjects and HeroSection)
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
</script>
