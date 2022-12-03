import { defineStore, acceptHMRUpdate } from 'pinia'

const useUserStore = defineStore('user', {
    // options...
})

if (import.meta.webpackHot) {
    import.meta.webpackHot.accept(
        acceptHMRUpdate(useUserStore, import.meta.webpackHot)
    )
}
