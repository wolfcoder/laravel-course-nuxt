// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // modules
    modules: [ '@vueuse/nuxt',"@nuxtjs/tailwindcss", "@formkit/nuxt"],
    css: ["@/assets/main.css"],
    tailwindcss: {
        config: {
            content: ["./node_modules/laravel-vue-pagination/**/*.vue"],
        },
    },
    runtimeConfig: {
        public: {
            appURL: "http://laravel-course-backend.test",
        },
    },

})
