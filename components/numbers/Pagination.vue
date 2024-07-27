<template>
  <div
    class="w-full flex items-center justify-center text-white"
    v-if="length > 0"
  >
    <v-pagination
      :length
      :next-icon="mdiMenuRight"
      :prev-icon="mdiMenuLeft"
      :total-visible="4"
      v-model="pageNumber"
      @update:modelValue="onPageUpdate"
      rounded="lg"
    ></v-pagination>
  </div>
</template>

<script setup>
  import { mdiMenuLeft, mdiMenuRight } from "@mdi/js";

  const filterStore = useFilterStore();
  const { allNumbers, pageNumber } = storeToRefs(filterStore);

  const onPageUpdate = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  const length = computed(() => {
    return Math.ceil((allNumbers?.value?.length || 0) / 15);
  });
</script>

<style lang="scss" scoped></style>
