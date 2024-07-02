<template>
  <div class="mt-3 flex flex-col">
    <h1 class="text-white font-semibold px-2">شماره</h1>
    <div style="direction: ltr !important">
      <v-otp-input
        :length="7"
        v-model="enteredNumbers"
        variant="outlined"
        color="#191919"
        type="number"
      />
    </div>
  </div>
</template>

<script setup>
  const filterStore = useFilterStore();
  const { enteredNumbers } = storeToRefs(filterStore);
</script>

<style lang="scss" scoped></style>
