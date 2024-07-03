import { defineStore } from "pinia";
import numbers1 from "~/data/numbers";

export const useFilterStore = defineStore("filterStore", () => {
  const numbers = ref(numbers1);

  const isAllOperators = ref(true);
  const isAllStatus = ref(true);
  const isAllPreCode = ref(true);
  const selectedOperators = ref([]);
  const selectedStatus = ref([]);
  const selectedPreCode = ref([]);
  const enteredNumbers = ref("");
  const enteredMinPrice = ref(0);
  const enteredMaxPrice = ref(null);
  const selectedCategory = ref(null);
  const selectedSort = ref(null);

  const allNumbers = computed(() => {
    return numbers.value;
  });

  const reset = () => {
    selectedOperators.value = [];
    selectedStatus.value = [];
    selectedPreCode.value = [];
    enteredNumbers.value = "";
    enteredMinPrice.value = 0;
    enteredMaxPrice.value = null;
    selectedCategory.value = null;
    isAllOperators.value = true;
    isAllStatus.value = true;
    isAllPreCode.value = true;
  };

  const searchHandler = () => {
    console.log("slm");
  };

  return {
    allNumbers,
    selectedOperators,
    selectedStatus,
    selectedPreCode,
    enteredNumbers,
    enteredMinPrice,
    enteredMaxPrice,
    selectedCategory,
    selectedSort,
    isAllOperators,
    isAllStatus,
    isAllPreCode,
    reset,
    searchHandler,
  };
});
