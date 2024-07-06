<template>
  <div class="w-full flex items-center gap-3 justify-center">
    <v-btn
      :prepend-icon="!searchIsLoading ? 'mdi-magnify' : undefined"
      color="#ffda0a"
      class="mt-3 flex-1 duration-200"
      rounded="lg"
      size="large"
      @click="search"
      :disabled="searchIsLoading"
    >
      <span v-if="!searchIsLoading">اعمال و جستجو</span>
      <Vue3Lottie
        v-if="!searchError && searchIsLoading"
        :animation-data="loading"
        :width="50"
        :height="50"
      />
    </v-btn>
    <v-btn
      icon="mdi-restore"
      color="#fff"
      class="mt-3"
      rounded="circle"
      size="small"
      @click="reset"
    />
  </div>
</template>

<script setup>
  import loading from "../../public/lottie/loading.json";
  import { Vue3Lottie } from "vue3-lottie";
  const filterStore = useFilterStore();
  const { searchError, searchIsLoading } = storeToRefs(filterStore);
  const { searchHandler, reset } = filterStore;

  const { execute } = await useAsyncData(
    "filter",
    () => searchHandler().then(() => true),
    {
      immediate: false,
      watch: false,
    }
  );

  const search = async () => {
    await execute();
  };
</script>

<style lang="scss" scoped></style>
