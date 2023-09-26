import React, { ReactNode } from 'react';
import dynamic from "next/dynamic";
import HeadTag from '@/Helpers/HeadTag/HeadTag';
const RootLayouts = dynamic(() => import("@/Components/Layouts/RootLayouts"));
const Banner = dynamic(() => import("@/Components/Banner/Banner"));
export default function Home()
{
  return (
    <div> 
      <HeadTag title='Home' descriptionContent='Welcome to home page'></HeadTag>
      <div>
        <Banner />
      </div>
      {/* <div className='mb-12'>
        <Product posts={posts}></Product>
      </div>
      <div className='mb-12'>
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
