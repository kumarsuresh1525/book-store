export type TProduct = {
    title: string;
    author: string;
    imgUrl: string;
    price: number;
    rating: number;
    _id: string;
}
export type ProductListProps = {
    list: TProduct[];
}
