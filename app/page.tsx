import ChartComponent from "@/components/Chart/ChartComponent";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  return (
    <main>
      <ChartComponent />
    </main>
  );
}
