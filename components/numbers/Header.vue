<template>
  <div>
    <p class="text-white font-bold text-2xl p-4">
      <v-icon :icon="mdiSim" size="x-large" color="#ffda0a" />
      سیم‌کارت‌های مجموعه
    </p>
    <div v-if="!$vuetify.display.xs">
      <div class="flex items-center gap-3 p-4 max-sm:flex-col">
        <p class="text-white">
          <v-icon
            :icon="mdiCreation"
            :size="$vuetify.display.xs ? 'small' : 'large'"
            color="#fff"
          />
          پیشنهاد‌ها:
        </p>
        <base-toggle-buttons
          :values="[
            'همه',
            'کد ۰۹۱۲',
            'کد ۰۹۱۳',
            'بالای ۱۰ میلیون',
            'زیر ۱۰ میلیون',
          ]"
          @updateValue="suggestionHandler"
        />
      </div>
      <div class="flex items-center gap-3 p-4 max-sm:flex-col">
        <p class="text-white">
          <v-icon
            :icon="mdiSort"
            :size="$vuetify.display.xs ? 'small' : 'large'"
            color="#fff"
          />
          ترتیب:
        </p>
        <base-toggle-buttons
          :values="['همه', 'ارزان‌ترین', 'گران‌ترین', 'تخفیف‌دار']"
          @updateValue="sortHandler"
          :isSort="true"
        />
      </div>
    </div>
    <div class="w-full flex items-center justify-between gap-2 p-4" v-else>
      <v-select
        v-model="suggestion"
        color="#ffda0a"
        base-color="#ffda0a"
        :items="suggestionItems"
        variant="outlined"
        class="!flex-1 max-w-[55%] text-white !border-main-yellow-400"
        :hide-details="true"
        rounded="lg"
        @update:modelValue="suggestionHandler"
      >
        <template v-slot:label="{ isActive, isFocused }">
          <v-label
            text="سیم‌کارت‌"
            :active="isActive"
            :focused="isFocused"
            :class="{ 'text-white !text-xs': isActive }"
          ></v-label>
        </template>
        <template v-slot:selection="{ item, index }">
          <span class="text-xs text-main-yellow-400">{{ item.title }}</span>
        </template>
        <template v-slot:item="{ item, _index, props }">
          <div class="!bg-main-black-800 text-white">
            <v-list-item
              v-bind="props"
              color="#3d3d3d"
              :title="item.title"
              active-class="!text-main-yellow-400"
            >
            </v-list-item>
          </div>
        </template>
        <template #prepend-inner>
          <v-icon
            :icon="mdiSim"
            :size="$vuetify.display.xs ? 'small' : 'large'"
            color="#fff"
          />
        </template>
      </v-select>
      <v-select
        v-model="selectedSort"
        color="#ffda0a"
        bg-color="transparent"
        base-color="#ffda0a"
        :items="sortItems"
        variant="outlined"
        class="!flex-1 max-w-[45%] text-white !border-main-yellow-400"
        :hide-details="true"
        rounded="lg"
        @update:modelValue="sortHandler"
      >
        <template v-slot:label="{ isActive, isFocused }">
          <v-label
            text="ترتیب"
            :active="isActive"
            :focused="isFocused"
            :class="{ 'text-white !text-xs': isActive }"
          ></v-label>
        </template>
        <template v-slot:selection="{ item, index }">
          <span class="text-xs text-main-yellow-400">{{ item.title }}</span>
        </template>
        <template v-slot:item="{ item, index, props }">
          <div class="!bg-main-black-800 text-white">
            <v-list-item
              v-bind="props"
              color="#3d3d3d"
              :title="item.title"
              active-class="!text-main-yellow-400"
            >
            </v-list-item>
          </div>
        </template>
        <template #prepend-inner>
          <v-icon
            :icon="mdiSort"
            :size="$vuetify.display.xs ? 'small' : 'large'"
            color="#fff"
          />
        </template>
      </v-select>
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
  import { mdiSim, mdiSort, mdiCreation } from "@mdi/js";
  const filterStore = useFilterStore();
  const { searchHandler, reset } = filterStore;
  const {
    selectedSort,
    selectedPreCode,
    isAllPreCode,
    enteredMinPrice,
    enteredMaxPrice,
  } = storeToRefs(filterStore);

  const { execute } = await useAsyncData(
    "filter",
    () => searchHandler().then(() => true),
    {
      immediate: false,
      watch: false,
    }
  );

  const suggestion = ref(0);

  const sortHandler = async (val) => {
    if (val === 0) {
      selectedSort.value = null;
    } else {
      selectedSort.value = val;
    }

    return await execute();
  };

  const suggestionHandler = async (val) => {
    if (val === 0) {
      reset();
      await execute();
    } else if (val === 1) {
      reset();
      isAllPreCode.value = false;
      selectedPreCode.value = ["0912"];
      await execute();
    } else if (val === 2) {
      reset();
      isAllPreCode.value = false;
      selectedPreCode.value = ["0913"];
      await execute();
    } else if (val === 3) {
      reset();
      enteredMinPrice.value = "10000000";
      await execute();
    } else if (val === 4) {
      reset();
      enteredMaxPrice.value = "10000000";
      await execute();
    }
  };

  onMounted(async () => {
    selectedSort.value = 3;
    return await execute();
  });

  const suggestionItems = ref([
    { title: "همه", value: 0 },
    { title: "کد ۰۹۱۲", value: 1 },
    { title: "کد ۰۹۱۳", value: 2 },
    { title: "بالای ۱۰ میلیون", value: 3 },
    { title: "زیر ۱۰ میلیون", value: 4 },
  ]);

  const sortItems = ref([
    { title: "همه", value: 0 },
    { title: "ارزان‌ترین", value: 1 },
    { title: "گران‌ترین", value: 2 },
    { title: "تخفیف‌دار", value: 3 },
  ]);
</script>

<style>
  .v-list {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    background-color: #3d3d3d !important;
  }
</style>
