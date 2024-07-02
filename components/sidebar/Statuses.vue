<template>
  <base-checkbox-select label="وضعیت">
    <v-checkbox
      label="همه"
      density="compact"
      :hide-details="true"
      v-model="isAllSelected"
      color="white"
      @update:modelValue="selectAllHandler"
    />
    <v-checkbox
      v-for="(item, index) in status"
      :key="index"
      :label="item.name"
      density="compact"
      :value="item.value"
      v-model="selectedStatus"
      :hide-details="true"
      color="white"
      @update:modelValue="selectHandler"
    />
  </base-checkbox-select>
</template>

<script setup>
  const filterStore = useFilterStore();
  const { selectedStatus } = storeToRefs(filterStore);

  const isAllSelected = ref(selectedStatus.value.length === 0);

  const selectAllHandler = () => {
    selectedStatus.value = [];
  };

  const selectHandler = () => {
    isAllSelected.value = false;
  };

  const status = [
    {
      id: 1,
      name: "صفر بی‌نام",
      value: 1,
    },
    {
      id: 2,
      name: "صفر به‌نام",
      value: 2,
    },
    {
      id: 3,
      name: "کارکرده",
      value: 3,
    },
    {
      id: 4,
      name: "در حد صفر",
      value: 4,
    },
  ];
</script>

<style lang="scss" scoped></style>
