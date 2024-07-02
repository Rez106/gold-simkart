<template>
  <div class="w-full flex items-center justify-center text-white">
    <v-pagination
      :length="2"
      next-icon="mdi-menu-right"
      prev-icon="mdi-menu-left"
      :total-visible="5"
      v-model="page"
      @update:modelValue="onPageUpdate"
      rounded="lg"
    ></v-pagination>
  </div>
</template>

<script setup>
  const page = ref(1);

  const emits = defineEmits(["updatePage"]);

  const onPageUpdate = (page) => {
    emits("updatePage", page);
    window.scrollTo({ behavior: "smooth", top: 0 });
  };
</script>

<style lang="scss" scoped></style>
