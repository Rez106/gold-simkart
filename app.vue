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
  const { searchHandler } = filterStore;
  const { selectedSort } = storeToRefs(filterStore);

  const { execute } = await useAsyncData(
    "filter",
    () => searchHandler().then(() => true),
    {
      immediate: false,
      watch: false,
    }
  );

  onMounted(async () => {
    selectedSort.value = 3;
    return await execute();
  });
</script>
