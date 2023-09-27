import { IData } from "@/Interface/Product/Product";

export async function loadAllProduct(page: number): Promise<IData>
{
  try
  {
    const currentPage: string = page.toString();
    const res = await fetch(
      `https://assignment-3-8p6flgq4f-mr7aali.vercel.app/api/v1/product?page=${currentPage}&limit=10`
    );

    if (!res.ok)
    {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }

    const data: IData = await res.json();

    return data;
  } catch (error)
  {
    console.error("Error fetching data:", error);
    throw error;
  }
}
