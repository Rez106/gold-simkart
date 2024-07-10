<template>
  <nav
    class="sm:hidden flex flex-col justify-between duration-200 fixed top-0 w-full h-dvh z-30 bg-gradient-to-tr from-main-black-950 to-main-black-900"
    :class="{ 'right-0': toggleMenu, '-right-full': !toggleMenu }"
  >
    <div class="flex flex-col">
      <div class="w-full flex items-center justify-end p-5">
        <button
          type="button"
          class="p-2 rounded-lg bg-gradient-to-tr from-main-black-900 to-main-black-800"
          @click="closeMenu"
        >
          <v-icon icon="mdi-close-circle" color="#fff" size="large" />
        </button>
      </div>
      <nuxt-link
        to="/"
        class="text-2xl pr-4 border-r-[6px] border-transparent flex py-4 items-center gap-1 font-semibold duration-200 hover:text-main-yellow-400 active:text-main-yellow-400 text-main-black-200"
        exact-active-class="!border-main-yellow-400 text-main-yellow-400"
        @click="closeMenu"
      >
        <v-icon icon="mdi-sim" size="large" />
        <span>سیم‌کارت</span>
      </nuxt-link>
      <nuxt-link
        to="/contact"
        class="text-2xl pr-4 border-r-[6px] border-transparent flex py-4 items-center gap-1 font-semibold duration-200 hover:text-main-yellow-400 active:text-main-yellow-400 text-main-black-200"
        exact-active-class="!border-main-yellow-400 text-main-yellow-400"
        @click="closeMenu"
      >
        <v-icon icon="mdi-face-agent" size="large" />
        <span>ارتباط با ما</span>
      </nuxt-link>
      <div
        class="flex flex-col gap-3 items-start text-main-black-200 text-sm self-start pr-5 opacity-50"
      >
        <nuxt-link to="/" :disabled="true" class="cursor-not-allowed"
          >قیمت روز سیم‌کارت</nuxt-link
        >
        <nuxt-link to="/" :disabled="true" class="cursor-not-allowed"
          >سوالات متداول</nuxt-link
        >
        <nuxt-link to="/" :disabled="true" class="cursor-not-allowed"
          >راهنما</nuxt-link
        >
      </div>
    </div>
    <div class="w-full flex flex-col items-center py-3">
      <div class="w-full flex justify-between items-center px-4 mt-5">
        <div class="flex items-center gap-2 text-main-black-200">
          <p class="flex items-center gap-1">
            <v-icon icon="mdi-phone" style="transform: rotate(270deg)" />
            <span>تماس:</span>
          </p>
          <a
            href="tel:+989010000550"
            class="font-semibold duration-150 text-main-yellow-400 hover:text-white active:text-white text-xl"
            style="direction: ltr"
          >
            0901 0000 550
          </a>
        </div>
        <the-socials />
      </div>
    </div>
  </nav>
</template>

<script setup>
  const modalStore = useModalStore();
  const { toggleMenu } = storeToRefs(modalStore);
  const { closeMenu } = modalStore;
</script>

<style lang="scss" scoped></style>
