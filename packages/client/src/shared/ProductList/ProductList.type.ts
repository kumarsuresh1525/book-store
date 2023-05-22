export type TProduct = {
    title: string;
    author: string;
    imgUrl: string;
    price: number;
    rating: number;
    id: string;
}
export type ProductListProps = {
    list: TProduct[];
}
