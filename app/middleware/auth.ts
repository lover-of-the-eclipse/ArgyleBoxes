import { usePasscodeStore } from '~/stores/passcodeStore'

export default defineNuxtRouteMiddleware((to, from) => {
    // This code will run on server and client before navigating to a page
    const passcodeStore = usePasscodeStore()

    // If the user is not unlocked and they are trying to access a page
    // other than the homepage, redirect them to the homepage.
    if (!passcodeStore.unlocked && to.path !== '/') {
        return navigateTo('/')
    }
})