<template>
  <div class="mt-3 flex flex-col items-center">
    <h1 class="text-white font-semibold px-2 self-start">شماره</h1>
    <client-only>
      <div class="flex items-center flex-row-reverse gap-2 mt-5">
        <input
          id="inputNumber1"
          v-model="inputs.input1"
          style="direction: ltr !important"
          @input="handleInput($event, 'input1')"
          type="number"
          maxlength="1"
          pattern="[0-9]"
          class="p-1 bg-white rounded-md max-w-8 text-center"
        />
        <input
          id="inputNumber2"
          v-model="inputs.input2"
          style="direction: ltr !important"
          @input="handleInput($event, 'input2')"
          type="number"
          maxlength="1"
          pattern="[0-9]"
          class="p-1 bg-white rounded-md max-w-8 text-center"
        />
        <input
          id="inputNumber3"
          v-model="inputs.input3"
          style="direction: ltr !important"
          @input="handleInput($event, 'input3')"
          type="number"
          maxlength="1"
          pattern="[0-9]"
          class="p-1 bg-white rounded-md max-w-8 text-center"
        />
        <input
          id="inputNumber4"
          v-model="inputs.input4"
          style="direction: ltr !important"
          @input="handleInput($event, 'input4')"
          type="number"
          maxlength="1"
          pattern="[0-9]"
          class="p-1 bg-white rounded-md max-w-8 text-center"
        />
        <input
          id="inputNumber5"
          v-model="inputs.input5"
          style="direction: ltr !important"
          @input="handleInput($event, 'input5')"
          type="number"
          maxlength="1"
          pattern="[0-9]"
          class="p-1 bg-white rounded-md max-w-8 text-center"
        />
        <input
          id="inputNumber6"
          v-model="inputs.input6"
          style="direction: ltr !important"
          @input="handleInput($event, 'input6')"
          type="number"
          maxlength="1"
          pattern="[0-9]"
          class="p-1 bg-white rounded-md max-w-8 text-center"
        />
        <input
          id="inputNumber7"
          v-model="inputs.input7"
          style="direction: ltr !important"
          @input="handleInput($event, 'input7')"
          type="number"
          maxlength="1"
          pattern="[0-9]"
          class="p-1 bg-white rounded-md max-w-8 text-center"
        />
      </div>
    </client-only>
  </div>
</template>

<script setup>
  const filterStore = useFilterStore();
  const { inputs } = storeToRefs(filterStore);

  const handleInput = (event, id) => {
    inputs.value[id] = event.target.value.replace(/[^0-9]/g, "");
    if (inputs.value[id].length > 1) {
      inputs.value[id] = inputs.value[id].slice(0, 1);
    }
  };
</script>

<style lang="scss" scoped></style>
