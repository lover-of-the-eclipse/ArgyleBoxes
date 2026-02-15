import { defineStore } from 'pinia'

export const usePasscodeStore = defineStore('passcodeStore', {
    state: () => ({
        unlocked: false
    })
})