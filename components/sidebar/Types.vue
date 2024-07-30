<template>
  <div class="w-full flex flex-col gap-3">
    <h1 class="text-white font-semibold px-2">نوع شماره</h1>
    <div
      class="w-max flex items-center justify-between rounded-xl bg-main-black-800 mx-auto"
    >
      <v-btn-toggle v-model="selectedCategory" variant="text" density="compact">
        <v-btn
          v-for="(val, index) in values"
          flat
          :class="{
            'bg-transparent text-white': selectedCategory !== index,
          }"
          :color="selectedCategory === index ? '#ffda0a' : '#3d3d3d'"
          rounded="xl"
          :ripple="false"
          :text="val"
          :size="$vuetify.display.xs ? 'default' : undefined"
        >
        </v-btn>
      </v-btn-toggle>
    </div>
  </div>
</template>

<script setup>
  const filterStore = useFilterStore();
  const { selectedCategory } = storeToRefs(filterStore);

  const values = ["همه", "دائمی", "اعتباری"];
</script>

<style lang="scss" scoped></style>
