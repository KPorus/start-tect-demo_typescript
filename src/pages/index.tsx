import React, { ReactNode } from 'react';
import dynamic from "next/dynamic";
import HeadTag from '@/Helpers/HeadTag/HeadTag';
const RootLayouts = dynamic(() => import("@/Components/Layouts/RootLayouts"));
const Banner = dynamic(() => import("@/Components/Banner/Banner"));
const Product = dynamic(() => import("@/Components/HomeProduct/Product"));
// const Review = dynamic(() => import("@/components/HomeReviews/Review"));
import { loadProduct } from "@/utils/Home/LoadProduct";
import { IProps } from '@/Interface/Product/Product';

export default function Home({ posts }: IProps)
{
  return (
    <div> 
      <HeadTag title='Home' descriptionContent='Welcome to home page'></HeadTag>
      <div>
        <Banner />
      </div>
      <div className='mb-12'>
        <Product posts={posts}></Product>
      </div>
      {/* <div className='mb-12'>
        <Review />
      </div> */}
      <h1 className='text-center text-2xl p-5'>This is my home Page</h1>
    </div>
  )
}
Home.getLayout = function getLayout(page: ReactNode)
{
  return (
    <RootLayouts>
      {page}
    </RootLayouts>
  )
};

export async function getStaticProps()
{
  const posts = await loadProduct();
  return { props: { posts }, revalidate: 10 };
}