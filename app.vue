<template>
  <nuxt-layout name="default">
    <the-search-toggle v-if="$route.path === '/'" />
    <the-search-drawer v-if="$route.path === '/'" />
    <the-header />
    <nuxt-layout name="container" class="pb-10">
      <nuxt-page />
      <the-footer class="absolute !top-auto right-0 mt-10" />
    </nuxt-layout>
  </nuxt-layout>
</template>
