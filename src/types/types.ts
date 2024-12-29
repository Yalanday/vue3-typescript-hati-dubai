export interface PromoItemSlide {
    id: number,
    city: string,
    src: string,
    text: string,
    price: number,
}

export type FilterItemType = {
    id: number
    name: string,
    value: string,
    active: boolean,
}

export type ConnectionType = {
    id: number,
    img: string,
    link: string,
    label: string
}

export type HomeLinkType = {
    id: number,
    href: string,
    text: string,
}