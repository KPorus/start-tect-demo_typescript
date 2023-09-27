import React from "react";
import { loadAllProduct } from "@/utils/Product/LoadAllProducts";
import dynamic from "next/dynamic";
import { IData } from "@/Interface/Product/Product";
const RootLayouts = dynamic(() => import("@/Components/Layouts/RootLayouts"));
const Card = dynamic(() => import("@/sheared/Card/ProductCard"));
import HeadTag from '@/Helpers/HeadTag/HeadTag';
const Pagination = dynamic(() => import("@/Helpers/Pagination/Pagination"));

const Product = ({ data, currentPage, totalPages }: { data: IData, currentPage: number, totalPages: number }) =>
{
  const posts = data.data;

  return (
    <div>
      <HeadTag
        title={"All Products"}
        descriptionContent={"View all tech-related products"}
      />
      <div>
        <h1 className='text-center text-2xl p-5'>This is my product Page</h1>
        <div className='flex flex-wrap justify-center gap-4'>
          {posts.map((post) => (
            <div
              key={post._id}
              className='w-full sm:w-1/2 md:w-1/2 lg:w-[40%] xl:w-[24%] transform transition-transform ease-out hover:scale-105'>
              <Card post={post} />
            </div>
          ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}></Pagination>
    </div>
  );
};

export default Product;

Product.getLayout = function getLayout(page:number)
{
  return <RootLayouts>{page}</RootLayouts>;
};

export async function getServerSideProps(context:any)
{
  // Extract the "page" query parameter from the context
  const { page } = context.query;
  const currentPage = parseInt(page || 1, 10); // Default to page 1

  // Fetch your data here based on the current page number
  const data = await loadAllProduct(currentPage);
  // Assuming you know the total number of pages, calculate it here
  const totalPages = Math.ceil(data.meta.count / data.meta.limit); // Replace with your logic

  return {
    props: {
      data,
      currentPage,
      totalPages,
    },
  };
}
