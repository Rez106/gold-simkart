<template>
  <div
    class="min-w-full duration-300 h-dvh overflow-hidden z-10 fixed right-0 bg-main-black-900 bg-opacity-50"
    :class="{
      'opacity-100 top-0': toggleSearch,
      'opacity-0 -top-full': !toggleSearch,
    }"
    @click="closeSearch"
  />

  <div
    class="lg:hidden z-20 duration-500 max-h-dvh fixed right-0 w-full min-[500px]:min-h-[60dvh] rounded-t-xl shadow-inner shadow-main-black-900 pb-0 bg-gradient-to-tr from-main-black-950 to-main-black-900"
    :class="{ 'bottom-0': toggleSearch, '-bottom-full': !toggleSearch }"
  >
    <div class="max-sm:w-full w-10/12 mx-auto p-5 pt-2 rounded-t-lg">
      <header class="w-full flex items-center justify-between">
        <p
          class="flex items-center gap-1 text-xl text-main-black-300 font-semibold"
        >
          <v-icon :icon="mdiMagnify" size="x-large" color="#d1d1d1" />
          <span>جستجو</span>
        </p>
        <button type="button" @click="closeSearch">
          <v-icon
            :icon="mdiCloseCircle"
            size="x-large"
            color="#d1d1d1"
            class="hover:!text-red-500 active:!text-red-500 duration-200"
          />
        </button>
      </header>
      <v-divider class="my-3" />
      <main class="w-full max-h-[80dvh] overflow-y-auto">
        <div class="flex items-start gap-5 justify-between max-sm:flex-col">
          <sidebar-operators class="flex-1" />
          <sidebar-statuses class="flex-1" />
        </div>
        <div
          class="flex items-start gap-5 justify-between mt-3 max-sm:flex-col"
        >
          <sidebar-pre-codes class="flex-1" />
          <sidebar-numbers class="flex-1" />
        </div>
        <v-divider vertical />
        <div class="flex items-start gap-5 justify-between max-sm:flex-col">
          <sidebar-price class="flex-1" />
          <sidebar-types class="flex-1" />
        </div>
        <div class="flex items-start justify-center mt-3">
          <sidebar-actions />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
  import { mdiCloseCircle, mdiMagnify } from "@mdi/js";

  const modalStore = useModalStore();
  const { toggleSearch } = storeToRefs(modalStore);
  const { closeSearch } = modalStore;
</script>

<style lang="scss" scoped></style>
