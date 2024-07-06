export default defineEventHandler(async (event) => {
  const queries = getQuery(event);

  try {
    const response = await $fetch("http://127.0.0.1:8000/api", {
      query: {
        format: "json",
        operator_type: queries.operator_type,
        status: queries.status,
        pre_code: queries.pre_code,
        digit: queries.digit,
        min_price: queries.min_price,
        max_price: queries.max_price,
        category: queries.category,
        sort_by: queries.sort_by,
      },
      method: "GET",
    });
    return response;
  } catch (error) {
    throw createError(error);
  }
});
