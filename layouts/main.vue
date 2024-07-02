<template>
  <main class="w-full flex gap-3 mt-6">
    <aside class="w-[26%] max-lg:hidden">
      <slot name="sidebar" />
    </aside>
    <div class="w-[74%] max-lg:w-full">
      <slot name="page" />
    </div>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
