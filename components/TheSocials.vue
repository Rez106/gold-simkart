<template>
  <div class="flex items-center gap-3">
    <nuxt-link
      to="https://www.instagram.com/mozayede_simkart?igsh=YjYxbTcwMDh2ZDB5"
      target="_blank"
      class="bg-main-black-400 rounded-full p-2 duration-300 hover:bg-red-500 active:bg-red-500"
    >
      <v-icon :icon="mdiInstagram" class="text-main-black-200" size="x-large" />
    </nuxt-link>
    <nuxt-link
      to="https://t.me/Gold_simkart"
      target="_blank"
      class="bg-main-black-400 rounded-full p-2 duration-300 hover:bg-sky-500 active:bg-sky-500"
    >
      <v-img src="/telegram.svg" width="33" height="33" alt="telegramSVG" />
    </nuxt-link>
  </div>
</template>

<script setup>
  import { mdiInstagram } from "@mdi/js";
</script>

<style lang="scss" scoped></style>
