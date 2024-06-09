// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "vuetify-nuxt-module", "@vueuse/nuxt"],
  vuetify: {
    vuetifyOptions: {
      ssr: {
        clientWidth: 600,
      },
      directives: "Ripple",
      locale: {
        locale: "fa",
      },
    },
  },
});
