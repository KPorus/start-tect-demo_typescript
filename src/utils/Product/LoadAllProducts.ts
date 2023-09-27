import { IData } from "@/Interface/Product/Product";

export async function loadAllProduct(page:number) {
  // Call an external API endpoint to get posts
  const res = await fetch(
    `https://assignment-3-8p6flgq4f-mr7aali.vercel.app/api/v1/product?page=${page}&limit=10`
  );
  const data:IData = await res.json();

  return data;
}
