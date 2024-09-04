<template>
  <nuxt-layout name="default">
    <the-search-toggle v-if="$route.path === '/'" />
    <the-search-drawer v-if="$route.path === '/'" />
    <the-header />
    <nuxt-layout name="container">
      <nuxt-page />
    </nuxt-layout>
    <the-footer />
  </nuxt-layout>
</template>
