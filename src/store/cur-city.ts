import {defineStore} from 'pinia'

export const useCurCityStore = defineStore('curCity', {
    state: () => ({
        _curCity: 'dubai',
    }),
    getters: {
        curCity: (state) => state._curCity,
    },
    actions: {
        setCurCity(city: string) {
            this._curCity = city
            console.log('sdsf   '+this._curCity)

        }
    }
})



