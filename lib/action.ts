"use server";

import { prisma } from "@/lib/prisma";
import { z } from "zod";
const formSchema = z.object({
  product: z.string().min(4).max(20),
  mediumAmount: z.string().min(0).max(100),
  smallAmount: z.string().min(0).max(100),
  price_small: z.string().min(0).max(100),
  price_medium: z.string().min(0).max(100),
});
export async function createStockAction(values: z.infer<typeof formSchema>) {
  const { product, mediumAmount, smallAmount, price_small, price_medium } =
    values;
  try {
    await prisma.stock.create({
      data: {
        product,
        price: {
          medium: Number.parseInt(price_medium),
          small: Number.parseInt(price_small),
        },
        stockAmount: {
          medium: Number.parseInt(mediumAmount),
          small: Number.parseInt(smallAmount),
        },
      },
    });
    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
