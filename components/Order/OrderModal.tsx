import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
const productList = ["cheese", "beef", "chicken", "pork", "tomato", "potato"];
export default function OrderModal() {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <p className="bg-secondColor text-neutral-600 text-sm font-bold px-6 py-3 rounded-md hover:opacity-100 cursor-pointer opacity-85 duration-200 transition-opacity">
            Add a new product
          </p>
        </DialogTrigger>
        <DialogContent className="min-h-[30rem]">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">
              Add a new product and amount per size
            </DialogTitle>
          </DialogHeader>
          <div className="">
            <Input
              type="text"
              placeholder="Enter product name"
              list="products"
            />
            {
              <datalist id="products">
                {productList.map((product) => (
                  <option key={product} value={product} />
                ))}
              </datalist>
            }
            <fieldset className="flex flex-col gap-5 mt-4">
              <legend className="text-lg text-neutral-700 font-bold">
                Enter amount per size
              </legend>
              <div>
                <Label
                  htmlFor="small"
                  className="text-sm text-neutral-500 font-bold"
                >
                  Small
                </Label>
                <Input
                  type="text"
                  id="small"
                  placeholder="amount for small size"
                />
              </div>
              <div>
                <Label
                  htmlFor="medium"
                  className="text-sm text-neutral-500 font-bold"
                >
                  Medium
                </Label>
                <Input
                  type="text"
                  id="medium"
                  placeholder="amount for medium size"
                />
              </div>
            </fieldset>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="default">
                Enter
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
