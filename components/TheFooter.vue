<template>
  <footer class="w-full bg-main-black-700 pt-8">
    <nuxt-layout name="container">
      <div
        class="flex sm:items-center justify-between max-sm:flex-col max-sm:gap-3"
      >
        <the-logo v-if="$vuetify.display.smAndDown" />
        <section class="flex items-start max-sm:flex-col gap-10">
          <div class="flex flex-col items-start">
            <div
              class="flex py-4 items-center gap-1 font-semibold text-main-black-100"
            >
              <v-icon :icon="mdiSim" color="#ffda0a" />
              <span>سیم‌کارت</span>
            </div>
            <ul
              class="text-main-black-300 text-sm flex flex-col gap-1 [&>*]:underline-offset-2"
            >
              <li
                class="hover:underline cursor-pointer"
                @click="irancellHandler"
              >
                خط‌های ایرانسل
              </li>
              <li class="hover:underline cursor-pointer" @click="hamrahHandler">
                خط‌های همراه اول
              </li>
              <li
                class="hover:underline cursor-pointer"
                @click="preCodeHandler"
              >
                خط‌های 0912
              </li>
              <li
                class="hover:underline cursor-pointer"
                @click="categoryHandler"
              >
                خط‌های دائمی
              </li>
            </ul>
          </div>
          <div class="flex flex-col items-start">
            <div
              class="flex py-4 items-center gap-1 font-semibold text-main-black-100"
            >
              <v-icon :icon="mdiFaceAgent" color="#ffda0a" />
              <span>ارتباط با ما</span>
            </div>
            <ul
              class="text-main-black-300 text-sm flex flex-col gap-1 [&>*]:underline-offset-2"
            >
              <li class="hover:underline cursor-pointer">
                <nuxt-link to="/contact">حضوری</nuxt-link>
              </li>
              <li class="hover:underline cursor-pointer">
                <nuxt-link to="tel:09010000550"> تماس </nuxt-link>
              </li>
              <li class="hover:underline cursor-pointer">
                <nuxt-link to="https://t.me/Gold_simkart" target="_blank"
                  >تلگرام</nuxt-link
                >
              </li>
              <li class="hover:underline cursor-pointer">
                <nuxt-link
                  to="https://www.instagram.com/mozayede_simkart2?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  >اینستاگرام</nuxt-link
                >
              </li>
            </ul>
          </div>
          <div class="">
            <div
              class="flex py-4 items-center gap-1 font-semibold text-main-black-100"
            >
              <v-icon :icon="mdiDotsHorizontalCircle" color="#ffda0a" />
              <span>سایر</span>
            </div>
            <ul
              class="text-main-black-300 text-sm flex flex-col gap-1 [&>*]:underline-offset-2"
            >
              <li
                class="hover:underline cursor-pointer"
                @click="router.push('/contact')"
              >
                راهنما
              </li>
              <li class="hover:underline cursor-pointer">سوالات متدوال</li>
              <li class="hover:underline cursor-pointer">قیمت روز سیم‌کارت</li>
            </ul>
          </div>
        </section>
        <section class="flex flex-col gap-3 items-end max-sm:items-center">
          <the-logo v-if="!$vuetify.display.smAndDown" />
          <p
            class="text-white opacity-80 text-sm font-semibold self-start max-sm:self-center"
          >
            اصفهان، سیتی‌سنتر، طبقه دوم
          </p>
          <the-socials />
        </section>
      </div>
      <v-divider class="mt-5" />
      <section
        class="flex items-start justify-between py-2 max-sm:flex-col max-sm:items-center max-sm:gap-5"
      >
        <p class="text-white opacity-50 text-xs text-center">
          - کلیه حقوق مادی و معنوی مربوط به مزایده سیم‌کارت است و هرگونه کپی
          برداری، موجب پیگرد قانونی است.
        </p>
        <h5 style="direction: ltr" class="text-white opacity-50 text-xs">
          © 2024 Copyright
        </h5>
      </section>
    </nuxt-layout>
  </footer>
</template>

<script setup>
  import { mdiDotsHorizontalCircle, mdiFaceAgent, mdiSim } from "@mdi/js";

  const filterStore = useFilterStore();
  const { searchHandler, reset } = filterStore;
  const {
    selectedOperators,
    selectedCategory,
    selectedPreCode,
    isAllOperators,
    isAllPreCode,
  } = storeToRefs(filterStore);

  const { execute } = await useAsyncData(
    "filter",
    () => searchHandler().then(() => true),
    {
      immediate: false,
      watch: false,
    }
  );

  const router = useRouter();

  const irancellHandler = async () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    reset();
    isAllOperators.value = false;
    selectedOperators.value = [2];
    await execute();
  };
  const hamrahHandler = async () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    reset();
    isAllOperators.value = false;
    selectedOperators.value = [1];
    await execute();
  };
  const preCodeHandler = async () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    isAllPreCode.value = false;
    selectedPreCode.value = ["0912"];
    await execute();
  };
  const categoryHandler = async () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    selectedCategory.value = 1;
    await execute();
  };
</script>
