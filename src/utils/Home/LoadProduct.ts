import { IData } from "@/Interface/Product/Product";

export async function loadProduct() {
  // Call an external API endpoint to get posts
  console.log(process.env.HOMEPRODUCT);
  const res = await fetch('https://assignment-3-8p6flgq4f-mr7aali.vercel.app/api/v1/product?page=1&limit=4');
  const data:IData = await res.json();

  return data;
}
