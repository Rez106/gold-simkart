export default defineEventHandler(async (event) => {
  try {
    const response = await $fetch("https://goldsim5.liara.run/api", {
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
