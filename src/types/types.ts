export interface PromoItemSlide {
    id: number,
    city: string,
    src: string,
    text: string,
    price: number,
}

export interface TypeItemSlide {
    id: number,
    city: string,
    name: string,
    type: string,
    price: number,
    images: {src: string}[],
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

export interface PropsStyle {
    borderColor: string;
    textColor: string;
    backgroundColor: string;
    hoverBackgroundColor: string;
    hoverTextColor: string;
}

export type itemFavoriteType = {
    img: string,
    link: string,
    label: string
}