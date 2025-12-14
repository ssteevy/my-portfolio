<template>
    <section class="text-white mt-10" id="contact">
        <h2
            class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500 text-left mb-4 px-4 xl:pl-16">
            Let's talk</h2>
        <div class="grid md:grid-cols-2 gap-4 md:gap-8 relative px-4 xl:px-16 mt-8" data-aos="zoom-in-up">
            <!-- Section informations de contact -->
            <div class="order-2 md:order-1">
                <p class="text-[#adb7be] text-sm md:text-base mb-6">
                    A question? A project? Let's talk! 
                    I'm always open to new opportunities and collaborations. 
                    Whether you need a developer for your team or a partner
                    to bring your vision to life, I'm here to listen.
                </p>
                <div class="space-y-6">
                    <!-- Email EPITECH affiché publiquement -->
                    <div class="flex items-center">
                        <div
                            class="flex-shrink-0 p-2 bg-[#111a3e] w-12 h-12 flex justify-center items-center rounded-full border border-[#111a3e] backdrop-blur-sm">
                            <img src="https://img.icons8.com/metro/50/ffffff/new-post.png" alt="email" class="w-6 h-6">
                        </div>
                        <div class="ml-4">
                            <h4 class="font-semibold text-sm md:text-base">Email</h4>
                            <p class="text-[#adb7be] text-xs md:text-sm break-all">steve.duvers@epitech.eu</p>
                        </div>
                    </div>
                    <!-- WhatsApp -->
                    <div class="flex items-center">
                        <div
                            class="flex-shrink-0 p-2 bg-[#111a3e] w-12 h-12 flex justify-center items-center rounded-full border border-[#111a3e] backdrop-blur-sm">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png" alt="whatsapp"
                                class="w-6 h-6">
                        </div>
                        <div class="ml-4">
                            <h4 class="font-semibold text-sm md:text-base">Whatsapp</h4>
                            <p class="text-[#adb7be] text-xs md:text-sm">+229 01 57 75 71 39</p>
                        </div>
                    </div>
                    <!-- Appel -->
                    <div class="flex items-center">
                        <div
                            class="flex-shrink-0 p-2 bg-[#111a3e] w-12 h-12 flex justify-center items-center rounded-full border border-[#111a3e] backdrop-blur-sm">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" alt="phone"
                                class="w-6 h-6">
                        </div>
                        <div class="ml-4">
                            <h4 class="font-semibold text-sm md:text-base">Call</h4>
                            <p class="text-[#adb7be] text-xs md:text-sm">+229 01 90 42 60 36</p>
                        </div>
                    </div>
                    <!-- LinkedIn -->
                    <div class="flex items-center">
                        <div
                            class="flex-shrink-0 p-2 bg-[#111a3e] w-12 h-12 flex justify-center items-center rounded-full border border-[#111a3e] backdrop-blur-sm">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="linkedin"
                                class="w-6 h-6">
                        </div>
                        <div class="ml-4">
                            <a href="https://www.linkedin.com/in/steve-duvers-071062378/">
                                <h4 class="font-semibold text-sm md:text-base">LinkedIn</h4>
                                <p class="text-[#adb7be] text-xs md:text-sm break-all">linkedin.com/in/steve-duvers</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Formulaire de contact -->
            <div
                class="order-1 md:order-2 bg-[#111a3e] rounded-2xl border border-[#111a3e] backdrop-blur-sm p-4 md:p-6">
                <form action="https://formspree.io/f/mqarnwab" method="POST" @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">
                    <!-- Email -->
                    <div>
                        <label for="email" class="text-white block mb-2 text-sm font-medium">Your email *</label>
                        <input type="email" id="email" v-model="formData.email"
                            class="bg-blue-950 text-white text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-primary outline-none transition"
                            placeholder="your.email@gmail.com" required>
                    </div>
                    <!-- Objet -->
                    <div>
                        <label for="subject" class="text-white block mb-2 text-sm font-medium">Subject *</label>
                        <input type="text" id="subject" v-model="formData.subject"
                            class="bg-blue-950 text-white text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-primary outline-none transition"
                            placeholder="Subject of your message" required>
                    </div>
                    <!-- Message -->
                    <div>
                        <label for="message" class="text-white block mb-2 text-sm font-medium">Message *</label>
                        <textarea id="message" v-model="formData.message" rows="5"
                            class="bg-blue-950 text-white text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-primary outline-none transition resize-none"
                            placeholder="Let's talk" required></textarea>
                    </div>
                    <!-- Bouton d'envoi -->
                    <button type="submit" :disabled="isSubmitting"
                        class="w-full px-6 py-3 rounded-full text-white bg-primary border-2 border-transparent hover:bg-opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
                        <span v-if="!isSubmitting">Send</span>
                        <span v-else class="flex items-center">
                            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                            Sending in progress…
                        </span>
                    </button>
                    <!-- Message de confirmation -->
                    <div v-if="submitMessage"
                        :class="submitSuccess ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'"
                        class="text-sm text-center p-3 rounded-lg">
                        {{ submitMessage }}
                    </div>
                </form>
            </div>
        </div>
        <div
            class="bg-gradient-to-tr opacity-25 from-[#570cac] to-primary blur-2xl h-20 w-80 absolute -top-1/2 -left-4 transform -translate-x-2/3 -translate-y-1/2 pointer-events-none">
        </div>
    </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formData = reactive({
    email: '',
    subject: '',
    message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

// Utilisez l'ID Formspree correct
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqarnwab'

const handleSubmit = async () => {
    isSubmitting.value = true
    submitMessage.value = ''
    submitSuccess.value = false

    try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
                _replyto: formData.email
            })
        })

        if (!response.ok) throw new Error('Error during sending')

        submitMessage.value = '✓ Message sent successfully! I’ll get back to you soon.'
        submitSuccess.value = true

        formData.email = ''
        formData.subject = ''
        formData.message = ''

        setTimeout(() => {
            submitMessage.value = ''
        }, 5000)
    } catch (error) {
        submitMessage.value = '✗ Error while sending. Please contact me directly at steve.duvers@epitech.eu'
        submitSuccess.value = false
        console.error('Erreur:', error)
    } finally {
        isSubmitting.value = false
    }
}
</script>