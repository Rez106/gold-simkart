<template>
  <div class="w-full flex flex-col gap-3">
    <h1 class="text-white font-semibold px-2">نوع شماره</h1>
    <base-toggle-buttons
      :values="['همه', 'دائمی', 'اعتباری']"
      class="self-center"
      @updateValue="updateValue"
    />
  </div>
</template>

<script setup>
  const filterStore = useFilterStore();
  const { selectedCategory } = storeToRefs(filterStore);

  const updateValue = (val) => {
    if (val === 0) {
      selectedCategory.value = null;
    } else {
      selectedCategory.value = val;
    }
  };
</script>

<style lang="scss" scoped></style>
