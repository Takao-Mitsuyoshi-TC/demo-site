export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuth();
  if (!auth.isLogined) {
    return navigateTo('/login/sign')
  }
})