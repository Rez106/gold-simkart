<template>
  <div
    class="min-w-full min-h-dvh bg-gradient-to-tr from-main-black-950 to-[#181818]"
  >
    <slot />
  </div>
</template>

<style>
  *,
  *::before,
  *::after {
    scroll-behavior: smooth;
    letter-spacing: 0;
  }

  body {
    direction: rtl;
    font-family: IRANSans !important;
    font-feature-settings: "ss02" !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  span {
    font-family: IRANSans !important;
    font-feature-settings: "ss02" !important;
  }

  body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #191919;
  }

  body::-webkit-scrollbar {
    width: 5px;
    background-color: #191919;
  }

  body::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #ffda0a;
  }

  div::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: transparent;
  }

  div::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }

  div::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #fff;
  }
</style>
