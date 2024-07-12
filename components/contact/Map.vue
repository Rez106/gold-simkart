<template>
  <section
    class="w-full flex items-center max-lg:gap-10 max-sm:flex-col justify-around"
  >
    <div class="sm:w-[30%] flex items-center sm:flex-col">
      <h1 class="text-white text-3xl font-bold self-start">خدمات</h1>
      <h1
        class="text-main-yellow-400 text-3xl font-bold self-center underlined underline-overflow after:w-35"
      >
        حضوری
      </h1>
      <h1 class="underlined underline-overflow after:w-24"></h1>
      <h1 class="underlined underline-overflow after:w-8"></h1>
      <div class="self-end">
        <v-icon :icon="mdiStore" size="80" color="#fff" />
      </div>
    </div>
    <div
      class="w-full h-[200px] mt-5 2xl:h-[400px] lg:w-[600px] bg-white p-2 rounded-lg"
    >
      <LMap
        :zoom="13"
        :center="[32.551578, 51.689431]"
        :use-global-leaflet="false"
      >
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          layer-type="base"
          name="OpenStreetMap"
        />
        <LMarker :lat-lng="[32.551578, 51.689431]">
          <LPopup> مزایده سیم‌کارت </LPopup>
          <LIcon :icon-size="[50, 80]" class-name="leaflet">
            <v-icon
              :icon="mdiMapMarker"
              size="50"
              class="text-main-black-700"
            />
          </LIcon>
        </LMarker>
      </LMap>
    </div>
  </section>
</template>

<script setup>
  import { mdiMapMarker, mdiStore } from "@mdi/js";
</script>

<style lang="scss" scoped></style>
