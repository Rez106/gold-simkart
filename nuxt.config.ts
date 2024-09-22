// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-09-04",
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "vuetify-nuxt-module",
    "@vueuse/nuxt",
    "@nuxtjs/leaflet",
    "@pinia/nuxt",
    "@nuxt/eslint",
  ],
  eslint: {
    checker: true,
  },
  pinia: {
    storesDirs: ["./store/**"],
  },
  css: ["@/assets/css/main.css"],
  vuetify: {
    vuetifyOptions: {
      ssr: {
        clientWidth: 600,
      },
      directives: "Ripple",
      locale: {
        locale: "fa",
        fallback: "en",
      },
      icons: {
        defaultSet: "mdi-svg",
      },
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/logo.svg",
        },
      ],
    },
  },
  dir: {
    public: "./public",
    assets: "./src/assets",
  },
  tailwindcss: {
    cssPath: "./assets/css/main.css",
  },
});
