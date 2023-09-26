export type IProductata ={
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

export type IMeta={
    page:number,
    count:number,
    limit:number,
}