<template>
  <nuxt-layout>
    <the-header />
    <div class="flex flex-col items-center min-h-[56dvh] gap-5 p-5">
      <section class="flex flex-col gap-2 items-center text-white">
        <h1 class="text-3xl font-bold">{{ error?.statusCode }}</h1>
        <p v-if="error.statusCode === 404" class="text-2xl font-semibold">
          {{ error.statusMessage.split(":")[0] }}
        </p>
        <p v-else class="text-2xl font-semibold">
          {{ error.statusMessage.split(":")[0] || error.message }}
        </p>
        <p class="text-2xl text-main-yellow-400">
          {{
            error.statusCode === 404
              ? "صفحه مورد نظر پیدا نشد"
              : "مشکلی پیش آمده بعدا امتحان کنید"
          }}
        </p>
        <v-btn
          to="/"
          text="برگشت به خانه"
          color="#222222"
          elevation="0"
          :prepend-icon="mdiHome"
          size="large"
          rounded="lg"
          class="mt-5"
          @click="handleError"
        ></v-btn>
      </section>

      <client-only>
        <Vue3Lottie
          :animation-data="error.statusCode === 404 ? notfound : erroranimation"
          :width="!isMobile ? 300 : 500"
          :height="!isMobile ? 300 : 500"
        />
      </client-only>
    </div>
    <the-footer />
  </nuxt-layout>
</template>

<script setup>
  import { Vue3Lottie } from "vue3-lottie";
  import notfound from "./public/lottie/notfound.json";
  import erroranimation from "./public/lottie/erroranimation.json";
  import { mdiHome } from "@mdi/js";

  const error = useError();

  useHead({
    title: "سیم‌کارت | " + error?.value?.statusCode,
  });

  const { width } = useDisplay();
  const isMobile = computed(() => {
    width.value > 640;
  });

  const handleError = () => clearError({ redirect: "/" });
</script>

<style lang="scss" scoped></style>
