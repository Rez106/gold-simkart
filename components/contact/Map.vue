<template>
  <section
    class="w-full flex flex-col items-center max-lg:gap-10 max-sm:flex-col justify-around"
  >
    <div class="flex items-center flex-col">
      <v-icon :icon="mdiStore" size="80" color="#fff" />
      <h1 class="text-white text-3xl font-bold self-start">
        خدمات
        <span class="text-main-yellow-400 font-bold self-center"> حضوری </span>
      </h1>
    </div>
    <div
      class="w-full flex items-center justify-around gap-10 mt-10 max-sm:flex-col"
    >
      <section
        class="w-max max-sm:w-full text-center"
        v-for="item in coordinates"
        :key="item.id"
      >
        <h1 class="text-white font-semibold">
          شعبه
          <span class="text-main-yellow-400">{{
            item.id === "sh" ? "دوم" : "اول"
          }}</span>
        </h1>
        <div
          class="w-full h-[200px] mt-5 2xl:h-[300px] lg:w-[500px] bg-white p-2 rounded-lg"
        >
          <LMap
            :zoom="14"
            :center="item.coordinates"
            :use-global-leaflet="false"
          >
            <LTileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              layer-type="base"
              name="OpenStreetMap"
            />
            <LMarker :lat-lng="item.coordinates">
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
    </div>
  </section>
</template>

<script setup>
  import { mdiMapMarker, mdiStore } from "@mdi/js";

  const coordinates = [
    {
      id: "esf",
      coordinates: [32.551578, 51.689431],
    },
    {
      id: "sh",
      coordinates: [32.0258626, 51.8743834],
    },
  ];
</script>
