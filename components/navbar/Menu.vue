<template>
  <nav class="flex items-center gap-5">
    <navbar-menu-item v-for="item in menuItems" :key="item.id" :item />
  </nav>
</template>

<script setup>
  const menuItems = [
    {
      id: 1,
      name: "سیم‌کارت",
      icon: "mdi-sim",
      link: "/",
    },
    {
      id: 2,
      name: "ارتباط باما",
      icon: "mdi-face-agent",
      link: "/contact",
    },
  ];
</script>

<style lang="scss" scoped></style>
