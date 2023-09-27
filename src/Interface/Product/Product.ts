export type IProductData ={
    _id:string,
    images: Iimage[],
    category:string,
    price:string,
    title:string,
    rating:string,
    brand:string,
    description:string,
}

type Iimage = {
    url: string,
    _id: string
}

type IMeta={
    page:number,
    count:number,
    limit:number,
}

export type IData = {
    meta:IMeta,
    data:IProductData[];
}
export interface IProps
{
    posts: IData
}
