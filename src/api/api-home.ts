import axios from "axios";
import {FetchDataSlidesArgs, FetchDataSlidesArgsType, FetchDataArgs, FetchDataNewsArgs} from "@/types/api-types";

async function fetchData({url, loading, data, error}: FetchDataArgs): Promise<void> {
    try {
        loading.value = true;
        const response = await axios.get(url);
        data.value = response.data;
    } catch (err: any) {
        error.value = err.message;
    } finally {
        loading.value = false;
    }
}

//для промо слайдера
async function fetchDataItemsSlide({loading, itemSlides, error, curCity}: FetchDataSlidesArgs): Promise<void> {
    try {
        loading.value = true;
        const response = await axios.get('https://dbd0282f034a13d8.mokky.dev/promo-items/?promo=true&city=' + curCity.value);
        itemSlides.value = response.data;
    } catch (err: any) {
        error.value = err.message;
    } finally {
        loading.value = false;
    }
    // console.log(itemSlides.value)
}

//для остальных слайдеров
async function fetchDataItemsAllSlide({loading, itemSlides, error, curCity}: FetchDataSlidesArgsType): Promise<void> {
    try {
        loading.value = true;
        const response = await axios.get('https://dbd0282f034a13d8.mokky.dev/hatas/?city=' + curCity.value);
        itemSlides.value = response.data;
    } catch (err: any) {
        error.value = err.message;
    } finally {
        loading.value = false;
    }
}

async function fetchDataNewsHome({url, loading, data, error}: FetchDataNewsArgs): Promise<void> {
    try {
        loading.value = true;
        const response = await axios.get(url);
        data.value = response.data.items;
    } catch (err: any) {
        error.value = err.message;
    } finally {
        loading.value = false;
    }
}


export {fetchData, fetchDataItemsSlide, fetchDataItemsAllSlide, fetchDataNewsHome};