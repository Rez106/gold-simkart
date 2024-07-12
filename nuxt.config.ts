// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "vuetify-nuxt-module",
    "@vueuse/nuxt",
    "@nuxtjs/leaflet",
    "@pinia/nuxt",
  ],
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
