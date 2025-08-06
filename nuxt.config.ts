export default defineNuxtConfig({
    ssr: true,
    css: ['@/assets/css/tailwind.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})