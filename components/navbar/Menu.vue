<template>
  <nav class="flex items-center gap-5">
    <navbar-menu-item v-for="item in menuItems" :key="item.id" :item />
  </nav>
</template>

<script setup>
  import { mdiFaceAgent, mdiSim } from "@mdi/js";

  const menuItems = [
    {
      id: 1,
      name: "سیم‌کارت",
      icon: mdiSim,
      link: "/",
    },
  ];
</script>

<style lang="scss" scoped></style>
