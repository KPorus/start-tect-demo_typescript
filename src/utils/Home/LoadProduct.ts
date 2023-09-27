import { IData } from "@/Interface/Product/Product";

export async function loadProduct() {
  // Call an external API endpoint to get posts
  console.log(process.env.HOMEPRODUCT);
  const res = await fetch(process.env.HOMEPRODUCT);
  const data:IData = await res.json();

  return data;
}
