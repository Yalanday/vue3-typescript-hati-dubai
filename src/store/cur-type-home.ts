import {defineStore} from "pinia";

export const useCurTypeStore = defineStore('curType', {
    state: () => ({
        _type: 'villa'
    }),
    getters: {
        type: (state) => {
            return state._type
        }
    },
    actions: {
        setType(type: string) {
            this._type = type
            console.log(this._type)
        }
    }
})