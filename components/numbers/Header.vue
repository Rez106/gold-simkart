<template>
  <div>
    <p class="text-white font-bold text-2xl p-4">
      <v-icon icon="mdi-sim" size="x-large" color="#ffda0a" />
      سیم‌کارت‌های مجموعه
    </p>
    <div class="flex items-center gap-3 p-4 max-sm:flex-col">
      <p class="text-white">
        <v-icon icon="mdi-sort" size="large" color="#fff" />
        ترتیب:
      </p>
      <base-toggle-buttons
        :values="['همه', 'ارزان‌ترین', 'گران‌ترین', 'تخفیف‌دار']"
        @updateValue="sortHandler"
      />
    </div>
    <div
      class="bg-main-black-600 text-white flex items-center justify-between py-2 px-4 max-sm:hidden"
    >
      <h1 class="w-1/4 text-center">شماره</h1>
      <h1 class="w-1/4 text-center">قیمت(تومان)</h1>
      <h1 class="w-1/4 text-center">وضعیت</h1>
      <h1 class="w-1/4 text-center">شرایط فروش</h1>
      <h1 class="w-1/4 text-center">جزئیات</h1>
    </div>
  </div>
</template>

<script setup>
  const filterStore = useFilterStore();
  const { selectedSort } = storeToRefs(filterStore);
  const sortHandler = (val) => {
    if (val === 0) {
      selectedSort.value = null;
    } else {
      selectedSort.value = val;
    }
  };
</script>

<style lang="scss" scoped></style>
