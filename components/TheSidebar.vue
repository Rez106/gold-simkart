<template>
  <div class="w-full rounded-lg bg-main-black-900">
    <sidebar-header />
    <div class="flex flex-col gap-3 p-5">
      <sidebar-operators />
      <v-divider />
      <sidebar-statuses />

      <v-divider />
      <sidebar-pre-codes />
      <sidebar-numbers />
      <v-divider />
      <sidebar-price />
      <v-divider />
      <sidebar-types />
      <sidebar-actions />
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
