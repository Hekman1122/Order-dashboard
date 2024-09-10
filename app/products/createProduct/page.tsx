import StockForm from "@/components/Product/StockForm";
export default function CreateStock() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-neutral-600 py-2 text-center">
        Create a new product.
      </h2>
      <StockForm />
    </div>
  );
}
