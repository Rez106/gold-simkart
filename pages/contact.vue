<template>
  <nuxt-layout
    name="container"
    class="w-full flex flex-col max-sm:p-3 p-10 gap-10 bg-main-black-900 rounded-lg mt-10"
  >
    <section class="flex flex-col items-center mb-5">
      <v-icon icon="mdi-face-agent" size="80" color="#fff" />
      <p class="text-center text-white text-2xl max-sm:text-xl font-semibold">
        راه‌های ارتباطی با
        <span class="text-main-yellow-400">مزایده</span> سیم‌کارت
      </p>
    </section>
    <contact-details />
    <v-divider class="w-3/4 mx-auto mt-5" />
    <contact-map />
  </nuxt-layout>
</template>

<script setup>
  useHead({
    title: "ارتباط | مزایده سیم‌کارت",
  });
</script>

<style scoped>
  .leaflet-div-icon {
    background: steelblue;
    color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    font-weight: bold;
    font-size: large;
    text-align: center;
    line-height: 21px;
  }

  .underlined {
    position: relative;
  }

  .underline-overflow {
    display: inline-block;
    overflow: hidden;
    padding-bottom: clamp(1rem, 2vmin, 2rem);
  }
  .underline-overflow:after {
    content: "";
    position: absolute;
    top: 100%;
    height: 150%;
    aspect-ratio: 2.5 / 1;
    left: 50%;
    transform: translate(-50%, -10%);
    border-radius: 50%;
    border: 6px solid #fff;
  }
</style>
