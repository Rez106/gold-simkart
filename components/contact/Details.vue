<template>
  <section
    class="flex max-sm:flex-col max-sm:max-w-full items-center justify-between max-w-[90%] max-sm:gap-10 sm:mx-auto"
  >
    <article
      class="max-w-[40%] max-sm:max-w-full leading-6 relative bg-main-black-800 px-5 py-10 rounded-lg shadow-lg shadow-main-black-950"
    >
      <div
        class="absolute -top-4 -right-4 max-sm:-right-3 p-2 bg-gradient-to-tr from-main-black-900 to-main-black-800 shadow-md rounded-lg text-white font-semibold"
      >
        <v-icon icon="mdi-information" color="#fff" size="large" />
        چرا <span class="text-main-yellow-400">مزایده</span> سیم‌کارت؟
      </div>
      <p
        class="text-white text-wrap first-letter:mr-3 text-justify font-medium"
      >
        در <span class="text-main-yellow-400">مزایده</span> سیم‌کارت، ما مفتخریم
        که مجموعه‌ای گسترده از سیم‌کارت‌ها را برای هر نوع نیازی ارائه می‌دهیم.
        چه به دنبال سیم‌کارتی برای تماس‌های خود باشید و چه سیم‌کارتی برای کسب و
        کار خود، ما گزینه‌های متعددی برای شما داریم. با
        <span class="text-main-yellow-400">مزایده</span> سیم‌کارت، همواره
        انتخاب‌های بیشتری در اختیار دارید.
      </p>
    </article>

    <article
      class="max-w-[40%] max-sm:max-w-full flex flex-col bg-main-black-800 p-5 rounded-lg shadow-lg shadow-main-black-950"
    >
      <div class="relative py-4">
        <div
          class="w-fit absolute top-1/3 -right-10 max-sm:static p-2 bg-gradient-to-tr from-main-black-900 to-main-black-800 shadow-md rounded-lg text-white font-semibold"
        >
          <v-icon
            icon="mdi-phone"
            color="#fff"
            size="large"
            style="transform: rotate(270deg)"
          />
          <span class="sm:hidden"> شماره‌ تماس </span>
        </div>
        <div class="flex flex-col items-end gap-2">
          <a
            href="tel:+989010000550"
            class="font-semibold duration-150 hover:text-white active:text-white text-main-black-300 text-2xl"
            style="direction: ltr"
          >
            0901 0000 550
          </a>
          <a
            href="tel:+989010000111"
            class="font-semibold duration-150 hover:text-white active:text-white text-main-black-300 text-2xl"
            style="direction: ltr"
          >
            0901 0000 111
          </a>
          <a
            href="tel:+989131214444"
            class="font-semibold duration-150 hover:text-white active:text-white text-main-black-300 text-2xl"
            style="direction: ltr"
          >
            0913 121 4444
          </a>
        </div>
      </div>
      <v-divider class="my-5" />
      <address
        class="not-italic flex flex-col items-start gap-5 relative px-4 py-6"
      >
        <div
          class="w-fit absolute top-1/3 -right-10 max-sm:static p-2 bg-gradient-to-tr from-main-black-900 to-main-black-800 shadow-md rounded-lg text-white font-semibold"
        >
          <v-icon icon="mdi-map-marker" color="#fff" size="large" />
          <span class="sm:hidden"> آدرس </span>
        </div>
        <p class="text-white font-medium text-center">
          اصفهان، سیتی‌سنتر، طبقه دوم،
          <span class="text-main-yellow-400">مزایده</span> سیم‌کارت
        </p>
        <v-btn
          text="رفتن به نقشه"
          prepend-icon="mdi-map-marker-path"
          rounded="lg"
          color="#6d6d6d"
          target="_blank"
          :v-ripple="false"
          class="self-center"
          href="https://www.google.com/maps/dir/?api=1&destination=32.551578, 51.689431"
        />
      </address>
    </article>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
