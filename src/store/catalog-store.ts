import {defineStore} from 'pinia'
import {PropertyCatalogType} from "@/types/types";

export const useCatalogStore = defineStore('catalogStore', {
    state: () => ({
        _catalog: [] as PropertyCatalogType[],
        _location: '' as string,
    }),
    getters: {
        catalog: (state) => state._catalog,
        dataRec: (state) => {
            return state._catalog.filter(item => item.rec)
        },
        dataActual: (state) => {
            return state._catalog.filter(item => item.actual)
        },
        dataStrong: (state) => {
            return state._catalog.filter(item => item.strong)
        },
        location: (state) => state._location,
    },
    actions: {
        setCatalog(newState: PropertyCatalogType[]) {
            this._catalog = newState
        },
        setLocation(newLocation: string) {
            this._location = newLocation
            console.log(this._location)
        }
    }
})



