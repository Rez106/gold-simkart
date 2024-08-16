<template>
  <nuxt-layout name="main">
    <template #sidebar>
      <the-sidebar />
    </template>
    <template #page>
      <div
        class="bg-main-black-900 min-h-full rounded-lg flex flex-col justify-between gap-2 pb-8"
      >
        <div>
          <numbers-header />
          <div
            v-if="searchIsLoading && !searchError"
            class="flex flex-col gap-2 w-full p-4"
          >
            <div
              v-for="i in 6"
              :key="i"
              class="flex items-center justify-evenly max-sm:justify-between max-sm:px-2 sm:gap-10 border-[1px] py-4 sm:px-10 rounded-lg border-main-black-700"
            >
              <span class="w-1/6 max-sm:hidden rounded-lg h-4 skeleton"></span>
              <span class="w-1/6 max-sm:hidden rounded-lg h-4 skeleton"></span>
              <span
                class="w-1/12 max-sm:w-4/12 max-sm:h-10 rounded-lg h-4 skeleton"
              ></span>
              <span class="w-1/12 max-sm:w-3/12 rounded-lg h-4 skeleton"></span>
              <span class="w-1/12 rounded-lg h-10 skeleton sm:ml-10"></span>
            </div>
          </div>
          <div
            v-if="!searchIsLoading && searchError"
            class="w-full flex flex-col items-center gap-3 mt-10"
          >
            <h1 class="text-main-yellow-400 text-xl">
              چیزی پیدا نشد فیلتر دیگری امتحان کنید
            </h1>
            <Vue3Lottie
              :animation-data="numberserror"
              :width="isMobile ? 300 : 400"
              :height="isMobile ? 300 : 400"
            />
          </div>
          <the-numbers
            v-if="!searchError && !searchIsLoading"
            :numbers="
              allNumbers?.slice(
                (pageNumber - 1) * 15,
                (pageNumber - 1) * 15 + 15
              )
            "
            :mobile="isMobile"
            class="self-start"
          />
        </div>

        <numbers-pagination />
      </div>
    </template>
  </nuxt-layout>
</template>

<script setup>
  import { Vue3Lottie } from "vue3-lottie";
  import numberserror from "../public/lottie/numberserror.json";
  const filterStore = useFilterStore();
  const { allNumbers, searchError, searchIsLoading, pageNumber } =
    storeToRefs(filterStore);

  const { width } = useDisplay();

  const isMobile = computed(() => {
    return width.value < 640;
  });

  useHead({
    title: "سیم‌کارت",
    meta: [
      {
        name: "description",
        value:
          "در سیم‌کارت، ما مفتخریم که مجموعه‌ای گسترده از سیم‌کارت‌ها را برای هر نوع نیازی ارائه می‌دهیم. چه به دنبال سیم‌کارتی برای تماس‌های خود باشید و چه سیم‌کارتی برای کسب و کار خود، ما گزینه‌های متعددی برای شما داریم. با سیم‌کارت، همواره انتخاب‌های بیشتری در اختیار دارید.",
      },
    ],
  });
</script>

<style scoped>
  .skeleton {
    background: linear-gradient(
      90deg,
      #424242 25%,
      #606060 50%,
      #424242 75%
    ) !important;
    background-size: 200% 100% !important;
    animation: skeleton-loading 2s infinite linear !important;
  }

  @keyframes skeleton-loading {
    0% {
      background-position: 200% 0;
    }

    100% {
      background-position: -200% 0;
    }
  }
</style>
