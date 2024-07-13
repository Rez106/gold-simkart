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
        <v-icon :icon="mdiInformation" color="#fff" size="large" />
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
      class="w-[34%] max-sm:max-w-full max-sm:w-full flex flex-col bg-main-black-800 p-5 rounded-lg shadow-lg shadow-main-black-950"
    >
      <div class="relative py-4">
        <div
          class="w-fit absolute top-1/3 -right-12 max-sm:static p-2 bg-gradient-to-tr from-main-black-900 to-main-black-800 shadow-md rounded-lg text-white font-semibold"
        >
          <v-icon
            :icon="mdiPhone"
            color="#fff"
            size="large"
            style="transform: rotate(270deg)"
          />
          <span class="sm:hidden"> شماره‌ تماس </span>
        </div>
        <div class="flex flex-col items-end gap-2 mt-3">
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
        class="min-w-full not-italic flex flex-col items-start gap-5 relative"
      >
        <div
          class="w-fit absolute top-1/3 -right-12 max-sm:static p-2 bg-gradient-to-tr from-main-black-900 to-main-black-800 shadow-md rounded-lg text-white font-semibold"
        >
          <v-icon :icon="mdiMapMarker" color="#fff" size="large" />
          <span class="sm:hidden"> آدرس </span>
        </div>
        <div
          v-for="(branch, index) in branches"
          :key="branch.id"
          class="w-full flex flex-col gap-2"
        >
          <div
            class="text-white font-medium flex sm:items-center sm:justify-between max-sm:flex-col"
          >
            <div class="flex flex-col gap-3">
              <h1 class="text-white font-medium">
                {{ branch.name.split(" ")[0] }}
                <span class="text-main-yellow-400">
                  {{ branch.name.split(" ")[1] }} </span
                >:
              </h1>
              <span>{{ branch.address }}</span>
            </div>
            <v-btn
              text="مسیریابی"
              :prepend-icon="mdiGoogleMaps"
              rounded="xl"
              color="#fff"
              target="_blank"
              class="mt-2 w-fit !text-main-black-700"
              :v-ripple="false"
              :href="`https://www.google.com/maps/dir/?api=1&destination=${branch.coordinates[0]}, ${branch.coordinates[1]}`"
            />
          </div>
          <v-divider
            v-if="index < branches.length - 1"
            class="mt-3 w-9/12 mx-auto"
          />
        </div>
      </address>
    </article>
  </section>
</template>

<script setup>
  import {
    mdiGoogleMaps,
    mdiInformation,
    mdiMapMarker,
    mdiPhone,
  } from "@mdi/js";

  const branches = [
    {
      id: 1,
      name: "شعبه اول",
      address: "اصفهان، سیتی‌سنتر، طبقه دوم",
      coordinates: [32.551578, 51.689431],
    },
    {
      id: 2,
      name: "شعبه دوم",
      address: "شهرضا، بلوار مدرس، نبش فرعی ۱۴",
      coordinates: [32.0258626, 51.8743834],
    },
  ];
</script>

<style lang="scss" scoped></style>
