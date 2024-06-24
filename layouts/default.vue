<template>
  <div
    class="min-w-full min-h-dvh bg-gradient-to-tr from-main-black-950 to-[#181818]"
  >
    <slot />
  </div>
</template>

<style>
  body {
    font-family: IRANSans !important;
    direction: rtl;
  }
  body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #191919;
  }

  body::-webkit-scrollbar {
    width: 8px;
    background-color: #191919;
  }

  body::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #ffda0a;
  }
</style>
