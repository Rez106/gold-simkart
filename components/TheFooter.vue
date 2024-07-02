<template>
  <footer class="mt-10 w-full bg-main-black-700 pt-8">
    <nuxt-layout name="container">
      <div
        class="flex items-center justify-between max-sm:flex-col max-sm:gap-3"
      >
        <section class="flex items-start max-sm:flex-col gap-10 max-sm:order-2">
          <div class="flex flex-col items-start">
            <div
              class="flex py-4 items-center gap-1 font-semibold text-main-black-100"
            >
              <v-icon icon="mdi-sim" color="#ffda0a" />
              <span>سیم‌کارت</span>
            </div>
            <ul
              class="text-main-black-300 text-sm flex flex-col gap-1 [&>*]:underline-offset-2"
            >
              <li class="hover:underline cursor-pointer">خط‌های ایرانسل</li>
              <li class="hover:underline cursor-pointer">خط‌های همراه اول</li>
              <li class="hover:underline cursor-pointer">خط‌های 0912</li>
              <li class="hover:underline cursor-pointer">خط‌های اقساطی</li>
            </ul>
          </div>
          <div class="flex flex-col items-start">
            <div
              class="flex py-4 items-center gap-1 font-semibold text-main-black-100"
            >
              <v-icon icon="mdi-face-agent" color="#ffda0a" />
              <span>ارتباط با ما</span>
            </div>
            <ul
              class="text-main-black-300 text-sm flex flex-col gap-1 [&>*]:underline-offset-2"
            >
              <li
                class="hover:underline cursor-pointer"
                @click="
                  () => {
                    router.push({
                      path: '/contact',
                    });
                  }
                "
              >
                حضوری
              </li>
              <li class="hover:underline cursor-pointer">تماس</li>
              <li class="hover:underline cursor-pointer">تلگرام</li>
              <li class="hover:underline cursor-pointer">اینستاگرام</li>
            </ul>
          </div>
          <div class="">
            <div
              class="flex py-4 items-center gap-1 font-semibold text-main-black-100"
            >
              <v-icon icon="mdi-dots-horizontal-circle" color="#ffda0a" />
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
        <section
          class="flex flex-col gap-3 items-end max-sm:items-center max-sm:order-1"
        >
          <the-logo />
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
          - کلیه حقوق مادی و معنوی مربوط به گلد سیم‌کارت است و هرگونه کپی
          برداری، موجب پیگرد قانونی است.
        </p>
        <h5 style="direction: ltr" class="text-white opacity-50 text-xs">
          © 2024 goldsimkart.ir
        </h5>
      </section>
    </nuxt-layout>
  </footer>
</template>

<script setup>
  const router = useRouter();
</script>

<style lang="scss" scoped></style>
