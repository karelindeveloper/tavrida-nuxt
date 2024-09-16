export default defineNuxtConfig({
  head: {
     link: [
       {
         rel: 'preload',
         href: '/fonts/DrukWideCyr.woff2',
         as: 'font',
         type: 'font/woff2',
         crossorigin: 'anonymous'
       }
     ]
   },

  css: [
     '@/assets/css/fonts.css'
  ],

  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxt/icon'
  ],

  googleFonts: {
     families: {
        Montserrat: [400, 700],
      }
   },

  compatibilityDate: '2024-09-12'
})