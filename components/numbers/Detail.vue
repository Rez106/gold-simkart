<template>
  <div
    class="flex flex-col gap-5 rounded-b-lg duration-300 border-main-black-400"
    :class="{
      'h-0 overflow-hidden border-none opacity-0 bg-main-black-600': !isShow,
      'h-32 border-[1px] border-t-transparent p-5 px-7 bg-main-black-900':
        isShow,
    }"
  >
    <div
      class="flex items-center duration-150"
      :class="{ 'opacity-0': !isShow }"
    >
      <p class="text-white text-xl">
        <v-icon :icon="mdiSim" color="#ffda0a" />
        مشخصات سیم‌کارت
      </p>
    </div>
    <div
      class="w-full flex justify-between items-center duration-150"
      :class="{ 'opacity-0': !isShow }"
    >
      <div class="flex items-center gap-2 text-main-yellow-400 font-medium">
        <span> اپراتور: </span>
        <div class="bg-main-black-100 rounded-lg p-1">
          <v-img
            :src="'/images/' + num.operator_type + '.svg'"
            width="30"
            height="30"
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
      <v-btn
        :prepend-icon="mdiPhoneOutgoing"
        text="تماس برای خرید"
        rounded="lg"
        color="#222222"
        size="large"
        class="w-fit"
        style="border: 1px solid #ffda0a; color: #ffda0a"
        to="/contact"
      ></v-btn>
    </div>
  </div>
</template>

<script setup>
  import { mdiPhoneOutgoing, mdiSim } from "@mdi/js";

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
