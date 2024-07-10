export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path.includes("/admin")) {
    return navigateTo("https://goldsim5.liara.run/admin", {
      external: true,
      open: {
        target: "_blank",
      },
    });
  }
});
