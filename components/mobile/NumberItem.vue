<template>
  <div
    class="flex items-center rounded-lg duration-200 justify-between border-[1px] border-main-black-400 py-3 text-base"
    :class="{
      '!rounded-b-none border-b-transparent bg-main-black-900': isShow,
      'bg-main-black-600': !isShow,
    }"
  >
    <div class="w-[36%] max-small:w-[43%] flex flex-col gap-2 pr-4">
      <div class="w-full text-right">
        <span
          class="block text-main-black-300 font-semibold text-sm"
          style="direction: ltr"
        >
          {{ num.mask_digits }}
        </span>
      </div>
      <div class="flex items-center gap-2">
        <span class="block text-main-black-300 font-semibold text-xs">
          {{ statusFormatter(num.status) }}
        </span>
        <v-divider vertical />
        <span class="block text-main-black-300 font-semibold text-xs">
          نقد و اقساط
        </span>
      </div>
    </div>

    <div class="w-1/4 text-center">
      <div
        v-if="num.discount_amount > 0 && num.price_enable"
        class="w-full flex items-center justify-center gap-3 max-sm:gap-1 text-center"
      >
        <div>
          <span
            class="block text-main-yellow-400 font-semibold text-sm"
            style="direction: ltr"
          >
            {{ priceFormatter(num.discount_amount) }}
          </span>
          <span
            class="block text-main-black-300 text-xs line-through"
            style="direction: ltr"
          >
            {{ priceFormatter(num.price) }}
          </span>
          <span class="text-xs text-white">تومان</span>
        </div>
        <span
          class="block text-main-black-200 font-semibold bg-red-500 rounded-lg p-1 text-xs"
          style="direction: ltr"
        >
          {{ num.discount_percentage + "%" }}
        </span>
      </div>
      <div
        v-else
        class="w-full flex items-center justify-center gap-3 text-center"
      >
        <span
          class="block text-main-black-300 font-semibold text-sm"
          style="direction: ltr"
        >
          {{ num.price_enable ? priceFormatter(num.price) : "تماس بگیرید" }}
          <span v-if="num.price_enable" class="text-xs text-white">تومان</span>
        </span>
      </div>
    </div>
    <div class="w-1/4 text-center">
      <span
        class="font-semibold p-1 rounded-lg cursor-pointer duration-200 shadow-md hover:bg-main-black-800"
        :class="{ 'bg-main-black-800': isShow, 'bg-main-black-900': !isShow }"
        @click="$emit('toggleShow')"
      >
        <v-icon
          :icon="isShow ? mdiMenuUp : mdiMenuDown"
          size="large"
          color="#fff"
        />
      </span>
    </div>
  </div>
</template>

<script setup>
  import { mdiMenuDown, mdiMenuUp } from "@mdi/js";

  defineProps({
    num: Object,
    isShow: Boolean,
  });

  const priceFormatter = (price) => {
    const currency = new Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "USD",
    });

    return currency.format(price).split(".")[0].split("$")[1];
  };

  const statusFormatter = (statusId) => {
    return statusId === 1
      ? "صفر به‌نام"
      : statusId === 2
      ? "صفر بی‌نام"
      : statusId === 3
      ? "کارکرده"
      : statusId === 4
      ? "در حد صفر"
      : "";
  };

  // const discountPercent = (price, discount) => {
  //   const discountValue = price - discount;
  //   const discountPercentage = (discountValue / price) * 100;
  //   return discountPercentage.toFixed(0) + "%";
  // };
</script>

<style lang="scss" scoped></style>
