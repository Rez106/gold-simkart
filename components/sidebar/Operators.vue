<template>
  <base-checkbox-select label="اپراتورها">
    <v-checkbox
      label="همه"
      density="compact"
      :hide-details="true"
      v-model="isAllOperators"
      color="white"
      @update:modelValue="selectAllHandler"
    />
    <v-checkbox
      v-for="(item, index) in operators"
      :key="index"
      :label="item.name"
      density="compact"
      :value="item.value"
      v-model="selectedOperators"
      :hide-details="true"
      color="white"
      @update:modelValue="selectHandler"
    />
  </base-checkbox-select>
</template>

<script setup>
  const filterStore = useFilterStore();
  const { selectedOperators, isAllOperators } = storeToRefs(filterStore);

  const selectAllHandler = () => {
    selectedOperators.value = [];
  };

  const selectHandler = () => {
    isAllOperators.value = false;
  };

  const operators = [
    {
      id: 1,
      name: "همراه اول",
      value: 1,
    },
    {
      id: 2,
      name: "ایرانسل",
      value: 2,
    },
    {
      id: 3,
      name: "رایتل",
      value: 3,
    },
    {
      id: 4,
      name: "آپ‌تل",
      value: 4,
    },
  ];
</script>

<style lang="scss" scoped></style>
