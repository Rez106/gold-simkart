<template>
  <base-checkbox-select label="پیش‌شماره">
    <v-text-field
      style="direction: rtl"
      label="جستجو"
      variant="outlined"
      density="compact"
      class="w-full mt-2"
      :hide-details="true"
      @input="searchPreCodeHandler"
    />
    <div
      v-if="checked.length"
      class="flex flex-wrap items-center gap-2 my-2 text-sm"
    >
      <v-chip
        v-for="(c, index) in checked.filter((code) => code !== 0)"
        :key="index"
        append-icon="mdi-close"
        @click="uncheck(c)"
        flat
        color="red"
        size="small"
      >
        {{ c }}
      </v-chip>
    </div>
    <v-checkbox
      label="همه"
      density="compact"
      :hide-details="true"
      color="white"
      v-model="isAllSelected"
      @update:modelValue="selectAllHandler"
    />
    <v-checkbox
      v-for="(item, index) in searchedPreCode"
      :key="index"
      :label="item"
      density="compact"
      :value="item"
      v-model="checked"
      :hide-details="true"
      color="white"
      @update:modelValue="selectPreCodeHandler"
    />
  </base-checkbox-select>
</template>

<script setup>
  const filterStore = useFilterStore();
  const { selectedPreCode: checked } = storeToRefs(filterStore);
  // const checked = ref([]);

  const isAllSelected = ref(checked.value.length === 0);

  const preCodes = [
    "0912",
    "0910",
    "0911",
    "0913",
    "0914",
    "0915",
    "0916",
    "0917",
    "0918",
    "0919",
    "0990",
    "0991",
    "0992",
    "0993",
    "0996",
    "0900",
    "0901",
    "0902",
    "0903",
    "0904",
    "0905",
    "0930",
    "0933",
    "0935",
    "0936",
    "0937",
    "0938",
    "0939",
    "0932",
    "0920",
    "0921",
    "0922",
    "0923",
    "09981",
    "09982",
    "09999",
  ];

  const selectAllHandler = () => {
    // selectedPreCode.value = [];
    return (checked.value = []);
  };

  const selectPreCodeHandler = () => {
    isAllSelected.value = false;
  };

  const searchedPreCode = ref(preCodes);

  const searchPreCodeHandler = (input) => {
    const code = input?.target?.value;

    return (searchedPreCode.value = preCodes.filter((c) => c.includes(code)));
  };

  const uncheck = (code) => {
    const index = checked.value.indexOf(code);
    if (index > -1) {
      checked.value.splice(index, 1);
    }
  };
</script>

<style scoped></style>
