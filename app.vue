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

<script setup>
  const filterStore = useFilterStore();
  const { initialNumbersData } = filterStore;

  const { execute } = await useAsyncData(
    "filter",
    () => initialNumbersData().then(() => true),
    {
      immediate: false,
      watch: false,
    }
  );

  onMounted(async () => {
    await execute();
  });
</script>
