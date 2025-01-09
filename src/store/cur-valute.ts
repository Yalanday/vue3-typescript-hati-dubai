import {defineStore} from 'pinia'

export const useCurValuteStore = defineStore('curValute', {
    state: () => ({
        _curValute: 'dollar',
    }),
    getters: {
        curValute: (state) => state._curValute,
    },
    actions: {
        setCurValute(valute: string) {
            this._curValute = valute
        }
    }
})