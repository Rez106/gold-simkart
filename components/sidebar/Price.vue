<template>
  <div class="w-full flex flex-col">
    <h1 class="text-white font-semibold px-2">قیمت</h1>
    <div class="w-10/12 mx-auto flex flex-col gap-5 mt-5">
      <div class="flex items-center gap-3">
        <h1 class="font-semibold text-white">از</h1>
        <div
          class="w-full px-2 rounded-lg flex items-center gap-3 bg-main-black-800"
        >
          <v-text-field
            label=""
            flat
            variant="solo"
            bg-color="#3d3d3d"
            density="compact"
            type="number"
            inputmode="number"
            style="font-family: IRANSans !important"
            :hide-details="true"
            v-model.lazy="enteredMinPrice"
          />
          <h1 class="font-semibold text-white order-2">تومان</h1>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <h1 class="font-semibold text-white">تا</h1>
        <div
          class="w-full px-2 rounded-lg flex items-center gap-3 bg-main-black-800"
        >
          <v-text-field
            label=""
            flat
            variant="solo"
            bg-color="#3d3d3d"
            density="compact"
            inputmode="number"
            maxLength="11"
            type="number"
            style="font-family: IRANSans !important"
            :hide-details="true"
            v-model.lazy="enteredMaxPrice"
          />
          <h1 class="font-semibold text-white order-2">تومان</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const filterStore = useFilterStore();
  const { enteredMinPrice, enteredMaxPrice } = storeToRefs(filterStore);
</script>

<style lang="scss" scoped></style>
