<template>
  <header class="w-full bg-main-black-700">
    <nuxt-layout name="container" class="max-sm:hidden">
      <div class="w-full flex items-center justify-between mb-3">
        <navbar-menu class="-mt-1" />
        <the-logo class="!mt-2" />
        <the-socials />
      </div>
      <v-divider />
      <div class="w-full flex items-center justify-between py-3">
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
        <div class="flex items-center gap-2 text-main-black-200">
          <p>
            <v-icon icon="mdi-phone" style="transform: rotate(270deg)" />
            <span>تماس:</span>
          </p>
          <a
            href="tel:+989010000550"
            class="font-semibold duration-150 hover:text-white active:text-white"
            style="direction: ltr"
          >
            0901 0000 550
          </a>
        </div>
      </div>
    </nuxt-layout>
    <mobile-header />
    <mobile-menu />
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
