<template>
  <div
    class="w-full flex items-center justify-center text-white"
    v-if="length > 0"
  >
    <v-pagination
      :length="length"
      :next-icon="mdiMenuRight"
      :prev-icon="mdiMenuLeft"
      :total-visible="4"
      v-model="page"
      @update:modelValue="onPageUpdate"
      rounded="lg"
    ></v-pagination>
  </div>
</template>

<script setup>
  import { mdiMenuLeft, mdiMenuRight } from "@mdi/js";

  defineProps({
    length: Number,
  });

  const page = ref(1);

  const emits = defineEmits(["updatePage"]);

  const onPageUpdate = (page) => {
    emits("updatePage", page);
    window.scrollTo({ behavior: "smooth", top: 0 });
  };
</script>

<style lang="scss" scoped></style>
