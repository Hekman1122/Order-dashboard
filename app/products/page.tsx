import { prisma } from "@/lib/prisma";
import ProductsTable from "@/components/Product/ProductsTable";
export default async function Products() {
  const products = await prisma.stock.findMany({});
  return <ProductsTable products={products} />;
}
