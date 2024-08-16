<template>
  <div
    class="flex flex-col items-center gap-2 rounded-b-lg duration-300 border-main-black-400 text-base max-small:text-xs max-[401px]:text-xs"
    :class="{
      'h-0 overflow-hidden border-none opacity-0 bg-main-black-600': !isShow,
      ' h-24 border-[1px] border-t-transparent p-2 px-2 bg-main-black-900':
        isShow,
    }"
  >
    <div
      class="grid grid-cols-2 items-center text-center grid-rows-2 duration-150"
      :class="{ 'opacity-0': !isShow }"
    >
      <div class="flex items-center gap-2 text-main-yellow-400 font-medium">
        <span> اپراتور: </span>
        <div class="bg-main-black-100 rounded-lg p-1">
          <v-img
            :src="'/Images/' + num.operator_type + '.svg'"
            width="30"
            height="30"
            :alt="num.operator_type + 'logo'"
          />
        </div>
        <span class="text-white">
          {{ operatorFormatter(num.operator_type) }}
        </span>
      </div>
      <div class="text-main-yellow-400 font-medium">
        <span> پیش‌ شماره: </span>
        <span class="text-white">{{ num.preCode }}</span>
      </div>

      <div class="text-main-yellow-400 font-medium">
        <span> شماره: </span>
        <span class="text-white">{{ num.digits }}</span>
      </div>
      <div class="flex items-center gap-2 text-main-yellow-400 font-medium">
        نوع شماره:
        <span class="text-white">{{ num.category ? "اعتباری" : "دائمی" }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { mdiPhoneOutgoing } from "@mdi/js";

  defineProps({
    num: Object,
    isShow: Boolean,
  });

  const operatorFormatter = (optId) => {
    return optId === 1
      ? "همراه اول"
      : optId === 2
      ? "ایرانسل"
      : optId === 3
      ? "رایتل"
      : optId === 4
      ? "آپتل"
      : "";
  };
</script>

<style lang="scss" scoped></style>
