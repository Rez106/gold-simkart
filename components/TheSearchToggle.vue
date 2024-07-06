<template>
  <div
    v-if="!toggleSearch"
    class="duration-200 lg:hidden p-2 bg-gradient-to-tr from-main-yellow-400 to-main-yellow-200 fixed bottom-5 shadow-xl shadow-main-black-800 left-1/2 -translate-x-1/2 rounded-xl z-10 hover:scale-90 active:scale-90"
    :class="{
      'w-6/12': isShown,
      'w-2/12': !isShown,
    }"
    @click="openSearch"
  >
    <div
      v-if="!searchIsLoading"
      class="w-full flex items-center gap-2 justify-center"
    >
      <v-icon icon="mdi-magnify" color="#3d3d3d" size="x-large" />
      <transition appear name="fade" mode="out-in">
        <span v-if="isShown" class="text-xl font-semibold text-main-black-700"
          >جستجو</span
        >
      </transition>
    </div>
    <Vue3Lottie
      v-if="!searchError && searchIsLoading"
      :animation-data="loading"
      :width="40"
      :height="40"
    />
  </div>
</template>

<script setup>
  import loading from "../../public/lottie/loading.json";
  import { Vue3Lottie } from "vue3-lottie";
  const { isShown } = useToggleScroll();

  const modalStore = useModalStore();
  const { toggleSearch } = storeToRefs(modalStore);
  const filterStore = useFilterStore();
  const { searchError, searchIsLoading } = storeToRefs(filterStore);
  const { openSearch } = modalStore;
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.1s ease-in-out;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
