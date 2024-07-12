<template>
  <div
    class="w-max flex items-center justify-between rounded-xl bg-main-black-800"
  >
    <v-btn-toggle
      v-model="selected"
      variant="text"
      @update:modelValue="emitUpdateValue"
      density="compact"
    >
      <v-btn
        v-for="(val, index) in values"
        @click="() => (selected = index)"
        flat
        :class="{
          'bg-transparent text-white': selected !== index,
        }"
        :color="selected === index ? '#ffda0a' : '#3d3d3d'"
        rounded="xl"
        :ripple="false"
        :text="val"
        :size="$vuetify.display.xs ? 'small' : undefined"
      >
      </v-btn>
    </v-btn-toggle>
  </div>
</template>

<script setup>
  const { isSort } = defineProps({
    values: Array,
    isSort: Boolean,
  });
  const emits = defineEmits(["updateValue"]);
  const selected = ref(0);

  const emitUpdateValue = (val) => {
    emits("updateValue", val);
  };

  onMounted(() => {
    return (selected.value = isSort ? 3 : 0);
  });
</script>

<style lang="scss" scoped></style>
