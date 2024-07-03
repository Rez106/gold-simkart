import { defineStore } from "pinia";

export const useModalStore = defineStore("modalStore", () => {
  const toggleSearch = ref(false);
  const toggleMenu = ref(false);

  const openSearch = () => {
    toggleSearch.value = true;
    document.querySelector("html").style.overflow = "hidden";
  };
  const closeSearch = () => {
    toggleSearch.value = false;
    document.querySelector("html").style.overflow = "auto";
  };

  const openMenu = () => {
    toggleMenu.value = true;
    document.querySelector("html").style.overflow = "hidden";
  };
  const closeMenu = () => {
    toggleMenu.value = false;
    document.querySelector("html").style.overflow = "auto";
  };

  return {
    toggleSearch,
    openSearch,
    closeSearch,
    toggleMenu,
    openMenu,
    closeMenu,
  };
});
