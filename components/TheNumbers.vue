<template>
  <div class="flex flex-col gap-2 w-full p-4">
    <div
      v-if="!mobile"
      class="w-full flex flex-col"
      v-for="(num, index) in numbers"
      :key="num.id"
    >
      <numbers-item
        :num
        :isShow="isShow === index"
        @toggleShow="toggleShowHandler(index)"
      />
      <numbers-detail :num :isShow="isShow === index" />
    </div>
    <div
      v-else
      class="w-full flex flex-col"
      v-for="(num, index) in numbers"
      :key="num.digits"
    >
      <mobile-number-item
        :num
        :isShow="isShow === index"
        @toggleShow="toggleShowHandler(index)"
      />
      <mobile-number-detail :num :isShow="isShow === index" />
    </div>
  </div>
</template>

<script setup>
  defineProps({
    numbers: Array,
    mobile: Boolean,
  });

  const isShow = ref(null);
  const toggleShowHandler = (index) => {
    isShow.value = isShow.value === index ? null : index;
  };
</script>

<style lang="scss" scoped></style>
