<template>
  <div class="w-full text-white">
    <v-btn
      v-ripple="false"
      :append-icon="isOpen ? 'mdi-menu-up' : 'mdi-menu-down'"
      @click="() => (isOpen = !isOpen)"
      flat
      color="white"
      variant="plain"
      size="large"
      :text="label"
      slim
    >
    </v-btn>
    <div
      class="w-full flex flex-col bg-main-black-800 rounded-lg shadow-md text-white duration-200"
      :class="{
        'px-4 py-2 h-[240px]': isOpen && label === 'پیش‌شماره',
        'px-4 py-2 h-[180px]': isOpen,
        'h-0 opacity-0': !isOpen,
      }"
    >
      <div
        class="px-2 flex flex-col items-end overflow-y-scroll"
        style="direction: ltr"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
  const { label } = defineProps({
    label: String,
  });

  const isOpen = ref(false);
</script>

<style scoped></style>
