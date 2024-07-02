<template>
  <div class="sm:hidden w-full flex items-center justify-between p-5">
    <button
      type="button"
      class="p-2 rounded-lg bg-gradient-to-tr from-main-black-900 to-main-black-800"
      @click="openMenu"
    >
      <v-icon icon="mdi-menu" color="#fff" size="large" />
    </button>
    <TheLogo />
  </div>
</template>

<script setup>
  const modalStore = useModalStore();
  const { openMenu } = modalStore;
</script>

<style lang="scss" scoped></style>
