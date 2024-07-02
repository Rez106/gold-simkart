<template>
  <nuxt-layout name="main">
    <template #sidebar>
      <the-sidebar />
    </template>
    <template #page>
      <div class="bg-main-black-900 rounded-lg flex flex-col gap-2 pb-8">
        <numbers-header />

        <client-only>
          <the-numbers
            :numbers="
              allNumbers?.slice(
                (pageNumber - 1) * 10,
                (pageNumber - 1) * 10 + 10
              )
            "
            :mobile="isMobile"
          />
          <template #fallback>
            <div class="flex flex-col gap-2 w-full p-4">
              <div
                v-for="i in 10"
                :key="i"
                class="flex items-center justify-evenly max-sm:justify-between max-sm:px-2 sm:gap-10 border-[1px] py-4 sm:px-10 rounded-lg border-main-black-700"
              >
                <span
                  class="w-1/6 max-sm:hidden rounded-lg h-4 skeleton"
                ></span>
                <span
                  class="w-1/6 max-sm:hidden rounded-lg h-4 skeleton"
                ></span>
                <span
                  class="w-1/12 max-sm:w-4/12 max-sm:h-10 rounded-lg h-4 skeleton"
                ></span>
                <span
                  class="w-1/12 max-sm:w-3/12 rounded-lg h-4 skeleton"
                ></span>
                <span class="w-1/12 rounded-lg h-10 skeleton sm:ml-10"></span>
              </div>
            </div>
          </template>
        </client-only>
        <numbers-pagination @updatePage="pageHandler" />
      </div>
    </template>
  </nuxt-layout>
</template>

<script setup>
  const filterStore = useFilterStore();
  const { allNumbers } = storeToRefs(filterStore);
  const { width } = useDisplay();
  const isMobile = computed(() => {
    return width.value < 640;
  });
  const pageNumber = ref(1);

  const pageHandler = (page) => {
    pageNumber.value = page;
  };

  useHead({
    title: "سیم‌کارت | مزایده سیم‌کارت",
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
