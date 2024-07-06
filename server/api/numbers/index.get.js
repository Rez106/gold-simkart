export default defineEventHandler(async (event) => {
  try {
    const response = await $fetch("http://127.0.0.1:8000/api", {
      query: {
        format: "json",
        operators: null,
        status: null,
        preCodes: null,
        digit: null,
        minPrice: null,
        maxPrice: null,
        category: null,
        sort_by: null,
      },
      method: "GET",
    });
    return response;
  } catch (error) {
    throw createError(error);
  }
});
