<template>
  <header class="w-full bg-main-black-700">
    <nuxt-layout name="container" class="max-sm:hidden">
      <div class="w-full flex items-center justify-center mb-3">
        <!-- <navbar-menu class="-mt-1" /> -->
        <the-logo class="!mt-2" />
      </div>
      <v-divider />
      <!-- <div class="w-full flex items-center justify-between py-3">
        <div class="flex gap-3 items-center text-main-black-200 text-sm">
          <nuxt-link to="/" :disabled="true" class="cursor-not-allowed"
            >قیمت روز سیم‌کارت</nuxt-link
          >
          <nuxt-link to="/" :disabled="true" class="cursor-not-allowed"
            >سوالات متداول</nuxt-link
          >
          <nuxt-link to="/" :disabled="true" class="cursor-not-allowed"
            >راهنما</nuxt-link
          >
        </div>
      </div> -->
    </nuxt-layout>
    <mobile-header />
    <!-- <mobile-menu /> -->
  </header>
</template>

<script setup>
  import { mdiPhone } from "@mdi/js";
</script>

<style lang="scss" scoped></style>
