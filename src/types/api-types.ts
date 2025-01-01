import {ComputedRef, Ref} from "vue";
import type {PromoItemSlide, TypeItemSlide, HomeLinkType, NewsType} from "@/types/types";

export type FetchDataSlidesArgs = {
    itemSlides: Ref<PromoItemSlide[]>;
    loading: Ref<boolean>;
    error: Ref<Error | null>;
    curCity: ComputedRef<string>;
}

export type FetchDataSlidesArgsType = {
    itemSlides: Ref<TypeItemSlide[]>;
    loading: Ref<boolean>;
    error: Ref<Error | null>;
    curCity: ComputedRef<string>;
}



export type FetchDataArgs = {
    data: Ref<HomeLinkType[]>;
    loading: Ref<boolean>;
    error: Ref<Error | null>;
    url: string
}

export type FetchDataNewsArgs = {
    data: Ref<NewsType[]>;
    loading: Ref<boolean>;
    error: Ref<Error | null>;
    url: string
}