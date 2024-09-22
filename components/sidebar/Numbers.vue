<template>
  <div class="mt-3 flex flex-col items-center">
    <h1 class="text-white font-semibold px-2 self-start">شماره</h1>
    <client-only>
      <div
        class="w-full flex justify-end items-center flex-row-reverse gap-1 mt-5"
      >
        <v-text-field
          id="inputNumber1"
          ref="input1"
          v-model="inputs.input1"
          type="text"
          density="compact"
          maxlength="1"
          :hide-details="true"
          variant="outlined"
          color="var(--main-yellow)"
          class="text-white !text-[5px]"
          @input="goToNext(inputs.input1, 1)"
          @keydown.backspace="goToPrevious(inputs.input1, 1)"
        />
        <v-text-field
          id="inputNumber2"
          ref="input2"
          v-model="inputs.input2"
          type="text"
          density="compact"
          maxlength="1"
          :hide-details="true"
          variant="outlined"
          color="var(--main-yellow)"
          class="text-white"
          @input="goToNext(inputs.input2, 2)"
          @keydown.backspace="goToPrevious(inputs.input2, 2)"
        />
        <v-text-field
          id="inputNumber3"
          ref="input3"
          v-model="inputs.input3"
          type="text"
          density="compact"
          maxlength="1"
          :hide-details="true"
          variant="outlined"
          color="var(--main-yellow)"
          class="text-white"
          @input="goToNext(inputs.input3, 3)"
          @keydown.backspace="goToPrevious(inputs.input3, 3)"
        />
        <v-text-field
          id="inputNumber4"
          ref="input4"
          v-model="inputs.input4"
          type="text"
          density="compact"
          maxlength="1"
          :hide-details="true"
          variant="outlined"
          color="var(--main-yellow)"
          class="text-white"
          @input="goToNext(inputs.input4, 4)"
          @keydown.backspace="goToPrevious(inputs.input4, 4)"
        />
        <v-text-field
          id="inputNumber5"
          ref="input5"
          v-model="inputs.input5"
          type="text"
          density="compact"
          maxlength="1"
          :hide-details="true"
          variant="outlined"
          color="var(--main-yellow)"
          class="text-white"
          @input="goToNext(inputs.input5, 5)"
          @keydown.backspace="goToPrevious(inputs.input5, 5)"
        />
        <v-text-field
          id="inputNumber6"
          ref="input6"
          v-model="inputs.input6"
          type="text"
          density="compact"
          maxlength="1"
          :hide-details="true"
          variant="outlined"
          color="var(--main-yellow)"
          class="text-white"
          @input="goToNext(inputs.input6, 6)"
          @keydown.backspace="goToPrevious(inputs.input6, 6)"
        />
        <v-text-field
          id="inputNumber7"
          ref="input7"
          v-model="inputs.input7"
          type="text"
          density="compact"
          maxlength="1"
          :hide-details="true"
          variant="outlined"
          color="var(--main-yellow)"
          class="text-white"
          @input="goToNext(inputs.input7, 7)"
          @keydown.backspace="goToPrevious(inputs.input7, 7)"
        />
      </div>
    </client-only>
  </div>
</template>

<script setup lang="ts">
  import type { VTextField } from "vuetify/components";

  interface Inputs {
    input1: string;
    input2: string;
    input3: string;
    input4: string;
    input5: string;
    input6: string;
    input7: string;
  }

  const filterStore = useFilterStore();
  const { inputs } = storeToRefs(filterStore) as { inputs: Ref<Inputs> };

  const input1 = ref<VTextField>();
  const input2 = ref<VTextField>();
  const input3 = ref<VTextField>();
  const input4 = ref<VTextField>();
  const input5 = ref<VTextField>();
  const input6 = ref<VTextField>();
  const input7 = ref<VTextField>();

  const goToNext = (value: string, fieldNumber: number) => {
    console.log(value);

    if (value.length === 1) {
      if (fieldNumber === 1) {
        input2.value?.focus();
      } else if (fieldNumber === 2) {
        input3.value?.focus();
      } else if (fieldNumber === 3) {
        input4.value?.focus();
      } else if (fieldNumber === 4) {
        input5.value?.focus();
      } else if (fieldNumber === 5) {
        input6.value?.focus();
      } else if (fieldNumber === 6) {
        input7.value?.focus();
      }
    }
  };
  const goToPrevious = (value: string, fieldNumber: number) => {
    if (value.length === 0) {
      if (fieldNumber === 2) {
        input1.value?.focus();
      } else if (fieldNumber === 3) {
        input2.value?.focus();
      } else if (fieldNumber === 4) {
        input3.value?.focus();
      } else if (fieldNumber === 5) {
        input4.value?.focus();
      } else if (fieldNumber === 6) {
        input5.value?.focus();
      } else if (fieldNumber === 7) {
        input6.value?.focus();
      }
    }
  };
</script>

<style scoped></style>
