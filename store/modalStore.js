import { defineStore } from "pinia";

export const useModalStore = defineStore("modalStore", () => {
  const toggleSearch = ref(false);
  const toggleMenu = ref(false);

  const openSearch = () => {
    toggleSearch.value = true;
  };
  const closeSearch = () => {
    toggleSearch.value = false;
  };

  const openMenu = () => {
    toggleMenu.value = true;
  };
  const closeMenu = () => {
    toggleMenu.value = false;
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
