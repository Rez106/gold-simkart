<template>
  <div class="w-full flex items-center gap-3 justify-center">
    <v-btn
      prepend-icon="mdi-magnify"
      color="#ffda0a"
      class="mt-3 flex-1"
      text="اعمال و جستجو"
      rounded="lg"
      size="large"
      @click="searchHandler"
    />
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
  const filterStore = useFilterStore();
  const { searchHandler, reset } = filterStore;
</script>

<style lang="scss" scoped></style>
