<template>
  <nuxt-link :to="item?.link" class="block relative">
    <div
      class="flex py-4 items-center gap-1 text-lg font-semibold text-main-black-200 duration-200 hover:text-main-yellow-400"
    >
      <v-icon :icon="item?.icon" size="large" />
      <span>{{ item?.name }}</span>
    </div>
  </nuxt-link>
</template>

<script setup>
  defineProps({
    item: Object,
  });
</script>

<style scoped>
  .router-link-exact-active::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    background-color: #ffda0a;
    height: 6px;
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
  }
  .router-link-exact-active div {
    @apply text-main-yellow-400;
  }
</style>
