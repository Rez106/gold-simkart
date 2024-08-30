export default defineEventHandler(async (event) => {
  const queries = getQuery(event);

  try {
    const response = await $fetch("https://goldsim5.liara.run/api", {
      query: {
        format: "json",
        operator_type: queries.operator_type,
        status: queries.status,
        pre_code: queries.pre_code,
        digit1: queries.digit1,
        digit2: queries.digit2,
        digit3: queries.digit3,
        digit4: queries.digit4,
        digit5: queries.digit5,
        digit6: queries.digit6,
        digit7: queries.digit7,
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
