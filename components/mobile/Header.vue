<template>
  <div class="sm:hidden w-full flex items-center justify-center p-5">
    <TheLogo />
  </div>
</template>

<script setup>
  import { mdiMenu } from "@mdi/js";

  const modalStore = useModalStore();
  const { openMenu } = modalStore;
</script>

<style lang="scss" scoped></style>
