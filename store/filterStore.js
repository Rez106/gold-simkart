import { defineStore } from "pinia";

const formatArray = (array) => {
  return array.join(",");
};

const formatSort = (sortId) => {
  return sortId === 0
    ? null
    : sortId === 1
    ? "lowest_price"
    : sortId === 2
    ? "highest_price"
    : sortId === 3
    ? "discount"
    : null;
};

const formatCategory = (catId) => {
  return catId === 1 ? "false" : catId === 2 ? "true" : null;
};

export const useFilterStore = defineStore("filterStore", () => {
  const { closeSearch } = useModalStore();

  //Main Data
  const numbers = ref([]);

  //Search Request
  const searchError = ref(null);
  const searchIsLoading = ref(true);
  const pageNumber = ref(1);
  //Filters and Conditions for checkboxes etc.
  const isAllOperators = ref(true);
  const isAllStatus = ref(true);
  const isAllPreCode = ref(true);
  const selectedOperators = ref([]);
  const selectedStatus = ref([]);
  const selectedPreCode = ref([]);
  const enteredNumbers = ref("");
  const enteredMinPrice = ref(0);
  const enteredMaxPrice = ref(null);
  const selectedCategory = ref(0);
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
    selectedCategory.value = 0;
    isAllOperators.value = true;
    isAllStatus.value = true;
    isAllPreCode.value = true;
  };

  const searchHandler = async () => {
    const formattedOpts = formatArray(selectedOperators.value);
    const formattedStatus = formatArray(selectedStatus.value);
    const formattedPreCode = formatArray(selectedPreCode.value);

    try {
      searchIsLoading.value = true;
      searchError.value = null;
      numbers.value = [];
      closeSearch();
      const response = await $fetch("/api/numbers/search", {
        query: {
          operator_type: formattedOpts,
          status: formattedStatus,
          pre_code: formattedPreCode,
          digit: enteredNumbers.value,
          min_price: enteredMinPrice.value,
          max_price: enteredMaxPrice.value,
          category: formatCategory(selectedCategory.value),
          sort_by: formatSort(selectedSort.value),
        },
        method: "GET",
      });
      numbers.value = response;
      pageNumber.value = 1;
    } catch (error) {
      searchError.value = error;
    } finally {
      searchIsLoading.value = false;
    }
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
    searchIsLoading,
    searchError,
    pageNumber,
    reset,
    searchHandler,
  };
});
