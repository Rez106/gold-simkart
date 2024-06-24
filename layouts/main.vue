<template>
  <main class="w-full flex gap-5 mt-6">
    <aside class="w-[30%] h-20 bg-white">
      <slot name="sidebar" />
    </aside>
    <div class="w-[70%] h-20 bg-white">
      <slot name="page" />
    </div>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
