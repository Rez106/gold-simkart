<template>
  <div
    class="w-full flex items-center justify-center text-white px-4"
    v-if="length > 0"
  >
    <v-pagination
      :length
      :next-icon="mdiMenuRight"
      :prev-icon="mdiMenuLeft"
      :total-visible="$vuetify.display.mobile ? 5 : 7"
      v-model="pageNumber"
      @update:modelValue="onPageUpdate"
      rounded="lg"
      variant="outline"
      :density="$vuetify.display.mobile ? 'compact' : undefined"
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
