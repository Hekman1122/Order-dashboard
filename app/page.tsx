import ChartComponent from "@/components/Chart/ChartComponent";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const stock = await prisma.stock.findMany({});
  console.log(stock);
  return (
    <main>
      <ChartComponent />
    </main>
  );
}
