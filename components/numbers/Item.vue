<template>
  <div
    class="flex items-center rounded-lg duration-200 justify-between border-[1px] border-main-black-400 py-3"
    :class="{
      '!rounded-b-none border-b-transparent bg-main-black-900': isShow,
      'bg-main-black-600': !isShow,
    }"
  >
    <div class="w-1/4 text-center">
      <span
        class="block text-main-black-300 font-semibold text-xl"
        style="direction: ltr"
      >
        {{ num.mask_digits }}
      </span>
    </div>
    <div
      v-if="num.discount_amount > 0 && !num.price_enabled"
      class="w-1/4 flex items-center justify-center gap-3 text-center"
    >
      <div>
        <span
          class="block text-main-yellow-400 font-semibold"
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
      </div>
      <span
        class="block text-main-black-200 font-semibold bg-red-500 rounded-lg p-1"
        style="direction: ltr"
      >
        {{ num.discount_percentage + "%" }}
      </span>
    </div>
    <div
      v-else
      class="w-1/4 flex items-center justify-center gap-3 text-center"
    >
      <span
        class="block text-main-black-300 font-semibold"
        style="direction: ltr"
      >
        {{ num.price_enabled ? priceFormatter(num.price) : "تماس بگیرید" }}
      </span>
    </div>

    <div class="w-1/4 text-center">
      <span class="block text-main-black-300 font-semibold">
        {{ statusFormatter(num.status) }}
      </span>
    </div>
    <div class="w-1/4 text-center">
      <span class="block text-main-black-300 font-semibold"> نقد و اقساط </span>
    </div>
    <div class="w-1/4 text-center">
      <span
        class="font-semibold p-1 rounded-lg cursor-pointer duration-200 shadow-md hover:bg-main-black-800"
        :class="{ 'bg-main-black-800': isShow, 'bg-main-black-900': !isShow }"
        @click="$emit('toggleShow')"
      >
        <v-icon
          :icon="isShow ? 'mdi-menu-up' : 'mdi-menu-down'"
          size="large"
          color="#fff"
        />
      </span>
    </div>
  </div>
</template>

<script setup>
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
