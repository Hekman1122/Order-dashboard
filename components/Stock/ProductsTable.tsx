import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Stock } from "@prisma/client";
import { Pencil, Trash2 } from "lucide-react";

export default function ProductsTable({ products }: { products: Stock[] }) {
  return (
    <Table className="mt-6">
      <TableCaption>A list of your products.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-48">Product</TableHead>
          <TableHead>Stock Amount</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="text-right">Edit</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => {
          return (
            <TableRow key={product.id}>
              <TableCell className="text-lg text-neutral-600 font-bold">
                {product.product}
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-2">
                  <p className="text-neutral-500 font-semibold flex justify-between">
                    <span>small :</span>
                    {product.stockAmount.small}
                  </p>
                  <p className="text-neutral-500 font-semibold flex justify-between">
                    <span>medium :</span>
                    {product.stockAmount.medium}
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-2">
                  <p className="text-neutral-500 font-semibold flex justify-between">
                    <span>small :</span>
                    {product.price.small}
                  </p>
                  <p className="text-neutral-500 font-semibold flex justify-between">
                    <span>medium :</span>
                    {product.price.medium}
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex justify-end gap-8">
                  <Pencil size={20} className="text-primary cursor-pointer" />
                  <Trash2 size={20} className="text-primary cursor-pointer" />
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
