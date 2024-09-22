<template>
  <main class="w-full flex gap-3 mt-6">
    <aside class="w-[28%] max-lg:hidden">
      <slot name="sidebar" />
    </aside>
    <div class="w-[72%] max-lg:w-full">
      <slot name="page" />
    </div>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
